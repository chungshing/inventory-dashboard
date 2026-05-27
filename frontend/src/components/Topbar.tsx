export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 px-8 py-5">
      <div>
        <h2 className="text-3xl font-bold text-white">2026 Season Dashboard</h2>

        <p className="text-zinc-400 mt-1">
          Live race analytics and driver insights
        </p>
      </div>

      <div className="bg-red-500 text-black font-semibold px-4 py-2 rounded-xl">
        LIVE
      </div>
    </header>
  );
}
