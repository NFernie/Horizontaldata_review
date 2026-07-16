import { describe, expect, it } from "vitest";
import { dStatisticColor, quantizeKsD, redMixPercent } from "./ksGridStyle";

describe("quantizeKsD", () => {
  it("snaps to 0.1 steps within [0, 1]", () => {
    expect(quantizeKsD(0.04)).toBe(0);
    expect(quantizeKsD(0.05)).toBe(0.1);
    expect(quantizeKsD(0.14)).toBe(0.1);
    expect(quantizeKsD(0.95)).toBe(1);
    expect(quantizeKsD(1.5)).toBe(1);
    expect(quantizeKsD(-0.2)).toBe(0);
  });
});

describe("dStatisticColor", () => {
  it("returns greener mix for low D than high D", () => {
    const low = dStatisticColor(0.1);
    const high = dStatisticColor(0.9);
    expect(low).toContain("var(--risk-low)");
    expect(high).toContain("var(--risk-high)");
    expect(low).not.toBe(high);
  });

  it("uses same color for values in the same 0.1 bin", () => {
    expect(dStatisticColor(0.11)).toBe(dStatisticColor(0.14));
    expect(dStatisticColor(0.81)).toBe(dStatisticColor(0.84));
  });

  it("ramps red quickly above D=0.5", () => {
    const atHalf = redMixPercent(dStatisticColor(0.5));
    const aboveHalf = redMixPercent(dStatisticColor(0.6));
    const high = redMixPercent(dStatisticColor(1));

    expect(atHalf).toBeLessThan(20);
    expect(aboveHalf).toBeGreaterThan(atHalf + 8);
    expect(high).toBeGreaterThan(55);
    expect(redMixPercent(dStatisticColor(0.8))).toBeGreaterThan(40);
  });
});
