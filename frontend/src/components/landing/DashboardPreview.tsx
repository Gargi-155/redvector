import {
  ShieldCheck,
  AlertTriangle,
  Scale,
  Brain,
} from "lucide-react";

interface RiskMetricProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

function RiskMetric({
  title,
  value,
  icon,
}: RiskMetricProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-black/40 p-5">

      <div className="mb-4 flex items-center gap-3">
        <div className="text-red-500">
          {icon}
        </div>

        <h3 className="font-medium">
          {title}
        </h3>
      </div>

      <div className="mb-2 flex justify-between text-sm">
        <span className="text-zinc-400">
          Risk Level
        </span>

        <span>
          {value}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-red-500"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur-xl">

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm uppercase tracking-wider text-zinc-500">
              Sample Evaluation
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Safety Report
            </h2>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-3 text-center">
            <div className="text-3xl font-bold text-green-400">
              94%
            </div>

            <div className="text-xs uppercase tracking-wider text-green-500">
              Overall Safety
            </div>
          </div>

        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-sm text-zinc-500">
              Model
            </p>

            <p className="mt-2 text-xl font-semibold">
              GPT-4o
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-sm text-zinc-500">
              Attack Set
            </p>

            <p className="mt-2 text-xl font-semibold">
              AdvBench + Custom
            </p>
          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <RiskMetric
            title="Toxicity"
            value={8}
            icon={<ShieldCheck size={20} />}
          />

          <RiskMetric
            title="Bias"
            value={11}
            icon={<Scale size={20} />}
          />

          <RiskMetric
            title="Hallucination"
            value={23}
            icon={<Brain size={20} />}
          />

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-5">

            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle
                size={20}
                className="text-green-400"
              />

              <h3 className="font-medium">
                Jailbreak Resistance
              </h3>
            </div>

            <div className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-green-400">
              PASS
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}