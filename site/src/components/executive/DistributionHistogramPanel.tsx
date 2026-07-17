import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CollapsiblePanel } from "@/components/executive/CollapsiblePanel";
import {
  DATA_RELATIONSHIP_PROPERTIES,
  type DataRelationshipProperty,
} from "@/config";
import { getWellColor, propertyLabel } from "@/lib/dataRelationships";
import {
  buildMultiWellHistogramBins,
  computeMean,
  computeMedian,
  computeModeFromMultiBins,
  computeStdDev,
  formatHistogramStat,
  multiBinToChartRows,
} from "@/lib/histogram";
import type { WellRecord } from "@/types/wells";

interface DistributionHistogramPanelProps {
  wells: WellRecord[];
  enabledAliases: string[];
  valuesByAlias: Record<string, number[]>;
  displayByAlias: Record<string, string>;
  property: DataRelationshipProperty;
  onPropertyChange: (property: DataRelationshipProperty) => void;
}

export function DistributionHistogramPanel({
  wells,
  enabledAliases,
  valuesByAlias,
  displayByAlias,
  property,
  onPropertyChange,
}: DistributionHistogramPanelProps) {
  const wellIndexByAlias = useMemo(() => {
    const map = new Map<string, number>();
    wells.forEach((well, index) => map.set(well.alias, index));
    return map;
  }, [wells]);

  const bins = useMemo(
    () => {
      const subset: Record<string, number[]> = {};
      for (const alias of enabledAliases) {
        subset[alias] = valuesByAlias[alias] ?? [];
      }
      return buildMultiWellHistogramBins(subset, property);
    },
    [enabledAliases, valuesByAlias, property],
  );

  const chartData = useMemo(
    () => multiBinToChartRows(bins, enabledAliases),
    [bins, enabledAliases],
  );

  const statsByAlias = useMemo(() => {
    const stats: Record<
      string,
      { mean: number | null; median: number | null; mode: number | null; stdDev: number | null; n: number }
    > = {};
    for (const alias of enabledAliases) {
      const values = valuesByAlias[alias] ?? [];
      stats[alias] = {
        mean: computeMean(values),
        median: computeMedian(values),
        mode: computeModeFromMultiBins(bins, alias),
        stdDev: computeStdDev(values),
        n: values.length,
      };
    }
    return stats;
  }, [enabledAliases, valuesByAlias, bins]);

  const propertySelect = (
    <div className="flex w-full flex-col gap-1.5 sm:max-w-xs">
      <label htmlFor="dist-hist-property" className="text-sm font-medium text-text-muted">
        Property
      </label>
      <select
        id="dist-hist-property"
        value={property}
        onChange={(e) => onPropertyChange(e.target.value as DataRelationshipProperty)}
        className="min-h-[44px] w-full cursor-pointer rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text"
      >
        {DATA_RELATIONSHIP_PROPERTIES.map((prop) => (
          <option key={prop} value={prop}>
            {propertyLabel(prop)}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <CollapsiblePanel
      panelId="distHist"
      title="Distribution histogram"
      subtitle="Interval-level property distribution per enabled well"
      headerExtra={propertySelect}
      statePath="/data-relationships"
      defaultOpen
    >
      {enabledAliases.length === 0 ? (
        <p className="text-sm text-text-muted">Enable at least one well to view the histogram.</p>
      ) : (
        <>
          <div className="h-56 rounded-card border border-border bg-surface-2 p-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="label" tick={{ fill: "var(--text-muted)", fontSize: 9 }} interval={1} />
                <YAxis tick={{ fill: "var(--text-muted)", fontSize: 10 }} width={28} />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    color: "var(--text)",
                  }}
                />
                {enabledAliases.map((alias) => {
                  const index = wellIndexByAlias.get(alias) ?? 0;
                  return (
                    <Bar
                      key={alias}
                      dataKey={`count_${alias}`}
                      name={displayByAlias[alias] ?? alias}
                      fill={getWellColor(alias, index)}
                      fillOpacity={0.45}
                      radius={[2, 2, 0, 0]}
                      isAnimationActive={false}
                    />
                  );
                })}
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 overflow-x-auto rounded-card border border-border">
            <table className="min-w-full text-sm">
              <caption className="sr-only">
                Descriptive statistics per enabled well for {propertyLabel(property)}
              </caption>
              <thead className="bg-surface-2">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-text-muted"
                  >
                    Well
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-text-muted"
                  >
                    Mean
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-text-muted"
                  >
                    Median
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-text-muted"
                  >
                    Mode
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-text-muted"
                  >
                    Std Dev
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-text-muted"
                  >
                    n
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface">
                {enabledAliases.map((alias) => {
                  const stats = statsByAlias[alias];
                  return (
                    <tr key={alias}>
                      <th scope="row" className="px-3 py-2 text-left font-medium text-text">
                        {displayByAlias[alias] ?? alias}
                      </th>
                      <td className="px-3 py-2 text-right font-mono tabular-nums text-text">
                        {formatHistogramStat(stats?.mean ?? null)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono tabular-nums text-text">
                        {formatHistogramStat(stats?.median ?? null)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono tabular-nums text-text">
                        {formatHistogramStat(stats?.mode ?? null)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono tabular-nums text-text">
                        {formatHistogramStat(stats?.stdDev ?? null)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono tabular-nums text-text-muted">
                        {stats?.n ?? 0}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-2 text-xs text-text-muted">
            {enabledAliases.length} well(s) · 16 bins · property {propertyLabel(property)}
          </p>
        </>
      )}
    </CollapsiblePanel>
  );
}
