import { useEffect, useMemo, useRef } from "react";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { AxisScaleControl } from "@/components/data-relationships/AxisScaleControl";
import {
  DATA_RELATIONSHIP_PROPERTIES,
  type DataRelationshipProperty,
} from "@/config";
import { pageStateKey, usePersistedState } from "@/hooks/usePageState";
import {
  buildScatterPoints,
  clampAxisRange,
  computeAxisExtent,
  computeLinearRegression,
  formatAxisValue,
  formatRegressionCoefficient,
  formatRegressionEquation,
  getWellColor,
  propertyLabel,
  rangesEqual,
  regressionLinePoints,
  type AxisRange,
  type RelationshipFilters,
  type ScatterPoint,
} from "@/lib/dataRelationships";
import type { IntervalRecord } from "@/types/intervals";
import type { WellRecord } from "@/types/wells";

const ROUTE = "/data-relationships";

interface ScatterPlotPanelProps {
  wells: WellRecord[];
  enabledAliases: string[];
  intervalsByAlias: Record<string, { display: string; intervals: IntervalRecord[] }>;
  xProperty: DataRelationshipProperty;
  yProperty: DataRelationshipProperty;
  filters: RelationshipFilters;
  hoveredAlias: string | null;
  highlightedAlias: string | null;
  onXChange: (property: DataRelationshipProperty) => void;
  onYChange: (property: DataRelationshipProperty) => void;
  onSwapAxes: () => void;
  onPointHover: (alias: string | null) => void;
}

interface ScatterTooltipProps {
  active?: boolean;
  payload?: { payload: ScatterPoint }[];
  xProperty: DataRelationshipProperty;
  yProperty: DataRelationshipProperty;
}

function ScatterTooltip({ active, payload, xProperty, yProperty }: ScatterTooltipProps) {
  if (!active || !payload?.length) return null;
  const point = payload[0]?.payload;
  if (!point) return null;

  return (
    <div className="rounded-card border border-border bg-surface-2 px-3 py-2 text-xs text-text shadow-card">
      <p className="font-semibold">{point.display}</p>
      <p className="mt-1 text-text-muted">MD {point.depth.toFixed(1)} m</p>
      <p className="mt-1 font-mono tabular-nums">
        {propertyLabel(xProperty)}: {formatAxisValue(xProperty, point.x)}
      </p>
      <p className="font-mono tabular-nums">
        {propertyLabel(yProperty)}: {formatAxisValue(yProperty, point.y)}
      </p>
    </div>
  );
}

