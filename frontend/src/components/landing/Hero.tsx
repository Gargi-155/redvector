export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-500">
          AI Safety Platform
        </p>

        <h1 className="mb-6 text-7xl font-bold">
          Benchmark.
          <br />
          Attack.
          <br />
          Evaluate.
          <br />
          Secure.
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          Automated red-teaming, jailbreak analysis, toxicity
          detection, bias evaluation, and risk intelligence
          for modern large language models.
        </p>
      </div>
    </section>
  );
}