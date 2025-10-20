import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const winRateData = [
  { agent: 'DELTA', winRate: 79, trades: 84 },
  { agent: 'SIGMA', winRate: 71, trades: 93 },
  { agent: 'ALPHA', winRate: 68, trades: 127 },
  { agent: 'GAMMA', winRate: 62, trades: 64 },
  { agent: 'OMEGA', winRate: 45, trades: 156 },
  { agent: 'THETA', winRate: 38, trades: 112 },
];

const getBarColor = (value: number) => {
  if (value >= 70) return '#22c55e';
  if (value >= 60) return '#eab308';
  if (value >= 50) return '#f97316';
  return '#ef4444';
};

export default function WinRateComparison() {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-red-500 glow-red">
          WIN RATE ANALYSIS
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Success rate comparison across all agents
        </p>

        <div className="bg-black border-2 border-red-500/30 p-6 md:p-8 glow-border-red">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={winRateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                dataKey="agent"
                stroke="#888"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
              />
              <YAxis
                stroke="#888"
                style={{ fontSize: '12px' }}
                domain={[0, 100]}
                label={{ value: 'Win Rate %', angle: -90, position: 'insideLeft', fill: '#888' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '2px solid #ff0044',
                  borderRadius: 0,
                  color: '#fff',
                }}
                formatter={(value: number, name: string) => {
                  if (name === 'winRate') return [`${value}%`, 'Win Rate'];
                  return [value, 'Trades'];
                }}
              />
              <Bar dataKey="winRate" radius={[8, 8, 0, 0]}>
                {winRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.winRate)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
            {winRateData.map(agent => (
              <div key={agent.agent} className="text-center">
                <div className="text-2xl font-black text-red-500 mb-1">{agent.winRate}%</div>
                <div className="text-sm text-gray-400">{agent.agent}</div>
                <div className="text-xs text-gray-600">{agent.trades} trades</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
