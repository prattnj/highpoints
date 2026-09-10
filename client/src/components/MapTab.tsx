import { useState } from "react";
import type { GoalId, LogEntry, UserData } from "../types";
import { ALL_GOALS, GOAL_META } from "../types";
import {
  allGoalsFill,
  singleGoalFill,
  categoryShades,
  CATEGORY_LABELS,
  MAP_GRAY,
  MAP_BLUE,
} from "../mapColors";
import { USMap } from "./USMap";
import { StatePanel } from "./StatePanel";
import { LogFormModal, type LogDraft } from "./LogFormModal";

type MapMode = "all" | GoalId;

const EMPTY = new Set<GoalId>();

function AllGoalsLegend() {
  const categories = ["visited", "overnight", "highPoint", "both"] as const;
  return (
    <div className="mt-4 border-t border-pine-100 pt-3">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-pine-700">
        <span className="flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded-sm" style={{ backgroundColor: MAP_GRAY }} />
          {CATEGORY_LABELS.none}
        </span>
        {categories.map((c) => (
          <span key={c} className="flex items-center gap-1.5">
            <span className="flex overflow-hidden rounded-sm">
              {categoryShades(c).map((shade) => (
                <span key={shade} className="h-3.5 w-3.5" style={{ backgroundColor: shade }} />
              ))}
            </span>
            {CATEGORY_LABELS[c]}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-pine-400">
        Shades, light to dark: base · + capital · + prominence point · + capital and prominence
        point.
      </p>
    </div>
  );
}

function SingleGoalLegend({ goal }: { goal: GoalId }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-pine-100 pt-3 text-xs text-pine-700">
      <span className="flex items-center gap-1.5">
        <span className="h-3.5 w-3.5 rounded-sm" style={{ backgroundColor: MAP_BLUE }} />
        {GOAL_META[goal].label}
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-3.5 w-3.5 rounded-sm" style={{ backgroundColor: MAP_GRAY }} />
        Not yet
      </span>
    </div>
  );
}

export function MapTab({
  data,
  completed,
  onAddLog,
}: {
  data: UserData;
  completed: Map<string, Set<GoalId>>;
  onAddLog: (log: Omit<LogEntry, "id">) => Promise<void>;
}) {
  const [mode, setMode] = useState<MapMode>("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [quickLog, setQuickLog] = useState<{ state: string; goal: GoalId } | null>(null);

  const fillFor = (abbr: string) => {
    const done = completed.get(abbr) ?? EMPTY;
    return mode === "all" ? allGoalsFill(done) : singleGoalFill(done, mode);
  };

  const modeBtn = (active: boolean) =>
    `rounded-full border px-3 py-1 text-sm font-semibold transition ${
      active
        ? "border-transparent bg-pine-700 text-white shadow-sm"
        : "border-pine-200 bg-white text-pine-600 hover:bg-pine-50"
    }`;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-pine-600">View:</span>
        <button onClick={() => setMode("all")} className={modeBtn(mode === "all")}>
          All goals
        </button>
        {ALL_GOALS.map((g) => (
          <button key={g} onClick={() => setMode(g)} className={modeBtn(mode === g)}>
            {GOAL_META[g].shortLabel}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-pine-200 bg-white p-3 shadow-sm sm:p-5">
          <USMap fillFor={fillFor} selected={selected} onSelect={setSelected} />
          {mode === "all" ? <AllGoalsLegend /> : <SingleGoalLegend goal={mode} />}
        </div>

        <StatePanel
          selected={selected}
          completed={completed}
          logs={data.logs}
          onQuickLog={(state, goal) => setQuickLog({ state, goal })}
        />
      </div>

      {quickLog && (
        <LogFormModal
          title="New log entry"
          initial={{ state: quickLog.state, goal: quickLog.goal }}
          onSubmit={(draft: LogDraft) => onAddLog(draft)}
          onClose={() => setQuickLog(null)}
        />
      )}
    </div>
  );
}
