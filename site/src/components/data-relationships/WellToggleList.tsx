import { cn } from "@/lib/utils";
import { getWellColor } from "@/lib/dataRelationships";
import type { WellRecord } from "@/types/wells";

interface WellToggleListProps {
  wells: WellRecord[];
  enabledAliases: Set<string>;
  countsByAlias: Record<string, number>;
  hoveredAlias: string | null;
  highlightedAlias: string | null;
  onToggle: (alias: string, enabled: boolean) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  onHover: (alias: string | null) => void;
}

export function WellToggleList({
  wells,
  enabledAliases,
  countsByAlias,
  hoveredAlias,
  highlightedAlias,
  onToggle,
  onSelectAll,
  onClearAll,
  onHover,
}: WellToggleListProps) {
  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-text">Wells</h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onSelectAll}
            className="cursor-pointer rounded-card border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text transition-colors hover:border-accent/50"
          >
            Select all
          </button>
          <button
            type="button"
            onClick={onClearAll}
            className="cursor-pointer rounded-card border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text transition-colors hover:border-accent/50"
          >
            Clear all
          </button>
        </div>
      </div>

      <ul className="max-h-[28rem] space-y-1 overflow-y-auto" role="list" aria-label="Well visibility toggles">
        {wells.map((well, index) => {
          const enabled = enabledAliases.has(well.alias);
          const active = hoveredAlias === well.alias || highlightedAlias === well.alias;
          const color = getWellColor(well.alias, index);

          return (
            <li key={well.alias}>
              <label
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-card px-2 py-2 text-sm transition-colors",
                  active ? "bg-accent/15 ring-1 ring-accent/40" : "hover:bg-surface-2",
                )}
                onMouseEnter={() => onHover(well.alias)}
                onMouseLeave={() => onHover(null)}
              >
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => onToggle(well.alias, e.target.checked)}
                  className="h-4 w-4 cursor-pointer accent-accent"
                  aria-pressed={enabled}
                />
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
                <span className="min-w-0 flex-1 truncate font-medium text-text">{well.display}</span>
                <span className="font-mono text-xs tabular-nums text-text-muted">
                  n={countsByAlias[well.alias] ?? 0}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
