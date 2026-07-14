import { useMemo } from "react";
import { Link } from "react-router-dom";
import { cn, formatNumber } from "@/lib/utils";
import type { WellRecord } from "@/types/wells";

interface PortfolioElevatedStripProps {
  wells: WellRecord[];
  highlightAliases: Set<string>;
  className?: string;
}

export function PortfolioElevatedStrip({
  wells,
  highlightAliases,
  className,
}: PortfolioElevatedStripProps) {
  const sorted = useMemo(
    () =>
      [...wells]
        .filter((w) => !w.data_missing)
        .sort((a, b) => b.elevated_risk_count - a.elevated_risk_count || a.alias.localeCompare(b.alias)),
    [wells],
  );

  const maxElevated = useMemo(
    () => Math.max(1, ...sorted.map((w) => w.elevated_risk_count)),
    [sorted],
  );

  return (
    <div className={cn("rounded-card border border-border bg-surface-2 p-4", className)}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
        Portfolio elevated zones — all {sorted.length} wells
      </p>

      <div
        className="flex gap-1 overflow-x-auto pb-1"
        role="list"
        aria-label="Elevated risk count by well"
      >
        {sorted.map((well) => {
          const highlighted = highlightAliases.has(well.alias);
          const barPct = (well.elevated_risk_count / maxElevated) * 100;
          const to = well.dual_lateral ? "/#executive-summary" : `/well/${well.alias}`;
          const shortName = well.display
            .replace("MCKINLAY", "MCK")
            .replace("FROSTILLICUS", "FROST")
            .replace("JENA 31 Dual Lateral", "JENA DUAL");

          return (
            <Link
              key={well.alias}
              to={to}
              role="listitem"
              className={cn(
                "group flex min-w-[3.25rem] flex-col items-center rounded-card border px-1.5 py-2 transition-colors",
                highlighted
                  ? "border-accent bg-accent/10"
                  : "border-border bg-surface hover:border-accent/40",
              )}
              title={`${well.display}: ${well.elevated_risk_count} elevated`}
            >
              <div className="flex h-16 w-full items-end justify-center">
                <span
                  className={cn(
                    "w-4 rounded-t-sm transition-colors",
                    highlighted ? "bg-accent" : "bg-risk-elev/70 group-hover:bg-risk-elev",
                  )}
                  style={{ height: `${Math.max(barPct, well.elevated_risk_count > 0 ? 8 : 2)}%` }}
                  aria-hidden
                />
              </div>
              <span
                className={cn(
                  "mt-1 max-w-full truncate text-center text-[9px] font-medium leading-tight",
                  highlighted ? "text-accent" : "text-text-muted",
                )}
              >
                {shortName}
              </span>
              {well.dual_lateral ? (
                <span className="mt-0.5 rounded px-1 text-[8px] font-semibold uppercase tracking-wide text-bg bg-[var(--lateral-dual-badge)]">
                  Dual
                </span>
              ) : null}
              <span className="font-mono text-[10px] text-text">
                {formatNumber(well.elevated_risk_count, 0)}
              </span>
            </Link>
          );
        })}
      </div>

      <p className="mt-2 text-xs text-text-muted">
        Accent highlight = current focus or compare wells in panels above. Dual lateral links to
        executive summary.
      </p>
    </div>
  );
}
