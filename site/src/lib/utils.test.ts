import { describe, expect, it } from "vitest";
import { formatDepthMd, formatPercent } from "@/lib/utils";

describe("formatPercent", () => {
  it("returns em dash for non-numeric strings", () => {
    expect(formatPercent("tr")).toBe("—");
  });

  it("formats numeric strings", () => {
    expect(formatPercent("85")).toBe("85.0%");
  });
});

describe("formatDepthMd", () => {
  it("shows MD and TVDss together", () => {
    expect(formatDepthMd(2500, -1194.2)).toBe("2500 m MD · -1194.2 m TVDss");
  });

  it("shows MD only when TVDss missing", () => {
    expect(formatDepthMd(2500, null)).toBe("2500 m MD");
  });
});
