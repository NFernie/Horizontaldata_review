import type { Dispatch, SetStateAction } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Session-persisted page state and scroll restoration.
 *
 * Related keys (unchanged — see useWellSelection.ts):
 * - hr-selected-well
 * - hr-water-risk-left / hr-water-risk-right
 */
const PAGE_PREFIX = "hr-page:";
const GLOBAL_PREFIX = "hr-global:";

export { GLOBAL_PREFIX, PAGE_PREFIX };

export function pageStateKey(pathname: string, suffix: string): string {
  return `${PAGE_PREFIX}${pathname}:${suffix}`;
}

export function globalStateKey(suffix: string): string {
  return `${GLOBAL_PREFIX}${suffix}`;
}

function readStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = sessionStorage.getItem(key);
    if (raw == null) return defaultValue;
    return JSON.parse(raw) as T;
  } catch {
    return defaultValue;
  }
}

function writeStorage<T>(key: string, value: T): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // sessionStorage unavailable
  }
}

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => readStorage(key, defaultValue));

  useEffect(() => {
    writeStorage(key, state);
  }, [key, state]);

  return [state, setState];
}

function getScrollY(): number {
  return window.scrollY || document.documentElement.scrollTop || 0;
}

function setScrollY(y: number): void {
  window.scrollTo(0, y);
}

export function useScrollRestore(routeKey?: string): void {
  const { pathname } = useLocation();
  const key = routeKey ?? pageStateKey(pathname, "scrollY");
  const restoredRef = useRef(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    restoredRef.current = false;
    const saved = readStorage(key, 0);

    const restore = () => {
      if (restoredRef.current) return;
      restoredRef.current = true;
      if (saved > 0) {
        setScrollY(saved);
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(restore);
    });
  }, [key]);

  const persistScroll = useCallback(() => {
    scrollRef.current = getScrollY();
    writeStorage(key, scrollRef.current);
  }, [key]);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = getScrollY();
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        persistScroll();
      }
    };

    const onBeforeUnload = () => {
      persistScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      persistScroll();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [persistScroll]);
}
