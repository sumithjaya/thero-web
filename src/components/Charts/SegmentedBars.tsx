"use client";

import React from "react";

type Segment = {
  pct: number;            // 0–100
  color: string;          // any CSS color
  textColor?: string;     // override label color (optional)
};

type Row = {
  label: string;
  segments: Segment[];    // one or more segments; they sum to <= 100
};

const rows: Row[] = [
  {
    label: "Cash",
    segments: [
      { pct: 20, color: "#BFDDFC", textColor: "#0F172A" }, // light blue with dark text
      { pct: 50, color: "#3B82F6" },                      // blue
    ],
  },
  {
    label: "conservative",
    segments: [{ pct: 30, color: "#4369C7" }],
  },
  {
    label: "invested",
    segments: [{ pct: 30, color: "#133F77" }],
  },
];

export default function SegmentedBars({
  data = rows,
}: {
  data?: Row[];
}) {
  return (
    <div className="w-full max-w-xl space-y-4">
      {data.map((row, i) => (
        <BarRow key={i} {...row} />
      ))}
    </div>
  );
}

function BarRow({ label, segments }: Row) {
  // Clamp & normalize a bit just in case
  const clamped = segments.map((s) => ({
    ...s,
    pct: Math.max(0, Math.min(100, s.pct)),
  }));

  return (
    <div className="relative h-12 w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      {/* Row label (left) */}
      <div className="absolute inset-y-0 left-4 z-10 flex items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>

      {/* Segments */}
      <div className="flex h-full w-full">
        {clamped.map((seg, idx) => (
          <div
            key={idx}
            style={{ width: `${seg.pct}%`, backgroundColor: seg.color }}
            className="relative h-full"
          >
            {/* Percent text centered in the segment */}
            {seg.pct > 6 && (
              <span
                className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-semibold"
                style={{ color: seg.textColor ?? "#FFFFFF" }}
              >
                {seg.pct}%
              </span>
            )}
          </div>
        ))}

        {/* Unfilled remainder keeps the pill shape clean */}
        <div
          style={{
            width: `${Math.max(
              0,
              100 - clamped.reduce((a, b) => a + b.pct, 0)
            )}%`,
          }}
          className="h-full"
        />
      </div>
    </div>
  );
}
