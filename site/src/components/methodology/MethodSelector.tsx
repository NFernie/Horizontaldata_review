import { useCallback, useRef, type KeyboardEvent } from "react";
import { METHOD_OPTIONS, type MethodId } from "@/components/methodology/types";
import { cn } from "@/lib/utils";

interface MethodSelectorProps {
  selected: MethodId;
  onSelect: (id: MethodId) => void;
  onPanelFocus?: () => void;
}

export function MethodSelector({ selected, onSelect, onPanelFocus }: MethodSelectorProps) {
  const tabRefs = useRef<Record<MethodId, HTMLButtonElement | null>>({
    "method-2": null,
    "method-3": null,
    "method-4": null,
    "method-5": null,
  });

  const focusMethod = useCallback((id: MethodId) => {
    tabRefs.current[id]?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent, index: number) => {
      const ids = METHOD_OPTIONS.map((m) => m.id);
      let nextIndex = index;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          nextIndex = (index + 1) % ids.length;
          break;
        case "ArrowUp":
          event.preventDefault();
          nextIndex = (index - 1 + ids.length) % ids.length;
          break;
        case "Home":
          event.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          event.preventDefault();
          nextIndex = ids.length - 1;
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          onSelect(ids[index]!);
          onPanelFocus?.();
          return;
        default:
          return;
      }

      const nextId = ids[nextIndex]!;
      onSelect(nextId);
      focusMethod(nextId);
    },
    [focusMethod, onPanelFocus, onSelect],
  );

  return (
    <div
      role="tablist"
      aria-label="Statistical methods 2 through 5"
      className="space-y-1 rounded-card border border-border bg-surface-2 p-2"
    >
      {METHOD_OPTIONS.map((method, index) => {
        const isSelected = selected === method.id;
        return (
          <button
            key={method.id}
            ref={(el) => {
              tabRefs.current[method.id] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${method.id}`}
            aria-selected={isSelected}
            aria-controls={`panel-${method.id}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => {
              onSelect(method.id);
              onPanelFocus?.();
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              "flex min-h-[44px] w-full cursor-pointer items-center rounded-card border px-3 py-2.5 text-left text-sm transition-colors duration-150",
              isSelected
                ? "border-accent bg-accent/10 text-accent"
                : "border-transparent text-text-muted hover:border-border hover:bg-surface hover:text-text",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "mr-2 shrink-0 text-xs transition-transform",
                isSelected && "rotate-90",
              )}
            >
              ▸
            </span>
            {method.label}
          </button>
        );
      })}
    </div>
  );
}
