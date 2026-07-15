import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_THEME,
  applyTheme,
  getStoredTheme,
  persistTheme,
  THEME_STORAGE_KEY,
} from "./theme";

function createStorageMock() {
  const store = new Map<string, string>();
  return {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    clear: () => store.clear(),
  };
}

describe("theme", () => {
  const storage = createStorageMock();
  const dataset: Record<string, string> = {};

  beforeEach(() => {
    storage.clear();
    Object.keys(dataset).forEach((key) => delete dataset[key]);
    vi.stubGlobal("localStorage", storage);
    vi.stubGlobal("document", {
      documentElement: {
        dataset,
        removeAttribute: (name: string) => {
          if (name === "data-theme") delete dataset.theme;
        },
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("defaults to dark when storage is empty", () => {
    expect(getStoredTheme()).toBe("dark");
  });

  it("reads persisted theme from localStorage", () => {
    storage.setItem(THEME_STORAGE_KEY, "light");
    expect(getStoredTheme()).toBe("light");
  });

  it("ignores invalid stored values", () => {
    storage.setItem(THEME_STORAGE_KEY, "sepia");
    expect(getStoredTheme()).toBe("dark");
  });

  it("applies data-theme on document element", () => {
    applyTheme("light");
    expect(dataset.theme).toBe("light");
  });

  it("persists theme choice", () => {
    persistTheme("light");
    expect(storage.getItem(THEME_STORAGE_KEY)).toBe("light");
    expect(DEFAULT_THEME).toBe("dark");
  });
});
