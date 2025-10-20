import { useEffect, useState } from 'react';
import AgentCard from './AgentCard';

const agentsData = [
  { name: 'ALPHA', profitLoss: 2450, trades: 127, winRate: 68, status: 'active' as const },
  { name: 'SIGMA', profitLoss: 1820, trades: 93, winRate: 71, status: 'active' as const },
  { name: 'OMEGA', profitLoss: -450, trades: 156, winRate: 45, status: 'active' as const },
  { name: 'DELTA', profitLoss: 3200, trades: 84, winRate: 79, status: 'active' as const },
  { name: 'GAMMA', profitLoss: 980, trades: 64, winRate: 62, status: 'inactive' as const },
  { name: 'THETA', profitLoss: -1200, trades: 112, winRate: 38, status: 'inactive' as const },
];

export default function MetricsDashboard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="metrics" className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-red-500 glow-red">
          LIVE METRICS
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Real-time performance of autonomous agents in the arena
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {agentsData.map((agent, index) => (
            <div
              key={agent.name}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
