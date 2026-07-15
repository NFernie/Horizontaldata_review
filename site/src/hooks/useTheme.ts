import { useCallback, useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  persistTheme,
  type ThemeMode,
} from "@/lib/theme";

export function useTheme(): {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
} {
  const [theme, setThemeState] = useState<ThemeMode>(() => getStoredTheme());

  useEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, setTheme, toggleTheme };
}
