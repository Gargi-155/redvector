"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.4em] text-red-500"
        >
          AI Safety Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-7xl font-bold"
        >
          Benchmark.
          <br />
          Attack.
          <br />
          Evaluate.
          <br />
          Secure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl text-lg text-zinc-400"
        >
          Automated red-teaming, jailbreak analysis,
          toxicity detection, bias evaluation, and
          risk intelligence for modern language models.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

  <Link href="/dashboard">

    <button className="rounded-xl bg-red-500 px-8 py-4 text-lg font-medium text-white transition hover:bg-red-600">

      Start Evaluation

    </button>

  </Link>

  <Link href="/dashboard">

    <button className="rounded-xl border border-zinc-700 px-8 py-4 text-lg text-white transition hover:border-red-500">

      View Dashboard

    </button>

  </Link>

</div>
        </motion.div>

      </div>
    </section>
  );
}