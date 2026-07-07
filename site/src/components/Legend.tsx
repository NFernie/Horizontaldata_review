import { cn } from "@/lib/utils";

export interface LegendItem {
  label: string;
  color: string;
  description?: string;
}

interface LegendProps {
  title?: string;
  items: LegendItem[];
  className?: string;
}

export function Legend({ title = "Legend", items, className }: LegendProps) {
  return (
    <div
      className={cn("rounded-card border border-border bg-surface-2 p-3", className)}
      role="group"
      aria-label={title}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">{title}</p>
      <ul className="flex flex-wrap gap-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-sm text-text">
            <span
              className="inline-block h-3 w-3 shrink-0 rounded-sm border border-border"
              style={{ backgroundColor: item.color }}
              aria-hidden
            />
            <span>
              {item.label}
              {item.description ? (
                <span className="ml-1 text-text-muted">({item.description})</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
