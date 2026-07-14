import type { ReactNode } from "react";
import { pageStateKey, usePersistedState } from "@/hooks/usePageState";
import { cn } from "@/lib/utils";

interface CollapsiblePanelProps {
  panelId: string;
  title: string;
  subtitle?: ReactNode;
  headerExtra?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function CollapsiblePanel({
  panelId,
  title,
  subtitle,
  headerExtra,
  defaultOpen = true,
  children,
  className,
  contentClassName,
}: CollapsiblePanelProps) {
  const [open, setOpen] = usePersistedState(
    pageStateKey("/", `execPanel${panelId}:expanded`),
    defaultOpen,
  );

  return (
    <section
      className={cn(
        "rounded-card border border-border bg-surface shadow-card",
        className,
      )}
      aria-labelledby={`collapsible-${panelId}-title`}
    >
      <div className="flex flex-col gap-3 p-5 lg:flex-row lg:items-end lg:justify-between">
        <button
          type="button"
          onClick={() => setOpen((expanded) => !expanded)}
          aria-expanded={open}
          aria-controls={`collapsible-${panelId}-content`}
          className="flex min-w-0 flex-1 cursor-pointer items-start justify-between gap-3 rounded-card text-left transition-colors hover:bg-surface-2/60"
        >
          <div className="min-w-0">
            <h3 id={`collapsible-${panelId}-title`} className="text-base font-semibold text-text">
              {title}
            </h3>
            {subtitle ? <div className="mt-0.5 text-sm text-text-muted">{subtitle}</div> : null}
          </div>
          <span className="shrink-0 pt-0.5 text-accent" aria-hidden>
            {open ? "▾" : "▸"}
          </span>
        </button>
        {headerExtra ? <div className="w-full lg:w-auto lg:shrink-0">{headerExtra}</div> : null}
      </div>

      {open ? (
        <div
          id={`collapsible-${panelId}-content`}
          className={cn("border-t border-border px-5 pb-5", contentClassName)}
        >
          {children}
        </div>
      ) : null}
    </section>
  );
}
