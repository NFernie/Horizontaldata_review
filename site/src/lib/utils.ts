const BASE = import.meta.env.BASE_URL;

export function dataUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${normalized}`;
}

export async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(dataUrl(path));
  if (!res.ok) {
    throw new Error(`Failed to load ${path}: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export function toNumber(value: unknown): number | null {
  if (value == null) return null;
  if (typeof value === "number") return Number.isNaN(value) ? null : value;
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value);
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

export function formatNumber(value: number | null | undefined | unknown, digits = 1): string {
  const n = typeof value === "number" ? value : toNumber(value);
  if (n == null || Number.isNaN(n)) return "—";
  return n.toFixed(digits);
}

export function formatPercent(value: number | null | undefined | unknown, digits = 1): string {
  const n = typeof value === "number" ? value : toNumber(value);
  if (n == null || Number.isNaN(n)) return "—";
  return `${n.toFixed(digits)}%`;
}

/** Format measured depth with optional subsea TVD alongside. */
export function formatDepthMd(md: number, mtvds?: number | null, digitsMd = 0): string {
  const mdPart = `${md.toFixed(digitsMd)} m MD`;
  if (mtvds == null || Number.isNaN(mtvds)) return mdPart;
  return `${mdPart} · ${mtvds.toFixed(1)} m TVDss`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
