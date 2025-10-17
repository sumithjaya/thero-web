"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 2100 },
  { month: "Mar", value: 1800 },
  { month: "Apr", value: 2600 },
  { month: "May", value: 2300 },
  { month: "Jun", value: 3100 },
];

export default function FilledAreaChart() {
  return (
    <div className="w-full h-72 rounded-2xl border border-black/10 p-4 bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 24, left: 0, bottom: 8 }}>
          {/* Gradient definition */}
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0047AB" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#0047AB" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          {/* The filled area line */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#0047AB"
            strokeWidth={2}
            fill="url(#areaFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
