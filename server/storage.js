import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DATA_DIR = path.join(__dirname, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const USERDATA_DIR = path.join(DATA_DIR, "userdata");
const SECRET_FILE = path.join(DATA_DIR, "jwt-secret");

fs.mkdirSync(USERDATA_DIR, { recursive: true });

export function getJwtSecret() {
  if (!fs.existsSync(SECRET_FILE)) {
    fs.writeFileSync(SECRET_FILE, crypto.randomBytes(48).toString("hex"), { mode: 0o600 });
  }
  return fs.readFileSync(SECRET_FILE, "utf8").trim();
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJsonAtomic(file, value) {
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2));
  fs.renameSync(tmp, file);
}

export function readUsers() {
  return readJson(USERS_FILE, {});
}

export function writeUsers(users) {
  writeJsonAtomic(USERS_FILE, users);
}

function userDataFile(username) {
  // usernames are validated to [a-z0-9_-]+ at registration, safe as filenames
  return path.join(USERDATA_DIR, `${username}.json`);
}

const DEFAULT_USER_DATA = {
  logs: [],
};

export function readUserData(username) {
  return readJson(userDataFile(username), structuredClone(DEFAULT_USER_DATA));
}

export function writeUserData(username, data) {
  writeJsonAtomic(userDataFile(username), data);
}
