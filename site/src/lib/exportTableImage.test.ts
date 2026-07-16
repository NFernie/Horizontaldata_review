import { describe, expect, it } from "vitest";
import { portfolioTableFilename } from "@/lib/exportTableImage";

describe("portfolioTableFilename", () => {
  it("uses generated date and correct extension", () => {
    expect(portfolioTableFilename("png", "2026-07-16T12:00:00Z")).toBe(
      "portfolio-table-2026-07-16.png",
    );
    expect(portfolioTableFilename("jpeg", "2026-07-16T12:00:00Z")).toBe(
      "portfolio-table-2026-07-16.jpg",
    );
  });
});
