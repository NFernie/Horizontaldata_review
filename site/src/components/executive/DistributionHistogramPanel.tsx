import { useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend as RechartsLegend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WellSelect } from "@/components/WellSelect";
import { CollapsiblePanel } from "@/components/executive/CollapsiblePanel";
import {
  DIST_HISTOGRAM_PROPERTIES,
  JENA31_DUAL_ALIAS,
  type DistHistogramProperty,
} from "@/config";
import { pageStateKey, usePersistedState } from "@/hooks/usePageState";
import { buildHistogramBins, computeDescriptiveStats, formatHistogramStat, getIntervalPropertyValue } from "@/lib/histogram";
import { fetchJson } from "@/lib/utils";
import type { IntervalsPayload } from "@/types/intervals";
import type { WellRecord } from "@/types/wells";

interface DistributionHistogramPanelProps {
  wells: WellRecord[];
}

export function DistributionHistogramPanel({ wells }: DistributionHistogramPanelProps) {
  const [wellA, setWellA] = usePersistedState(pageStateKey("/", "distHist:wellA"), "JENA31");
  const [wellB, setWellB] = usePersistedState(pageStateKey("/", "distHist:wellB"), JENA31_DUAL_ALIAS);
  const [property, setProperty] = usePersistedState<DistHistogramProperty>(
    pageStateKey("/", "distHist:property"),
    "RQI",
  );
  const [dataA, setDataA] = useState<IntervalsPayload | null>(null);
  const [dataB, setDataB] = useState<IntervalsPayload | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    Promise.all([
      fetchJson<IntervalsPayload>(`data/intervals/${wellA}.json`),
      fetchJson<IntervalsPayload>(`data/intervals/${wellB}.json`),
    ])
      .then(([a, b]) => {
        if (cancelled) return;
        setDataA(a);
        setDataB(b);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [wellA, wellB]);

  const valuesA = useMemo(() => {
    return (dataA?.intervals ?? [])
      .map((iv) => getIntervalPropertyValue(iv, property))
      .filter((v): v is number => v != null && !Number.isNaN(v));
  }, [dataA, property]);

  const valuesB = useMemo(() => {
    return (dataB?.intervals ?? [])
      .map((iv) => getIntervalPropertyValue(iv, property))
      .filter((v): v is number => v != null && !Number.isNaN(v));
  }, [dataB, property]);

  const chartData = useMemo(
    () => buildHistogramBins(valuesA, valuesB, property),
    [valuesA, valuesB, property],
  );

  const statsA = useMemo(
    () => computeDescriptiveStats(valuesA, chartData, "countA"),
    [valuesA, chartData],
  );
  const statsB = useMemo(
    () => computeDescriptiveStats(valuesB, chartData, "countB"),
    [valuesB, chartData],
  );

  const displayA = dataA?.display ?? wellA;
  const displayB = dataB?.display ?? wellB;

  return (
    <CollapsiblePanel
      panelId="distHist"
      title="Distribution comparison"
      subtitle="Interval-level property histogram"
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <WellSelect
          wells={wells}
          value={wellA}
          onChange={setWellA}
          label="Well A"
          id="dist-hist-well-a"
          className="w-full"
        />
        <WellSelect
          wells={wells}
          value={wellB}
          onChange={setWellB}
          label="Well B"
          id="dist-hist-well-b"
          className="w-full"
        />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="dist-hist-property" className="text-sm font-medium text-text-muted">
            Property
          </label>
          <select
            id="dist-hist-property"
            value={property}
            onChange={(e) => setProperty(e.target.value as DistHistogramProperty)}
            className="min-h-[44px] w-full cursor-pointer rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text"
          >
            {DIST_HISTOGRAM_PROPERTIES.map((prop) => (
              <option key={prop} value={prop}>
                {prop}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? <p className="text-sm text-text-muted">Loading histogram data…</p> : null}

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
            <RechartsLegend />
            <Bar dataKey="countA" name={displayA} fill="var(--accent)" radius={[2, 2, 0, 0]} />
            <Bar
              dataKey="countB"
              name={displayB}
              fill="var(--lateral-dual-badge)"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 overflow-x-auto rounded-card border border-border">
        <table className="min-w-full text-sm">
          <caption className="sr-only">
            Descriptive statistics for {displayA} and {displayB} — property {property}
          </caption>
          <thead className="bg-surface-2">
            <tr>
              <th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-text-muted">
                Statistic
              </th>
              <th scope="col" className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-text-muted">
                {displayA}
              </th>
              <th scope="col" className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-text-muted">
                {displayB}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-surface">
            {(
              [
                ["Mean", statsA.mean, statsB.mean],
                ["Median", statsA.median, statsB.median],
                ["Mode", statsA.mode, statsB.mode],
                ["Std Dev", statsA.stdDev, statsB.stdDev],
              ] as const
            ).map(([label, valA, valB]) => (
              <tr key={label}>
                <th scope="row" className="px-3 py-2 text-left font-medium text-text">
                  {label}
                </th>
                <td className="px-3 py-2 text-right font-mono tabular-nums text-text">
                  {formatHistogramStat(valA)}
                </td>
                <td className="px-3 py-2 text-right font-mono tabular-nums text-text">
                  {formatHistogramStat(valB)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-2 text-xs text-text-muted">
        n={valuesA.length} ({displayA}) · n={valuesB.length} ({displayB}) · 16 bins · property{" "}
        {property}
      </p>
    </CollapsiblePanel>
  );
}
