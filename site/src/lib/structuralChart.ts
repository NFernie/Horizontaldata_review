import type { TrajectoryStation } from "@/types/trajectory";

export const STRUCTURAL_MARGIN = {
  left: 44,
  right: 12,
  top: 14,
  bottom: 28,
} as const;

export const STRUCTURAL_PLOT_HEIGHT = 140;
export const STRUCTURAL_MIN_PLOT_HEIGHT = 100;
export const STRUCTURAL_PLOT_ASPECT = 3.2;
export const STRUCTURAL_CORRIDOR_HALF_WIDTH = 10;
/** Tick labels — 33% smaller than original 13px. */
export const STRUCTURAL_MIN_TICK_FONT = 9;
export const STRUCTURAL_AXIS_LABEL_FONT = 7;
export const STRUCTURAL_MICRO_LABEL_FONT = 7;

export interface ChartPoint {
  x: number;
  y: number;
}

export interface LinearScale {
  (value: number): number;
  invert: (px: number) => number;
  domain: [number, number];
  range: [number, number];
}

/** Hard floor = OWC + 3 m structurally shallower (less negative TVDss). */
export function hardFloorMtvds(owcMtvds: number): number {
  return owcMtvds + 3;
}

/** Per-well Y-range: bottom = field OWC; top = max lateral trajectory mTVDss + 3 m shallower. */
export function computeYRange(
  owcMtvds: number,
  lateralStations: TrajectoryStation[],
): { yMin: number; yMax: number } {
  const trajMax =
    lateralStations.length > 0
      ? Math.max(...lateralStations.map((s) => s.mtvds))
      : hardFloorMtvds(owcMtvds);
  const yMax = trajMax + 3;
  const yMin = owcMtvds;
  if (yMax <= yMin) {
    return { yMin, yMax: yMin + 6 };
  }
  return { yMin, yMax };
}

export function createLinearScale(
  domain: [number, number],
  range: [number, number],
): LinearScale {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const span = d1 - d0 || 1;
  const scale = ((value: number) => r0 + ((value - d0) / span) * (r1 - r0)) as LinearScale;
  scale.invert = (px: number) => d0 + ((px - r0) / (r1 - r0 || 1)) * span;
  scale.domain = domain;
  scale.range = range;
  return scale;
}

/** mTVDss scale — depth increases downward (more negative toward bottom). */
export function createMtvdsScale(
  yMin: number,
  yMax: number,
  plotTop: number,
  plotBottom: number,
): LinearScale {
  return createLinearScale([yMax, yMin], [plotTop, plotBottom]);
}

export function filterLateralStations(
  stations: TrajectoryStation[],
  mdStart: number,
  mdEnd: number,
): TrajectoryStation[] {
  const lo = Math.min(mdStart, mdEnd);
  const hi = Math.max(mdStart, mdEnd);
  return stations.filter((s) => s.md >= lo && s.md <= hi);
}

export function interpolateMtvdsAtMd(
  stations: TrajectoryStation[],
  md: number,
): number | null {
  if (!stations.length) return null;
  const sorted = [...stations].sort((a, b) => a.md - b.md);
  if (md <= sorted[0].md) return sorted[0].mtvds;
  if (md >= sorted[sorted.length - 1].md) return sorted[sorted.length - 1].mtvds;
  for (let i = 0; i < sorted.length - 1; i += 1) {
    const a = sorted[i];
    const b = sorted[i + 1];
    if (md >= a.md && md <= b.md) {
      const t = (md - a.md) / (b.md - a.md || 1);
      return a.mtvds + t * (b.mtvds - a.mtvds);
    }
  }
  return null;
}

export function niceStep(span: number, targetTicks = 5): number {
  if (span <= 0) return 1;
  const raw = span / targetTicks;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const normalized = raw / magnitude;
  if (normalized > 5) return 10 * magnitude;
  if (normalized > 2) return 5 * magnitude;
  if (normalized > 1) return 2 * magnitude;
  return magnitude;
}

export function generateMdTicks(mdMin: number, mdMax: number): number[] {
  const span = mdMax - mdMin;
  if (span <= 0) return [mdMin];
  const step = niceStep(span, 5);
  const start = Math.ceil(mdMin / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= mdMax + step * 0.001; v += step) {
    ticks.push(Math.round(v * 100) / 100);
  }
  if (!ticks.length || ticks[0] > mdMin + step * 0.1) {
    ticks.unshift(mdMin);
  }
  if (ticks[ticks.length - 1] < mdMax - step * 0.1) {
    ticks.push(mdMax);
  }
  return ticks;
}

