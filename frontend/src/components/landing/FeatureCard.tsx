interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10">
      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}