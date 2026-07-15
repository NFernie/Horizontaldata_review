import { cn } from "@/lib/utils";
import type { ThemeMode } from "@/lib/theme";

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
  compact?: boolean;
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle({ theme, onToggle, className, compact = false }: ThemeToggleProps) {
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={!isDark}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-card border border-border bg-surface-2 px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent/50 hover:text-accent",
        compact && "min-h-0 px-2.5 py-1.5 text-xs",
        className,
      )}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
