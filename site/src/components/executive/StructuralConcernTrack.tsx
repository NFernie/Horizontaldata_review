import { useEffect, useId, useMemo, useRef, useState } from "react";
import { FlagExplainContent } from "@/components/FlagExplainPopover";
import { SvgPopoverAnchor } from "@/components/Popover";
import { useTrajectoryChartResize } from "@/hooks/useTrajectoryChartResize";
import { explainInterval } from "@/lib/flagExplain";
import { isConcernInterval } from "@/lib/concernZones";
import {
  STRUCTURAL_CHART_WIDTH_MIN,
  STRUCTURAL_AXIS_LABEL_FONT,
  STRUCTURAL_MICRO_LABEL_FONT,
  STRUCTURAL_MIN_TICK_FONT,
  computePlotArea,
  computeYRange,
  createLinearScale,
  createMtvdsScale,
  filterLateralStations,
  generateMdTicks,
  generateMtvdsTicks,
  hardFloorMtvds,
  isolationCorridorPath,
  markerPosition,
  trajectoryPolyline,
} from "@/lib/structuralChart";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import type { TrajectoryPayload } from "@/types/trajectory";
import { cn } from "@/lib/utils";

const MIN_PARENT_WIDTH = STRUCTURAL_CHART_WIDTH_MIN;

function useParentWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(MIN_PARENT_WIDTH);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setParentWidth(Math.max(MIN_PARENT_WIDTH, Math.round(el.clientWidth)));
    };

    const observer = new ResizeObserver(update);
    observer.observe(el);
    update();
    return () => observer.disconnect();
  }, []);

  return { ref, parentWidth };
}

interface StructuralConcernTrackProps {
  label: string;
  intervals: IntervalRecord[];
  isolationDepths?: IsolationDepth[];
  trajectory: TrajectoryPayload | null;
  owcMtvds?: number | null;
  mdStart?: number;
  mdEnd?: number;
  markerColor?: (interval: IntervalRecord) => string;
  className?: string;
  /** sessionStorage key prefix for user-resized chart dimensions */
  resizeKey?: string;
  /** Dual-lateral column — suppress outer card chrome when nested */
  embedded?: boolean;
  /** When false, hide Elevated risk markers on the trajectory */
  showElevated?: boolean;
  /** When false, hide High risk markers on the trajectory */
  showHigh?: boolean;
}

