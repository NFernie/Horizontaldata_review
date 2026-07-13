import { SPEARMAN_VARS } from "@/config";
import type { SpearmanVar, WellCorrelations } from "@/types/correlations";
import { cn } from "@/lib/utils";

const LABELS: Record<SpearmanVar, string> = {
  pct_ss: "%SS",
  grain_ordinal: "Grain",
  avg_GR: "GR",
  avg_RES_DEEP: "RES",
  fluor: "Fluor",
  gas: "Gas",
};

function rhoColor(rho: number | null | undefined) {
  if (rho == null) return "var(--surface-2)";
  const t = (rho + 1) / 2;
  if (rho >= 0) {
    return `color-mix(in srgb, var(--risk-low) ${Math.round(t * 80 + 10)}%, var(--surface))`;
  }
  return `color-mix(in srgb, var(--risk-high) ${Math.round((1 - t) * 80 + 10)}%, var(--surface))`;
}

interface CorrelationMatrixProps {
  data: WellCorrelations;
  className?: string;
}

export function CorrelationMatrix({ data, className }: CorrelationMatrixProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="min-w-max border-collapse text-xs" role="grid" aria-label="Spearman correlation matrix">
        <thead>
          <tr>
            <th className="p-2 text-left text-text-muted" scope="col" />
            {SPEARMAN_VARS.map((v) => (
              <th key={v} scope="col" className="p-2 font-mono font-semibold text-text-muted">
                {LABELS[v]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SPEARMAN_VARS.map((row) => (
            <tr key={row}>
              <th scope="row" className="p-2 text-left font-mono font-semibold text-text-muted">
                {LABELS[row]}
              </th>
              {SPEARMAN_VARS.map((col) => {
                const rho = data.rho[row]?.[col];
                return (
                  <td
                    key={col}
                    className="border border-border p-0 text-center font-mono tabular-nums"
                    style={{ backgroundColor: rhoColor(rho) }}
                    title={
                      rho != null
                        ? `ρ = ${rho.toFixed(3)}, p = ${data.p_value[row]?.[col]?.toExponential(2) ?? "—"}`
                        : "Insufficient data"
                    }
                  >
                    <span className="inline-block min-w-[3rem] px-2 py-2 text-text">
                      {rho != null ? rho.toFixed(2) : "—"}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {data.decoupling_score != null ? (
        <p className="mt-3 text-sm text-text-muted">
          Decoupling score (RQI ↔ RES_DEEP):{" "}
          <span className="font-mono text-text">{data.decoupling_score.toFixed(3)}</span>
          <span className="ml-2 text-xs">n = {data.n} intervals</span>
        </p>
      ) : null}
    </div>
  );
}
