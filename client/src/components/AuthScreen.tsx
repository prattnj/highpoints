import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { api } from "../api";

export function AuthScreen({ onSignedIn }: { onSignedIn: (username: string) => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const fn = mode === "login" ? api.login : api.register;
      const r = await fn(username.trim().toLowerCase(), password);
      onSignedIn(r.username);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <FontAwesomeIcon icon={faMountain} className="text-4xl text-pine-700" />
          <h1 className="mt-2 text-3xl font-semibold text-pine-800">Highpoints</h1>
          <p className="mt-1 text-sm text-pine-500">
            Track state high points, prominence points, and more.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-pine-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex rounded-full bg-pine-100 p-1 text-sm font-display">
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMode(m);
                  setError(null);
                }}
                className={`flex-1 rounded-full py-1.5 transition ${
                  mode === m ? "bg-pine-700 text-white shadow" : "text-pine-700"
                }`}
              >
                {m === "login" ? "Sign in" : "Register"}
              </button>
            ))}
          </div>

          <label className="mb-3 block">
            <span className="mb-1 block text-sm font-semibold text-pine-700">Username</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              className="w-full rounded-lg border border-pine-200 px-3 py-2 outline-none focus:border-pine-500 focus:ring-2 focus:ring-pine-200"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-1 block text-sm font-semibold text-pine-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              required
              minLength={mode === "register" ? 8 : undefined}
              className="w-full rounded-lg border border-pine-200 px-3 py-2 outline-none focus:border-pine-500 focus:ring-2 focus:ring-pine-200"
              placeholder={mode === "register" ? "8+ characters" : ""}
            />
          </label>

          {mode === "register" && (
            <p className="mb-3 text-xs text-pine-500">
              Usernames: 3–24 characters, lowercase letters, numbers, - or _
            </p>
          )}

          {error && (
            <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
          )}

          <button
            disabled={busy}
            className="w-full rounded-full bg-pine-700 py-2.5 font-display text-white transition hover:bg-pine-600 disabled:opacity-50"
          >
            {busy ? "Working…" : mode === "login" ? "Sign in" : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}
