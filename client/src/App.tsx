import { useCallback, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faCircleInfo, faListUl } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { api } from "./api";
import type { GoalId, LogEntry, UserData } from "./types";
import { STATES } from "./data/states";
import { AuthScreen } from "./components/AuthScreen";
import { Header } from "./components/Header";
import { MapTab } from "./components/MapTab";
import { InfoTab } from "./components/InfoTab";
import { LogsTab } from "./components/LogsTab";

type Tab = "map" | "info" | "logs";

const TABS: { id: Tab; label: string; icon: IconDefinition }[] = [
  { id: "map", label: "Map", icon: faMap },
  { id: "info", label: "Info", icon: faCircleInfo },
  { id: "logs", label: "Logs", icon: faListUl },
];

const SHARED_PEAK_STATES = new Set(
  STATES.filter((s) => s.prominencePoint.sameAsHighPoint).map((s) => s.abbr)
);

export default function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [data, setData] = useState<UserData | null>(null);
  const [tab, setTab] = useState<Tab>("map");

  useEffect(() => {
    api
      .me()
      .then((r) => setUsername(r.username))
      .catch(() => setUsername(null))
      .finally(() => setChecking(false));
  }, []);

  useEffect(() => {
    if (!username) {
      setData(null);
      return;
    }
    api.getData().then(setData).catch(console.error);
  }, [username]);

  const completed = useMemo(() => {
    const map = new Map<string, Set<GoalId>>();
    for (const log of data?.logs ?? []) {
      if (!map.has(log.state)) map.set(log.state, new Set());
      map.get(log.state)!.add(log.goal);
    }
    // Any logged activity in a state implies it was visited.
    for (const goals of map.values()) {
      if (goals.size > 0) goals.add("visited");
    }
    // Where the high point and prominence point are the same peak,
    // logging either one counts for both.
    for (const [state, goals] of map) {
      if (SHARED_PEAK_STATES.has(state)) {
        if (goals.has("highPoint")) goals.add("prominencePoint");
        if (goals.has("prominencePoint")) goals.add("highPoint");
      }
    }
    return map;
  }, [data]);

  const addLog = useCallback(async (log: Omit<LogEntry, "id">) => {
    const saved = await api.addLog(log);
    setData((d) => (d ? { ...d, logs: [...d.logs, saved] } : d));
  }, []);

  const updateLog = useCallback(async (id: string, log: Omit<LogEntry, "id">) => {
    const saved = await api.updateLog(id, log);
    setData((d) => (d ? { ...d, logs: d.logs.map((l) => (l.id === id ? saved : l)) } : d));
  }, []);

  const deleteLog = useCallback(async (id: string) => {
    await api.deleteLog(id);
    setData((d) => (d ? { ...d, logs: d.logs.filter((l) => l.id !== id) } : d));
  }, []);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center text-pine-600 font-display text-xl">
        Loading…
      </div>
    );
  }

  if (!username) {
    return <AuthScreen onSignedIn={setUsername} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        username={username}
        completed={completed}
        onSignOut={async () => {
          await api.logout();
          setUsername(null);
        }}
      />

      <nav className="mx-auto mt-4 flex gap-1 rounded-full bg-pine-100 p-1 shadow-inner">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-5 py-2 font-display text-sm transition-all sm:text-base ${
              tab === t.id
                ? "bg-pine-700 text-white shadow"
                : "text-pine-700 hover:bg-pine-200"
            }`}
          >
            <FontAwesomeIcon icon={t.icon} className="mr-1.5" />
            {t.label}
          </button>
        ))}
      </nav>

      <main className="mx-auto w-full max-w-6xl flex-1 px-3 py-5 sm:px-6">
        {!data ? (
          <div className="py-20 text-center text-pine-500 font-display">Loading…</div>
        ) : tab === "map" ? (
          <MapTab data={data} completed={completed} onAddLog={addLog} />
        ) : tab === "info" ? (
          <InfoTab completed={completed} />
        ) : (
          <LogsTab
            data={data}
            onAddLog={addLog}
            onUpdateLog={updateLog}
            onDeleteLog={deleteLog}
          />
        )}
      </main>
    </div>
  );
}
