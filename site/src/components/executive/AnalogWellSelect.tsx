import type { WellRecord } from "@/types/wells";
import type { JaccardRankEntry } from "@/lib/jaccardRanking";
import { cn } from "@/lib/utils";

interface AnalogWellSelectProps {
  wells: WellRecord[];
  focusAlias: string;
  value: string;
  onChange: (alias: string) => void;
  rankings: JaccardRankEntry[];
  label: string;
  id: string;
  className?: string;
}

export function AnalogWellSelect({
  wells,
  focusAlias,
  value,
  onChange,
  rankings,
  label,
  id,
  className,
}: AnalogWellSelectProps) {
  const wellByAlias = new Map(wells.map((w) => [w.alias, w]));
  const scoreByAlias = new Map(rankings.map((r) => [r.alias, r.jaccard]));
  const options = rankings
    .map((r) => wellByAlias.get(r.alias))
    .filter((w): w is WellRecord => w != null && !w.data_missing && w.alias !== focusAlias);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-text-muted">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text transition-colors hover:border-accent/50 focus:border-accent"
      >
        {options.map((well) => {
          const score = scoreByAlias.get(well.alias);
          const scoreLabel = score != null ? ` (J=${score.toFixed(2)})` : "";
          return (
            <option key={well.alias} value={well.alias}>
              {well.display}
              {scoreLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}
