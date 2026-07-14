import { useCallback, useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent } from "react";
import {
  STRUCTURAL_CHART_HEIGHT_MAX,
  STRUCTURAL_CHART_HEIGHT_MIN,
  STRUCTURAL_CHART_WIDTH_MAX,
  STRUCTURAL_CHART_WIDTH_MIN,
  defaultChartHeight,
} from "@/lib/structuralChart";

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function storageSuffix(key: string | undefined, dim: "w" | "h") {
  return key ? `${key}:${dim}` : undefined;
}

function readStored(key: string | undefined): number | null {
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

function readStoredHeight(heightKey: string | undefined, legacyKey: string | undefined): number | null {
  const stored = readStored(heightKey);
  if (stored != null) return stored;
  return readStored(legacyKey);
}

function writeStored(key: string | undefined, value: number | null) {
  if (!key) return;
  try {
    if (value == null) sessionStorage.removeItem(key);
    else sessionStorage.setItem(key, String(Math.round(value)));
  } catch {
    // ignore quota errors
  }
}

export function useTrajectoryChartResize(storageKey: string | undefined, parentWidth: number) {
  const widthKey = storageSuffix(storageKey, "w");
  const heightKey = storageSuffix(storageKey, "h");

  const [widthOverride, setWidthOverride] = useState<number | null>(() => {
    const stored = readStored(widthKey);
    if (stored == null) return null;
    return clamp(stored, STRUCTURAL_CHART_WIDTH_MIN, STRUCTURAL_CHART_WIDTH_MAX);
  });

  const [heightOverride, setHeightOverride] = useState<number | null>(() => {
    const stored = readStoredHeight(heightKey, storageKey);
    if (stored == null) return null;
    return clamp(stored, STRUCTURAL_CHART_HEIGHT_MIN, STRUCTURAL_CHART_HEIGHT_MAX);
  });

  const chartWidth = widthOverride ?? Math.max(STRUCTURAL_CHART_WIDTH_MIN, parentWidth);
  const autoHeight = useMemo(() => defaultChartHeight(chartWidth), [chartWidth]);
  const chartHeight = heightOverride ?? autoHeight;
  const isCustomized = widthOverride != null || heightOverride != null;

  const setChartWidth = useCallback(
    (next: number) => {
      const clamped = clamp(next, STRUCTURAL_CHART_WIDTH_MIN, STRUCTURAL_CHART_WIDTH_MAX);
      setWidthOverride(clamped);
      writeStored(widthKey, clamped);
    },
    [widthKey],
  );

  const setChartHeight = useCallback(
    (next: number) => {
      const clamped = clamp(next, STRUCTURAL_CHART_HEIGHT_MIN, STRUCTURAL_CHART_HEIGHT_MAX);
      setHeightOverride(clamped);
      writeStored(heightKey, clamped);
    },
    [heightKey],
  );

  const resetChartSize = useCallback(() => {
    setWidthOverride(null);
    setHeightOverride(null);
    writeStored(widthKey, null);
    writeStored(heightKey, null);
    writeStored(storageKey, null);
  }, [widthKey, heightKey, storageKey]);

  const onResizeHeightPointerDown = useCallback(
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

  const onResizeWidthPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const startX = event.clientX;
      const startWidth = chartWidth;

      const onMove = (moveEvent: PointerEvent) => {
        setChartWidth(startWidth + (moveEvent.clientX - startX));
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [chartWidth, setChartWidth],
  );

  const onResizeCornerPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const startX = event.clientX;
      const startY = event.clientY;
      const startWidth = chartWidth;
      const startHeight = chartHeight;

      const onMove = (moveEvent: PointerEvent) => {
        setChartWidth(startWidth + (moveEvent.clientX - startX));
        setChartHeight(startHeight + (moveEvent.clientY - startY));
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    },
    [chartWidth, chartHeight, setChartWidth, setChartHeight],
  );

  useEffect(() => {
    if (widthOverride == null) return;
    const clamped = clamp(widthOverride, STRUCTURAL_CHART_WIDTH_MIN, STRUCTURAL_CHART_WIDTH_MAX);
    if (clamped !== widthOverride) setWidthOverride(clamped);
  }, [widthOverride]);

  useEffect(() => {
    if (heightOverride == null) return;
    const clamped = clamp(heightOverride, STRUCTURAL_CHART_HEIGHT_MIN, STRUCTURAL_CHART_HEIGHT_MAX);
    if (clamped !== heightOverride) setHeightOverride(clamped);
  }, [heightOverride]);

  return {
    chartWidth,
    chartHeight,
    setChartWidth,
    setChartHeight,
    resetChartSize,
    isCustomized,
    onResizeHeightPointerDown,
    onResizeWidthPointerDown,
    onResizeCornerPointerDown,
    minWidth: STRUCTURAL_CHART_WIDTH_MIN,
    maxWidth: STRUCTURAL_CHART_WIDTH_MAX,
    minHeight: STRUCTURAL_CHART_HEIGHT_MIN,
    maxHeight: STRUCTURAL_CHART_HEIGHT_MAX,
  };
}
