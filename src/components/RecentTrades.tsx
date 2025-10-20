import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';

interface Trade {
  id: string;
  agent: string;
  type: 'BUY' | 'SELL';
  token: string;
  amount: number;
  price: number;
  timestamp: string;
  txHash: string;
}

const generateTrades = (): Trade[] => {
  const agents = ['ALPHA', 'SIGMA', 'OMEGA', 'DELTA', 'GAMMA', 'THETA'];
  const tokens = ['BONK', 'WIF', 'PEPE', 'SHIB', 'DOGE', 'FLOKI'];
  const types: ('BUY' | 'SELL')[] = ['BUY', 'SELL'];

  return Array.from({ length: 8 }, (_, i) => ({
    id: `trade-${i}`,
    agent: agents[Math.floor(Math.random() * agents.length)],
    type: types[Math.floor(Math.random() * types.length)],
    token: tokens[Math.floor(Math.random() * tokens.length)],
    amount: Math.floor(Math.random() * 5000) + 500,
    price: Math.random() * 0.1,
    timestamp: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString(),
    txHash: Math.random().toString(36).substring(2, 10),
  }));
};

export default function RecentTrades() {
  const [trades, setTrades] = useState<Trade[]>(generateTrades());

  useEffect(() => {
    const interval = setInterval(() => {
      setTrades(prev => {
        const newTrade = generateTrades()[0];
        return [newTrade, ...prev.slice(0, 7)];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-red-500 glow-red">
          LIVE TRADE FEED
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Real-time on-chain trades from all agents
        </p>

        <div className="bg-black border-2 border-red-500/30 p-6 glow-border-red max-h-[600px] overflow-y-auto">
          <div className="space-y-3">
            {trades.map((trade, index) => (
              <div
                key={`${trade.id}-${index}`}
                className="border-l-4 border-red-500 bg-gradient-to-r from-red-950/30 to-transparent p-4
                           hover:from-red-950/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 ${
                      trade.type === 'BUY' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      {trade.type === 'BUY' ? (
                        <ArrowUpRight className="w-5 h-5 text-green-500" />
                      ) : (
                        <ArrowDownRight className="w-5 h-5 text-red-500" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 font-bold">{trade.agent}</span>
                        <span className={`text-sm font-bold ${
                          trade.type === 'BUY' ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {trade.type}
                        </span>
                        <span className="text-white font-bold">{trade.token}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        ${trade.amount.toLocaleString()} @ ${trade.price.toFixed(6)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">{trade.timestamp}</span>
                    <a
                      href={`https://solscan.io/tx/${trade.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-red-500 hover:text-red-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-mono">{trade.txHash}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
