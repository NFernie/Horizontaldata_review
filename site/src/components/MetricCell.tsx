import { RQI_THRESHOLD, WRCI_HIGH_THRESHOLD } from "@/config";
import {
  formatMetricValue,
  isValidMetricValue,
  metricCellClass,
  type MetricTone,
} from "@/lib/rqiWrciStyle";
import { cn } from "@/lib/utils";

interface MetricCellProps {
  metric: MetricTone;
  value: number | null | undefined;
  showTooltip?: boolean;
  className?: string;
}

function buildTooltip(metric: MetricTone, value: number | null | undefined): string {
  if (!isValidMetricValue(value)) {
    return `No ${metric.toUpperCase()} computed for this interval.`;
  }

  if (metric === "rqi") {
    if (value > RQI_THRESHOLD) {
      return [
        `RQI ${value.toFixed(2)} — good rock (≥ ${RQI_THRESHOLD})`,
        "High reservoir quality on the RQI v2 scale. Red highlights favourable rock, not bad data. On good rock, low resistivity / fluorescence flags and OWC proximity carry more weight in WRCI.",
      ].join("\n");
    }
    return [
      `RQI ${value.toFixed(2)} — poor rock (≤ ${RQI_THRESHOLD})`,
      `Lower reservoir quality. Red-flag rules for lowres / lowfluor require good rock (RQI ≥ ${RQI_THRESHOLD}); poor-rock intervals use standard pay cutoffs instead.`,
    ].join("\n");
  }

  if (value > WRCI_HIGH_THRESHOLD) {
    return [
      `WRCI ${value.toFixed(1)} — above High threshold (> ${WRCI_HIGH_THRESHOLD})`,
      "Composite water-risk score in the High band. Review flags, OWC distance, and isolation status for this interval.",
    ].join("\n");
  }

  return [
    `WRCI ${value.toFixed(1)} — at or below High threshold (≤ ${WRCI_HIGH_THRESHOLD})`,
    "Score is not in the High WRCI band. Elevated risk may still apply via flags or OWC tiers — see Risk column.",
  ].join("\n");
}

export function MetricCell({
  metric,
  value,
  showTooltip = true,
  className,
}: MetricCellProps) {
  const toneClass = metricCellClass(metric, value);
  const formatted = formatMetricValue(metric, value);
  const tooltip = showTooltip ? buildTooltip(metric, value) : undefined;

  return (
    <span
      tabIndex={showTooltip ? 0 : undefined}
      className={cn(
        "metric-cell inline-block rounded-md px-2 py-0.5 font-mono tabular-nums text-sm",
        toneClass,
        showTooltip && "cursor-help",
        className,
      )}
      title={tooltip}
    >
      {formatted}
    </span>
  );
}
