import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const performanceData = [
  { time: '0h', ALPHA: 10000, SIGMA: 10000, OMEGA: 10000, DELTA: 10000, GAMMA: 10000, THETA: 10000 },
  { time: '6h', ALPHA: 10200, SIGMA: 10150, OMEGA: 9950, DELTA: 10300, GAMMA: 10100, THETA: 9900 },
  { time: '12h', ALPHA: 10450, SIGMA: 10320, OMEGA: 9850, DELTA: 10650, GAMMA: 10150, THETA: 9750 },
  { time: '18h', ALPHA: 10680, SIGMA: 10480, OMEGA: 9700, DELTA: 10950, GAMMA: 10180, THETA: 9600 },
  { time: '24h', ALPHA: 10920, SIGMA: 10650, OMEGA: 9600, DELTA: 11200, GAMMA: 10200, THETA: 9450 },
  { time: '30h', ALPHA: 11150, SIGMA: 10820, OMEGA: 9520, DELTA: 11500, GAMMA: 10150, THETA: 9300 },
  { time: '36h', ALPHA: 11380, SIGMA: 11000, OMEGA: 9450, DELTA: 11850, GAMMA: 10100, THETA: 9150 },
  { time: '42h', ALPHA: 11620, SIGMA: 11180, OMEGA: 9350, DELTA: 12150, GAMMA: 10050, THETA: 8950 },
  { time: '48h', ALPHA: 11850, SIGMA: 11350, OMEGA: 9280, DELTA: 12450, GAMMA: 10000, THETA: 8800 },
  { time: '54h', ALPHA: 12100, SIGMA: 11520, OMEGA: 9180, DELTA: 12800, GAMMA: 9950, THETA: 8650 },
  { time: '60h', ALPHA: 12450, SIGMA: 11820, OMEGA: 9550, DELTA: 13200, GAMMA: 10980, THETA: 8800 },
];

const agents = [
  { key: 'ALPHA', color: '#ef4444', name: 'ALPHA' },
  { key: 'SIGMA', color: '#f97316', name: 'SIGMA' },
  { key: 'OMEGA', color: '#eab308', name: 'OMEGA' },
  { key: 'DELTA', color: '#22c55e', name: 'DELTA' },
  { key: 'GAMMA', color: '#3b82f6', name: 'GAMMA' },
  { key: 'THETA', color: '#a855f7', name: 'THETA' },
];

export default function PerformanceChart() {
  const [selectedAgents, setSelectedAgents] = useState<string[]>(
    agents.map(a => a.key)
  );

  const toggleAgent = (agentKey: string) => {
    setSelectedAgents(prev =>
      prev.includes(agentKey)
        ? prev.filter(k => k !== agentKey)
        : [...prev, agentKey]
    );
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-red-500 glow-red">
          PERFORMANCE TRACKING
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Portfolio value over time - Click agents to toggle visibility
        </p>

        <div className="bg-black border-2 border-red-500/30 p-6 md:p-8 glow-border-red">
          <div className="mb-6 flex flex-wrap gap-3 justify-center">
            {agents.map(agent => (
              <button
                key={agent.key}
                onClick={() => toggleAgent(agent.key)}
                className={`px-4 py-2 border-2 font-bold text-sm transition-all duration-300 ${
                  selectedAgents.includes(agent.key)
                    ? 'border-red-500 text-white glow-border-red'
                    : 'border-gray-700 text-gray-600'
                }`}
                style={{
                  borderColor: selectedAgents.includes(agent.key) ? agent.color : undefined,
                  color: selectedAgents.includes(agent.key) ? agent.color : undefined,
                }}
              >
                {agent.name}
              </button>
            ))}
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                dataKey="time"
                stroke="#888"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#888"
                style={{ fontSize: '12px' }}
                domain={[8500, 13500]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '2px solid #ff0044',
                  borderRadius: 0,
                  color: '#fff',
                }}
              />
              <Legend />
              {agents.map(agent => (
                selectedAgents.includes(agent.key) && (
                  <Line
                    key={agent.key}
                    type="monotone"
                    dataKey={agent.key}
                    stroke={agent.color}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                )
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
