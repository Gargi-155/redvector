"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "20,000+",
    label: "Evaluations Run",
  },
  {
    value: "98%",
    label: "Detection Accuracy",
  },
  {
    value: "50+",
    label: "Attack Templates",
  },
  {
    value: "4",
    label: "Safety Dimensions",
  },
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10"
          >
            <h3 className="mb-2 text-4xl font-bold text-white">
              {stat.value}
            </h3>

            <p className="text-zinc-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}