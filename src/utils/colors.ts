/**
 * Resolves a CSS variable string (e.g. `var(--accent)` or `--accent`)
 * into the computed CSS color string from document root.
 */
export function resolveCssVar(input?: string, fallback = ""): string {
  if (!input) return fallback;
  let str = input.trim();
  if (!str) return fallback;

  if (str.startsWith("var(")) {
    const varName = str
      .replace(/^var\(\s*/, "")
      .replace(/\s*\)$/, "")
      .trim();
    if (typeof document !== "undefined") {
      const computed = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      return computed || fallback;
    }
    return fallback;
  }

  if (str.startsWith("--")) {
    if (typeof document !== "undefined") {
      const computed = getComputedStyle(document.documentElement)
        .getPropertyValue(str)
        .trim();
      return computed || fallback;
    }
    return fallback;
  }

  return str;
}

/**
 * Parses any CSS color string (hex, rgb, hsl, oklch, CSS var) into a normalized [r, g, b] tuple (0..1)
 * with base background alpha blending support for WebGL and Canvas shaders.
 */
export function parseColorToRgb(
  input?: string,
  baseBg: [number, number, number] = [0.08, 0.08, 0.08],
  fallback: [number, number, number] = [0.45, 0.45, 0.45],
): [number, number, number] {
  if (!input) return fallback;
  let str = resolveCssVar(input, "");
  if (!str) return fallback;

  if (str.startsWith("[")) {
    try {
      const arr = JSON.parse(str);
      if (
        Array.isArray(arr) &&
        arr.length >= 3 &&
        typeof arr[0] === "number" &&
        !Number.isNaN(arr[0])
      ) {
        return [arr[0], arr[1], arr[2]];
      }
    } catch {
      // Continue to canvas-based resolution
    }
  }

  if (typeof document === "undefined") return fallback;

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return fallback;

    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = str;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;

    if (d[3] === 0 && !str.includes("transparent")) return fallback;

    const alpha = d[3] / 255;
    const r = (d[0] / 255) * alpha + baseBg[0] * (1 - alpha);
    const g = (d[1] / 255) * alpha + baseBg[1] * (1 - alpha);
    const b = (d[2] / 255) * alpha + baseBg[2] * (1 - alpha);
    return [r, g, b];
  } catch {
    return fallback;
  }
}
