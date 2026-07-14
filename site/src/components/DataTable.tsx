import type { ReactNode } from "react";
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
}

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
}: DataTableProps<T>) {
  const scrollStyle = scrollMaxHeight ? { maxHeight: scrollMaxHeight } : undefined;

  return (
    <div className={cn("rounded-card border border-border", className)}>
      <div
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
              rows.map((row) => (
                <tr key={rowKey(row)} className="transition-colors hover:bg-surface-2/60">
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
