import express from "express";
import crypto from "node:crypto";
import { readUserData, writeUserData } from "./storage.js";

export const dataRouter = express.Router();

const GOALS = ["visited", "highPoint", "prominencePoint", "overnight", "capital"];
const STATE_ABBRS = new Set([
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS",
  "KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY",
  "NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV",
  "WI","WY",
]);

dataRouter.get("/", (req, res) => {
  res.json(readUserData(req.username));
});

function validateLog(body) {
  const { state, goal, date, notes, companions } = body ?? {};
  if (!STATE_ABBRS.has(state)) return { error: "Invalid state" };
  if (!GOALS.includes(goal)) return { error: "Invalid goal" };
  if (typeof date !== "string" || (date !== "" && !/^\d{4}-\d{2}-\d{2}$/.test(date))) {
    return { error: "Date must be YYYY-MM-DD or empty for an unknown date" };
  }
  if (notes != null && typeof notes !== "string") return { error: "Invalid notes" };
  if (companions != null && typeof companions !== "string") return { error: "Invalid companions" };
  return {
    log: {
      state,
      goal,
      date,
      notes: (notes ?? "").slice(0, 2000),
      companions: (companions ?? "").slice(0, 500),
    },
  };
}

dataRouter.post("/logs", (req, res) => {
  const result = validateLog(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  const data = readUserData(req.username);
  const log = { id: crypto.randomUUID(), ...result.log };
  data.logs.push(log);
  writeUserData(req.username, data);
  res.status(201).json(log);
});

dataRouter.put("/logs/:id", (req, res) => {
  const result = validateLog(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  const data = readUserData(req.username);
  const idx = data.logs.findIndex((l) => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Log not found" });
  data.logs[idx] = { id: req.params.id, ...result.log };
  writeUserData(req.username, data);
  res.json(data.logs[idx]);
});

dataRouter.delete("/logs/:id", (req, res) => {
  const data = readUserData(req.username);
  const before = data.logs.length;
  data.logs = data.logs.filter((l) => l.id !== req.params.id);
  if (data.logs.length === before) return res.status(404).json({ error: "Log not found" });
  writeUserData(req.username, data);
  res.json({ ok: true });
});
