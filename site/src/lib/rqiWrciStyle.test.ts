import { describe, expect, it } from "vitest";
import { RQI_THRESHOLD, WRCI_HIGH_THRESHOLD } from "@/config";
import { rqiCellClass, wrciCellClass } from "@/lib/rqiWrciStyle";

describe("rqiCellClass", () => {
  it("returns null class for missing values", () => {
    expect(rqiCellClass(null)).toBe("metric-cell--null");
    expect(rqiCellClass(undefined)).toBe("metric-cell--null");
  });

  it("classifies above threshold as high (red)", () => {
    expect(rqiCellClass(RQI_THRESHOLD + 0.01)).toBe("metric-cell--rqi-high");
  });

  it("classifies at or below threshold as low (green)", () => {
    expect(rqiCellClass(RQI_THRESHOLD)).toBe("metric-cell--rqi-low");
    expect(rqiCellClass(0.2)).toBe("metric-cell--rqi-low");
  });
});

describe("wrciCellClass", () => {
  it("returns null class for missing values", () => {
    expect(wrciCellClass(null)).toBe("metric-cell--null");
  });

  it("classifies above high threshold as high (red)", () => {
    expect(wrciCellClass(WRCI_HIGH_THRESHOLD + 1)).toBe("metric-cell--wrci-high");
  });

  it("classifies at or below high threshold as low (green)", () => {
    expect(wrciCellClass(WRCI_HIGH_THRESHOLD)).toBe("metric-cell--wrci-low");
    expect(wrciCellClass(30)).toBe("metric-cell--wrci-low");
  });
});
