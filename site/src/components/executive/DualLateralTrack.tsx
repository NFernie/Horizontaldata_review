import { useMemo } from "react";
import { JENA31_DUAL_CONSTITUENTS } from "@/config";
import { isConcernInterval } from "@/lib/concernZones";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import type { WellRecord } from "@/types/wells";
import { cn } from "@/lib/utils";

const TRACK_HEIGHT = 56;
const PADDING_X = 8;

const LATERAL_COLOURS: Record<string, string> = {
  JENA31: "var(--lateral-jena31)",
  JENA31DW1: "var(--lateral-jena31dw1)",
};

interface DualLateralTrackProps {
  label: string;
  intervals: IntervalRecord[];
  wells: WellRecord[];
  isolationDepths?: IsolationDepth[];
  className?: string;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function wellExtents(wells: WellRecord[], alias: string) {
  const well = wells.find((w) => w.alias === alias);
  const dc30 = well?.dc30 ?? 0;
  const td = well?.td ?? dc30 + 1;
  return { dc30, td };
}

export function DualLateralTrack({
  label,
  intervals,
  wells,
  isolationDepths = [],
  className,
}: DualLateralTrackProps) {
  const concerns = useMemo(() => intervals.filter(isConcernInterval), [intervals]);
  const hasConcerns = concerns.length > 0;
  const hasIsolation = isolationDepths.length > 0;

  const toX = (midMd: number, sourceLateral: string, width: number) => {
    const segment = sourceLateral === "JENA31" ? 0 : 1;
    const { dc30, td } = wellExtents(wells, sourceLateral);
    const normLat = clamp((midMd - dc30) / (td - dc30 || 1), 0, 1);
    const inner = width - PADDING_X * 2;
    return PADDING_X + (segment * 0.5 + normLat * 0.5) * inner;
  };

  const patternId = `dual-hatch-${label.replace(/\s+/g, "-")}`;

  return (
    <div className={cn("rounded-card border border-border bg-surface-2 p-3", className)}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">{label}</p>

      {!intervals.length ? (
        <p className="py-6 text-center text-xs text-text-muted">No interval data</p>
      ) : (
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 320 96"
            className="h-[96px] w-full min-w-[280px]"
            role="img"
            aria-label={`${label} dual lateral concern zones`}
          >
            <defs>
              <pattern
                id={patternId}
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(147,161,176,0.55)" strokeWidth="2" />
              </pattern>
            </defs>

            <line
              x1={PADDING_X + (320 - PADDING_X * 2) * 0.5}
              y1={8}
              x2={PADDING_X + (320 - PADDING_X * 2) * 0.5}
              y2={TRACK_HEIGHT + 8}
              stroke="var(--border)"
              strokeDasharray="3 3"
            />

            <text x={PADDING_X + 40} y={14} fill="var(--lateral-jena31)" fontSize="9" fontWeight="600">
              JENA 31
            </text>
            <text
              x={PADDING_X + (320 - PADDING_X * 2) * 0.5 + 12}
              y={14}
              fill="var(--lateral-jena31dw1)"
              fontSize="9"
              fontWeight="600"
            >
              JENA 31DW1
            </text>

            <line
              x1={PADDING_X}
              y1={TRACK_HEIGHT + 8}
              x2={320 - PADDING_X}
              y2={TRACK_HEIGHT + 8}
              stroke="var(--border)"
              strokeWidth="1"
            />

            {isolationDepths.map((band) => {
              const source =
                JENA31_DUAL_CONSTITUENTS.find((alias) => {
                  const { dc30, td } = wellExtents(wells, alias);
                  const mid = (band.top_md + band.bot_md) / 2;
                  return mid >= dc30 && mid <= td;
                }) ?? "JENA31";
              const x1 = toX(band.top_md, source, 320);
              const x2 = toX(band.bot_md, source, 320);
              return (
                <rect
                  key={`${band.top_md}-${band.bot_md}`}
                  x={Math.min(x1, x2)}
                  y={TRACK_HEIGHT - 20}
                  width={Math.max(Math.abs(x2 - x1), 2)}
                  height={28}
                  fill={`url(#${patternId})`}
                  opacity={0.9}
                />
              );
            })}

            {concerns.map((iv) => {
              const source = iv.source_lateral ?? "JENA31";
              const mid = (iv.top + iv.bot) / 2;
              const x = toX(mid, source, 320);
              const isHigh = iv.risk_class === "High";
              const isIsolated = iv.isolated === true;
              const color = LATERAL_COLOURS[source] ?? "var(--accent)";
              const radius = isHigh ? 5 : 4;
              const cy = TRACK_HEIGHT - 6;

              return (
                <g key={`${iv.depth}-${iv.top}-${source}`}>
                  {isIsolated ? (
                    <circle cx={x} cy={cy} r={radius} fill={color} />
                  ) : (
                    <circle
                      cx={x}
                      cy={cy}
                      r={radius}
                      fill="var(--surface-2)"
                      stroke={color}
                      strokeWidth="2"
                    />
                  )}
                </g>
              );
            })}
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
