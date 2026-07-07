import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface DendrogramProps {
  aliases: string[];
  linkage: number[][];
  clusterIds: Record<string, number>;
  className?: string;
}

const CLUSTER_COLORS = [
  "var(--accent)",
  "var(--risk-low)",
  "var(--risk-elev)",
  "#a78bfa",
  "#f472b6",
];

export function Dendrogram({ aliases, linkage, clusterIds, className }: DendrogramProps) {
  const svg = useMemo(() => {
    const n = aliases.length;
    const coordX: Record<number, number> = {};
    for (let i = 0; i < n; i++) coordX[i] = i;

    for (let k = 0; k < linkage.length; k++) {
      const left = Math.round(linkage[k][0]);
      const right = Math.round(linkage[k][1]);
      coordX[n + k] = (coordX[left] + coordX[right]) / 2;
    }

    const leafSpacing = 30;
    const marginLeft = 52;
    const marginTop = 20;
    const plotHeight = 180;
    const width = marginLeft + (n - 1) * leafSpacing + 40;
    const height = marginTop + plotHeight + 56;
    const maxDist = Math.max(...linkage.map((r) => r[2]), 0.001);
    const yOf = (dist: number) => marginTop + plotHeight - (dist / maxDist) * (plotHeight - 24);

    const paths: string[] = [];

    function xOf(id: number) {
      return marginLeft + coordX[id] * leafSpacing;
    }

    function draw(id: number, yLeaf: number) {
      if (id < n) return;
      const k = id - n;
      const left = Math.round(linkage[k][0]);
      const right = Math.round(linkage[k][1]);
      const dist = linkage[k][2];
      const y = yOf(dist);
      const xL = xOf(left);
      const xR = xOf(right);
      draw(left, yLeaf);
      draw(right, yLeaf);
      paths.push(`M ${xL} ${yLeaf} L ${xL} ${y} L ${xR} ${y} L ${xR} ${yLeaf}`);
    }

    const root = n + linkage.length - 1;
    draw(root, marginTop + plotHeight);

    const labels = aliases.map((alias, i) => ({
      alias,
      x: xOf(i),
      cluster: clusterIds[alias] ?? 0,
    }));

    return { width, height, paths, labels, maxDist };
  }, [aliases, linkage, clusterIds]);

  return (
    <div className={cn("overflow-x-auto rounded-card border border-border bg-surface p-3", className)}>
      <svg width={svg.width} height={svg.height} role="img" aria-label="Hierarchical clustering dendrogram">
        {svg.paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="var(--text-muted)" strokeWidth={1.2} />
        ))}
        {svg.labels.map((lbl) => (
          <g key={lbl.alias} transform={`translate(${lbl.x}, ${svg.height - 40}) rotate(-55)`}>
            <text
              fontSize={9}
              fill={CLUSTER_COLORS[(lbl.cluster - 1) % CLUSTER_COLORS.length]}
              fontFamily="JetBrains Mono, monospace"
            >
              {lbl.alias.replace("MCKINLAY", "MCK").replace("FROSTILLICUS", "FROST")}
            </text>
          </g>
        ))}
        <text x={8} y={14} fontSize={10} fill="var(--text-muted)">
          Ward linkage (0 – {svg.maxDist.toFixed(1)})
        </text>
      </svg>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-text-muted">
        {Object.entries(
          svg.labels.reduce<Record<number, number>>((acc, l) => {
            acc[l.cluster] = (acc[l.cluster] ?? 0) + 1;
            return acc;
          }, {}),
        ).map(([cluster, count]) => (
          <span key={cluster} className="inline-flex items-center gap-1">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sm"
              style={{ background: CLUSTER_COLORS[(Number(cluster) - 1) % CLUSTER_COLORS.length] }}
            />
            Cluster {cluster} ({count} wells)
          </span>
        ))}
      </div>
    </div>
  );
}
