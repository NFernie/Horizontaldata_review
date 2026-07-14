import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { WellSelect } from "@/components/WellSelect";
import { StatTile } from "@/components/StatTile";
import { AnalogWellSelect } from "@/components/executive/AnalogWellSelect";
import { ConcernTrack } from "@/components/executive/ConcernTrack";
import {
  computeConcernStats,
  formatAnalogBullet,
  formatConcernBullet,
} from "@/lib/concernZones";
import {
  getJaccardScore,
  rankJaccardAnalogs,
  topJaccardAnalog,
} from "@/lib/jaccardRanking";
import { pageStateKey, usePersistedState } from "@/hooks/usePageState";
import { fetchJson } from "@/lib/utils";
import type { IntervalsPayload } from "@/types/intervals";
import type { JaccardPayload } from "@/types/stats";
import type { WellRecord } from "@/types/wells";

interface ComparisonPanelProps {
  panelId: "A" | "B";
  defaultFocus: string;
  wells: WellRecord[];
  jaccard: JaccardPayload;
  onSelectionChange?: (focus: string, analog: string) => void;
}

export function ComparisonPanel({
  panelId,
  defaultFocus,
  wells,
  jaccard,
  onSelectionChange,
}: ComparisonPanelProps) {
  const focusKey = pageStateKey("/", `execPanel${panelId}Focus`);
  const analogKey = pageStateKey("/", `execPanel${panelId}Analog`);

  const [focusAlias, setFocusAlias] = usePersistedState(focusKey, defaultFocus);
  const [analogAlias, setAnalogAlias] = usePersistedState(analogKey, "");
  const [focusData, setFocusData] = useState<IntervalsPayload | null>(null);
  const [analogData, setAnalogData] = useState<IntervalsPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const prevFocusRef = useRef(focusAlias);

  const rankings = useMemo(
    () => rankJaccardAnalogs(focusAlias, jaccard),
    [focusAlias, jaccard],
  );

  const resolveAnalog = useCallback(
    (focus: string, stored: string) => {
      const ranked = rankJaccardAnalogs(focus, jaccard);
      const valid = ranked.some((r) => r.alias === stored);
      if (valid && stored) return stored;
      return topJaccardAnalog(focus, jaccard) ?? ranked[0]?.alias ?? "";
    },
    [jaccard],
  );

  useEffect(() => {
    if (!analogAlias || prevFocusRef.current !== focusAlias) {
      const next = resolveAnalog(focusAlias, analogAlias);
      if (next && next !== analogAlias) {
        setAnalogAlias(next);
      }
      prevFocusRef.current = focusAlias;
    }
  }, [focusAlias, analogAlias, resolveAnalog, setAnalogAlias]);

  useEffect(() => {
    if (!focusAlias || !analogAlias) return;
    onSelectionChange?.(focusAlias, analogAlias);
  }, [focusAlias, analogAlias, onSelectionChange]);

  useEffect(() => {
    if (!focusAlias || !analogAlias) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      fetchJson<IntervalsPayload>(`data/intervals/${focusAlias}.json`),
      fetchJson<IntervalsPayload>(`data/intervals/${analogAlias}.json`),
    ])
      .then(([focus, analog]) => {
        if (cancelled) return;
        setFocusData(focus);
        setAnalogData(analog);
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
  }, [focusAlias, analogAlias]);

  const handleFocusChange = (alias: string) => {
    setFocusAlias(alias);
    const nextAnalog = topJaccardAnalog(alias, jaccard);
    if (nextAnalog) setAnalogAlias(nextAnalog);
  };

  const jaccardScore = getJaccardScore(focusAlias, analogAlias, jaccard);
  const focusStats = computeConcernStats(focusData?.intervals ?? []);
  const analogStats = computeConcernStats(analogData?.intervals ?? []);
  const focusDisplay = focusData?.display ?? focusAlias;
  const analogDisplay = analogData?.display ?? analogAlias;
  const focusHasIso = (focusData?.isolation_depths?.length ?? 0) > 0;
  const analogHasIso = (analogData?.isolation_depths?.length ?? 0) > 0;

  const bullets = [
    formatConcernBullet(focusDisplay, focusStats, focusHasIso),
    formatAnalogBullet(analogDisplay, jaccardScore, analogStats, analogHasIso),
  ];

  return (
    <section
      className="rounded-card border border-border bg-surface p-4 shadow-card sm:p-5"
      aria-labelledby={`panel-${panelId}-title`}
    >
      <header className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 id={`panel-${panelId}-title`} className="text-base font-semibold text-text">
            Panel {panelId}
          </h3>
          {jaccardScore != null ? (
            <p className="mt-0.5 font-mono text-sm text-accent">
              Jaccard: {jaccardScore.toFixed(2)}
            </p>
          ) : null}
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-xl">
          <WellSelect
            wells={wells}
            value={focusAlias}
            onChange={handleFocusChange}
            label="Focus well"
            id={`exec-focus-${panelId}`}
            className="w-full"
          />
          <AnalogWellSelect
            wells={wells}
            focusAlias={focusAlias}
            value={analogAlias}
            onChange={setAnalogAlias}
            rankings={rankings}
            label="Analog well"
            id={`exec-analog-${panelId}`}
            className="w-full"
          />
        </div>
      </header>

      {error ? <p className="mb-3 text-sm text-risk-high">{error}</p> : null}
      {loading ? <p className="mb-3 text-sm text-text-muted">Loading concern tracks…</p> : null}

      <div className="grid gap-3 md:grid-cols-2">
        <ConcernTrack
          label={`Focus — ${focusDisplay}`}
          intervals={focusData?.intervals ?? []}
          isolationDepths={focusData?.isolation_depths}
        />
        <ConcernTrack
          label={`Analog — ${analogDisplay}`}
          intervals={analogData?.intervals ?? []}
          isolationDepths={analogData?.isolation_depths}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile label="Elevated" value={focusStats.elevated} variant="risk" />
        <StatTile label="High" value={focusStats.high} variant="risk" />
        <StatTile label="Isolated concerns" value={focusStats.isolatedConcerns} variant="accent" />
        <StatTile
          label="Non-isolated concerns"
          value={focusStats.nonIsolatedConcerns}
          hint="Focus well"
        />
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text-muted">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}
