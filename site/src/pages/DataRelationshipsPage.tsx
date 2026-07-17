import { useCallback, useEffect, useMemo, useState } from "react";
import { RelationshipFilterBar } from "@/components/data-relationships/RelationshipFilterBar";
import { ScatterPlotPanel } from "@/components/data-relationships/ScatterPlotPanel";
import { WellToggleList } from "@/components/data-relationships/WellToggleList";
import { DistributionHistogramPanel } from "@/components/executive/DistributionHistogramPanel";
import type { DataRelationshipProperty } from "@/config";
import { pageStateKey, usePersistedState, useScrollRestore } from "@/hooks/usePageState";
import { useWells } from "@/hooks/useWells";
import {
  filterIntervals,
  getPropertyValues,
  type RelationshipFilters,
} from "@/lib/dataRelationships";
import { fetchJson } from "@/lib/utils";
import type { IntervalsPayload } from "@/types/intervals";
import type { RiskClass } from "@/types/wells";

const ROUTE = "/data-relationships";

const DEFAULT_RISK_CLASSES: RiskClass[] = ["High", "Elevated", "Low"];

export function DataRelationshipsPage() {
  const { executiveWells, loading: wellsLoading, error: wellsError } = useWells({
    includeDualLateral: true,
  });
  const [intervalsByAlias, setIntervalsByAlias] = useState<Record<string, IntervalsPayload>>({});
  const [intervalsLoading, setIntervalsLoading] = useState(true);

  const allAliases = useMemo(() => executiveWells.map((well) => well.alias), [executiveWells]);

  const [enabledAliasesList, setEnabledAliasesList] = usePersistedState<string[]>(
    pageStateKey(ROUTE, "enabledWells"),
    allAliases,
  );
  const [histProperty, setHistProperty] = usePersistedState<DataRelationshipProperty>(
    pageStateKey(ROUTE, "histProperty"),
    "RQI",
  );
  const [scatterX, setScatterX] = usePersistedState<DataRelationshipProperty>(
    pageStateKey(ROUTE, "scatterX"),
    "avg_GR",
  );
  const [scatterY, setScatterY] = usePersistedState<DataRelationshipProperty>(
    pageStateKey(ROUTE, "scatterY"),
    "avg_RES_DEEP",
  );
  const [filters, setFilters] = usePersistedState<RelationshipFilters>(
    pageStateKey(ROUTE, "filters"),
    {
      riskClasses: DEFAULT_RISK_CLASSES,
      payOnly: false,
      selectedFlags: [],
    },
  );
  const [hoveredAlias, setHoveredAlias] = useState<string | null>(null);
  const [highlightedAlias, setHighlightedAlias] = useState<string | null>(null);

  useScrollRestore();

  useEffect(() => {
    if (!executiveWells.length) return;

    let cancelled = false;
    setIntervalsLoading(true);

    Promise.all(
      executiveWells.map((well) =>
        fetchJson<IntervalsPayload>(`data/intervals/${well.alias}.json`).then((payload) => [
          well.alias,
          payload,
        ] as const),
      ),
    )
      .then((entries) => {
        if (cancelled) return;
        setIntervalsByAlias(Object.fromEntries(entries));
      })
      .finally(() => {
        if (!cancelled) setIntervalsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [executiveWells]);

  useEffect(() => {
    if (!allAliases.length) return;
    setEnabledAliasesList((current) => {
      const valid = current.filter((alias) => allAliases.includes(alias));
      if (valid.length > 0) return valid;
      return allAliases;
    });
  }, [allAliases, setEnabledAliasesList]);

  const enabledAliases = useMemo(() => {
    const enabled = new Set(enabledAliasesList.filter((alias) => allAliases.includes(alias)));
    return allAliases.filter((alias) => enabled.has(alias));
  }, [allAliases, enabledAliasesList]);

  const enabledAliasSet = useMemo(() => new Set(enabledAliases), [enabledAliases]);

  const intervalsMap = useMemo(() => {
    const map: Record<string, { display: string; intervals: IntervalsPayload["intervals"] }> = {};
    for (const well of executiveWells) {
      const payload = intervalsByAlias[well.alias];
      if (!payload) continue;
      map[well.alias] = { display: payload.display, intervals: payload.intervals };
    }
    return map;
  }, [executiveWells, intervalsByAlias]);

  const displayByAlias = useMemo(() => {
    const map: Record<string, string> = {};
    for (const well of executiveWells) {
      map[well.alias] = intervalsByAlias[well.alias]?.display ?? well.display;
    }
    return map;
  }, [executiveWells, intervalsByAlias]);

  const countsByAlias = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const alias of allAliases) {
      const payload = intervalsMap[alias];
      counts[alias] = payload ? filterIntervals(payload.intervals, filters).length : 0;
    }
    return counts;
  }, [allAliases, intervalsMap, filters]);

  const histValuesByAlias = useMemo(() => {
    const values: Record<string, number[]> = {};
    for (const alias of enabledAliases) {
      const payload = intervalsMap[alias];
      values[alias] = payload
        ? getPropertyValues(filterIntervals(payload.intervals, filters), histProperty)
        : [];
    }
    return values;
  }, [enabledAliases, intervalsMap, filters, histProperty]);

  const handleToggle = useCallback(
    (alias: string, enabled: boolean) => {
      setEnabledAliasesList((current) => {
        if (enabled) {
          return current.includes(alias) ? current : [...current, alias];
        }
        return current.filter((value) => value !== alias);
      });
    },
    [setEnabledAliasesList],
  );

  const handleSelectAll = useCallback(() => {
    setEnabledAliasesList(allAliases);
  }, [allAliases, setEnabledAliasesList]);

  const handleClearAll = useCallback(() => {
    setEnabledAliasesList([]);
  }, [setEnabledAliasesList]);

  const handleSwapAxes = useCallback(() => {
    setScatterX(scatterY);
    setScatterY(scatterX);
  }, [scatterX, scatterY, setScatterX, setScatterY]);

  if (wellsLoading || intervalsLoading) {
    return <p className="text-sm text-text-muted">Loading data relationships…</p>;
  }

  if (wellsError) {
    return <p className="text-sm text-risk-high">Failed to load wells: {wellsError}</p>;
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text sm:text-2xl">Data Relationships</h1>
        <p className="mt-1 max-w-3xl text-sm text-text-muted">
          Explore interval-level property distributions and correlations across the McKinlay portfolio.
          Toggle wells, apply filters, and inspect pooled regression across visible intervals.
        </p>
      </header>

      <RelationshipFilterBar filters={filters} onChange={setFilters} />

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <WellToggleList
          wells={executiveWells}
          enabledAliases={enabledAliasSet}
          countsByAlias={countsByAlias}
          hoveredAlias={hoveredAlias}
          highlightedAlias={highlightedAlias}
          onToggle={handleToggle}
          onSelectAll={handleSelectAll}
          onClearAll={handleClearAll}
          onHover={setHighlightedAlias}
        />

        <ScatterPlotPanel
          wells={executiveWells}
          enabledAliases={enabledAliases}
          intervalsByAlias={intervalsMap}
          xProperty={scatterX}
          yProperty={scatterY}
          filters={filters}
          hoveredAlias={hoveredAlias}
          highlightedAlias={highlightedAlias}
          onXChange={setScatterX}
          onYChange={setScatterY}
          onSwapAxes={handleSwapAxes}
          onPointHover={setHoveredAlias}
        />
      </div>

      <DistributionHistogramPanel
        wells={executiveWells}
        enabledAliases={enabledAliases}
        valuesByAlias={histValuesByAlias}
        displayByAlias={displayByAlias}
        property={histProperty}
        onPropertyChange={setHistProperty}
      />
    </div>
  );
}
