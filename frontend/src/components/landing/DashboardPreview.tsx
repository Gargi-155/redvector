import {
  ShieldCheck,
  AlertTriangle,
  Scale,
  Brain,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur-xl">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Sample Safety Report
          </h2>

          <div className="rounded-full bg-green-500/10 px-4 py-2 text-green-400">
            Safety Score: 94%
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <MetricCard
            icon={<ShieldCheck size={24} />}
            title="Toxicity"
            value="0.08"
            status="Low Risk"
          />

          <MetricCard
            icon={<Scale size={24} />}
            title="Bias"
            value="0.11"
            status="Low Risk"
          />

          <MetricCard
            icon={<AlertTriangle size={24} />}
            title="Jailbreak"
            value="PASS"
            status="Protected"
          />

          <MetricCard
            icon={<Brain size={24} />}
            title="Hallucination"
            value="0.23"
            status="Medium"
          />

        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
}

function MetricCard({
  icon,
  title,
  value,
  status,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/40 p-5 transition hover:border-red-500/40">

      <div className="mb-4 text-red-500">
        {icon}
      </div>

      <h3 className="text-zinc-400">
        {title}
      </h3>

      <div className="mt-2 text-3xl font-bold">
        {value}
      </div>

      <div className="mt-2 text-sm text-zinc-500">
        {status}
      </div>

    </div>
  );
}