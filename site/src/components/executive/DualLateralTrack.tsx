import { useMemo } from "react";
import { FlagExplainContent } from "@/components/FlagExplainPopover";
import { SvgPopoverAnchor } from "@/components/Popover";
import { JENA31_DUAL_CONSTITUENTS } from "@/config";
import { explainInterval } from "@/lib/flagExplain";
import { isConcernInterval } from "@/lib/concernZones";
import type { IntervalRecord, IsolationDepth } from "@/types/intervals";
import type { WellRecord } from "@/types/wells";
import { cn } from "@/lib/utils";

const SVG_WIDTH = 320;
const TRACK_HEIGHT = 120;
const PADDING_X = 8;
const BASELINE_Y = TRACK_HEIGHT + 12;
const MARKER_Y = TRACK_HEIGHT - 36;

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
  const viewHeight = BASELINE_Y + 28;

  const toX = (midMd: number, sourceLateral: string) => {
    const segment = sourceLateral === "JENA31" ? 0 : 1;
    const { dc30, td } = wellExtents(wells, sourceLateral);
    const normLat = clamp((midMd - dc30) / (td - dc30 || 1), 0, 1);
    const inner = SVG_WIDTH - PADDING_X * 2;
    return PADDING_X + (segment * 0.5 + normLat * 0.5) * inner;
  };

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
            aria-label={`${label} dual lateral concern zones`}
          >
            <line
              x1={PADDING_X + (SVG_WIDTH - PADDING_X * 2) * 0.5}
              y1={8}
              x2={PADDING_X + (SVG_WIDTH - PADDING_X * 2) * 0.5}
              y2={BASELINE_Y}
              stroke="var(--border)"
              strokeDasharray="4 4"
            />

            <text
              x={PADDING_X + 40}
              y={16}
              fill="var(--lateral-jena31)"
              fontSize="11"
              fontWeight="600"
            >
              JENA 31
            </text>
            <text
              x={PADDING_X + (SVG_WIDTH - PADDING_X * 2) * 0.5 + 12}
              y={16}
              fill="var(--lateral-jena31dw1)"
              fontSize="11"
              fontWeight="600"
            >
              JENA 31DW1
            </text>

            <line
              x1={PADDING_X}
              y1={BASELINE_Y}
              x2={SVG_WIDTH - PADDING_X}
              y2={BASELINE_Y}
              stroke="var(--border)"
              strokeWidth="1.5"
            />

            {isolationDepths.map((band) => {
              const source =
                JENA31_DUAL_CONSTITUENTS.find((alias) => {
                  const { dc30, td } = wellExtents(wells, alias);
                  const mid = (band.top_md + band.bot_md) / 2;
                  return mid >= dc30 && mid <= td;
                }) ?? "JENA31";
              const x1 = toX(band.top_md, source);
              const x2 = toX(band.bot_md, source);
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
              const source = iv.source_lateral ?? "JENA31";
              const mid = (iv.top + iv.bot) / 2;
              const x = toX(mid, source);
              const isHigh = iv.risk_class === "High";
              const isIsolated = iv.isolated === true;
              const color = LATERAL_COLOURS[source] ?? "var(--accent)";
              const radius = isHigh ? 8 : 6;
              const explain = explainInterval(iv);

              return (
                <g key={`${iv.depth}-${iv.top}-${source}`}>
                  <SvgPopoverAnchor
                    x={x}
                    y={MARKER_Y}
                    radius={radius}
                    label={`${iv.depth} m MD — ${source} — ${iv.risk_class}`}
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
