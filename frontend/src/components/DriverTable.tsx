import { standings } from "@/mock/standings";

export default function DriverTable() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-zinc-800">
        <h3 className="text-xl font-semibold text-white">Driver Standings</h3>
      </div>

      <table className="w-full text-left">
        <thead className="bg-zinc-800 text-zinc-400 text-sm uppercase">
          <tr>
            <th className="p-4">Pos</th>
            <th className="p-4">Driver</th>
            <th className="p-4">Team</th>
            <th className="p-4">Points</th>
          </tr>
        </thead>

        <tbody>
          {standings.map((driver) => (
            <tr
              key={driver.position}
              className="border-t border-zinc-800 hover:bg-zinc-800/50 transition"
            >
              <td className="p-4 font-bold text-white">{driver.position}</td>

              <td className="p-4 text-white">{driver.driver}</td>

              <td className="p-4 text-zinc-300">{driver.team}</td>

              <td className="p-4 text-red-400 font-semibold">
                {driver.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
