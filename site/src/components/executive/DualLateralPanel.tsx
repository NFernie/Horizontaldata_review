import { useEffect, useMemo, useRef, useState } from "react";
import { StatTile } from "@/components/StatTile";
import { CompareWellSelect } from "@/components/executive/CompareWellSelect";
import { DualLateralTrack } from "@/components/executive/DualLateralTrack";
import { StructuralConcernTrack } from "@/components/executive/StructuralConcernTrack";
import { JENA31_DUAL_ALIAS } from "@/config";
import {
  computeConcernStats,
  formatCompareBullet,
  formatConcernBullet,
} from "@/lib/concernZones";
import {
  getCosineScore,
  rankClusterAnalogs,
  topClusterAnalog,
} from "@/lib/clusterAnalogs";
import { pageStateKey, usePersistedState } from "@/hooks/usePageState";
import { fetchJson } from "@/lib/utils";
import type { IntervalsPayload } from "@/types/intervals";
import type { TrajectoryPayload } from "@/types/trajectory";
import type { ClustersPayload } from "@/types/stats";
import type { WellRecord } from "@/types/wells";

interface DualLateralPanelProps {
  wells: WellRecord[];
  clusters: ClustersPayload;
  onSelectionChange?: (compare: string) => void;
}

function wellWindow(wells: WellRecord[], alias: string) {
  const well = wells.find((w) => w.alias === alias);
  return {
    mdStart: well?.dc30 ?? undefined,
    mdEnd: well?.td ?? undefined,
  };
}

export function DualLateralPanel({ wells, clusters, onSelectionChange }: DualLateralPanelProps) {
  const compareKey = pageStateKey("/", "execPanelC:compare");
  const [compareAlias, setCompareAlias] = usePersistedState(compareKey, "");
  const [focusData, setFocusData] = useState<IntervalsPayload | null>(null);
  const [compareData, setCompareData] = useState<IntervalsPayload | null>(null);
  const [compareTrajectory, setCompareTrajectory] = useState<TrajectoryPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const initializedRef = useRef(false);

  const rankings = useMemo(
    () => rankClusterAnalogs(JENA31_DUAL_ALIAS, clusters),
    [clusters],
  );

  useEffect(() => {
    if (initializedRef.current) return;
    if (!compareAlias) {
      const top = topClusterAnalog(JENA31_DUAL_ALIAS, clusters);
      if (top) setCompareAlias(top);
    } else {
      const valid = rankings.some((r) => r.alias === compareAlias);
      if (!valid) {
        const top = topClusterAnalog(JENA31_DUAL_ALIAS, clusters);
        if (top) setCompareAlias(top);
      }
    }
    initializedRef.current = true;
  }, [compareAlias, clusters, rankings, setCompareAlias]);

  useEffect(() => {
    if (!compareAlias) return;
    onSelectionChange?.(compareAlias);
  }, [compareAlias, onSelectionChange]);

  useEffect(() => {
    if (!compareAlias) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      fetchJson<IntervalsPayload>(`data/intervals/${JENA31_DUAL_ALIAS}.json`),
      fetchJson<IntervalsPayload>(`data/intervals/${compareAlias}.json`),
      fetchJson<TrajectoryPayload>(`data/trajectory/${compareAlias}.json`).catch(() => null),
    ])
      .then(([focus, compare, compareTraj]) => {
        if (cancelled) return;
        setFocusData(focus);
        setCompareData(compare);
        setCompareTrajectory(compareTraj);
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [compareAlias]);

  const cosineScore = getCosineScore(JENA31_DUAL_ALIAS, compareAlias, clusters);
  const focusStats = computeConcernStats(focusData?.intervals ?? []);
  const compareStats = computeConcernStats(compareData?.intervals ?? []);
  const compareDisplay = compareData?.display ?? compareAlias;
  const focusHasIso = (focusData?.isolation_depths?.length ?? 0) > 0;
  const compareHasIso = (compareData?.isolation_depths?.length ?? 0) > 0;
  const compareWindow = wellWindow(wells, compareAlias);

  const bullets = [
    formatConcernBullet("JENA 31 Dual Lateral", focusStats, focusHasIso),
    formatCompareBullet(compareDisplay, cosineScore, compareStats, compareHasIso, "cos"),
  ];

  const compareRankings = rankings.map((r) => ({ alias: r.alias, score: r.cosine }));

  return (
    <section
      className="min-h-[360px] rounded-card border border-border bg-surface p-5 shadow-card"
      aria-labelledby="panel-c-title"
    >
      <header className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 id="panel-c-title" className="text-base font-semibold text-text">
            Panel C — Dual Lateral
          </h3>
          <p className="mt-0.5 text-sm text-text-muted">
            JENA 31 Dual Lateral · single wellhead · commingled production
          </p>
          {cosineScore != null ? (
            <p className="mt-0.5 font-mono text-sm text-accent">cos={cosineScore.toFixed(2)}</p>
          ) : null}
        </div>

        <CompareWellSelect
          wells={wells}
          focusAlias={JENA31_DUAL_ALIAS}
          value={compareAlias}
          onChange={setCompareAlias}
          rankings={compareRankings}
          scorePrefix="cos"
          label="Compare well"
          id="exec-compare-C"
          className="w-full lg:max-w-sm"
        />
      </header>

      {error ? <p className="mb-3 text-sm text-risk-high">{error}</p> : null}
      {loading ? <p className="mb-3 text-sm text-text-muted">Loading dual lateral tracks…</p> : null}

      <div className="flex flex-col gap-4">
        <DualLateralTrack
          resizeKeyPrefix={pageStateKey("/", "execPanelC:focus")}
          label="Dual lateral — colour by source"
          intervals={focusData?.intervals ?? []}
          wells={wells}
          isolationDepths={focusData?.isolation_depths}
          owcMtvds={focusData?.owc_mtvds}
        />
        <StructuralConcernTrack
          resizeKey={pageStateKey("/", "execPanelC:compareHeight")}
          label={`Compare — ${compareDisplay}`}
          intervals={compareData?.intervals ?? []}
          isolationDepths={compareData?.isolation_depths}
          trajectory={compareTrajectory}
          owcMtvds={compareData?.owc_mtvds}
          mdStart={compareWindow.mdStart}
          mdEnd={compareWindow.mdEnd}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile label="Elevated" value={focusStats.elevated} variant="risk" />
        <StatTile label="High" value={focusStats.high} variant="risk" />
        <StatTile label="Isolated concerns" value={focusStats.isolatedConcerns} variant="accent" />
        <StatTile label="Open concerns" value={focusStats.nonIsolatedConcerns} hint="Dual lateral" />
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text-muted">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}
