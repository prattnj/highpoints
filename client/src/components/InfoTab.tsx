import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import type { GoalId, Peak } from "../types";
import { STATES } from "../data/states";

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function PeakCell({ peak }: { peak: Peak }) {
  return (
    <div>
      <a
        href={peak.peakbaggerUrl}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-pine-800 underline decoration-pine-300 underline-offset-2 hover:text-pine-600"
      >
        {peak.name}
      </a>
      <div className="text-xs text-pine-500">
        {fmt(peak.elevationFt)} ft · {fmt(peak.prominenceFt)} ft prom ·{" "}
        <a
          href={`https://www.google.com/maps?q=${peak.lat},${peak.lon}`}
          target="_blank"
          rel="noreferrer"
          className="text-lake-700 hover:underline"
        >
          <FontAwesomeIcon icon={faLocationDot} className="mr-0.5" /> map
        </a>
      </div>
    </div>
  );
}

export function InfoTab({ completed }: { completed: Map<string, Set<GoalId>> }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const states = STATES.filter(
    (s) =>
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.capital.toLowerCase().includes(q) ||
      s.highPoint.name.toLowerCase().includes(q) ||
      s.prominencePoint.name.toLowerCase().includes(q)
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-pine-800">State Reference</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search states, peaks, capitals"
          className="w-full max-w-xs rounded-full border border-pine-200 bg-white px-4 py-2 text-sm outline-none focus:border-pine-500 focus:ring-2 focus:ring-pine-200"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-pine-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-pine-200 bg-pine-50 font-display text-pine-600">
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Capital</th>
              <th className="px-4 py-3">High point</th>
              <th className="px-4 py-3">Prominence point</th>
            </tr>
          </thead>
          <tbody>
            {states.map((s) => {
              const done = completed.get(s.abbr);
              return (
                <tr key={s.abbr} className="border-b border-pine-100 last:border-0 hover:bg-pine-50/50">
                  <td className="px-4 py-3 align-top">
                    <div className="font-semibold text-pine-800">{s.name}</div>
                    {done && done.size > 0 && (
                      <div className="text-xs text-pine-400">{done.size}/5 milestones</div>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top text-pine-700">{s.capital}</td>
                  <td className="px-4 py-3 align-top">
                    <PeakCell peak={s.highPoint} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    {s.prominencePoint.sameAsHighPoint ? (
                      <span className="text-xs italic text-pine-400">same as high point</span>
                    ) : (
                      <PeakCell peak={s.prominencePoint} />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {states.length === 0 && (
          <p className="py-10 text-center text-sm text-pine-400">No matches.</p>
        )}
      </div>
    </div>
  );
}