export function generateMtvdsTicks(yMin: number, yMax: number): number[] {
  const span = yMax - yMin;
  if (span <= 0) return [yMin];
  const step = niceStep(span, 4);
  const start = Math.ceil(yMin / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= yMax + step * 0.001; v += step) {
    ticks.push(Math.round(v * 10) / 10);
  }
  if (!ticks.length) ticks.push(yMin, yMax);
  return ticks;
}

export function trajectoryPolyline(
  stations: TrajectoryStation[],
  xScale: LinearScale,
  yScale: LinearScale,
): string {
  if (stations.length < 2) return "";
  return stations
    .map((s, i) => {
      const cmd = i === 0 ? "M" : "L";
      return `${cmd} ${xScale(s.md).toFixed(2)} ${yScale(s.mtvds).toFixed(2)}`;
    })
    .join(" ");
}

export function buildCorridorPolygon(
  points: ChartPoint[],
  halfWidth: number,
): string | null {
  if (points.length < 2) return null;

  const left: ChartPoint[] = [];
  const right: ChartPoint[] = [];

  for (let i = 0; i < points.length; i += 1) {
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(points.length - 1, i + 1)];
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    left.push({ x: points[i].x + nx * halfWidth, y: points[i].y + ny * halfWidth });
    right.push({ x: points[i].x - nx * halfWidth, y: points[i].y - ny * halfWidth });
  }

  const path = [
    ...left.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`),
    ...right.reverse().map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`),
  ];
  return `M ${path.join(" L ")} Z`;
}

export function isolationCorridorPath(
  stations: TrajectoryStation[],
  topMd: number,
  botMd: number,
  xScale: LinearScale,
  yScale: LinearScale,
  halfWidth = STRUCTURAL_CORRIDOR_HALF_WIDTH,
): string | null {
  const lo = Math.min(topMd, botMd);
  const hi = Math.max(topMd, botMd);
  const segment = stations.filter((s) => s.md >= lo && s.md <= hi);
  const anchors: TrajectoryStation[] = [...segment];

  const topMtvds = interpolateMtvdsAtMd(stations, lo);
  const botMtvds = interpolateMtvdsAtMd(stations, hi);
  if (topMtvds != null && !anchors.some((s) => Math.abs(s.md - lo) < 0.01)) {
    anchors.unshift({ md: lo, mtvds: topMtvds });
  }
  if (botMtvds != null && !anchors.some((s) => Math.abs(s.md - hi) < 0.01)) {
    anchors.push({ md: hi, mtvds: botMtvds });
  }
  anchors.sort((a, b) => a.md - b.md);

  if (anchors.length < 2) return null;

  const points = anchors.map((s) => ({
    x: xScale(s.md),
    y: yScale(s.mtvds),
  }));
  return buildCorridorPolygon(points, halfWidth);
}

export function markerPosition(
  mdMid: number,
  intervalMtvds: number | null | undefined,
  stations: TrajectoryStation[],
  xScale: LinearScale,
  yScale: LinearScale,
): { x: number; y: number } {
  const mtvds =
    intervalMtvds ?? interpolateMtvdsAtMd(stations, mdMid) ?? yScale.invert(yScale.range[1]);
  return { x: xScale(mdMid), y: yScale(mtvds) };
}

export function structuralViewHeight(plotHeight = STRUCTURAL_PLOT_HEIGHT): number {
  return STRUCTURAL_MARGIN.top + plotHeight + STRUCTURAL_MARGIN.bottom;
}

export function computePlotArea(width: number, height: number) {
  const plotLeft = STRUCTURAL_MARGIN.left;
  const plotRight = Math.max(plotLeft + 40, width - STRUCTURAL_MARGIN.right);
  const plotTop = STRUCTURAL_MARGIN.top;
  const plotBottom = Math.max(
    plotTop + STRUCTURAL_MIN_PLOT_HEIGHT,
    height - STRUCTURAL_MARGIN.bottom,
  );
  return { plotLeft, plotRight, plotTop, plotBottom };
}
