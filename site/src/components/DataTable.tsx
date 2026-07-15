import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface DataTableColumn<T> {
  key: string;
  header: string;
  align?: "left" | "right" | "center";
  mono?: boolean;
  render: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  caption?: string;
  emptyMessage?: string;
  className?: string;
  stickyFirstColumn?: boolean;
  /** Vertical scroll max-height, e.g. "70vh" or "60vh". Omit for horizontal-only scroll. */
  scrollMaxHeight?: string;
  /** First-column min-width class when sticky (depth vs well name). */
  stickyMinWidth?: string;
  /** When set, scrolls to and briefly highlights the matching row. */
  highlightRowKey?: string | null;
}

const HIGHLIGHT_MS = 2000;

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  caption,
  emptyMessage = "No data available.",
  className,
  stickyFirstColumn = false,
  scrollMaxHeight,
  stickyMinWidth = "min-w-[7.5rem]",
  highlightRowKey = null,
}: DataTableProps<T>) {
  const scrollStyle = scrollMaxHeight ? { maxHeight: scrollMaxHeight } : undefined;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  useEffect(() => {
    if (!highlightRowKey || !scrollRef.current) return;
    const rowEl = scrollRef.current.querySelector<HTMLTableRowElement>(
      `[data-row-key="${CSS.escape(highlightRowKey)}"]`,
    );
    if (!rowEl) return;
    rowEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    setActiveHighlight(highlightRowKey);
    const timer = window.setTimeout(() => setActiveHighlight(null), HIGHLIGHT_MS);
    return () => window.clearTimeout(timer);
  }, [highlightRowKey]);

  return (
    <div className={cn("rounded-card border border-border", className)}>
      <div
        ref={scrollRef}
        className={cn(
          "data-table-scroll overflow-auto",
          stickyFirstColumn && "data-table-sticky-first",
        )}
        style={scrollStyle}
      >
        <table className="min-w-full divide-y divide-border text-sm">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <thead className="bg-surface-2">
            <tr>
              {columns.map((col, colIndex) => (
                <th
                  key={col.key}
                  scope="col"
                  className={cn(
                    "px-3 py-2.5 text-left text-sm font-semibold text-text-muted",
                    col.align === "right" && "text-right",
                    col.align === "center" && "text-center",
                    stickyFirstColumn && colIndex === 0 && stickyMinWidth,
                  )}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-surface">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-3 py-8 text-center text-text-muted">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              rows.map((row) => {
                const key = rowKey(row);
                const highlighted = activeHighlight === key;
                return (
                  <tr
                    key={key}
                    data-row-key={key}
                    className={cn(
                      "transition-colors hover:bg-surface-2/60",
                      highlighted && "bg-accent/15 ring-1 ring-inset ring-accent/40",
                    )}
                  >
                    {columns.map((col, colIndex) => (
                      <td
                        key={col.key}
                        scope={stickyFirstColumn && colIndex === 0 ? "row" : undefined}
                        className={cn(
                          "px-3 py-2.5 text-text",
                          col.mono && "font-mono tabular-nums",
                          col.align === "right" && "text-right",
                          col.align === "center" && "text-center",
                          stickyFirstColumn && colIndex === 0 && stickyMinWidth,
                        )}
                      >
                        {col.render(row)}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
