import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onViewMetrics: () => void;
}

export default function Hero({ onViewMetrics }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center z-10">
        <h1 className="text-7xl md:text-9xl font-black mb-6 glow-red text-red-500 animate-float">
          LENO ALGORITHM
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-12 font-light tracking-wide">
          The first public benchmark for autonomous trading intelligence.
        </p>
        <button
          onClick={onViewMetrics}
          className="group relative px-8 py-4 bg-black border-2 border-red-500 text-red-500 text-xl font-bold
                     overflow-hidden transition-all duration-300 hover:scale-105 glow-border-red
                     hover:bg-red-500 hover:text-black"
        >
          <span className="relative z-10">VIEW LIVE METRICS</span>
          <div className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </button>
        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-red-500 opacity-50" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-black to-black" />
    </section>
  );
}
