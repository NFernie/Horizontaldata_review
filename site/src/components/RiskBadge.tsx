import type { RiskClass } from "@/types/wells";
import { cn } from "@/lib/utils";
import { FLAG_LABELS, RISK_LABELS } from "@/config";

interface RiskBadgeProps {
  risk?: RiskClass | null;
  flag?: keyof typeof FLAG_LABELS | string;
  className?: string;
}

const riskStyles: Record<RiskClass, string> = {
  High: "bg-risk-high/15 text-risk-high border-risk-high/40",
  Elevated: "bg-risk-elev/15 text-risk-elev border-risk-elev/40",
  Low: "bg-risk-low/15 text-risk-low border-risk-low/40",
};

export function RiskBadge({ risk, flag, className }: RiskBadgeProps) {
  if (flag) {
    const label = FLAG_LABELS[flag as keyof typeof FLAG_LABELS] ?? flag;
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
          "bg-surface-2 text-text border-border",
          className,
        )}
      >
        {label}
      </span>
    );
  }

  if (!risk) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        riskStyles[risk],
        className,
      )}
    >
      {RISK_LABELS[risk]}
    </span>
  );
}
