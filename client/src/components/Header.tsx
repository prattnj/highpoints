import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import type { GoalId } from "../types";
import { ALL_GOALS, GOAL_META } from "../types";

export function Header({
  username,
  completed,
  onSignOut,
}: {
  username: string;
  completed: Map<string, Set<GoalId>>;
  onSignOut: () => void;
}) {
  const counts = ALL_GOALS.map((g) => {
    let n = 0;
    for (const set of completed.values()) if (set.has(g)) n++;
    return { goal: g, n };
  });

  return (
    <header className="border-b border-pine-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMountain} className="text-xl text-pine-700" />
          <h1 className="text-xl font-semibold text-pine-800 sm:text-2xl">Highpoints</h1>
        </div>

        <div className="hidden flex-wrap gap-2 sm:flex">
          {counts.map(({ goal, n }) => (
            <span
              key={goal}
              title={`${GOAL_META[goal].shortLabel}: ${n} of 50 states`}
              className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
              style={{ backgroundColor: GOAL_META[goal].color }}
            >
              <FontAwesomeIcon icon={GOAL_META[goal].icon} className="mr-1" /> {n}/50
            </span>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 text-sm">
          <span className="hidden text-pine-600 sm:inline">
            <strong>{username}</strong>
          </span>
          <button
            onClick={onSignOut}
            className="rounded-full border border-pine-200 px-3 py-1.5 text-pine-700 transition hover:bg-pine-100"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
