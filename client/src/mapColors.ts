import type { GoalId } from "./types";

export const MAP_GRAY = "#d9ddd6";
export const MAP_BLUE = "#3b82c4";

export type BaseCategory = "none" | "visited" | "overnight" | "highPoint" | "both";

// Shade index: 0 = no modifiers, 1 = +capital, 2 = +prominence, 3 = +capital & prominence.
const SHADES: Record<Exclude<BaseCategory, "none">, [string, string, string, string]> = {
  visited: ["#fff3a3", "#ffe45c", "#f5c518", "#cc9a00"],
  overnight: ["#ffcf9e", "#ffa64d", "#f57c00", "#c45a00"],
  highPoint: ["#ffa9a0", "#ff6b5e", "#e53528", "#a81b10"],
  both: ["#b5e3ac", "#7bc96f", "#3fa03c", "#1e6f1e"],
};

export const CATEGORY_LABELS: Record<BaseCategory, string> = {
  none: "Never visited",
  visited: "Visited",
  overnight: "Overnight, no high point",
  highPoint: "High point, no overnight",
  both: "Overnight + high point",
};

export function baseCategory(done: Set<GoalId>): BaseCategory {
  const overnight = done.has("overnight");
  const highPoint = done.has("highPoint");
  if (overnight && highPoint) return "both";
  if (highPoint) return "highPoint";
  if (overnight) return "overnight";
  if (done.has("visited")) return "visited";
  return "none";
}

export function shadeIndex(done: Set<GoalId>): number {
  const capital = done.has("capital");
  const prominence = done.has("prominencePoint");
  if (capital && prominence) return 3;
  if (prominence) return 2;
  if (capital) return 1;
  return 0;
}

export function allGoalsFill(done: Set<GoalId>): string {
  const category = baseCategory(done);
  if (category === "none") return MAP_GRAY;
  return SHADES[category][shadeIndex(done)];
}

export function singleGoalFill(done: Set<GoalId>, goal: GoalId): string {
  return done.has(goal) ? MAP_BLUE : MAP_GRAY;
}

export function categorySwatch(category: Exclude<BaseCategory, "none">): string {
  return SHADES[category][0];
}

export function categoryShades(
  category: Exclude<BaseCategory, "none">
): [string, string, string, string] {
  return SHADES[category];
}
