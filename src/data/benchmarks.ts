export interface BenchmarkConstant {
  astroVal: string;
  nextVal: string;
  unit?: string;
  astroPercent: number;
  nextPercent: number;
}

export const BENCHMARK_CONSTANTS: Record<string, BenchmarkConstant> = {
  "js-runtime": {
    astroVal: "0 KB",
    nextVal: "85 KB",
    unit: "KB",
    astroPercent: 4,
    nextPercent: 85,
  },
  "core-web-vitals": {
    astroVal: "100",
    nextVal: "88",
    unit: "/100",
    astroPercent: 100,
    nextPercent: 88,
  },
  inp: {
    astroVal: "< 5ms",
    nextVal: "~42ms",
    unit: "ms",
    astroPercent: 8,
    nextPercent: 68,
  },
};

export interface BenchmarkMetric {
  id: string;
  label: string;
  astroVal: string;
  nextVal: string;
  unit?: string;
  astroPercent: number;
  nextPercent: number;
}

export function resolveBenchmarkMetrics(
  metrics: Array<{
    id: string;
    label: string;
    astroVal?: string;
    nextVal?: string;
    unit?: string;
    astroPercent?: number;
    nextPercent?: number;
  }>,
): BenchmarkMetric[] {
  return metrics.map((m) => {
    const base = BENCHMARK_CONSTANTS[m.id] ?? {
      astroVal: "0",
      nextVal: "0",
      astroPercent: 0,
      nextPercent: 0,
    };
    return {
      id: m.id,
      label: m.label,
      astroVal: m.astroVal ?? base.astroVal,
      nextVal: m.nextVal ?? base.nextVal,
      unit: m.unit ?? base.unit,
      astroPercent: m.astroPercent ?? base.astroPercent,
      nextPercent: m.nextPercent ?? base.nextPercent,
    };
  });
}
