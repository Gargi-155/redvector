export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wider text-red-500">
          REDVECTOR
        </h1>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#">Dashboard</a>
          <a href="#">Models</a>
          <a href="#">Failures</a>
          <a href="#">Docs</a>
        </div>
      </div>
    </nav>
  );
}