export type ThemeMode = "dark" | "light";

export const THEME_STORAGE_KEY = "hr-theme:mode";
export const DEFAULT_THEME: ThemeMode = "dark";

export function getStoredTheme(): ThemeMode {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === "light" || raw === "dark") return raw;
  } catch {
    // localStorage unavailable
  }
  return DEFAULT_THEME;
}

export function applyTheme(mode: ThemeMode): void {
  document.documentElement.dataset.theme = mode;
}

export function persistTheme(mode: ThemeMode): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {
    // localStorage unavailable
  }
}

export function initTheme(): ThemeMode {
  const mode = getStoredTheme();
  applyTheme(mode);
  return mode;
}
