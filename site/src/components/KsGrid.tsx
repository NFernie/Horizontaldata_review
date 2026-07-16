import { cn } from "@/lib/utils";
import { KS_PROPERTIES } from "@/config";
import {
  formatKsColumnHeader,
  formatKsColumnTooltip,
  type RankedAnalog,
} from "@/lib/ksRanking";
import type { KsPayload } from "@/types/stats";

interface KsGridProps {
  data: KsPayload;
  focusAlias: string;
  rankedAnalogs: RankedAnalog[];
  displayNames?: Record<string, string>;
  showPortfolio?: boolean;
  showRankInHeader?: boolean;
  className?: string;
}

function significanceColor(p: number) {
  if (p < 0.01) return "color-mix(in srgb, var(--risk-high) 35%, var(--surface))";
  if (p < 0.05) return "color-mix(in srgb, var(--risk-elev) 30%, var(--surface))";
  return "var(--surface-2)";
}

export function KsGrid({
  data,
  focusAlias,
  rankedAnalogs,
  displayNames,
  showPortfolio = true,
  showRankInHeader = true,
  className,
}: KsGridProps) {
  const focus = data[focusAlias];
  if (!focus) return null;

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="min-w-max border-collapse text-xs">
        <thead>
          <tr>
            <th className="p-2 text-left text-text-muted" scope="col">
              Property
            </th>
            {rankedAnalogs.map((entry) => (
              <th
                key={entry.alias}
                scope="col"
                className="max-w-[7rem] p-2 text-center text-text-muted"
                title={formatKsColumnTooltip(entry)}
              >
                <span className="block font-sans text-[11px] font-medium leading-tight text-text">
                  {showRankInHeader
                    ? formatKsColumnHeader(entry.alias, entry.rank, displayNames)
                    : (displayNames?.[entry.alias] ?? entry.alias).replace(
                        /MCKINLAY/g,
                        "MCK",
                      )}
                </span>
              </th>
            ))}
            {showPortfolio ? (
              <th scope="col" className="p-2 font-mono text-text-muted">
                Portfolio
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {KS_PROPERTIES.map((prop) => (
            <tr key={prop}>
              <th scope="row" className="p-2 font-mono text-text-muted">
                {prop}
              </th>
              {rankedAnalogs.map((entry) => {
                const cell = focus.vs_analogs[entry.alias]?.[prop];
                return (
                  <td
                    key={entry.alias}
                    className="border border-border p-2 text-center font-mono"
                    style={{
                      backgroundColor: cell ? significanceColor(cell.p_value) : undefined,
                    }}
                    title={cell ? `D=${cell.D}, p=${cell.p_value}` : "—"}
                  >
                    {cell ? (
                      <>
                        <div className="text-text">{cell.D.toFixed(3)}</div>
                        <div className="text-[10px] text-text-muted">
                          p={cell.p_value.toExponential(1)}
                        </div>
                      </>
                    ) : (
                      "—"
                    )}
                  </td>
                );
              })}
              {showPortfolio ? (
                <td
                  className="border border-border p-2 text-center font-mono"
                  style={{
                    backgroundColor: focus.vs_portfolio[prop]
                      ? significanceColor(focus.vs_portfolio[prop].p_value)
                      : undefined,
                  }}
                >
                  {focus.vs_portfolio[prop] ? (
                    <>
                      <div className="text-text">{focus.vs_portfolio[prop].D.toFixed(3)}</div>
                      <div className="text-[10px] text-text-muted">
                        p={focus.vs_portfolio[prop].p_value.toExponential(1)}
                      </div>
                    </>
                  ) : (
                    "—"
                  )}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
