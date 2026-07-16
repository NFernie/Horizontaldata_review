/** KS grid cell tint step and upper D bound (Kolmogorov–Smirnov statistic). */
export const KS_D_COLOR_STEP = 0.1;
export const KS_D_COLOR_MAX = 1;

export function quantizeKsD(D: number): number {
  const clamped = Math.max(0, Math.min(KS_D_COLOR_MAX, D));
  return Math.round(clamped * 10) / 10;
}

/**
 * Soft green (low D) → prominent red (high D) background for KS matrix cells.
 * Quantized to 0.1 D steps. Red ramps slowly below D=0.5, then quickly above 0.5.
 */
export function dStatisticColor(D: number): string {
  const t = quantizeKsD(D) / KS_D_COLOR_MAX;

  let redPct: number;
  let greenPct: number;

  if (t <= 0.5) {
    const lowBand = t * 2;
    greenPct = Math.round((1 - lowBand) * 38);
    redPct = Math.round(lowBand ** 1.3 * 14);
  } else {
    const highBand = (t - 0.5) / 0.5;
    greenPct = Math.round((1 - highBand) * 5);
    redPct = Math.round(18 + highBand ** 0.7 * 46);
  }

  if (greenPct === 0 && redPct === 0) return "var(--surface-2)";

  return `color-mix(in srgb, var(--risk-high) ${redPct}%, color-mix(in srgb, var(--risk-low) ${greenPct}%, var(--surface)))`;
}

/** @internal Test helper — extract red mix % from a color-mix string. */
export function redMixPercent(color: string): number {
  return Number(color.match(/var\(--risk-high\) (\d+)%/)?.[1] ?? 0);
}
