import { KS_PROPERTIES } from "@/config";
import type { KsPayload } from "@/types/stats";
import { cn } from "@/lib/utils";

interface KsGridProps {
  data: KsPayload;
  focusAlias: string;
  analogAliases: string[];
  className?: string;
}

function significanceColor(p: number) {
  if (p < 0.01) return "color-mix(in srgb, var(--risk-high) 35%, var(--surface))";
  if (p < 0.05) return "color-mix(in srgb, var(--risk-elev) 30%, var(--surface))";
  return "var(--surface-2)";
}

export function KsGrid({ data, focusAlias, analogAliases, className }: KsGridProps) {
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
            {analogAliases.map((a) => (
              <th key={a} scope="col" className="p-2 font-mono text-text-muted">
                {a.replace("MCKINLAY", "MCK")}
              </th>
            ))}
            <th scope="col" className="p-2 font-mono text-text-muted">
              Portfolio
            </th>
          </tr>
        </thead>
        <tbody>
          {KS_PROPERTIES.map((prop) => (
            <tr key={prop}>
              <th scope="row" className="p-2 font-mono text-text-muted">
                {prop}
              </th>
              {analogAliases.map((analog) => {
                const cell = focus.vs_analogs[analog]?.[prop];
                return (
                  <td
                    key={analog}
                    className="border border-border p-2 text-center font-mono"
                    style={{ backgroundColor: cell ? significanceColor(cell.p_value) : undefined }}
                    title={cell ? `D=${cell.D}, p=${cell.p_value}` : "—"}
                  >
                    {cell ? (
                      <>
                        <div className="text-text">{cell.D.toFixed(3)}</div>
                        <div className="text-[10px] text-text-muted">p={cell.p_value.toExponential(1)}</div>
                      </>
                    ) : (
                      "—"
                    )}
                  </td>
                );
              })}
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
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-text-muted">
        Kolmogorov–Smirnov two-sample test: {focusAlias} vs analog / portfolio. Warm cells = p &lt; 0.05
        (distributions differ).
      </p>
    </div>
  );
}
