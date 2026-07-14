import { useMemo } from "react";
import { FlagExplainContent } from "@/components/FlagExplainPopover";
import { SvgPopoverAnchor } from "@/components/Popover";
import { explainInterval } from "@/lib/flagExplain";
import { isConcernInterval } from "@/lib/concernZones";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import { cn } from "@/lib/utils";

const SVG_WIDTH = 320;
const TRACK_HEIGHT = 120;
const PADDING_X = 8;
const BASELINE_Y = TRACK_HEIGHT + 12;
const MARKER_Y = TRACK_HEIGHT - 36;

interface ConcernTrackProps {
  label: string;
  intervals: IntervalRecord[];
  isolationDepths?: IsolationDepth[];
  className?: string;
}

function depthSpan(intervals: IntervalRecord[]) {
  if (!intervals.length) return { min: 0, max: 1 };
  const min = Math.min(...intervals.map((iv) => iv.top));
  const max = Math.max(...intervals.map((iv) => iv.bot));
  return { min, max: max > min ? max : min + 1 };
}

export function ConcernTrack({
  label,
  intervals,
  isolationDepths = [],
  className,
}: ConcernTrackProps) {
  const { min: depthMin, max: depthMax } = useMemo(() => depthSpan(intervals), [intervals]);
  const concerns = useMemo(() => intervals.filter(isConcernInterval), [intervals]);
  const hasConcerns = concerns.length > 0;
  const hasIsolation = isolationDepths.length > 0;

  const toX = (md: number) => {
    const inner = SVG_WIDTH - PADDING_X * 2;
    const t = (md - depthMin) / (depthMax - depthMin || 1);
    return PADDING_X + t * inner;
  };

  const viewHeight = BASELINE_Y + 28;

  return (
    <div
      className={cn(
        "flex min-h-[280px] flex-col rounded-card border border-border bg-surface-2 p-4",
        className,
      )}
    >
      <p className="mb-3 text-sm font-semibold text-text">{label}</p>

      {!intervals.length ? (
        <p className="flex flex-1 items-center justify-center text-sm text-text-muted">
          No interval data
        </p>
      ) : (
        <div className="flex flex-1 flex-col justify-center overflow-x-auto">
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${viewHeight}`}
            className="h-[140px] w-full min-w-[300px]"
            role="img"
            aria-label={`${label} concern zones along measured depth`}
          >
            <line
              x1={PADDING_X}
              y1={BASELINE_Y}
              x2={SVG_WIDTH - PADDING_X}
              y2={BASELINE_Y}
              stroke="var(--border)"
              strokeWidth="1.5"
            />

            {isolationDepths.map((band) => {
              const x1 = toX(band.top_md);
              const x2 = toX(band.bot_md);
              return (
                <rect
                  key={`${band.top_md}-${band.bot_md}`}
                  x={Math.min(x1, x2)}
                  y={TRACK_HEIGHT - 52}
                  width={Math.max(Math.abs(x2 - x1), 3)}
                  height={52}
                  fill="var(--isolation-band-fill)"
                  stroke="var(--isolation-band-stroke)"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                  rx={2}
                />
              );
            })}

            {concerns.map((iv) => {
              const mid = (iv.top + iv.bot) / 2;
              const x = toX(mid);
              const isHigh = iv.risk_class === "High";
              const isIsolated = iv.isolated === true;
              const color = isHigh ? "var(--risk-high)" : "var(--risk-elev)";
              const radius = isHigh ? 8 : 6;
              const explain = explainInterval(iv);

              return (
                <g key={`${iv.depth}-${iv.top}`}>
                  <SvgPopoverAnchor
                    x={x}
                    y={MARKER_Y}
                    radius={radius}
                    label={`${iv.depth} m MD — ${iv.risk_class} risk`}
                    content={<FlagExplainContent explain={explain} />}
                  />
                  {isIsolated ? (
                    <circle cx={x} cy={MARKER_Y} r={radius} fill={color} pointerEvents="none" />
                  ) : (
                    <circle
                      cx={x}
                      cy={MARKER_Y}
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

            <text
              x={PADDING_X}
              y={viewHeight - 4}
              fill="var(--text-muted)"
              fontSize="11"
              fontFamily="JetBrains Mono, monospace"
            >
              {depthMin.toFixed(0)} m
            </text>
            <text
              x={SVG_WIDTH - PADDING_X}
              y={viewHeight - 4}
              fill="var(--text-muted)"
              fontSize="11"
              fontFamily="JetBrains Mono, monospace"
              textAnchor="end"
            >
              {depthMax.toFixed(0)} m MD
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
