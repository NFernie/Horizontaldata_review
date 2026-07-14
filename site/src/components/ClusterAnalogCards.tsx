import { useMemo, useState } from "react";
import { rankClusterAnalogs } from "@/lib/clusterAnalogs";
import type { ClustersPayload } from "@/types/stats";
import { cn } from "@/lib/utils";

interface ClusterAnalogCardsProps {
  clusters: ClustersPayload;
  focusAliases: string[];
  displayNames?: Record<string, string>;
  className?: string;
}

export function ClusterAnalogCards({
  clusters,
  focusAliases,
  displayNames,
  className,
}: ClusterAnalogCardsProps) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-3", className)}>
      {focusAliases.map((focus) => {
        const top5 = rankClusterAnalogs(focus, clusters).slice(0, 5);
        const title = displayNames?.[focus] ?? focus;
        return (
          <div
            key={focus}
            className="rounded-card border border-border bg-surface-2 p-4"
          >
            <h3 className="text-sm font-semibold text-text">{title}</h3>
            <p className="mt-0.5 text-xs text-text-muted">Top-5 cluster cosine analogs</p>
            <ol className="mt-3 space-y-2">
              {top5.map((item, idx) => (
                <li
                  key={item.alias}
                  className="flex items-center justify-between rounded-card border border-border bg-surface px-3 py-2 text-sm"
                >
                  <span>
                    <span className="mr-2 font-mono text-text-muted">{idx + 1}.</span>
                    <span className="font-medium text-text">
                      {displayNames?.[item.alias] ?? item.alias}
                    </span>
                  </span>
                  <span className="font-mono tabular-nums text-accent">
                    cos={item.cosine.toFixed(2)}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

type SortKey = "alias" | "cluster" | "display";

interface ClusterAssignmentTableProps {
  aliases: string[];
  clusterIds: Record<string, number>;
  displayNames?: Record<string, string>;
  className?: string;
}

export function ClusterAssignmentTable({
  aliases,
  clusterIds,
  displayNames,
  className,
}: ClusterAssignmentTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("cluster");
  const [sortAsc, setSortAsc] = useState(true);

  const rows = useMemo(() => {
    const data = aliases.map((alias) => ({
      alias,
      display: displayNames?.[alias] ?? alias,
      cluster: clusterIds[alias] ?? 0,
    }));
    data.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "alias") cmp = a.alias.localeCompare(b.alias);
      else if (sortKey === "display") cmp = a.display.localeCompare(b.display);
      else cmp = a.cluster - b.cluster || a.alias.localeCompare(b.alias);
      return sortAsc ? cmp : -cmp;
    });
    return data;
  }, [aliases, clusterIds, displayNames, sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc((v) => !v);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const headerBtn = (key: SortKey, label: string) => (
    <button
      type="button"
      onClick={() => toggleSort(key)}
      className="cursor-pointer text-left text-xs font-semibold uppercase tracking-wide text-text-muted hover:text-text"
    >
      {label}
      {sortKey === key ? (sortAsc ? " ↑" : " ↓") : ""}
    </button>
  );

  return (
    <div className={cn("overflow-x-auto rounded-card border border-border", className)}>
      <table className="min-w-full divide-y divide-border text-sm">
        <thead className="bg-surface-2">
          <tr>
            <th className="px-3 py-2.5 text-left">{headerBtn("display", "Well")}</th>
            <th className="px-3 py-2.5 text-left">{headerBtn("alias", "Alias")}</th>
            <th className="px-3 py-2.5 text-right">{headerBtn("cluster", "Cluster")}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-surface">
          {rows.map((row) => (
            <tr key={row.alias} className="hover:bg-surface-2/60">
              <td className="px-3 py-2.5 font-medium text-text">{row.display}</td>
              <td className="px-3 py-2.5 font-mono tabular-nums text-text-muted">{row.alias}</td>
              <td className="px-3 py-2.5 text-right font-mono tabular-nums text-accent">
                C{row.cluster}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
