import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Card } from "@/components/Card";
import { KsGrid } from "@/components/KsGrid";
import { rankKsAnalogs } from "@/lib/ksRanking";
import type { KsPayload } from "@/types/stats";
import { cn } from "@/lib/utils";

const TOP_N = 8;

interface KsRankedAnalogPanelProps {
  focusAlias: string;
  focusTitle: string;
  data: KsPayload;
  displayNames: Record<string, string>;
  excludeAliases: readonly string[];
}

function trapFocus(container: HTMLElement, event: KeyboardEvent) {
  if (event.key !== "Tab") return;
  const focusable = container.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  if (!focusable.length) return;
  const first = focusable[0]!;
  const last = focusable[focusable.length - 1]!;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function KsRankedAnalogPanel({
  focusAlias,
  focusTitle,
  data,
  displayNames,
  excludeAliases,
}: KsRankedAnalogPanelProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const ranked = useMemo(
    () => rankKsAnalogs(data, focusAlias, excludeAliases),
    [data, focusAlias, excludeAliases],
  );
  const topEight = ranked.slice(0, TOP_N);
  const remainder = ranked.slice(TOP_N);

  useEffect(() => {
    if (!drawerOpen) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setDrawerOpen(false);
        return;
      }
      if (panelRef.current) trapFocus(panelRef.current, event);
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  return (
    <>
      <Card
        title={`KS significance — ${focusTitle}`}
        description="Ranked by mean KS p-value (higher = more similar distributions)"
      >
        <KsGrid
          data={data}
          focusAlias={focusAlias}
          rankedAnalogs={topEight}
          displayNames={displayNames}
          showPortfolio
        />
        {remainder.length > 0 ? (
          <button
            type="button"
            aria-expanded={drawerOpen}
            aria-controls={drawerId}
            onClick={() => setDrawerOpen(true)}
            className="mt-3 cursor-pointer text-sm font-medium text-accent transition-colors hover:text-text"
          >
            All analogs ({remainder.length})
          </button>
        ) : null}
        <p className="mt-2 text-xs text-text-muted">
          Kolmogorov–Smirnov two-sample test: {focusTitle} vs analog / portfolio. Warm cells = p
          &lt; 0.05 (distributions differ).
        </p>
      </Card>

      <button
        type="button"
        aria-label={`Close analog list for ${focusTitle}`}
        className={cn(
          "fixed inset-0 z-[55] bg-[var(--scrim)] transition-opacity duration-200 motion-reduce:transition-none",
          drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setDrawerOpen(false)}
        tabIndex={drawerOpen ? 0 : -1}
      />

      <aside
        ref={panelRef}
        id={drawerId}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${drawerId}-title`}
        aria-hidden={!drawerOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-[60] flex w-full max-w-4xl flex-col border-l border-border bg-bg shadow-card transition-transform duration-200 motion-reduce:transition-none",
          drawerOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <header className="flex items-start justify-between gap-3 border-b border-border bg-surface px-4 py-4 sm:px-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
              Ranks {TOP_N + 1}–{ranked.length}
            </p>
            <h2 id={`${drawerId}-title`} className="text-lg font-semibold text-text">
              KS analogs — {focusTitle}
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Remaining analogs by mean p-value. Portfolio column is on the main grid only.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close analog list"
            onClick={() => setDrawerOpen(false)}
            className="cursor-pointer rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent"
          >
            Close
          </button>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-5">
          <KsGrid
            data={data}
            focusAlias={focusAlias}
            rankedAnalogs={remainder}
            displayNames={displayNames}
            showPortfolio={false}
          />
        </div>
      </aside>
    </>
  );
}
