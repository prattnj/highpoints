import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LogEntry, UserData } from "../types";
import { GOAL_META, formatLogDate } from "../types";
import { STATES } from "../data/states";
import { LogFormModal, type LogDraft } from "./LogFormModal";

const stateName = (abbr: string) => STATES.find((s) => s.abbr === abbr)?.name ?? abbr;

export function LogsTab({
  data,
  onAddLog,
  onUpdateLog,
  onDeleteLog,
}: {
  data: UserData;
  onAddLog: (log: Omit<LogEntry, "id">) => Promise<void>;
  onUpdateLog: (id: string, log: Omit<LogEntry, "id">) => Promise<void>;
  onDeleteLog: (id: string) => Promise<void>;
}) {
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<LogEntry | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const logs = useMemo(
    () =>
      [...data.logs].sort((a, b) => {
        // Undated (childhood) entries sort to the bottom
        if (a.date === "" && b.date === "") return 0;
        if (a.date === "") return 1;
        if (b.date === "") return -1;
        return b.date.localeCompare(a.date);
      }),
    [data.logs]
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-pine-800">Logs</h2>
        <button
          onClick={() => setAdding(true)}
          className="rounded-full bg-pine-700 px-5 py-2 font-display text-sm text-white shadow-sm transition hover:bg-pine-600"
        >
          + New entry
        </button>
      </div>

      {logs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-pine-300 bg-pine-50/60 py-16 text-center">
          <p className="font-display text-pine-600">No entries yet.</p>
          <p className="text-sm text-pine-400">Use "New entry" to record your first milestone.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {logs.map((log) => {
            const meta = GOAL_META[log.goal];
            return (
              <li
                key={log.id}
                className="rounded-2xl border border-pine-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${meta.color}22`, color: meta.color }}
                  >
                    <FontAwesomeIcon icon={meta.icon} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-pine-800">
                      {meta.verb} <span className="font-display">{stateName(log.state)}</span>
                    </div>
                    <div className="text-xs text-pine-500">
                      {formatLogDate(log.date)}
                      {log.companions && <> · with {log.companions}</>}
                    </div>
                    {log.notes && (
                      <p className="mt-1.5 whitespace-pre-wrap text-sm text-pine-700">{log.notes}</p>
                    )}
                  </div>
                  <div className="flex gap-1.5 text-xs">
                    <button
                      onClick={() => setEditing(log)}
                      className="rounded-full border border-pine-200 px-2.5 py-1 text-pine-600 hover:bg-pine-50"
                    >
                      Edit
                    </button>
                    {confirmDelete === log.id ? (
                      <button
                        onClick={() => {
                          onDeleteLog(log.id);
                          setConfirmDelete(null);
                        }}
                        className="rounded-full bg-red-600 px-2.5 py-1 text-white"
                      >
                        Confirm
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setConfirmDelete(log.id);
                          setTimeout(() => setConfirmDelete(null), 3000);
                        }}
                        className="rounded-full border border-pine-200 px-2.5 py-1 text-pine-600 hover:bg-red-50 hover:text-red-600"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {adding && (
        <LogFormModal
          title="New entry"
          onSubmit={(draft: LogDraft) => onAddLog(draft)}
          onClose={() => setAdding(false)}
        />
      )}
      {editing && (
        <LogFormModal
          title="Edit entry"
          initial={editing}
          onSubmit={(draft: LogDraft) => onUpdateLog(editing.id, draft)}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}
