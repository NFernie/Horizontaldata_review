import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type FocusEvent,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface PopoverProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
  /** Disable hover/focus popover (e.g. Low risk). */
  disabled?: boolean;
  side?: "top" | "bottom";
}

export function Popover({
  content,
  children,
  className,
  disabled = false,
  side = "top",
}: PopoverProps) {
  const id = useId();
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const updatePosition = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const top = side === "top" ? rect.top - 8 : rect.bottom + 8;
    setPos({
      top,
      left: rect.left + rect.width / 2,
    });
  }, [side]);

  const show = () => {
    if (disabled) return;
    updatePosition();
    setOpen(true);
  };

  const hide = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => updatePosition();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [open, updatePosition]);

  const onBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) hide();
  };

  return (
    <>
      <span
        ref={triggerRef}
        className={cn(
          "inline-flex",
          !disabled && "cursor-help",
          className,
        )}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={onBlur}
        aria-describedby={open && !disabled ? id : undefined}
        tabIndex={disabled ? undefined : 0}
      >
        {children}
      </span>
      {open && !disabled
        ? createPortal(
            <div
              id={id}
              role="tooltip"
              className="pointer-events-none fixed z-50 max-w-xs -translate-x-1/2 rounded-card border border-border bg-surface-2 px-3 py-2 text-sm text-text shadow-lg"
              style={{
                top: side === "top" ? pos.top : pos.top,
                left: pos.left,
                transform: `translate(-50%, ${side === "top" ? "-100%" : "0"})`,
              }}
            >
              {content}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

interface SvgPopoverAnchorProps {
  x: number;
  y: number;
  content: ReactNode;
  radius: number;
  label: string;
}

/** Hover/focus popover anchor for SVG circle markers. */
export function SvgPopoverAnchor({ x, y, content, radius, label }: SvgPopoverAnchorProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const circleRef = useRef<SVGCircleElement>(null);

  const show = (e?: MouseEvent) => {
    const el = circleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
    if (e) e.stopPropagation();
    setOpen(true);
  };

  const hide = () => setOpen(false);

  return (
    <>
      <circle
        ref={circleRef}
        cx={x}
        cy={y}
        r={radius + 4}
        fill="transparent"
        className="cursor-help"
        role="button"
        tabIndex={0}
        aria-label={label}
        aria-describedby={open ? id : undefined}
        onMouseEnter={() => show()}
        onMouseLeave={hide}
        onFocus={() => show()}
        onBlur={hide}
        onKeyDown={(e) => {
          if (e.key === "Escape") hide();
        }}
      />
      {open
        ? createPortal(
            <div
              id={id}
              role="tooltip"
              className="pointer-events-none fixed z-50 w-72 max-w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-full rounded-card border border-border bg-surface-2 px-3 py-2.5 text-sm text-text shadow-lg"
              style={{ top: pos.top, left: pos.left }}
            >
              {content}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
