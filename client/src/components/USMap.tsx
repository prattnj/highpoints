import { useMemo, useState } from "react";
import usa from "@svg-maps/usa";

interface Location {
  id: string;
  name: string;
  path: string;
}

// The packaged Hawaii is drawn vertically and undersized; rotate the chain to its
// real NW-SE orientation, enlarge it, and keep it positioned between Alaska and Texas.
const HAWAII_TRANSFORM = "translate(614 633) rotate(-56) scale(2) translate(-599 -623)";

export function USMap({
  fillFor,
  selected,
  onSelect,
}: {
  fillFor: (abbr: string) => string;
  selected: string | null;
  onSelect: (abbr: string | null) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  const locations = useMemo(
    () => (usa.locations as Location[]).filter((l) => l.id !== "dc"),
    []
  );

  // Draw hovered/selected states last so their outlines aren't painted over
  // by neighboring states.
  const ordered = useMemo(() => {
    const rank = (l: Location) =>
      l.id.toUpperCase() === selected ? 2 : l.id.toUpperCase() === hovered ? 1 : 0;
    return [...locations].sort((a, b) => rank(a) - rank(b));
  }, [locations, selected, hovered]);

  return (
    <svg
      viewBox={usa.viewBox}
      role="img"
      aria-label="Map of the United States"
      className="h-auto w-full"
      onClick={() => onSelect(null)}
    >
      {ordered.map((loc) => {
        const abbr = loc.id.toUpperCase();
        const isSelected = selected === abbr;
        const isHovered = hovered === abbr;
        const path = (
          <path
            key={abbr}
            d={loc.path}
            fill={fillFor(abbr)}
            stroke={isSelected ? "#1e4d3b" : "#ffffff"}
            strokeWidth={isSelected ? 2.5 : 1}
            strokeLinejoin="round"
            className="cursor-pointer"
            style={isHovered && !isSelected ? { filter: "brightness(0.92)" } : undefined}
            onMouseEnter={() => setHovered(abbr)}
            onMouseLeave={() => setHovered(null)}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(isSelected ? null : abbr);
            }}
          >
            <title>{loc.name}</title>
          </path>
        );
        return abbr === "HI" ? (
          <g key={abbr} transform={HAWAII_TRANSFORM}>
            {path}
          </g>
        ) : (
          path
        );
      })}
    </svg>
  );
}
