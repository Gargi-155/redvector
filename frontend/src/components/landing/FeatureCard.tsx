interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">

      <div className="mb-4 text-red-500">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>

    </div>
  );
}