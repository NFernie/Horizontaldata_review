import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface DendrogramProps {
  aliases: string[];
  linkage: number[][];
  clusterIds: Record<string, number>;
  cosineSimilarity?: number[][];
  displayNames?: Record<string, string>;
  className?: string;
}

const CLUSTER_COLORS = [
  "#38bdf8",
  "#22c55e",
  "#f59e0b",
  "#a78bfa",
  "#f472b6",
  "#fb7185",
];

const JENA_ALIASES = ["JENA31", "JENA31DW1"] as const;

function shortLabel(alias: string, displayNames?: Record<string, string>) {
  if (displayNames?.[alias]) return displayNames[alias];
  return alias.replace("MCKINLAY", "MCK").replace("FROSTILLICUS", "FROST");
}

export function Dendrogram({
  aliases,
  linkage,
  clusterIds,
  cosineSimilarity,
  displayNames,
  className,
}: DendrogramProps) {
  const [hoverAlias, setHoverAlias] = useState<string | null>(null);

  const svg = useMemo(() => {
    const n = aliases.length;
    const coordX: Record<number, number> = {};
    for (let i = 0; i < n; i++) coordX[i] = i;

    for (let k = 0; k < linkage.length; k++) {
      const left = Math.round(linkage[k][0]);
      const right = Math.round(linkage[k][1]);
      coordX[n + k] = (coordX[left] + coordX[right]) / 2;
    }

    const leafSpacing = 44;
    const marginLeft = 56;
    const marginTop = 24;
    const plotHeight = 200;
    const width = Math.max(marginLeft + (n - 1) * leafSpacing + 48, 640);
    const height = marginTop + plotHeight + 72;
    const maxDist = Math.max(...linkage.map((r) => r[2]), 0.001);
    const yOf = (dist: number) => marginTop + plotHeight - (dist / maxDist) * (plotHeight - 28);

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
      display: shortLabel(alias, displayNames),
    }));

    return { width, height, paths, labels, maxDist, marginTop, plotHeight };
  }, [aliases, linkage, clusterIds, displayNames]);

  const hoverInfo = useMemo(() => {
    if (!hoverAlias) return null;
    const idx = aliases.indexOf(hoverAlias);
    const cluster = clusterIds[hoverAlias] ?? 0;
    const cosines = JENA_ALIASES.map((jena) => {
      const jIdx = aliases.indexOf(jena);
      const cos =
        cosineSimilarity && idx >= 0 && jIdx >= 0
          ? cosineSimilarity[jIdx]?.[idx] ?? null
          : null;
      return { jena, cos };
    });
    return { cluster, cosines };
  }, [hoverAlias, aliases, clusterIds, cosineSimilarity]);

  return (
    <div className={cn("overflow-x-auto rounded-card border border-border bg-surface p-4", className)}>
      <svg
        width={svg.width}
        height={svg.height}
        role="img"
        aria-label="Hierarchical clustering dendrogram"
        className="min-w-full"
      >
        {svg.paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="var(--text-muted)" strokeWidth={1.4} />
        ))}
        {svg.labels.map((lbl) => {
          const isHover = hoverAlias === lbl.alias;
          const color = CLUSTER_COLORS[(lbl.cluster - 1) % CLUSTER_COLORS.length];
          return (
            <g
              key={lbl.alias}
              transform={`translate(${lbl.x}, ${svg.height - 52}) rotate(-48)`}
              onMouseEnter={() => setHoverAlias(lbl.alias)}
              onMouseLeave={() => setHoverAlias(null)}
              className="cursor-pointer"
            >
              <text
                fontSize={11}
                fill={color}
                fontFamily="JetBrains Mono, monospace"
                fontWeight={isHover ? 700 : 500}
              >
                {lbl.display}
              </text>
            </g>
          );
        })}
        <text x={10} y={18} fontSize={11} fill="var(--text-muted)">
          Ward linkage (0 – {svg.maxDist.toFixed(1)})
        </text>
      </svg>

      {hoverInfo && hoverAlias ? (
        <div
          className="mt-3 rounded-card border border-accent/30 bg-surface-2 px-3 py-2 text-sm"
          role="status"
        >
          <p className="font-semibold text-text">
            {displayNames?.[hoverAlias] ?? hoverAlias}{" "}
            <span className="font-mono text-accent">Cluster {hoverInfo.cluster}</span>
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Cosine vs Jena:{" "}
            {hoverInfo.cosines.map(({ jena, cos }) => (
              <span key={jena} className="mr-3 font-mono">
                {jena}={cos != null ? cos.toFixed(2) : "—"}
              </span>
            ))}
          </p>
        </div>
      ) : (
        <p className="mt-2 text-xs text-text-muted">Hover a well label for cluster id and Jena cosine similarity.</p>
      )}

      <div className="mt-3 flex flex-wrap gap-3 text-sm text-text-muted">
        {Object.entries(
          svg.labels.reduce<Record<number, number>>((acc, l) => {
            acc[l.cluster] = (acc[l.cluster] ?? 0) + 1;
            return acc;
          }, {}),
        ).map(([cluster, count]) => (
          <span key={cluster} className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ background: CLUSTER_COLORS[(Number(cluster) - 1) % CLUSTER_COLORS.length] }}
            />
            Cluster {cluster} ({count} wells)
          </span>
        ))}
      </div>
    </div>
  );
}
