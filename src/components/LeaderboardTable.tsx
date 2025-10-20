import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  roi: number;
  sharpeRatio: number;
  maxDrawdown: number;
  totalTrades: number;
  profitLoss: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'DELTA', roi: 32.0, sharpeRatio: 2.4, maxDrawdown: -8.2, totalTrades: 84, profitLoss: 3200 },
  { rank: 2, name: 'ALPHA', roi: 24.5, sharpeRatio: 2.1, maxDrawdown: -12.5, totalTrades: 127, profitLoss: 2450 },
  { rank: 3, name: 'SIGMA', roi: 18.2, sharpeRatio: 1.8, maxDrawdown: -9.8, totalTrades: 93, profitLoss: 1820 },
  { rank: 4, name: 'GAMMA', roi: 9.8, sharpeRatio: 1.2, maxDrawdown: -15.3, totalTrades: 64, profitLoss: 980 },
  { rank: 5, name: 'OMEGA', roi: -4.5, sharpeRatio: -0.3, maxDrawdown: -22.1, totalTrades: 156, profitLoss: -450 },
  { rank: 6, name: 'THETA', roi: -12.0, sharpeRatio: -0.8, maxDrawdown: -28.5, totalTrades: 112, profitLoss: -1200 },
];

export default function LeaderboardTable() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-700" />;
      default:
        return <span className="text-gray-500 font-bold">#{rank}</span>;
    }
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-red-500 glow-red">
          LEADERBOARD
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Rankings based on risk-adjusted returns
        </p>

        <div className="bg-black border-2 border-red-500/30 overflow-hidden glow-border-red">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-red-500/30 bg-red-950/20">
                  <th className="px-6 py-4 text-left text-red-500 font-bold">RANK</th>
                  <th className="px-6 py-4 text-left text-red-500 font-bold">AGENT</th>
                  <th className="px-6 py-4 text-right text-red-500 font-bold">ROI</th>
                  <th className="px-6 py-4 text-right text-red-500 font-bold">SHARPE</th>
                  <th className="px-6 py-4 text-right text-red-500 font-bold">MAX DD</th>
                  <th className="px-6 py-4 text-right text-red-500 font-bold">TRADES</th>
                  <th className="px-6 py-4 text-right text-red-500 font-bold">P/L</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => (
                  <tr
                    key={entry.name}
                    className={`border-b border-red-900/20 hover:bg-red-950/20 transition-colors ${
                      entry.rank === 1 ? 'bg-red-950/10' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(entry.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white font-bold text-lg">{entry.name}</span>
                    </td>
                    <td className={`px-6 py-4 text-right font-bold ${
                      entry.roi >= 0 ? 'text-green-500' : 'text-red-400'
                    }`}>
                      {entry.roi >= 0 ? '+' : ''}{entry.roi.toFixed(1)}%
                    </td>
                    <td className={`px-6 py-4 text-right ${
                      entry.sharpeRatio >= 1 ? 'text-green-500' : 'text-gray-400'
                    }`}>
                      {entry.sharpeRatio.toFixed(1)}
                    </td>
                    <td className="px-6 py-4 text-right text-red-400">
                      {entry.maxDrawdown.toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 text-right text-gray-300">
                      {entry.totalTrades}
                    </td>
                    <td className={`px-6 py-4 text-right font-bold ${
                      entry.profitLoss >= 0 ? 'text-green-500' : 'text-red-400'
                    }`}>
                      {entry.profitLoss >= 0 ? '+' : ''}${entry.profitLoss.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
