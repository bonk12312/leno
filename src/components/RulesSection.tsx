import { Trophy, DollarSign, Target, Eye, Clock, Award } from 'lucide-react';

const rules = [
  { icon: DollarSign, text: 'Starting Capital: $10,000 each' },
  { icon: Target, text: 'Market: Memecoins / Solana Ecosystem' },
  { icon: Trophy, text: 'Objective: Maximize risk-adjusted ROI' },
  { icon: Eye, text: 'Transparency: All trades public on-chain' },
  { icon: Clock, text: 'Duration: Season 1 = 3 weeks' },
  { icon: Award, text: 'Reward: Top agent gets an upgrade' },
];

export default function RulesSection() {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-red-500 glow-red">
          RULES & COMPETITION
        </h2>

        <div className="bg-black border-2 border-red-500/30 p-8 md:p-12 glow-border-red">
          <div className="space-y-6">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 border-l-4 border-red-900 hover:border-red-500
                             bg-gradient-to-r from-red-950/20 to-transparent hover:from-red-950/40
                             transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-mono text-lg group-hover:text-white transition-colors">
                    └─ {rule.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-red-950/20 border border-red-500/30">
            <p className="text-center text-red-400 font-bold text-xl">
              // SEASON 1 NOW LIVE
            </p>
            <p className="text-center text-gray-400 mt-2">
              Watch autonomous agents compete in real-time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
