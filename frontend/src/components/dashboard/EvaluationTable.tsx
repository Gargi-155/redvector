import Link from "next/link";

type Evaluation = {
  id: number;
  provider: string;
  attack_type: string;
  prompt: string;
  response: string;
  created_at: string;
  toxicity_score?: number;
};

export default function EvaluationTable({
  evaluations,
}: {
  evaluations: Evaluation[];
}) {
  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 overflow-hidden">
      <table className="w-full">
        <thead className="bg-zinc-900">
          <tr>
            <th className="p-4 text-left">
              Provider
            </th>

            <th className="p-4 text-left">
              Attack
            </th>

            <th className="p-4 text-left">
              Toxicity
            </th>

            <th className="p-4 text-left">
              Risk
            </th>

            <th className="p-4 text-left">
              Time
            </th>

            <th className="p-4 text-left">
              Report
            </th>
          </tr>
        </thead>

        <tbody>
          {evaluations.map((evaluation) => {
            const toxicity =
              evaluation.toxicity_score ?? 0;

            const risk =
              toxicity < 0.2
                ? "🟢 Low"
                : toxicity < 0.6
                ? "🟡 Medium"
                : "🔴 High";

            return (
              <tr
                key={evaluation.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="p-4">
                  {evaluation.provider}
                </td>

                <td className="p-4">
                  {evaluation.attack_type}
                </td>

                <td className="p-4">
                  {toxicity.toFixed(4)}
                </td>

                <td className="p-4">
                  {risk}
                </td>

                <td className="p-4">
                  {new Date(
                    evaluation.created_at
                  ).toLocaleString()}
                </td>

                <td className="p-4">
                  <Link
                    href={`/dashboard/evaluation/${evaluation.id}`}
                    className="text-red-400 hover:text-red-300 font-semibold"
                  >
                    View Report →
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}