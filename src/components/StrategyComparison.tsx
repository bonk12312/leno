import { useState } from 'react';
import { Brain, Zap, Target, TrendingUp, Shield, Clock } from 'lucide-react';

interface Strategy {
  name: string;
  agent: string;
  style: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  avgHoldTime: string;
  description: string;
  metrics: {
    avgWin: string;
    avgLoss: string;
    riskReward: string;
  };
}

const strategies: Strategy[] = [
  {
    name: 'Momentum Hunter',
    agent: 'DELTA',
    style: 'Aggressive',
    riskLevel: 'High',
    avgHoldTime: '2.3h',
    description: 'Capitalizes on strong price movements and volume spikes',
    metrics: { avgWin: '+12.5%', avgLoss: '-4.2%', riskReward: '2.98:1' }
  },
  {
    name: 'Mean Reversion',
    agent: 'ALPHA',
    style: 'Balanced',
    riskLevel: 'Medium',
    avgHoldTime: '4.7h',
    description: 'Identifies oversold conditions and reversal patterns',
    metrics: { avgWin: '+8.3%', avgLoss: '-3.5%', riskReward: '2.37:1' }
  },
  {
    name: 'Scalper Pro',
    agent: 'SIGMA',
    style: 'Conservative',
    riskLevel: 'Low',
    avgHoldTime: '0.8h',
    description: 'High-frequency trading with tight risk management',
    metrics: { avgWin: '+3.2%', avgLoss: '-1.8%', riskReward: '1.78:1' }
  },
  {
    name: 'Volatility Trader',
    agent: 'OMEGA',
    style: 'Experimental',
    riskLevel: 'High',
    avgHoldTime: '6.2h',
    description: 'Exploits high volatility periods in memecoin markets',
    metrics: { avgWin: '+15.8%', avgLoss: '-8.5%', riskReward: '1.86:1' }
  },
];

export default function StrategyComparison() {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy>(strategies[0]);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-500 border-green-500';
      case 'Medium': return 'text-yellow-500 border-yellow-500';
      case 'High': return 'text-red-500 border-red-500';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-red-500 glow-red">
          STRATEGY ANALYSIS
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Deep dive into each agent's trading methodology
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-3">
            {strategies.map((strategy) => (
              <button
                key={strategy.name}
                onClick={() => setSelectedStrategy(strategy)}
                className={`w-full text-left p-4 border-2 transition-all duration-300 ${
                  selectedStrategy.name === strategy.name
                    ? 'border-red-500 bg-red-950/30 glow-border-red'
                    : 'border-red-900/30 bg-black hover:border-red-500/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-white">{strategy.name}</span>
                </div>
                <div className="text-sm text-gray-400">Agent: {strategy.agent}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-black border-2 border-red-500/30 p-8 glow-border-red">
            <div className="mb-6">
              <h3 className="text-3xl font-black text-red-500 glow-red mb-2">
                {selectedStrategy.name}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-400">Agent:</span>
                <span className="text-white font-bold text-xl">{selectedStrategy.agent}</span>
              </div>
              <p className="text-gray-300 text-lg">{selectedStrategy.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-950/20 border border-red-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-red-500" />
                  <span className="text-gray-400 text-sm">Style</span>
                </div>
                <div className="text-white font-bold">{selectedStrategy.style}</div>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span className="text-gray-400 text-sm">Risk Level</span>
                </div>
                <div className={`font-bold border-l-4 pl-2 ${getRiskColor(selectedStrategy.riskLevel)}`}>
                  {selectedStrategy.riskLevel}
                </div>
              </div>

              <div className="bg-red-950/20 border border-red-900/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span className="text-gray-400 text-sm">Avg Hold</span>
                </div>
                <div className="text-white font-bold">{selectedStrategy.avgHoldTime}</div>
              </div>
            </div>

            <div className="border-t-2 border-red-900/30 pt-6">
              <h4 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Performance Metrics
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-500 mb-1">
                    {selectedStrategy.metrics.avgWin}
                  </div>
                  <div className="text-sm text-gray-400">Avg Win</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-red-400 mb-1">
                    {selectedStrategy.metrics.avgLoss}
                  </div>
                  <div className="text-sm text-gray-400">Avg Loss</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-yellow-500 mb-1">
                    {selectedStrategy.metrics.riskReward}
                  </div>
                  <div className="text-sm text-gray-400">Risk/Reward</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-950/20 border-l-4 border-red-500">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  This strategy demonstrates strong performance in {selectedStrategy.riskLevel.toLowerCase()} risk scenarios
                  with an average hold time of {selectedStrategy.avgHoldTime}, making it suitable for
                  {selectedStrategy.style.toLowerCase()} market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
