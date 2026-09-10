import type { LogEntry, UserData } from "./types";

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(path, {
    headers: options.body ? { "Content-Type": "application/json" } : undefined,
    credentials: "same-origin",
    ...options,
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new ApiError(res.status, body.error ?? `Request failed (${res.status})`);
  }
  return body as T;
}

export const api = {
  me: () => request<{ username: string }>("/api/auth/me"),
  register: (username: string, password: string) =>
    request<{ username: string }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),
  login: (username: string, password: string) =>
    request<{ username: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),
  logout: () => request<{ ok: true }>("/api/auth/logout", { method: "POST" }),

  getData: () => request<UserData>("/api/data"),
  addLog: (log: Omit<LogEntry, "id">) =>
    request<LogEntry>("/api/data/logs", { method: "POST", body: JSON.stringify(log) }),
  updateLog: (id: string, log: Omit<LogEntry, "id">) =>
    request<LogEntry>(`/api/data/logs/${id}`, { method: "PUT", body: JSON.stringify(log) }),
  deleteLog: (id: string) =>
    request<{ ok: true }>(`/api/data/logs/${id}`, { method: "DELETE" }),
};

export { ApiError };
