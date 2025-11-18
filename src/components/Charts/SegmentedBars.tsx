"use client";

import React from "react";
import styles from "./SegmentedBars.module.css";

type Segment = {
  pct: number; // 0–100
  color: string;
  textColor?: string;
};

type Row = {
  label: string;
  segments: Segment[];
};

const defaultRows: Row[] = [
  {
    label: "Cash",
    segments: [
      { pct: 20, color: "#BFDDFC", textColor: "#0F172A" },
      { pct: 50, color: "#3B82F6" },
    ],
  },
  { label: "Conservative", segments: [{ pct: 30, color: "#4369C7" }] },
  { label: "Invested", segments: [{ pct: 30, color: "#133F77" }] },
];

export default function SegmentedBars({ data = defaultRows }: { data?: Row[] }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Your Retirement Strategy</h3>
      <div className={styles.list}>
        {data.map((row, i) => (
          <BarRow key={i} {...row} />
        ))}
      </div>
    </div>
  );
}

function BarRow({ label, segments }: Row) {
  const clamped = segments.map((s) => ({ ...s, pct: Math.max(0, Math.min(100, s.pct)) }));
  const total = clamped.reduce((a, b) => a + b.pct, 0);
  const remainder = Math.max(0, 100 - total);

  return (
    <div className={styles.row}>
      {/* Label chip (absolutely positioned so it visually sits inside the pill) */}
      <div className={styles.labelChip}>
        <span className={styles.labelText}>{label}</span>
      </div>

      {/* Bar area — starts to the right of the label chip to avoid overlap */}
      <div className={styles.barArea}>
        <div className={styles.pill}>
          <div className={styles.segments}>
            {clamped.map((seg, idx) => (
              <div
                key={idx}
                className={styles.segment}
                style={{ width: `${seg.pct}%`, backgroundColor: seg.color }}
              >
                {/* show percent only when wide enough */}
                {seg.pct > 6 && (
                  <span className={styles.segmentLabel} style={{ color: seg.textColor ?? "#fff" }}>
                    {seg.pct}%
                  </span>
                )}
              </div>
            ))}

            {/* remainder empty area to keep pill shape when segments don't sum to 100 */}
            {remainder > 0 && <div className={styles.empty} style={{ width: `${remainder}%` }} />}
          </div>
        </div>
      </div>
    </div>
  );
}
