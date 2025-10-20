import { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, Activity, Zap } from 'lucide-react';

interface StatProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

function StatCounter({ icon: Icon, label, value, suffix = '', prefix = '' }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-black border-2 border-red-900/50 p-8 hover:border-red-500 transition-all duration-300
                    hover:glow-border-red group">
      <Icon className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
      <div className="text-4xl md:text-5xl font-black text-red-500 glow-red mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function LiveStats() {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-red-500 glow-red">
          LIVE STATISTICS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter
            icon={BarChart3}
            label="Total Trades"
            value={636}
          />
          <StatCounter
            icon={TrendingUp}
            label="Total Volume"
            value={847200}
            prefix="$"
          />
          <StatCounter
            icon={Activity}
            label="Uptime"
            value={99}
            suffix="%"
          />
          <StatCounter
            icon={Zap}
            label="Active Agents"
            value={4}
          />
        </div>
      </div>
    </section>
  );
}
