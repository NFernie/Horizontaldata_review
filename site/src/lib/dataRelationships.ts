import {
  DATA_RELATIONSHIP_PROPERTY_LABELS,
  type DataRelationshipProperty,
} from "@/config";
import type { IntervalRecord } from "@/types/intervals";
import type { RiskClass } from "@/types/wells";
import { getIntervalPropertyValue } from "@/lib/histogram";

export interface RelationshipFilters {
  riskClasses: RiskClass[];
  payOnly: boolean;
  selectedFlags: string[];
}

export interface ScatterPoint {
  alias: string;
  display: string;
  depth: number;
  x: number;
  y: number;
}

export interface LinearRegressionResult {
  n: number;
  pearsonR: number | null;
  rSquared: number | null;
  slope: number | null;
  intercept: number | null;
}

const GOLDEN_ANGLE = 137.508;

export function getWellColor(_alias: string, index: number): string {
  const hue = (index * GOLDEN_ANGLE) % 360;
  return `hsl(${hue.toFixed(1)} 62% 52%)`;
}

export function propertyLabel(property: DataRelationshipProperty): string {
  return DATA_RELATIONSHIP_PROPERTY_LABELS[property];
}

export function passesRelationshipFilters(
  interval: IntervalRecord,
  filters: RelationshipFilters,
): boolean {
  if (filters.riskClasses.length === 0) return false;
  if (!filters.riskClasses.includes(interval.risk_class)) return false;
  if (filters.payOnly && !interval.matching_pay) return false;
  if (filters.selectedFlags.length > 0) {
    const hasFlag = filters.selectedFlags.some((flag) => interval.flags.includes(flag));
    if (!hasFlag) return false;
  }
  return true;
}

export function filterIntervals(
  intervals: IntervalRecord[],
  filters: RelationshipFilters,
): IntervalRecord[] {
  return intervals.filter((interval) => passesRelationshipFilters(interval, filters));
}

export function getPropertyValues(
  intervals: IntervalRecord[],
  property: DataRelationshipProperty,
): number[] {
  return intervals
    .map((interval) => getIntervalPropertyValue(interval, property))
    .filter((value): value is number => value != null && !Number.isNaN(value));
}

export function buildScatterPoints(
  intervalsByAlias: Record<string, { display: string; intervals: IntervalRecord[] }>,
  enabledAliases: string[],
  xProperty: DataRelationshipProperty,
  yProperty: DataRelationshipProperty,
  filters: RelationshipFilters,
): ScatterPoint[] {
  const points: ScatterPoint[] = [];

  for (const alias of enabledAliases) {
    const payload = intervalsByAlias[alias];
    if (!payload) continue;

    for (const interval of filterIntervals(payload.intervals, filters)) {
      const x = getIntervalPropertyValue(interval, xProperty);
      const y = getIntervalPropertyValue(interval, yProperty);
      if (x == null || y == null || Number.isNaN(x) || Number.isNaN(y)) continue;

      points.push({
        alias,
        display: payload.display,
        depth: interval.depth,
        x,
        y,
      });
    }
  }

  return points;
}

export function computePearsonR(xs: number[], ys: number[]): number | null {
  const n = xs.length;
  if (n < 2 || ys.length !== n) return null;

  const meanX = xs.reduce((sum, value) => sum + value, 0) / n;
  const meanY = ys.reduce((sum, value) => sum + value, 0) / n;

  let cov = 0;
  let varX = 0;
  let varY = 0;

  for (let i = 0; i < n; i += 1) {
    const dx = xs[i]! - meanX;
    const dy = ys[i]! - meanY;
    cov += dx * dy;
    varX += dx * dx;
    varY += dy * dy;
  }

  if (varX === 0 || varY === 0) return null;
  return cov / Math.sqrt(varX * varY);
}

