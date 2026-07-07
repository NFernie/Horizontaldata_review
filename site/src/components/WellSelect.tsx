import type { WellRecord } from "@/types/wells";
import { cn } from "@/lib/utils";

interface WellSelectProps {
  wells: WellRecord[];
  value: string;
  onChange: (alias: string) => void;
  label?: string;
  id?: string;
  className?: string;
  includeMissing?: boolean;
}

export function WellSelect({
  wells,
  value,
  onChange,
  label = "Select well",
  id = "well-select",
  className,
  includeMissing = false,
}: WellSelectProps) {
  const options = wells.filter((w) => includeMissing || !w.data_missing);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-text-muted">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text transition-colors hover:border-accent/50 focus:border-accent"
      >
        {options.map((well) => (
          <option key={well.alias} value={well.alias} disabled={well.data_missing}>
            {well.display}
            {well.data_missing ? " (no data)" : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
