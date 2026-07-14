import { useMemo } from "react";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import { isConcernInterval } from "@/lib/concernZones";
import { cn } from "@/lib/utils";

const TRACK_HEIGHT = 56;
const PADDING_X = 8;

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

  const toX = (md: number, width: number) => {
    const inner = width - PADDING_X * 2;
    const t = (md - depthMin) / (depthMax - depthMin || 1);
    return PADDING_X + t * inner;
  };

  return (
    <div className={cn("rounded-card border border-border bg-surface-2 p-3", className)}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">{label}</p>

      {!intervals.length ? (
        <p className="py-6 text-center text-xs text-text-muted">No interval data</p>
      ) : (
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 320 88"
            className="h-[88px] w-full min-w-[280px]"
            role="img"
            aria-label={`${label} concern zones along measured depth`}
          >
            <defs>
              <pattern
                id={`iso-hatch-${label.replace(/\s+/g, "-")}`}
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="6"
                  stroke="rgba(147,161,176,0.55)"
                  strokeWidth="2"
                />
              </pattern>
            </defs>

            {/* Baseline */}
            <line
              x1={PADDING_X}
              y1={TRACK_HEIGHT}
              x2={320 - PADDING_X}
              y2={TRACK_HEIGHT}
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Isolation bands */}
            {isolationDepths.map((band) => {
              const x1 = toX(band.top_md, 320);
              const x2 = toX(band.bot_md, 320);
              return (
                <rect
                  key={`${band.top_md}-${band.bot_md}`}
                  x={Math.min(x1, x2)}
                  y={TRACK_HEIGHT - 28}
                  width={Math.max(Math.abs(x2 - x1), 2)}
                  height={28}
                  fill={`url(#iso-hatch-${label.replace(/\s+/g, "-")})`}
                  opacity={0.9}
                />
              );
            })}

            {/* Concern markers */}
            {concerns.map((iv) => {
              const mid = (iv.top + iv.bot) / 2;
              const x = toX(mid, 320);
              const isHigh = iv.risk_class === "High";
              const isIsolated = iv.isolated === true;
              const color = isHigh ? "var(--risk-high)" : "var(--risk-elev)";
              const radius = isHigh ? 5 : 4;

              return (
                <g key={`${iv.depth}-${iv.top}`}>
                  {isIsolated ? (
                    <circle cx={x} cy={TRACK_HEIGHT - 14} r={radius} fill={color} />
                  ) : (
                    <circle
                      cx={x}
                      cy={TRACK_HEIGHT - 14}
                      r={radius}
                      fill="var(--surface-2)"
                      stroke={color}
                      strokeWidth="2"
                    />
                  )}
                </g>
              );
            })}

            {/* Depth labels */}
            <text x={PADDING_X} y={80} fill="var(--text-muted)" fontSize="9" fontFamily="monospace">
              {depthMin.toFixed(0)} m
            </text>
            <text
              x={320 - PADDING_X}
              y={80}
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="monospace"
              textAnchor="end"
            >
              {depthMax.toFixed(0)} m MD
            </text>
          </svg>
        </div>
      )}

      {!hasConcerns ? (
        <p className="mt-1 text-xs text-text-muted">No Elevated or High intervals</p>
      ) : null}
      {!hasIsolation && intervals.length > 0 ? (
        <p className="mt-1 text-xs text-text-muted/80">No isolation on file</p>
      ) : null}
    </div>
  );
}
