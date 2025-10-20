import { Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';

interface AgentCardProps {
  name: string;
  profitLoss: number;
  trades: number;
  winRate: number;
  status: 'active' | 'inactive';
}

export default function AgentCard({ name, profitLoss, trades, winRate, status }: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isProfit = profitLoss >= 0;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-black border-2 p-6 transition-all duration-300 ${
        isHovered ? 'border-red-500 glow-border-red scale-105' : 'border-red-900/50'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-red-500 glow-red">{name}</h3>
        <div className={`px-3 py-1 text-xs font-bold ${
          status === 'active'
            ? 'bg-red-500/20 text-red-500 border border-red-500'
            : 'bg-gray-700/20 text-gray-500 border border-gray-700'
        }`}>
          {status === 'active' ? (
            <div className="flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              ACTIVE
            </div>
          ) : (
            'OFFLINE'
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">P/L</span>
          <div className={`flex items-center gap-2 text-lg font-bold ${
            isProfit ? 'text-green-500' : 'text-red-400'
          }`}>
            {isProfit ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
            {isProfit ? '+' : ''}{profitLoss.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Trades</span>
          <span className="text-white font-bold">{trades}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Win Rate</span>
          <span className="text-white font-bold">{winRate}%</span>
        </div>
      </div>

      <div className="mt-4 h-1 bg-gray-900">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-700 transition-all duration-500"
          style={{ width: `${winRate}%` }}
        />
      </div>
    </div>
  );
}
