import { useMemo } from "react";
import type { IntervalRecord } from "@/types/intervals";
import type { ExclusionZone } from "@/types/zones";
import { cn, formatDepthMd } from "@/lib/utils";

const TRACK_WIDTH = 64;
const DEPTH_AXIS_WIDTH = 88;
const HEADER_HEIGHT = 28;
const FOOTER_HEIGHT = 8;
const PLOT_HEIGHT = 520;

type ScaleKind = "linear" | "log";

interface TrackDef {
  id: string;
  label: string;
  unit?: string;
  scale: ScaleKind;
  domain: [number, number];
  getPrimary: (iv: IntervalRecord) => number | null | undefined;
  getSecondary?: (iv: IntervalRecord) => number | null | undefined;
  primaryColor: string;
  secondaryColor?: string;
  riskTrack?: boolean;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function linearColor(value: number, domain: [number, number], hue: string) {
  const t = clamp((value - domain[0]) / (domain[1] - domain[0] || 1), 0, 1);
  const alpha = 0.35 + t * 0.65;
  return `color-mix(in srgb, ${hue} ${Math.round(alpha * 100)}%, var(--surface))`;
}

function logNorm(value: number, domain: [number, number]) {
  const lo = Math.log10(Math.max(domain[0], 0.1));
  const hi = Math.log10(Math.max(domain[1], 0.1));
  const v = Math.log10(Math.max(value, 0.1));
  return clamp((v - lo) / (hi - lo || 1), 0, 1);
}

function riskColor(wrci: number | null, riskClass: string) {
  if (riskClass === "High") return "var(--risk-high)";
  if (riskClass === "Elevated") return "var(--risk-elev)";
  if (wrci != null && wrci >= 40) return "var(--risk-elev)";
  return "var(--risk-low)";
}

function toNumeric(val: number | null | undefined): number | null {
  if (val == null || Number.isNaN(val)) return null;
  return val;
}

function computeDomains(intervals: IntervalRecord[]) {
  const gr = intervals.map((i) => i.log?.avg_GR).filter((v): v is number => v != null);
  const resD = intervals
    .map((i) => i.log?.avg_RES_DEEP)
    .filter((v): v is number => v != null && v > 0);
  const resS = intervals
    .map((i) => i.log?.avg_RES_SHALLOW)
    .filter((v): v is number => v != null && v > 0);
  const resAll = [...resD, ...resS];

  return {
    gr: [0, Math.max(120, ...(gr.length ? gr : [120]))] as [number, number],
    res: [0.5, Math.max(10, ...(resAll.length ? resAll : [100]))] as [number, number],
  };
}

function nearestMtvds(intervals: IntervalRecord[], md: number): number | null {
  let best: IntervalRecord | null = null;
  let bestDist = Infinity;
  for (const iv of intervals) {
    const mid = (iv.top + iv.bot) / 2;
    const d = Math.abs(mid - md);
    if (d < bestDist) {
      bestDist = d;
      best = iv;
    }
  }
  return best?.mTVDss ?? null;
}

interface DepthTracksProps {
  intervals: IntervalRecord[];
  zones: ExclusionZone[];
  className?: string;
}

export function DepthTracks({ intervals, zones, className }: DepthTracksProps) {
  const domains = useMemo(() => computeDomains(intervals), [intervals]);

  const depthMin = useMemo(() => Math.min(...intervals.map((i) => i.top)), [intervals]);
  const depthMax = useMemo(() => Math.max(...intervals.map((i) => i.bot)), [intervals]);

  const tracks: TrackDef[] = useMemo(
    () => [
      {
        id: "gr",
        label: "GR",
        unit: "gAPI",
        scale: "linear",
        domain: domains.gr,
        getPrimary: (i) => i.log?.avg_GR,
        primaryColor: "var(--accent)",
      },
      {
        id: "res",
        label: "RES",
        unit: "ohm.m",
        scale: "log",
        domain: domains.res,
        getPrimary: (i) => i.log?.avg_RES_DEEP,
        getSecondary: (i) => i.log?.avg_RES_SHALLOW,
        primaryColor: "var(--res-high)",
        secondaryColor: "var(--res-low)",
      },
      {
        id: "ss",
        label: "%SS",
        scale: "linear",
        domain: [0, 100],
        getPrimary: (i) => toNumeric(i.pct_ss),
        primaryColor: "var(--rock-quality-start)",
      },
      {
        id: "fluor",
        label: "Fluor",
        unit: "%",
        scale: "linear",
        domain: [0, 100],
        getPrimary: (i) => toNumeric(i.fluor),
        primaryColor: "#a78bfa",
      },
      {
        id: "grain",
        label: "Grain",
        scale: "linear",
        domain: [0, 5],
        getPrimary: (i) => i.grain_ordinal,
        primaryColor: "var(--rock-quality-end)",
      },
      {
        id: "rqi",
        label: "RQI",
        scale: "linear",
        domain: [0, 1],
        getPrimary: (i) => i.RQI,
        primaryColor: "var(--accent)",
      },
      {
        id: "wrci",
        label: "WRCI",
        scale: "linear",
        domain: [0, 100],
        getPrimary: (i) => i.WRCI,
        primaryColor: "var(--risk-elev)",
        riskTrack: true,
      },
    ],
    [domains],
  );

  const totalWidth = DEPTH_AXIS_WIDTH + tracks.length * TRACK_WIDTH;
  const totalHeight = HEADER_HEIGHT + PLOT_HEIGHT + FOOTER_HEIGHT;

  const depthToY = (d: number) =>
    HEADER_HEIGHT + ((d - depthMin) / (depthMax - depthMin || 1)) * PLOT_HEIGHT;

  const ticks = useMemo(() => {
    const span = depthMax - depthMin;
    const step = span > 800 ? 200 : span > 400 ? 100 : 50;
    const start = Math.ceil(depthMin / step) * step;
    const result: number[] = [];
    for (let d = start; d <= depthMax; d += step) result.push(d);
    return result;
  }, [depthMin, depthMax]);

  return (
    <div className={cn("overflow-x-auto rounded-card border border-border bg-surface", className)}>
      <svg
        width={totalWidth}
        height={totalHeight}
        role="img"
        aria-label="Depth tracks for wireline and cuttings properties"
        className="min-w-full"
      >
        <g>
          {zones.map((z) => (
            <rect
              key={`${z.entry}-${z.re_entry}`}
              x={DEPTH_AXIS_WIDTH}
              y={depthToY(z.entry)}
              width={tracks.length * TRACK_WIDTH}
              height={Math.max(1, depthToY(z.re_entry) - depthToY(z.entry))}
              fill="rgba(147,161,176,0.18)"
              stroke="rgba(147,161,176,0.35)"
              strokeWidth={0.5}
            />
          ))}
        </g>

        <g fontSize={9} fill="var(--text-muted)" fontFamily="JetBrains Mono, monospace">
          <text x={8} y={14} fontSize={11} fill="var(--text)" fontWeight={600}>
            Depth
          </text>
          {ticks.map((d) => {
            const mtvds = nearestMtvds(intervals, d);
            return (
              <g key={d}>
                <line
                  x1={DEPTH_AXIS_WIDTH - 4}
                  x2={totalWidth}
                  y1={depthToY(d)}
                  y2={depthToY(d)}
                  stroke="var(--border)"
                  strokeWidth={0.5}
                  strokeDasharray="2 4"
                />
                <text x={4} y={depthToY(d) + 3}>
                  {formatDepthMd(d, mtvds, 0)}
                </text>
              </g>
            );
          })}
        </g>

        {tracks.map((track, idx) => {
          const x = DEPTH_AXIS_WIDTH + idx * TRACK_WIDTH;
          return (
            <g key={track.id}>
              <rect
                x={x}
                y={0}
                width={TRACK_WIDTH}
                height={HEADER_HEIGHT}
                fill="var(--surface-2)"
              />
              <text
                x={x + TRACK_WIDTH / 2}
                y={12}
                textAnchor="middle"
                fontSize={10}
                fontWeight={600}
                fill="var(--text)"
              >
                {track.label}
              </text>
              {track.unit ? (
                <text
                  x={x + TRACK_WIDTH / 2}
                  y={22}
                  textAnchor="middle"
                  fontSize={8}
                  fill="var(--text-muted)"
                >
                  {track.unit}
                </text>
              ) : null}

              <line
                x1={x}
                x2={x}
                y1={HEADER_HEIGHT}
                y2={HEADER_HEIGHT + PLOT_HEIGHT}
                stroke="var(--border)"
              />

              {intervals.map((iv) => {
                const y0 = depthToY(iv.top);
                const y1 = depthToY(iv.bot);
                const h = Math.max(1, y1 - y0);
                const primary = track.getPrimary(iv);
                const secondary = track.getSecondary?.(iv);

                if (track.riskTrack) {
                  const fill = riskColor(iv.WRCI, iv.risk_class);
                  const opacity = iv.WRCI != null ? 0.35 + (iv.WRCI / 100) * 0.55 : 0.2;
                  return (
                    <rect
                      key={`${track.id}-${iv.depth}`}
                      x={x + 2}
                      y={y0}
                      width={TRACK_WIDTH - 4}
                      height={h}
                      fill={fill}
                      fillOpacity={opacity}
                      rx={1}
                    />
                  );
                }

                if (primary == null && secondary == null) {
                  return (
                    <rect
                      key={`${track.id}-${iv.depth}`}
                      x={x + 2}
                      y={y0}
                      width={TRACK_WIDTH - 4}
                      height={h}
                      fill="var(--surface-2)"
                      stroke="var(--border)"
                      strokeWidth={0.25}
                    />
                  );
                }

                if (track.id === "res" && secondary != null && primary != null) {
                  return (
                    <g key={`${track.id}-${iv.depth}`}>
                      <rect
                        x={x + 2}
                        y={y0}
                        width={(TRACK_WIDTH - 4) / 2}
                        height={h}
                        fill={linearColor(primary, track.domain, track.primaryColor)}
                        rx={1}
                      />
                      <rect
                        x={x + 2 + (TRACK_WIDTH - 4) / 2}
                        y={y0}
                        width={(TRACK_WIDTH - 4) / 2}
                        height={h}
                        fill={linearColor(
                          secondary,
                          track.domain,
                          track.secondaryColor ?? track.primaryColor,
                        )}
                        rx={1}
                      />
                    </g>
                  );
                }

                const val = primary ?? secondary;
                if (val == null) return null;
                const fill =
                  track.scale === "log"
                    ? linearColor(
                        logNorm(val, track.domain) * (track.domain[1] - track.domain[0]) +
                          track.domain[0],
                        track.domain,
                        track.primaryColor,
                      )
                    : linearColor(val, track.domain, track.primaryColor);

                return (
                  <rect
                    key={`${track.id}-${iv.depth}`}
                    x={x + 2}
                    y={y0}
                    width={TRACK_WIDTH - 4}
                    height={h}
                    fill={fill}
                    rx={1}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
      <p className="border-t border-border px-3 py-2 text-xs text-text-muted">
        Depth axis lists MD and TVDss at each tick. Shaded bands = overburden exclusion. RES track:
        deep (left) vs shallow (right), log-scaled.
      </p>
    </div>
  );
}
