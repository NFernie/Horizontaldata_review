import { useCallback, useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent } from "react";
import {
  STRUCTURAL_CHART_HEIGHT_MAX,
  STRUCTURAL_CHART_HEIGHT_MIN,
  defaultChartHeight,
} from "@/lib/structuralChart";

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function readStoredHeight(key: string | undefined): number | null {
  if (!key) return null;
  try {
    const raw = sessionStorage.getItem(key);
    if (raw == null) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

function writeStoredHeight(key: string | undefined, value: number | null) {
  if (!key) return;
  try {
    if (value == null) sessionStorage.removeItem(key);
    else sessionStorage.setItem(key, String(Math.round(value)));
  } catch {
    // ignore quota errors
  }
}

export function useTrajectoryChartResize(storageKey: string | undefined, containerWidth: number) {
  const autoHeight = useMemo(
    () => defaultChartHeight(containerWidth),
    [containerWidth],
  );

  const [override, setOverride] = useState<number | null>(() => {
    const stored = readStoredHeight(storageKey);
    if (stored == null) return null;
    return clamp(stored, STRUCTURAL_CHART_HEIGHT_MIN, STRUCTURAL_CHART_HEIGHT_MAX);
  });

  const chartHeight = override ?? autoHeight;
  const isCustomized = override != null;

  const setChartHeight = useCallback(
    (next: number) => {
      const clamped = clamp(next, STRUCTURAL_CHART_HEIGHT_MIN, STRUCTURAL_CHART_HEIGHT_MAX);
      setOverride(clamped);
      writeStoredHeight(storageKey, clamped);
    },
    [storageKey],
  );

  const resetChartHeight = useCallback(() => {
    setOverride(null);
    writeStoredHeight(storageKey, null);
  }, [storageKey]);

  const onResizePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const startY = event.clientY;
      const startHeight = chartHeight;

      const onMove = (moveEvent: PointerEvent) => {
        setChartHeight(startHeight + (moveEvent.clientY - startY));
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [chartHeight, setChartHeight],
  );

  useEffect(() => {
    if (override == null) return;
    const clamped = clamp(override, STRUCTURAL_CHART_HEIGHT_MIN, STRUCTURAL_CHART_HEIGHT_MAX);
    if (clamped !== override) setOverride(clamped);
  }, [override]);

  return {
    chartHeight,
    setChartHeight,
    resetChartHeight,
    isCustomized,
    onResizePointerDown,
    minHeight: STRUCTURAL_CHART_HEIGHT_MIN,
    maxHeight: STRUCTURAL_CHART_HEIGHT_MAX,
  };
}
