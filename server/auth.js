import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";
import { getJwtSecret, readUsers, writeUsers } from "./storage.js";

const JWT_SECRET = getJwtSecret();
const COOKIE_NAME = "hp_session";
const SESSION_DAYS = 90;

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many accounts created from this address. Try again later." },
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many login attempts. Try again later." },
});

function setSessionCookie(res, username) {
  const token = jwt.sign({ sub: username }, JWT_SECRET, { expiresIn: `${SESSION_DAYS}d` });
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DAYS * 24 * 60 * 60 * 1000,
  });
}

export function requireAuth(req, res, next) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return res.status(401).json({ error: "Not signed in" });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.username = payload.sub;
    next();
  } catch {
    res.status(401).json({ error: "Session expired" });
  }
}

export const authRouter = express.Router();

authRouter.post("/register", registerLimiter, async (req, res) => {
  const { username, password } = req.body ?? {};
  if (typeof username !== "string" || !/^[a-z0-9_-]{3,24}$/.test(username)) {
    return res.status(400).json({
      error: "Username must be 3-24 characters: lowercase letters, numbers, - or _",
    });
  }
  if (typeof password !== "string" || password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters" });
  }
  const users = readUsers();
  if (users[username]) {
    return res.status(409).json({ error: "That username is taken" });
  }
  users[username] = {
    passwordHash: await bcrypt.hash(password, 12),
    createdAt: new Date().toISOString(),
  };
  writeUsers(users);
  setSessionCookie(res, username);
  res.json({ username });
});

authRouter.post("/login", loginLimiter, async (req, res) => {
  const { username, password } = req.body ?? {};
  const users = readUsers();
  const user = typeof username === "string" ? users[username] : undefined;
  const ok = user && (await bcrypt.compare(String(password ?? ""), user.passwordHash));
  if (!ok) return res.status(401).json({ error: "Wrong username or password" });
  setSessionCookie(res, username);
  res.json({ username });
});

authRouter.post("/logout", (_req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.json({ ok: true });
});

authRouter.get("/me", requireAuth, (req, res) => {
  res.json({ username: req.username });
});
