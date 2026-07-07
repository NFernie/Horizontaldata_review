import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/utils";
import type { AssistantMessage } from "./MessageList";
import { MessageList } from "./MessageList";
import { QueryInput } from "./QueryInput";

interface AssistantPanelProps {
  open: boolean;
  onClose: () => void;
  messages: AssistantMessage[];
  loading: boolean;
  onSubmit: (query: string) => void;
}

export function AssistantPanel({
  open,
  onClose,
  messages,
  loading,
  onSubmit,
}: AssistantPanelProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        aria-label="Close corpus assistant"
        className={cn(
          "fixed inset-0 z-[65] bg-black/50 transition-opacity duration-200",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-full max-w-lg flex-col border-l border-border bg-bg shadow-card transition-transform duration-200 motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full pointer-events-none",
        )}
      >
        <header className="flex items-start justify-between gap-3 border-b border-border bg-surface px-4 py-4 sm:px-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
              McKinlay corpus
            </p>
            <h2 id={titleId} className="text-lg font-semibold text-text">
              Corpus Assistant
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              Retrieved answers from interpretations, summaries, and statistics.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-card border border-border bg-surface-2 px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text"
            aria-label="Close panel"
          >
            Close
          </button>
        </header>

        <MessageList messages={messages} loading={loading} onPromptSelect={onSubmit} />
        <QueryInput onSubmit={onSubmit} disabled={loading} />
      </aside>
    </>
  );
}
