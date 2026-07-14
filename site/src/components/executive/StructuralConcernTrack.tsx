import { useEffect, useId, useMemo, useRef, useState } from "react";
import { FlagExplainContent } from "@/components/FlagExplainPopover";
import { SvgPopoverAnchor } from "@/components/Popover";
import { explainInterval } from "@/lib/flagExplain";
import { isConcernInterval } from "@/lib/concernZones";
import {
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
  structuralViewHeight,
  trajectoryPolyline,
} from "@/lib/structuralChart";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import type { TrajectoryPayload } from "@/types/trajectory";
import { cn } from "@/lib/utils";

const MIN_CHART_WIDTH = 280;
const DEFAULT_VIEW_HEIGHT = structuralViewHeight();

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
  /** Dual-lateral column — suppress outer card chrome when nested */
  embedded?: boolean;
}

function useChartSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: MIN_CHART_WIDTH, height: DEFAULT_VIEW_HEIGHT });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const width = Math.max(MIN_CHART_WIDTH, Math.round(el.clientWidth));
      const height = Math.max(DEFAULT_VIEW_HEIGHT, Math.round(el.clientHeight));
      setSize((prev) =>
        prev.width === width && prev.height === height ? prev : { width, height },
      );
    };

    const observer = new ResizeObserver(update);
    observer.observe(el);
    update();
    return () => observer.disconnect();
  }, []);

  return { ref, ...size };
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
  embedded = false,
}: StructuralConcernTrackProps) {
  const uid = useId().replace(/:/g, "");
  const { ref, width, height } = useChartSize();

  const concerns = useMemo(() => intervals.filter(isConcernInterval), [intervals]);
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

    const { plotLeft, plotRight, plotTop, plotBottom } = computePlotArea(width, height);
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
  }, [owc, lateralStations, lateralWindow, width, height]);

  const shellClass = embedded
    ? "flex min-h-0 flex-col"
    : "flex min-h-[420px] flex-col rounded-card border border-border bg-surface-2 p-4";

  return (
    <div className={cn(shellClass, className)}>
      <p className={cn("font-semibold text-text", embedded ? "mb-2 text-xs" : "mb-3 text-sm")}>
        {label}
      </p>

      {!intervals.length ? (
        <p className="flex flex-1 items-center justify-center text-sm text-text-muted">
          No interval data
        </p>
      ) : owc == null || !chart ? (
        <p className="flex flex-1 items-center justify-center text-sm text-text-muted">
          Trajectory / OWC data unavailable
        </p>
      ) : (
        <div ref={ref} className="min-h-[210px] w-full flex-1">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="block h-full w-full"
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

            {/* Plot frame */}
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

            {/* Y-axis ticks + labels */}
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
              fontSize="11"
              fontWeight="600"
              transform={`rotate(-90 12 ${(chart.plotTop + chart.plotBottom) / 2})`}
            >
              mTVDss
            </text>

            {/* Hard floor */}
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
              fontSize="10"
              fontWeight="600"
            >
              Hard +3m
            </text>

            {/* OWC */}
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
              fontSize="10"
              fontWeight="600"
            >
              OWC
            </text>

            {/* Isolation corridors along trajectory */}
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

            {/* Trajectory polyline */}
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

            {/* Concern markers */}
            {concerns.map((iv) => {
              const mid = (iv.top + iv.bot) / 2;
              const color =
                markerColor?.(iv) ??
                (iv.risk_class === "High" ? "var(--risk-high)" : "var(--risk-elev)");
              const isHigh = iv.risk_class === "High";
              const isIsolated = iv.isolated === true;
              const radius = isHigh ? 8 : 6;
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

            {/* X-axis baseline + ticks */}
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
              y={height - 4}
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="11"
              fontWeight="600"
            >
              MD (m)
            </text>
          </svg>
        </div>
      )}

      {!hasConcerns ? (
        <p className="mt-2 text-sm text-text-muted">No Elevated or High intervals</p>
      ) : null}
      {!hasIsolation && intervals.length > 0 ? (
        <p className="mt-1 text-xs text-text-muted/80">No mechanical isolation on file</p>
      ) : null}
    </div>
  );
}

/** @deprecated Use StructuralConcernTrack — kept for import stability during Phase F. */
export const ConcernTrack = StructuralConcernTrack;
