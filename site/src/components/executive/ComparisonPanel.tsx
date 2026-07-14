import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { WellSelect } from "@/components/WellSelect";
import { StatTile } from "@/components/StatTile";
import { CompareWellSelect } from "@/components/executive/CompareWellSelect";
import { CollapsiblePanel } from "@/components/executive/CollapsiblePanel";
import { StructuralConcernTrack } from "@/components/executive/StructuralConcernTrack";
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

interface ComparisonPanelProps {
  panelId: "A" | "B";
  defaultFocus: string;
  wells: WellRecord[];
  clusters: ClustersPayload;
  onSelectionChange?: (focus: string, compare: string) => void;
  showElevated?: boolean;
  showHigh?: boolean;
}

function wellWindow(wells: WellRecord[], alias: string) {
  const well = wells.find((w) => w.alias === alias);
  return {
    mdStart: well?.dc30 ?? undefined,
    mdEnd: well?.td ?? undefined,
  };
}

export function ComparisonPanel({
  panelId,
  defaultFocus,
  wells,
  clusters,
  onSelectionChange,
  showElevated = true,
  showHigh = true,
}: ComparisonPanelProps) {
  const focusKey = pageStateKey("/", `execPanel${panelId}:focus`);
  const compareKey = pageStateKey("/", `execPanel${panelId}:analog`);

  const [focusAlias, setFocusAlias] = usePersistedState(focusKey, defaultFocus);
  const [compareAlias, setCompareAlias] = usePersistedState(compareKey, "");
  const [focusData, setFocusData] = useState<IntervalsPayload | null>(null);
  const [compareData, setCompareData] = useState<IntervalsPayload | null>(null);
  const [focusTrajectory, setFocusTrajectory] = useState<TrajectoryPayload | null>(null);
  const [compareTrajectory, setCompareTrajectory] = useState<TrajectoryPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const prevFocusRef = useRef(focusAlias);

  const rankings = useMemo(
    () => rankClusterAnalogs(focusAlias, clusters),
    [focusAlias, clusters],
  );

  const resolveCompare = useCallback(
    (focus: string, stored: string) => {
      const ranked = rankClusterAnalogs(focus, clusters);
      const valid = ranked.some((r) => r.alias === stored);
      if (valid && stored) return stored;
      return topClusterAnalog(focus, clusters) ?? ranked[0]?.alias ?? "";
    },
    [clusters],
  );

  useEffect(() => {
    if (!compareAlias || prevFocusRef.current !== focusAlias) {
      const next = resolveCompare(focusAlias, compareAlias);
      if (next && next !== compareAlias) {
        setCompareAlias(next);
      }
      prevFocusRef.current = focusAlias;
    }
  }, [focusAlias, compareAlias, resolveCompare, setCompareAlias]);

  useEffect(() => {
    if (!focusAlias || !compareAlias) return;
    onSelectionChange?.(focusAlias, compareAlias);
  }, [focusAlias, compareAlias, onSelectionChange]);

  useEffect(() => {
    if (!focusAlias || !compareAlias) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      fetchJson<IntervalsPayload>(`data/intervals/${focusAlias}.json`),
      fetchJson<IntervalsPayload>(`data/intervals/${compareAlias}.json`),
      fetchJson<TrajectoryPayload>(`data/trajectory/${focusAlias}.json`).catch(() => null),
      fetchJson<TrajectoryPayload>(`data/trajectory/${compareAlias}.json`).catch(() => null),
    ])
      .then(([focus, compare, focusTraj, compareTraj]) => {
        if (cancelled) return;
        setFocusData(focus);
        setCompareData(compare);
        setFocusTrajectory(focusTraj);
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
  }, [focusAlias, compareAlias]);

  const handleFocusChange = (alias: string) => {
    setFocusAlias(alias);
    const nextCompare = topClusterAnalog(alias, clusters);
    if (nextCompare) setCompareAlias(nextCompare);
  };

  const cosineScore = getCosineScore(focusAlias, compareAlias, clusters);
  const focusStats = computeConcernStats(focusData?.intervals ?? []);
  const compareStats = computeConcernStats(compareData?.intervals ?? []);
  const focusDisplay = focusData?.display ?? focusAlias;
  const compareDisplay = compareData?.display ?? compareAlias;
  const focusHasIso = (focusData?.isolation_depths?.length ?? 0) > 0;
  const compareHasIso = (compareData?.isolation_depths?.length ?? 0) > 0;
  const focusWindow = wellWindow(wells, focusAlias);
  const compareWindow = wellWindow(wells, compareAlias);

  const bullets = [
    formatConcernBullet(focusDisplay, focusStats, focusHasIso),
    formatCompareBullet(compareDisplay, cosineScore, compareStats, compareHasIso, "cos"),
  ];

  const compareRankings = rankings.map((r) => ({ alias: r.alias, score: r.cosine }));

  return (
    <CollapsiblePanel
      panelId={panelId}
      title={`Panel ${panelId}`}
      subtitle={
        cosineScore != null ? (
          <p className="font-mono text-accent">cos={cosineScore.toFixed(2)}</p>
        ) : null
      }
      headerExtra={
        <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-xl">
          <WellSelect
            wells={wells}
            value={focusAlias}
            onChange={handleFocusChange}
            label="Focus well"
            id={`exec-focus-${panelId}`}
            className="w-full"
          />
          <CompareWellSelect
            wells={wells}
            focusAlias={focusAlias}
            value={compareAlias}
            onChange={setCompareAlias}
            rankings={compareRankings}
            scorePrefix="cos"
            label="Compare well"
            id={`exec-compare-${panelId}`}
            className="w-full"
          />
        </div>
      }
    >
      {error ? <p className="mb-3 text-sm text-risk-high">{error}</p> : null}
      {loading ? <p className="mb-3 text-sm text-text-muted">Loading structural tracks…</p> : null}

      <div className="flex flex-col gap-4">
        <StructuralConcernTrack
          resizeKey={pageStateKey("/", `execPanel${panelId}:focusHeight`)}
          label={`Focus — ${focusDisplay}`}
          intervals={focusData?.intervals ?? []}
          isolationDepths={focusData?.isolation_depths}
          trajectory={focusTrajectory}
          owcMtvds={focusData?.owc_mtvds}
          mdStart={focusWindow.mdStart}
          mdEnd={focusWindow.mdEnd}
          showElevated={showElevated}
          showHigh={showHigh}
        />
        <StructuralConcernTrack
          resizeKey={pageStateKey("/", `execPanel${panelId}:compareHeight`)}
          label={`Compare — ${compareDisplay}`}
          intervals={compareData?.intervals ?? []}
          isolationDepths={compareData?.isolation_depths}
          trajectory={compareTrajectory}
          owcMtvds={compareData?.owc_mtvds}
          mdStart={compareWindow.mdStart}
          mdEnd={compareWindow.mdEnd}
          showElevated={showElevated}
          showHigh={showHigh}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile label="Elevated" value={focusStats.elevated} variant="risk" />
        <StatTile label="High" value={focusStats.high} variant="risk" />
        <StatTile label="Isolated concerns" value={focusStats.isolatedConcerns} variant="accent" />
        <StatTile
          label="Open concerns"
          value={focusStats.nonIsolatedConcerns}
          hint="Focus well"
        />
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text-muted">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </CollapsiblePanel>
  );
}
