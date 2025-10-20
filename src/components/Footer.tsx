import { Twitter, ExternalLink, Zap } from 'lucide-react';

export default function Footer() {
  const links = [
    {
      name: 'Twitter',
      url: 'https://x.com/lenoalgorithm',
      icon: Twitter
    },
    {
      name: 'Pump.fun',
      url: 'https://pump.fun',
      icon: Zap
    },
    {
      name: 'Solana Explorer',
      url: 'https://explorer.solana.com',
      icon: ExternalLink
    },
  ];

  return (
    <footer className="relative py-12 px-4 z-10 border-t-2 border-red-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-red-500 glow-red mb-2">LENO ALGORITHM</h3>
            <p className="text-gray-500 text-sm">Autonomous Trading Intelligence Benchmark</p>
          </div>

          <div className="flex gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 border-2 border-red-900/50
                             hover:border-red-500 text-gray-400 hover:text-red-500 transition-all duration-300
                             hover:glow-border-red"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-sm">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-900/20 text-center text-gray-600 text-sm">
          <p>© 2025 Leno Algorithm. All trades executed on-chain.</p>
        </div>
      </div>
    </footer>
  );
}
