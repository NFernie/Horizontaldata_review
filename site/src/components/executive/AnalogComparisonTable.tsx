import type { AnalogBenchmarkRow } from "@/lib/decisionBrief";
import { formatPercent } from "@/lib/utils";

interface AnalogComparisonTableProps {
  rows: AnalogBenchmarkRow[];
}

function fmtRank(rank: number | null, total: number): string {
  return rank != null ? `#${rank}/${total}` : "—";
}

export function AnalogComparisonTable({ rows }: AnalogComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[52rem] text-left text-xs">
        <caption className="sr-only">
          Pay and concern comparison — Jena focus wells vs nominated analogs
        </caption>
        <thead>
          <tr className="border-b border-border text-text-muted">
            <th className="py-2 pr-3 font-semibold">Well</th>
            <th className="py-2 pr-3 font-semibold">Role</th>
            <th className="py-2 pr-3 text-right font-semibold">Pay %</th>
            <th className="py-2 pr-3 text-right font-semibold">Pay rank</th>
            <th className="py-2 pr-3 text-right font-semibold">Concern</th>
            <th className="py-2 pr-3 text-right font-semibold">Concern rank</th>
            <th className="py-2 pr-3 text-right font-semibold">Open /100 m</th>
            <th className="py-2 pr-3 text-right font-semibold">OWC-prox</th>
            <th className="py-2 font-semibold">Cluster</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.alias}
              className={`border-b border-border/50 ${row.role === "focus" ? "bg-accent/5" : ""}`}
            >
              <td className="py-2 pr-3">
                <span className="font-medium text-text">{row.display}</span>
                <span className="mt-0.5 block font-mono text-[10px] text-text-muted">
                  {row.alias}
                </span>
              </td>
              <td className="py-2 pr-3 capitalize text-text-muted">{row.role}</td>
              <td className="py-2 pr-3 text-right font-mono tabular-nums">
                {row.payPct != null ? formatPercent(row.payPct) : "—"}
              </td>
              <td className="py-2 pr-3 text-right font-mono tabular-nums text-text-muted">
                {fmtRank(row.payRank, row.payRankTotal)}
              </td>
              <td className="py-2 pr-3 text-right font-mono tabular-nums">
                {row.concernIntervals}
              </td>
              <td className="py-2 pr-3 text-right font-mono tabular-nums text-text-muted">
                {fmtRank(row.concernRank, row.concernRankTotal)}
              </td>
              <td className="py-2 pr-3 text-right font-mono tabular-nums">
                {row.concernPer100m.toFixed(2)}
              </td>
              <td className="py-2 pr-3 text-right font-mono tabular-nums">
                {row.owcProximate}
              </td>
              <td className="py-2 font-mono tabular-nums text-text-muted">
                {row.clusterId ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