export function computeLinearRegression(points: ScatterPoint[]): LinearRegressionResult {
  const n = points.length;
  if (n < 2) {
    return { n, pearsonR: null, rSquared: null, slope: null, intercept: null };
  }

  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const pearsonR = computePearsonR(xs, ys);

  const meanX = xs.reduce((sum, value) => sum + value, 0) / n;
  const meanY = ys.reduce((sum, value) => sum + value, 0) / n;

  let numerator = 0;
  let denominator = 0;
  for (let i = 0; i < n; i += 1) {
    const dx = xs[i]! - meanX;
    numerator += dx * (ys[i]! - meanY);
    denominator += dx * dx;
  }

  if (denominator === 0) {
    return { n, pearsonR, rSquared: pearsonR != null ? pearsonR ** 2 : null, slope: null, intercept: null };
  }

  const slope = numerator / denominator;
  const intercept = meanY - slope * meanX;

  return {
    n,
    pearsonR,
    rSquared: pearsonR != null ? pearsonR ** 2 : null,
    slope,
    intercept,
  };
}

export function regressionLinePoints(
  regression: LinearRegressionResult,
  xMin: number,
  xMax: number,
): { x: number; y: number }[] {
  if (regression.slope == null || regression.intercept == null || xMin === xMax) {
    return [];
  }

  return [
    { x: xMin, y: regression.slope * xMin + regression.intercept },
    { x: xMax, y: regression.slope * xMax + regression.intercept },
  ];
}

export function formatRegressionCoefficient(value: number | null, decimals = 4): string {
  if (value == null) return "—";
  return value.toFixed(decimals);
}

export function formatRegressionEquation(
  regression: LinearRegressionResult,
  yLabel: string,
  xLabel: string,
): string {
  if (regression.slope == null || regression.intercept == null) return "—";

  const slope = formatRegressionCoefficient(regression.slope);
  const sign = regression.intercept >= 0 ? "+" : "−";
  const absIntercept = formatRegressionCoefficient(Math.abs(regression.intercept ?? 0));

  return `${yLabel} = ${slope}·${xLabel} ${sign} ${absIntercept}`;
}

export function formatAxisValue(property: DataRelationshipProperty, value: number): string {
  if (property === "depth") return value.toFixed(1);
  if (property === "RQI") return value.toFixed(3);
  if (property === "WRCI" || property === "pct_ss" || property === "fluor") return value.toFixed(1);
  if (property === "grain_ordinal") return value.toFixed(0);
  return value.toFixed(2);
}

export interface AxisRange {
  min: number;
  max: number;
}

const AXIS_PADDING_RATIO = 0.02;
const MIN_AXIS_SPAN_RATIO = 0.01;

export function computeAxisExtent(values: number[]): AxisRange {
  if (!values.length) return { min: 0, max: 1 };

  let min = Math.min(...values);
  let max = Math.max(...values);
  if (min === max) {
    const delta = Math.max(Math.abs(min) * 0.05, 1);
    min -= delta;
    max += delta;
  }

  const span = max - min;
  const pad = span * AXIS_PADDING_RATIO;
  return { min: min - pad, max: max + pad };
}

export function axisSliderStep(property: DataRelationshipProperty, extent: AxisRange): number {
  const span = Math.max(extent.max - extent.min, 1e-6);
  if (property === "RQI") return span / 200;
  if (property === "grain_ordinal") return 1;
  if (property === "depth") return Math.max(1, span / 200);
  if (property === "WRCI" || property === "pct_ss" || property === "fluor") return span / 100;
  return span / 100;
}

export function clampAxisRange(range: AxisRange, extent: AxisRange): AxisRange {
  const span = Math.max(extent.max - extent.min, 1e-6);
  const minSpan = span * MIN_AXIS_SPAN_RATIO;

  let min = Math.max(extent.min, Math.min(range.min, extent.max));
  let max = Math.min(extent.max, Math.max(range.max, extent.min));

  if (max - min < minSpan) {
    const mid = (min + max) / 2;
    min = Math.max(extent.min, mid - minSpan / 2);
    max = Math.min(extent.max, mid + minSpan / 2);
  }

  if (min >= max) {
    return { ...extent };
  }

  return { min, max };
}

export function rangesEqual(a: AxisRange, b: AxisRange, epsilon = 1e-9): boolean {
  return Math.abs(a.min - b.min) < epsilon && Math.abs(a.max - b.max) < epsilon;
}
