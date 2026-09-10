import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faShoePrints,
  faMountain,
  faMountainSun,
  faCampground,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";

export type GoalId = "visited" | "highPoint" | "prominencePoint" | "overnight" | "capital";

export const ALL_GOALS: GoalId[] = ["visited", "highPoint", "prominencePoint", "overnight", "capital"];

export interface GoalMeta {
  id: GoalId;
  label: string;
  shortLabel: string;
  icon: IconDefinition;
  color: string;
  verb: string;
}

export const GOAL_META: Record<GoalId, GoalMeta> = {
  visited: {
    id: "visited",
    label: "Visited the state",
    shortLabel: "Visited",
    icon: faShoePrints,
    color: "#4f93c4",
    verb: "Visited",
  },
  highPoint: {
    id: "highPoint",
    label: "Summited the high point",
    shortLabel: "High point",
    icon: faMountain,
    color: "#2e7d4f",
    verb: "Summited the high point of",
  },
  prominencePoint: {
    id: "prominencePoint",
    label: "Summited the prominence point",
    shortLabel: "Prominence",
    icon: faMountainSun,
    color: "#1f9e8e",
    verb: "Summited the prominence point of",
  },
  overnight: {
    id: "overnight",
    label: "Stayed overnight",
    shortLabel: "Overnight",
    icon: faCampground,
    color: "#5b6bb5",
    verb: "Stayed overnight in",
  },
  capital: {
    id: "capital",
    label: "Visited the capital",
    shortLabel: "Capital",
    icon: faLandmark,
    color: "#d9a441",
    verb: "Visited the capital of",
  },
};

export interface Peak {
  name: string;
  elevationFt: number;
  prominenceFt: number;
  lat: number;
  lon: number;
  peakbaggerUrl: string;
}

export interface StateInfo {
  name: string;
  abbr: string;
  capital: string;
  highPoint: Peak;
  prominencePoint: Peak & { sameAsHighPoint: boolean };
}

export interface LogEntry {
  id: string;
  state: string;
  goal: GoalId;
  /** YYYY-MM-DD, or "" when the date is unknown (e.g. childhood) */
  date: string;
  notes: string;
  companions: string;
}

export function formatLogDate(date: string): string {
  return date === "" ? "Childhood" : date;
}

export interface UserData {
  logs: LogEntry[];
}
