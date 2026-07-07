import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className }: CardProps) {
  return (
    <section
      className={cn(
        "rounded-card border border-border bg-surface p-4 shadow-card sm:p-5",
        className,
      )}
    >
      {(title || description) && (
        <header className="mb-4">
          {title && <h2 className="text-lg font-semibold text-text">{title}</h2>}
          {description && <p className="mt-1 text-sm text-text-muted">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
