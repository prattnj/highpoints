import { useEffect, useState } from "react";
import type { GoalId, LogEntry } from "../types";
import { ALL_GOALS, GOAL_META } from "../types";
import { STATES } from "../data/states";

export interface LogDraft {
  state: string;
  goal: GoalId;
  date: string;
  notes: string;
  companions: string;
}

export function LogFormModal({
  initial,
  title,
  onSubmit,
  onClose,
}: {
  initial?: Partial<LogEntry>;
  title: string;
  onSubmit: (draft: LogDraft) => Promise<void>;
  onClose: () => void;
}) {
  const [state, setState] = useState(initial?.state ?? "");
  const [goal, setGoal] = useState<GoalId>(initial?.goal ?? "visited");
  const [noDate, setNoDate] = useState(initial ? initial.date === "" : false);
  const [date, setDate] = useState(
    initial?.date || new Date().toISOString().slice(0, 10)
  );
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [companions, setCompanions] = useState(initial?.companions ?? "");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!state) {
      setError("Select a state.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await onSubmit({ state, goal, date: noDate ? "" : date, notes, companions });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-pine-200 px-3 py-2 text-sm outline-none focus:border-pine-500 focus:ring-2 focus:ring-pine-200";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-pine-900/40 px-4"
      onClick={onClose}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-4 text-xl font-semibold text-pine-800">{title}</h2>

        <div className="mb-3 grid grid-cols-2 gap-3">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-pine-700">State</span>
            <select value={state} onChange={(e) => setState(e.target.value)} className={inputCls}>
              <option value="" disabled>
                Select a state
              </option>
              {STATES.map((s) => (
                <option key={s.abbr} value={s.abbr}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-pine-700">Goal</span>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value as GoalId)}
              className={inputCls}
            >
              {ALL_GOALS.map((g) => (
                <option key={g} value={g}>
                  {GOAL_META[g].shortLabel}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mb-3">
          <span className="mb-1 block text-sm font-semibold text-pine-700">Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required={!noDate}
            disabled={noDate}
            className={`${inputCls} disabled:bg-pine-50 disabled:text-pine-300`}
          />
          <label className="mt-1.5 flex cursor-pointer items-center gap-2 text-sm text-pine-600">
            <input
              type="checkbox"
              checked={noDate}
              onChange={(e) => setNoDate(e.target.checked)}
              className="h-4 w-4 accent-pine-600"
            />
            I don't remember the date (childhood, etc.)
          </label>
        </div>

        <label className="mb-3 block">
          <span className="mb-1 block text-sm font-semibold text-pine-700">
            Companions <span className="font-normal text-pine-400">(optional)</span>
          </span>
          <input
            value={companions}
            onChange={(e) => setCompanions(e.target.value)}
            className={inputCls}
          />
        </label>

        <label className="mb-4 block">
          <span className="mb-1 block text-sm font-semibold text-pine-700">
            Notes <span className="font-normal text-pine-400">(optional)</span>
          </span>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className={inputCls}
          />
        </label>

        {error && (
          <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        )}

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-pine-200 px-4 py-2 text-sm text-pine-700 hover:bg-pine-50"
          >
            Cancel
          </button>
          <button
            disabled={busy}
            className="rounded-full bg-pine-700 px-5 py-2 font-display text-sm text-white hover:bg-pine-600 disabled:opacity-50"
          >
            {busy ? "Saving…" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
