import { describe, expect, it } from "vitest";
import {
  computeYRange,
  createLinearScale,
  createMtvdsScale,
  filterLateralStations,
  hardFloorMtvds,
  interpolateMtvdsAtMd,
  markerPosition,
} from "./structuralChart";
import type { TrajectoryStation } from "@/types/trajectory";

const sampleStations: TrajectoryStation[] = [
  { md: 2250, mtvds: -1193.5 },
  { md: 2500, mtvds: -1194.2 },
  { md: 3000, mtvds: -1190.8 },
  { md: 3394, mtvds: -1194.1 },
];

describe("structuralChart", () => {
  it("hard floor = owc + 3 m shallower", () => {
    expect(hardFloorMtvds(-1198)).toBe(-1195);
  });

  it("yRange uses field OWC bottom and max trajectory + 3 top", () => {
    const lateral = filterLateralStations(sampleStations, 2249.74, 3394);
    const { yMin, yMax } = computeYRange(-1198, lateral);
    expect(yMin).toBe(-1198);
    expect(yMax).toBeCloseTo(-1190.8 + 3, 5);
  });

  it("md scale is monotonic increasing", () => {
    const scale = createLinearScale([2250, 3394], [56, 400]);
    expect(scale(2500)).toBeGreaterThan(scale(2250));
    expect(scale(3394)).toBeGreaterThan(scale(2500));
  });

  it("mtvds scale increases downward for deeper values", () => {
    const scale = createMtvdsScale(-1198, -1188, 22, 232);
    expect(scale(-1198)).toBeGreaterThan(scale(-1190));
    expect(scale(-1190)).toBeGreaterThan(scale(-1188));
  });

  it("marker uses interval mTVDss at (md, mtvds)", () => {
    const xScale = createLinearScale([2250, 3394], [56, 400]);
    const yScale = createMtvdsScale(-1198, -1187, 22, 232);
    const pos = markerPosition(2500, -1194.21, sampleStations, xScale, yScale);
    expect(pos.x).toBeCloseTo(xScale(2500), 3);
    expect(pos.y).toBeCloseTo(yScale(-1194.21), 3);
  });

  it("interpolates trajectory mTVDss at MD when interval missing", () => {
    const mtvds = interpolateMtvdsAtMd(sampleStations, 2750);
    expect(mtvds).not.toBeNull();
    expect(mtvds!).toBeLessThan(-1190);
    expect(mtvds!).toBeGreaterThan(-1195);
  });
});
