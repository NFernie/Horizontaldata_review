/** KS grid cell tint step and upper D bound (Kolmogorov–Smirnov statistic). */
export const KS_D_COLOR_STEP = 0.1;
export const KS_D_COLOR_MAX = 1;

export function quantizeKsD(D: number): number {
  const clamped = Math.max(0, Math.min(KS_D_COLOR_MAX, D));
  return Math.round(clamped * 10) / 10;
}

/**
 * Soft green (low D) → red (high D) background for KS matrix cells.
 * Quantized to 0.1 D steps; red ramps with easing so only high D looks strongly red.
 */
export function dStatisticColor(D: number): string {
  const t = quantizeKsD(D) / KS_D_COLOR_MAX;
  const greenPct = Math.round((1 - t) * 36);
  const redPct = Math.round(t ** 1.65 * 44);

  if (greenPct === 0 && redPct === 0) return "var(--surface-2)";

  return `color-mix(in srgb, var(--risk-high) ${redPct}%, color-mix(in srgb, var(--risk-low) ${greenPct}%, var(--surface)))`;
}