export function ScatterPlotPanel({
  wells,
  enabledAliases,
  intervalsByAlias,
  xProperty,
  yProperty,
  filters,
  hoveredAlias,
  highlightedAlias,
  onXChange,
  onYChange,
  onSwapAxes,
  onPointHover,
}: ScatterPlotPanelProps) {
  const wellIndexByAlias = useMemo(() => {
    const map = new Map<string, number>();
    wells.forEach((well, index) => map.set(well.alias, index));
    return map;
  }, [wells]);

  const points = useMemo(
    () =>
      buildScatterPoints(
        intervalsByAlias,
        enabledAliases,
        xProperty,
        yProperty,
        filters,
      ),
    [intervalsByAlias, enabledAliases, xProperty, yProperty, filters],
  );

  const xExtent = useMemo(
    () => computeAxisExtent(points.map((point) => point.x)),
    [points],
  );
  const yExtent = useMemo(
    () => computeAxisExtent(points.map((point) => point.y)),
    [points],
  );

  const [xRangeOverride, setXRangeOverride] = usePersistedState<AxisRange | null>(
    pageStateKey(ROUTE, `scatterZoom:${xProperty}`),
    null,
  );
  const [yRangeOverride, setYRangeOverride] = usePersistedState<AxisRange | null>(
    pageStateKey(ROUTE, `scatterZoom:${yProperty}`),
    null,
  );

  const xRange = useMemo(
    () => (xRangeOverride ? clampAxisRange(xRangeOverride, xExtent) : xExtent),
    [xRangeOverride, xExtent],
  );
  const yRange = useMemo(
    () => (yRangeOverride ? clampAxisRange(yRangeOverride, yExtent) : yExtent),
    [yRangeOverride, yExtent],
  );

  const prevXProperty = useRef(xProperty);
  const prevYProperty = useRef(yProperty);

  useEffect(() => {
    if (prevXProperty.current !== xProperty) {
      setXRangeOverride(null);
      prevXProperty.current = xProperty;
    }
  }, [xProperty, setXRangeOverride]);

  useEffect(() => {
    if (prevYProperty.current !== yProperty) {
      setYRangeOverride(null);
      prevYProperty.current = yProperty;
    }
  }, [yProperty, setYRangeOverride]);

  const regression = useMemo(() => computeLinearRegression(points), [points]);

  const linePoints = useMemo(
    () => regressionLinePoints(regression, xRange.min, xRange.max),
    [regression, xRange],
  );

  const pointsByAlias = useMemo(() => {
    const grouped = new Map<string, ScatterPoint[]>();
    for (const point of points) {
      const bucket = grouped.get(point.alias) ?? [];
      bucket.push(point);
      grouped.set(point.alias, bucket);
    }
    return grouped;
  }, [points]);

  const activeAlias = hoveredAlias ?? highlightedAlias;
  const zoomedX = xRangeOverride != null && !rangesEqual(xRange, xExtent);
  const zoomedY = yRangeOverride != null && !rangesEqual(yRange, yExtent);

  const handleResetZoom = () => {
    setXRangeOverride(null);
    setYRangeOverride(null);
  };

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="mb-4 flex flex-wrap items-end gap-3">
        <div className="flex min-w-[10rem] flex-1 flex-col gap-1.5">
          <label htmlFor="scatter-x" className="text-sm font-medium text-text-muted">
            X axis
          </label>
          <select
            id="scatter-x"
            value={xProperty}
            onChange={(e) => onXChange(e.target.value as DataRelationshipProperty)}
            className="min-h-[44px] w-full cursor-pointer rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text"
          >
            {DATA_RELATIONSHIP_PROPERTIES.map((property) => (
              <option key={property} value={property}>
                {propertyLabel(property)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex min-w-[10rem] flex-1 flex-col gap-1.5">
          <label htmlFor="scatter-y" className="text-sm font-medium text-text-muted">
            Y axis
          </label>
          <select
            id="scatter-y"
            value={yProperty}
            onChange={(e) => onYChange(e.target.value as DataRelationshipProperty)}
            className="min-h-[44px] w-full cursor-pointer rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text"
          >
            {DATA_RELATIONSHIP_PROPERTIES.map((property) => (
              <option key={property} value={property}>
                {propertyLabel(property)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={onSwapAxes}
          className="min-h-[44px] cursor-pointer rounded-card border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20"
        >
          Swap axes ↔
        </button>

        {points.length > 0 && (zoomedX || zoomedY) ? (
          <button
            type="button"
            onClick={handleResetZoom}
            className="min-h-[44px] cursor-pointer rounded-card border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent/50"
          >
            Reset zoom
          </button>
        ) : null}
      </div>

      {points.length === 0 ? (
        <p className="text-sm text-text-muted">No data points match current filters.</p>
      ) : (
        <>
          <div className="mb-3 grid gap-3 sm:grid-cols-2">
            <AxisScaleControl
              axisLabel="X"
              property={xProperty}
              dataExtent={xExtent}
              range={xRange}
              onChange={(range) => setXRangeOverride(clampAxisRange(range, xExtent))}
            />
            <AxisScaleControl
              axisLabel="Y"
              property={yProperty}
              dataExtent={yExtent}
              range={yRange}
              onChange={(range) => setYRangeOverride(clampAxisRange(range, yExtent))}
            />
          </div>

          <div className="h-80 rounded-card border border-border bg-surface-2 p-2">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 8, right: 12, left: 4, bottom: 4 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  dataKey="x"
                  name={propertyLabel(xProperty)}
                  domain={[xRange.min, xRange.max]}
                  allowDataOverflow
                  tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                  tickFormatter={(value: number) => formatAxisValue(xProperty, value)}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name={propertyLabel(yProperty)}
                  domain={[yRange.min, yRange.max]}
                  allowDataOverflow
                  tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                  width={42}
                  tickFormatter={(value: number) => formatAxisValue(yProperty, value)}
                />
                <ZAxis range={[40, 40]} />
                <Tooltip
                  content={<ScatterTooltip xProperty={xProperty} yProperty={yProperty} />}
                  cursor={{ strokeDasharray: "3 3" }}
                />
                {linePoints.length === 2 ? (
                  <Line
                    data={linePoints}
                    dataKey="y"
                    stroke="var(--risk-elev)"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                    legendType="none"
                  />
                ) : null}
                {enabledAliases.map((alias) => {
                  const data = pointsByAlias.get(alias) ?? [];
                  if (!data.length) return null;
                  const index = wellIndexByAlias.get(alias) ?? 0;
                  const emphasized = activeAlias === alias;
                  return (
                    <Scatter
                      key={alias}
                      name={data[0]?.display ?? alias}
                      data={data}
                      fill={getWellColor(alias, index)}
                      fillOpacity={emphasized ? 0.9 : 0.35}
                      onMouseEnter={() => onPointHover(alias)}
                      onMouseLeave={() => onPointHover(null)}
                      isAnimationActive={false}
                    />
                  );
                })}
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-card border border-border bg-surface-2 px-3 py-2">
          <dt className="text-xs uppercase tracking-wide text-text-muted">Pearson r</dt>
          <dd className="mt-1 font-mono text-lg tabular-nums text-text">
            {formatRegressionCoefficient(regression.pearsonR)}
          </dd>
        </div>
        <div className="rounded-card border border-border bg-surface-2 px-3 py-2">
          <dt className="text-xs uppercase tracking-wide text-text-muted">R²</dt>
          <dd className="mt-1 font-mono text-lg tabular-nums text-text">
            {formatRegressionCoefficient(regression.rSquared)}
          </dd>
        </div>
        <div className="rounded-card border border-border bg-surface-2 px-3 py-2 sm:col-span-2">
          <dt className="text-xs uppercase tracking-wide text-text-muted">Regression</dt>
          <dd className="mt-1 font-mono text-sm tabular-nums text-text">
            {formatRegressionEquation(regression, propertyLabel(yProperty), propertyLabel(xProperty))}
          </dd>
        </div>
      </dl>

      <p className="mt-2 text-xs text-text-muted">
        n={regression.n} interval pairs · pooled OLS across visible wells
      </p>
    </div>
  );
}
