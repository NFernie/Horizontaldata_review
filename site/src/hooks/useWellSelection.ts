const WELL_KEY = "hr-selected-well";
const WR_LEFT_KEY = "hr-water-risk-left";
const WR_RIGHT_KEY = "hr-water-risk-right";

function readKey(key: string, fallback: string): string {
  try {
    return sessionStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeKey(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // sessionStorage unavailable
  }
}

export function readStoredWell(fallback: string): string {
  return readKey(WELL_KEY, fallback);
}

export function writeStoredWell(alias: string): void {
  writeKey(WELL_KEY, alias);
}

export function readStoredWaterRiskLeft(fallback: string): string {
  return readKey(WR_LEFT_KEY, fallback);
}

export function writeStoredWaterRiskLeft(alias: string): void {
  writeKey(WR_LEFT_KEY, alias);
}

export function readStoredWaterRiskRight(fallback: string): string {
  return readKey(WR_RIGHT_KEY, fallback);
}

export function writeStoredWaterRiskRight(alias: string): void {
  writeKey(WR_RIGHT_KEY, alias);
}