export function StructuralConcernTrack({
  label,
  intervals,
  isolationDepths = [],
  trajectory,
  owcMtvds,
  mdStart,
  mdEnd,
  markerColor,
  className,
  resizeKey,
  embedded = false,
  showElevated = true,
  showHigh = true,
}: StructuralConcernTrackProps) {
  const uid = useId().replace(/:/g, "");
  const { ref: parentRef, parentWidth } = useParentWidth();
  const {
    chartWidth,
    chartHeight,
    setChartWidth,
    setChartHeight,
    resetChartSize,
    isCustomized,
    onResizeHeightPointerDown,
    onResizeWidthPointerDown,
    onResizeCornerPointerDown,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
  } = useTrajectoryChartResize(resizeKey, parentWidth);

  const concerns = useMemo(
    () =>
      intervals.filter(isConcernInterval).filter((iv) => {
        if (iv.risk_class === "Elevated" && !showElevated) return false;
        if (iv.risk_class === "High" && !showHigh) return false;
        return true;
      }),
    [intervals, showElevated, showHigh],
  );
  const hasConcerns = concerns.length > 0;
  const hasIsolation = isolationDepths.length > 0;

  const lateralWindow = useMemo(() => {
    const win = trajectory?.lateral_window;
    const start = mdStart ?? win?.md_start ?? Math.min(...intervals.map((iv) => iv.top), 0);
    const end =
      mdEnd ??
      win?.md_end ??
      Math.max(...intervals.map((iv) => iv.bot), start + 1);
    return { mdStart: start, mdEnd: end };
  }, [trajectory, mdStart, mdEnd, intervals]);

  const owc = owcMtvds ?? trajectory?.owc_mtvds ?? null;
  const stations = trajectory?.stations ?? [];
  const lateralStations = useMemo(
    () => filterLateralStations(stations, lateralWindow.mdStart, lateralWindow.mdEnd),
    [stations, lateralWindow],
  );

  const chart = useMemo(() => {
    if (owc == null) return null;

    const { plotLeft, plotRight, plotTop, plotBottom } = computePlotArea(chartWidth, chartHeight);
    const { yMin, yMax } = computeYRange(owc, lateralStations);
    const xScale = createLinearScale(
      [lateralWindow.mdStart, lateralWindow.mdEnd],
      [plotLeft, plotRight],
    );
    const yScale = createMtvdsScale(yMin, yMax, plotTop, plotBottom);
    const hardFloor = hardFloorMtvds(owc);
    const mdTicks = generateMdTicks(lateralWindow.mdStart, lateralWindow.mdEnd);
    const mtvdsTicks = generateMtvdsTicks(yMin, yMax);
    const trajPath = trajectoryPolyline(lateralStations, xScale, yScale);

    return {
      plotLeft,
      plotRight,
      plotTop,
      plotBottom,
      xScale,
      yScale,
      owc,
      hardFloor,
      mdTicks,
      mtvdsTicks,
      trajPath,
      yMin,
      yMax,
    };
  }, [owc, lateralStations, lateralWindow, chartWidth, chartHeight]);

  const shellClass = embedded
    ? "flex min-h-0 flex-col"
    : "flex flex-col rounded-card border border-border bg-surface-2 p-3";

  return (
    <div className={cn(shellClass, className)}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <p
          className={cn(
            "font-semibold text-text",
            embedded ? "text-[8px]" : "text-[18px]",
          )}
        >
          {label}
        </p>
        {intervals.length > 0 && owc != null ? (
          <div className="flex shrink-0 items-center gap-2">
            <label htmlFor={`${uid}-width`} className="sr-only">
              Trajectory chart width
            </label>
            <input
              id={`${uid}-width`}
              type="range"
              min={minWidth}
              max={maxWidth}
              step={8}
              value={chartWidth}
              onChange={(e) => setChartWidth(Number(e.target.value))}
              className="h-1 w-14 cursor-pointer accent-accent"
              aria-label="Trajectory chart width"
            />
            <label htmlFor={`${uid}-height`} className="sr-only">
              Trajectory chart height
            </label>
            <input
              id={`${uid}-height`}
              type="range"
              min={minHeight}
              max={maxHeight}
              step={4}
              value={chartHeight}
              onChange={(e) => setChartHeight(Number(e.target.value))}
              className="h-1 w-14 cursor-pointer accent-accent"
              aria-label="Trajectory chart height"
            />
            {isCustomized ? (
              <button
                type="button"
                onClick={resetChartSize}
                className="text-[8px] text-accent hover:underline"
              >
                Reset
              </button>
            ) : null}
          </div>
        ) : null}
      </div>

      {!intervals.length ? (
        <p className="flex flex-1 items-center justify-center text-[9px] text-text-muted">
          No interval data
        </p>
      ) : owc == null || !chart ? (
        <p className="flex flex-1 items-center justify-center text-[9px] text-text-muted">
          Trajectory / OWC data unavailable
        </p>
      ) : (
        <div ref={parentRef} className="w-full overflow-x-auto">
          <div
            className="relative"
            style={{ width: chartWidth, height: chartHeight, maxWidth: "none" }}
          >
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            width={chartWidth}
            height={chartHeight}
            className="block"
            role="img"
            aria-label={`${label} structural concern track MD versus mTVDss`}
          >
            <defs>
              <pattern
                id={`iso-hatch-${uid}`}
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                <rect width="4" height="8" fill="var(--isolation-hatch-stripe)" />
                <rect x="4" width="4" height="8" fill="var(--isolation-hatch-fill)" />
              </pattern>
            </defs>

            <rect
              x={chart.plotLeft}
              y={chart.plotTop}
              width={chart.plotRight - chart.plotLeft}
              height={chart.plotBottom - chart.plotTop}
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1"
              rx="2"
            />

            {chart.mtvdsTicks.map((tick) => {
              const y = chart.yScale(tick);
              return (
                <g key={`yt-${tick}`}>
                  <line
                    x1={chart.plotLeft}
                    x2={chart.plotRight}
                    y1={y}
                    y2={y}
                    stroke="var(--border)"
                    strokeWidth="0.5"
                    strokeDasharray="3 4"
                    opacity="0.45"
                  />
                  <text
                    x={chart.plotLeft - 6}
                    y={y + 4}
                    textAnchor="end"
                    fill="var(--text-muted)"
                    fontSize={STRUCTURAL_MIN_TICK_FONT}
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {tick.toFixed(0)}
                  </text>
                </g>
              );
            })}
            <text
              x={12}
              y={(chart.plotTop + chart.plotBottom) / 2}
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize={STRUCTURAL_AXIS_LABEL_FONT}
              fontWeight="600"
              transform={`rotate(-90 12 ${(chart.plotTop + chart.plotBottom) / 2})`}
            >
              mTVDss
            </text>

            <line
              x1={chart.plotLeft}
              x2={chart.plotRight}
              y1={chart.yScale(chart.hardFloor)}
              y2={chart.yScale(chart.hardFloor)}
              stroke="var(--hard-floor-line)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <text
              x={chart.plotRight - 4}
              y={chart.yScale(chart.hardFloor) - 4}
              textAnchor="end"
              fill="var(--hard-floor-line)"
              fontSize={STRUCTURAL_MICRO_LABEL_FONT}
              fontWeight="600"
            >
              Hard +3m
            </text>

            <line
              x1={chart.plotLeft}
              x2={chart.plotRight}
              y1={chart.yScale(chart.owc)}
              y2={chart.yScale(chart.owc)}
              stroke="var(--owc-line)"
              strokeWidth="2"
            />
            <text
              x={chart.plotRight - 4}
              y={chart.yScale(chart.owc) - 4}
              textAnchor="end"
              fill="var(--owc-line)"
              fontSize={STRUCTURAL_MICRO_LABEL_FONT}
              fontWeight="600"
            >
              OWC
            </text>

            {isolationDepths.map((band) => {
              const corridor = isolationCorridorPath(
                lateralStations.length ? lateralStations : stations,
                band.top_md,
                band.bot_md,
                chart.xScale,
                chart.yScale,
              );
              if (!corridor) return null;
              return (
                <path
                  key={`${band.top_md}-${band.bot_md}`}
                  d={corridor}
                  fill={`url(#iso-hatch-${uid})`}
                  stroke="none"
                />
              );
            })}

            {chart.trajPath ? (
              <path
                d={chart.trajPath}
                fill="none"
                stroke="var(--trajectory-line)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
            ) : null}

            {concerns.map((iv) => {
              const mid = (iv.top + iv.bot) / 2;
              const color =
                markerColor?.(iv) ??
                (iv.risk_class === "High" ? "var(--risk-high)" : "var(--risk-elev)");
              const isHigh = iv.risk_class === "High";
              const isIsolated = iv.isolated === true;
              const radius = isHigh ? 5 : 4;
              const explain = explainInterval(iv);
              const { x, y } = markerPosition(
                mid,
                iv.mTVDss,
                stations,
                chart.xScale,
                chart.yScale,
              );

              return (
                <g key={`${iv.depth}-${iv.top}`}>
                  <SvgPopoverAnchor
                    x={x}
                    y={y}
                    radius={radius}
                    label={`${iv.depth} m MD — ${iv.risk_class} risk`}
                    content={<FlagExplainContent explain={explain} />}
                  />
                  {isIsolated ? (
                    <circle cx={x} cy={y} r={radius} fill={color} pointerEvents="none" />
                  ) : (
                    <circle
                      cx={x}
                      cy={y}
                      r={radius}
                      fill="var(--surface-2)"
                      stroke={color}
                      strokeWidth="2.5"
                      pointerEvents="none"
                    />
                  )}
                </g>
              );
            })}

            <line
              x1={chart.plotLeft}
              x2={chart.plotRight}
              y1={chart.plotBottom}
              y2={chart.plotBottom}
              stroke="var(--border)"
              strokeWidth="1.5"
            />
            {chart.mdTicks.map((tick) => {
              const x = chart.xScale(tick);
              return (
                <g key={`xt-${tick}`}>
                  <line
                    x1={x}
                    x2={x}
                    y1={chart.plotBottom}
                    y2={chart.plotBottom + 5}
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={chart.plotBottom + 20}
                    textAnchor="middle"
                    fill="var(--text-muted)"
                    fontSize={STRUCTURAL_MIN_TICK_FONT}
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {tick.toFixed(0)}
                  </text>
                </g>
              );
            })}
            <text
              x={(chart.plotLeft + chart.plotRight) / 2}
              y={chartHeight - 4}
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize={STRUCTURAL_AXIS_LABEL_FONT}
              fontWeight="600"
            >
              MD (m)
            </text>
          </svg>

          <button
            type="button"
            className="absolute inset-x-0 bottom-0 flex h-4 cursor-ns-resize items-end justify-center border-0 bg-transparent pb-0.5"
            aria-label="Drag to resize trajectory chart height"
            onPointerDown={onResizeHeightPointerDown}
          >
            <span className="h-1 w-12 rounded-full bg-border transition-colors hover:bg-text-muted" />
          </button>
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex w-4 cursor-ew-resize items-center justify-end border-0 bg-transparent pr-0.5"
            aria-label="Drag to resize trajectory chart width"
            onPointerDown={onResizeWidthPointerDown}
          >
            <span className="h-12 w-1 rounded-full bg-border transition-colors hover:bg-text-muted" />
          </button>
          <button
            type="button"
            className="absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize border-0 bg-transparent"
            aria-label="Drag to resize trajectory chart width and height"
            onPointerDown={onResizeCornerPointerDown}
          >
            <span className="absolute bottom-1 right-1 h-2 w-2 rounded-sm border border-border bg-surface-2" />
          </button>
          </div>
        </div>
      )}

      {!hasConcerns ? (
        <p className="mt-1.5 text-[9px] text-text-muted">No Elevated or High intervals</p>
      ) : null}
      {!hasIsolation && intervals.length > 0 ? (
        <p className="mt-1 text-[8px] text-text-muted/80">No mechanical isolation on file</p>
      ) : null}
    </div>
  );
}

/** @deprecated Use StructuralConcernTrack — kept for import stability during Phase F. */
export const ConcernTrack = StructuralConcernTrack;
