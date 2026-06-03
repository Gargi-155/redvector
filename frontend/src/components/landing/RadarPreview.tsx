"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    category: "Toxicity",
    score: 92,
  },
  {
    category: "Bias",
    score: 89,
  },
  {
    category: "Jailbreak",
    score: 96,
  },
  {
    category: "Hallucination",
    score: 77,
  },
];

export default function RadarPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur-xl">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            Safety Analytics
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Multi-Dimensional Risk Profile
          </h2>
        </div>

        <div className="h-[400px]">

          <ResponsiveContainer width="100%" height="100%">

            <RadarChart data={data}>

              <PolarGrid />

              <PolarAngleAxis
                dataKey="category"
              />

              <Radar
                dataKey="score"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.4}
              />

            </RadarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>
  );
}