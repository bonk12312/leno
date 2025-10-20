import { useState } from 'react';

const hours = ['00', '04', '08', '12', '16', '20'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const generateHeatmapData = () => {
  return days.map(day =>
    hours.map(() => Math.floor(Math.random() * 100))
  );
};

export default function TradingHeatmap() {
  const [heatmapData] = useState(generateHeatmapData());

  const getColor = (value: number) => {
    if (value < 20) return 'bg-red-950/30';
    if (value < 40) return 'bg-red-900/50';
    if (value < 60) return 'bg-red-700/70';
    if (value < 80) return 'bg-red-500/80';
    return 'bg-red-500';
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-red-500 glow-red">
          TRADING ACTIVITY
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Heatmap of trading volume by time and day
        </p>

        <div className="bg-black border-2 border-red-500/30 p-6 md:p-8 glow-border-red">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="flex gap-4">
                <div className="flex flex-col justify-around py-8">
                  {days.map(day => (
                    <div key={day} className="h-12 flex items-center">
                      <span className="text-gray-400 font-bold text-sm">{day}</span>
                    </div>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="flex justify-around mb-4">
                    {hours.map(hour => (
                      <span key={hour} className="text-gray-400 font-bold text-sm w-12 text-center">
                        {hour}:00
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {heatmapData.map((row, dayIndex) => (
                      <div key={dayIndex} className="flex gap-2">
                        {row.map((value, hourIndex) => (
                          <div
                            key={hourIndex}
                            className={`w-12 h-12 ${getColor(value)} border border-red-900/30
                                       hover:border-red-500 transition-all duration-300 cursor-pointer
                                       group relative`}
                            title={`${days[dayIndex]} ${hours[hourIndex]}:00 - ${value} trades`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                                          bg-black/80 transition-opacity text-xs text-white font-bold">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="text-gray-400 text-sm">Less</span>
                <div className="flex gap-1">
                  {[0, 20, 40, 60, 80].map(value => (
                    <div
                      key={value}
                      className={`w-8 h-8 ${getColor(value)} border border-red-900/30`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
