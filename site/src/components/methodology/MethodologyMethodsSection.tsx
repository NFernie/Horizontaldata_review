import { useRef } from "react";
import { MethodDetailPanel } from "@/components/methodology/MethodDetailPanel";
import { MethodSelector } from "@/components/methodology/MethodSelector";
import type { MethodId } from "@/components/methodology/types";
import { pageStateKey, usePersistedState } from "@/hooks/usePageState";

export function MethodologyMethodsSection() {
  const [selectedMethod, setSelectedMethod] = usePersistedState<MethodId>(
    pageStateKey("/methodology", "selectedMethod"),
    "method-2",
  );
  const panelHeadingRef = useRef<HTMLDivElement>(null);

  const focusPanelHeading = () => {
    requestAnimationFrame(() => {
      const heading = panelHeadingRef.current?.querySelector("h3");
      heading?.focus();
    });
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-text-muted">
        Select one method for full detail. Constants from{" "}
        <code className="text-accent">@/config</code>.
      </p>

      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <MethodSelector
          selected={selectedMethod}
          onSelect={setSelectedMethod}
          onPanelFocus={focusPanelHeading}
        />
        <MethodDetailPanel methodId={selectedMethod} panelRef={panelHeadingRef} />
      </div>
    </div>
  );
}
