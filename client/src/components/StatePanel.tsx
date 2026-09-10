import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { GoalId, LogEntry, Peak } from "../types";
import { ALL_GOALS, GOAL_META, formatLogDate } from "../types";
import { STATES } from "../data/states";

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function PeakLine({ label, peak }: { label: string; peak: Peak }) {
  return (
    <div className="rounded-xl bg-pine-50 p-3">
      <div className="text-xs font-bold uppercase tracking-wide text-pine-400">{label}</div>
      <a
        href={peak.peakbaggerUrl}
        target="_blank"
        rel="noreferrer"
        className="font-display text-pine-800 underline decoration-pine-300 underline-offset-2 hover:text-pine-600"
      >
        {peak.name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[0.65em]" />
      </a>
      <div className="mt-0.5 text-xs text-pine-600">
        {fmt(peak.elevationFt)} ft · {fmt(peak.prominenceFt)} ft prom
      </div>
      <a
        href={`https://www.google.com/maps?q=${peak.lat},${peak.lon}`}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-lake-700 hover:underline"
      >
        <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
        {peak.lat.toFixed(4)}, {peak.lon.toFixed(4)}
      </a>
    </div>
  );
}

export function StatePanel({
  selected,
  completed,
  logs,
  onQuickLog,
}: {
  selected: string | null;
  completed: Map<string, Set<GoalId>>;
  logs: LogEntry[];
  onQuickLog: (state: string, goal: GoalId) => void;
}) {
  const state = STATES.find((s) => s.abbr === selected);

  if (!state) {
    return (
      <aside className="flex items-center justify-center rounded-2xl border border-dashed border-pine-300 bg-pine-50/60 p-6 text-center text-sm text-pine-400 max-lg:hidden">
        Select a state to view its details.
      </aside>
    );
  }

  const done = completed.get(state.abbr) ?? new Set<GoalId>();
  const stateLogs = logs.filter((l) => l.state === state.abbr);

  return (
    <aside className="rounded-2xl border border-pine-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-pine-800">{state.name}</h3>
      <p className="mb-3 text-sm text-pine-500">Capital: {state.capital}</p>

      <div className="space-y-2">
        <PeakLine label="High point" peak={state.highPoint} />
        {state.prominencePoint.sameAsHighPoint ? (
          <p className="px-1 text-xs italic text-pine-400">
            This peak is also the state's prominence point.
          </p>
        ) : (
          <PeakLine label="Prominence point" peak={state.prominencePoint} />
        )}
      </div>

      <div className="mt-4 space-y-1.5">
        {ALL_GOALS.map((g) => {
          const isDone = done.has(g);
          // When the high point and prominence point are the same peak, a log
          // for one goal covers the other, so fall back to the counterpart log.
          let log = stateLogs.find((l) => l.goal === g);
          if (!log && state.prominencePoint.sameAsHighPoint) {
            if (g === "highPoint") log = stateLogs.find((l) => l.goal === "prominencePoint");
            if (g === "prominencePoint") log = stateLogs.find((l) => l.goal === "highPoint");
          }
          // Visited can be implied by any other log; show the earliest date.
          if (!log && g === "visited" && stateLogs.length > 0) {
            log = [...stateLogs].sort((a, b) =>
              a.date === "" ? -1 : b.date === "" ? 1 : a.date.localeCompare(b.date)
            )[0];
          }
          return (
            <div key={g} className="flex items-center justify-between text-sm">
              <span className={isDone ? "text-pine-800" : "text-pine-400"}>
                <span
                  className="mr-2 inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: isDone ? GOAL_META[g].color : "#d5ddd1" }}
                />
                {GOAL_META[g].shortLabel}
              </span>
              {isDone ? (
                <span className="text-xs font-semibold text-pine-500">
                  <FontAwesomeIcon icon={faCheck} className="mr-1" />
                  {log ? formatLogDate(log.date) : ""}
                </span>
              ) : (
                <button
                  onClick={() => onQuickLog(state.abbr, g)}
                  className="rounded-full bg-pine-100 px-2.5 py-0.5 text-xs font-semibold text-pine-700 hover:bg-pine-200"
                >
                  + log
                </button>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
