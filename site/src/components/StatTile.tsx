import { cn, formatNumber, formatPercent } from "@/lib/utils";

interface StatTileProps {
  label: string;
  value: string | number | null;
  unit?: string;
  hint?: string;
  variant?: "default" | "accent" | "risk";
  className?: string;
}

export function StatTile({
  label,
  value,
  unit,
  hint,
  variant = "default",
  className,
}: StatTileProps) {
  const display =
    typeof value === "number"
      ? unit === "%"
        ? formatPercent(value)
        : formatNumber(value, unit === "m" ? 0 : 1)
      : value ?? "—";

  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface-2 p-4 shadow-card transition-colors",
        variant === "accent" && "border-accent/30",
        variant === "risk" && "border-risk-elev/30",
        className,
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p>
      <p
        className={cn(
          "mt-2 font-mono text-xl font-semibold",
          variant === "accent" && "text-accent",
          variant === "risk" && "text-risk-elev",
        )}
      >
        {display}
        {typeof value === "number" && unit && unit !== "%" ? (
          <span className="ml-1 text-sm font-normal text-text-muted">{unit}</span>
        ) : null}
      </p>
      {hint ? <p className="mt-1 text-xs text-text-muted">{hint}</p> : null}
    </div>
  );
}
