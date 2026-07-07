import { useCallback, useState } from "react";
import { routeQuery } from "@/lib/assistant/router";
import { cn } from "@/lib/utils";
import { AssistantPanel } from "./AssistantPanel";
import type { AssistantMessage } from "./MessageList";

let messageCounter = 0;

function nextMessageId(): string {
  messageCounter += 1;
  return `msg-${messageCounter}`;
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleClear = useCallback(() => {
    if (loading) return;
    setMessages([]);
  }, [loading]);

  const handleSubmit = useCallback(async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || loading) return;

    setOpen(true);
    setMessages((prev) => [
      ...prev,
      { id: nextMessageId(), role: "user", text: trimmed },
    ]);
    setLoading(true);

    try {
      const response = await routeQuery(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: nextMessageId(),
          role: "assistant",
          text: trimmed,
          results: response.results,
        },
      ]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to search the corpus.";
      setMessages((prev) => [
        ...prev,
        {
          id: nextMessageId(),
          role: "assistant",
          text: trimmed,
          error: message,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="corpus-assistant-panel"
        className={cn(
          "fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-4 py-3 text-sm font-semibold text-accent shadow-card transition-colors hover:border-accent hover:bg-accent/10 sm:bottom-6 sm:right-6",
          open && "border-accent bg-accent/15",
        )}
      >
        <span aria-hidden className="text-base">
          ✦
        </span>
        Ask corpus
      </button>

      <div id="corpus-assistant-panel">
        <AssistantPanel
          open={open}
          onClose={() => setOpen(false)}
          messages={messages}
          loading={loading}
          onSubmit={handleSubmit}
          onClear={handleClear}
        />
      </div>
    </>
  );
}
