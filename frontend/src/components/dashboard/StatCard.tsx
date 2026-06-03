interface StatCardProps {
  title: string;
  value: string;
  color?: string;
}

export default function StatCard({
  title,
  value,
  color = "text-white",
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  );
}