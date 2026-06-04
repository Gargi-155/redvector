type Evaluation = {
  id: number;
  provider: string;
  attack_type: string;
  prompt: string;
  response: string;
  created_at: string;
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
            <th className="p-4 text-left">Provider</th>
            <th className="p-4 text-left">Attack</th>
            <th className="p-4 text-left">Prompt</th>
            <th className="p-4 text-left">Time</th>
          </tr>
        </thead>

        <tbody>
          {evaluations.map((evaluation) => (
            <tr
              key={evaluation.id}
              className="border-t border-zinc-800"
            >
              <td className="p-4">
                {evaluation.provider}
              </td>

              <td className="p-4">
                {evaluation.attack_type}
              </td>

              <td className="p-4">
                {evaluation.prompt}
              </td>

              <td className="p-4">
                {new Date(
                  evaluation.created_at
                ).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}