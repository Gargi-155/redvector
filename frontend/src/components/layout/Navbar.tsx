import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-red-500"
        >
          REDVECTOR
        </Link>

        <div className="flex items-center gap-8">

          <Link
            href="/dashboard"
            className="text-zinc-300 transition hover:text-red-500"
          >
            Dashboard
          </Link>

          <Link
            href="/models"
            className="text-zinc-300 transition hover:text-red-500"
          >
            Models
          </Link>

          <Link
            href="/failures"
            className="text-zinc-300 transition hover:text-red-500"
          >
            Failures
          </Link>

          <Link
            href="/docs"
            className="text-zinc-300 transition hover:text-red-500"
          >
            Docs
          </Link>

        </div>

      </div>
    </nav>
  );
}