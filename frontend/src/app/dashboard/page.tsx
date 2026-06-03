import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
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
          title="Safety Score"
          value="94%"
          color="text-green-400"
        />

        <StatCard
          title="Evaluations"
          value="20,481"
        />

        <StatCard
          title="Models Tested"
          value="12"
        />

        <StatCard
          title="Failures"
          value="143"
          color="text-red-500"
        />

      </div>

    </main>
  );
}