"use client";

import React from "react";

type RatingStarsProps = {
  value: number;          // e.g. 4.3
  max?: number;           // default 5
  size?: number;          // px size for each star (default 24)
  colorClass?: string;    // Tailwind class for active stars (default text-amber-400)
  bgClass?: string;       // Tailwind class for inactive stars (default text-gray-300)
  showValue?: boolean;    // show "4.3/5"
};

export default function RatingStars({
  value,
  max = 5,
  size = 24,
  colorClass = "text-amber-400",
  bgClass = "text-gray-300",
  showValue = false,
}: RatingStarsProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  const Star = ({ className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
    >
      <path
        fill="currentColor"
        d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265
           C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096
           c-1.458,0.223-2.669,1.242-3.138,2.642c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977
           c-0.242,1.488,0.389,2.984,1.62,3.854c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365
           c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977
           l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"
      />
    </svg>
  );

  return (
    <div className="inline-flex items-center gap-2" aria-label={`Rating ${value} out of ${max}`}>
      {/* Base (gray) */}
      <div className="relative inline-flex" style={{ lineHeight: 0 }}>
        <div className={`flex ${bgClass}`}>
          {Array.from({ length: max }).map((_, i) => (
            <Star key={`bg-${i}`} />
          ))}
        </div>

        {/* Overlay (colored) */}
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${pct}%` }}
        >
          <div className={`flex ${colorClass}`}>
            {Array.from({ length: max }).map((_, i) => (
              <Star key={`fg-${i}`} />
            ))}
          </div>
        </div>
      </div>

      {showValue && (
        <span className="text-sm text-foreground/70">
          {value.toFixed(1)} / {max}
        </span>
      )}
    </div>
  );
}
