import { toJpeg, toPng } from "html-to-image";

export type TableImageFormat = "png" | "jpeg";

function themeBackground(): string {
  return getComputedStyle(document.documentElement).getPropertyValue("--bg").trim() || "#0b0f14";
}

function downloadDataUrl(dataUrl: string, filename: string): void {
  const anchor = document.createElement("a");
  anchor.href = dataUrl;
  anchor.download = filename;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export function portfolioTableFilename(
  format: TableImageFormat,
  generated?: string | null,
): string {
  const date = generated?.slice(0, 10) ?? new Date().toISOString().slice(0, 10);
  const ext = format === "png" ? "png" : "jpg";
  return `portfolio-table-${date}.${ext}`;
}

/** Capture a table container (or its inner `<table>`) as PNG or JPEG and download. */
export async function exportElementAsImage(
  element: HTMLElement,
  filename: string,
  format: TableImageFormat,
): Promise<void> {
  const target = element.querySelector("table") ?? element;
  const width = target.scrollWidth;
  const height = target.scrollHeight;

  const options = {
    backgroundColor: themeBackground(),
    width,
    height,
    pixelRatio: 2,
    cacheBust: true,
  };

  const dataUrl =
    format === "png"
      ? await toPng(target as HTMLElement, options)
      : await toJpeg(target as HTMLElement, { ...options, quality: 0.92 });

  downloadDataUrl(dataUrl, filename);
}
