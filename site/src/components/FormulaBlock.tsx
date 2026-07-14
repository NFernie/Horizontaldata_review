import type { ReactNode } from "react";

export function FormulaBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-card border border-border bg-surface-2 p-4">
      <h4 className="text-sm font-semibold text-text">{title}</h4>
      <div className="mt-2 space-y-2 overflow-x-auto font-mono text-xs leading-relaxed text-text-muted">
        {children}
      </div>
    </div>
  );
}
