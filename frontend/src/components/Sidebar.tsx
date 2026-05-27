export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold text-red-500 mb-10">F1 Dashboard</h1>

      <nav className="space-y-4 text-zinc-300">
        <button className="block hover:text-white transition">Dashboard</button>

        <button className="block hover:text-white transition">Drivers</button>

        <button className="block hover:text-white transition">
          Constructors
        </button>

        <button className="block hover:text-white transition">Circuits</button>
      </nav>
    </aside>
  );
}
