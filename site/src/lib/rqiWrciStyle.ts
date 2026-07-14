import { RQI_THRESHOLD, WRCI_HIGH_THRESHOLD } from "@/config";

export type MetricTone = "rqi" | "wrci";

export function isValidMetricValue(value: number | null | undefined): value is number {
  return value != null && !Number.isNaN(value);
}

export function rqiCellClass(rqi: number | null | undefined): string {
  if (!isValidMetricValue(rqi)) return "metric-cell--null";
  return rqi > RQI_THRESHOLD ? "metric-cell--rqi-high" : "metric-cell--rqi-low";
}

export function wrciCellClass(wrci: number | null | undefined): string {
  if (!isValidMetricValue(wrci)) return "metric-cell--null";
  return wrci > WRCI_HIGH_THRESHOLD ? "metric-cell--wrci-high" : "metric-cell--wrci-low";
}

export function metricCellClass(metric: MetricTone, value: number | null | undefined): string {
  return metric === "rqi" ? rqiCellClass(value) : wrciCellClass(value);
}

export function formatRqiValue(value: number | null | undefined): string {
  if (!isValidMetricValue(value)) return "—";
  return value.toFixed(2);
}

export function formatWrciValue(value: number | null | undefined): string {
  if (!isValidMetricValue(value)) return "—";
  return value.toFixed(1);
}

export function formatMetricValue(metric: MetricTone, value: number | null | undefined): string {
  return metric === "rqi" ? formatRqiValue(value) : formatWrciValue(value);
}
