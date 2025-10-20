import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import MetricsDashboard from './components/MetricsDashboard';
import PerformanceChart from './components/PerformanceChart';
import LeaderboardTable from './components/LeaderboardTable';
import WinRateComparison from './components/WinRateComparison';
import RecentTrades from './components/RecentTrades';
import TradingHeatmap from './components/TradingHeatmap';
import StrategyComparison from './components/StrategyComparison';
import RulesSection from './components/RulesSection';
import LiveStats from './components/LiveStats';
import Footer from './components/Footer';

function App() {
  const scrollToMetrics = () => {
    const metricsSection = document.getElementById('metrics');
    if (metricsSection) {
      metricsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />

      <div className="relative z-10">
        <Hero onViewMetrics={scrollToMetrics} />
        <LiveStats />
        <MetricsDashboard />
        <LeaderboardTable />
        <PerformanceChart />
        <WinRateComparison />
        <StrategyComparison />
        <RecentTrades />
        <TradingHeatmap />
        <RulesSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
