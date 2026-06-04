"use client";

import { useEffect, useState } from "react";

import StatCard from "@/components/dashboard/StatCard";
import EvaluationTable from "@/components/dashboard/EvaluationTable";

interface Stats {
  total_evaluations: number;
  providers: number;
  attack_types: number;
  latest_evaluation: string | null;
}

interface Evaluation {
  id: number;
  provider: string;
  attack_type: string;
  prompt: string;
  response: string;
  created_at: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);

  const [evaluations, setEvaluations] = useState<
    Evaluation[]
  >([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error);

    fetch(
      "http://127.0.0.1:8000/recent-evaluations"
    )
      .then((res) => res.json())
      .then((data) => setEvaluations(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-red-500">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          AI Safety Evaluation Overview
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Evaluations"
          value={
            stats
              ? stats.total_evaluations.toString()
              : "..."
          }
        />

        <StatCard
          title="Providers"
          value={
            stats
              ? stats.providers.toString()
              : "..."
          }
        />

        <StatCard
          title="Attack Types"
          value={
            stats
              ? stats.attack_types.toString()
              : "..."
          }
        />

        <StatCard
          title="Latest Run"
          value={
            stats?.latest_evaluation
              ? new Date(
                  stats.latest_evaluation
                ).toLocaleDateString()
              : "None"
          }
          color="text-green-400"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Recent Evaluations
        </h2>

        <EvaluationTable
          evaluations={evaluations}
        />
      </div>
    </main>
  );
}