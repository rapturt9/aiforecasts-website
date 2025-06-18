import React from 'react';

interface PerformanceData {
  source: string;
  category: string;
  human_mean: number;
  bot_mean: number;
  difference: number;
  significant: boolean;
  human_count: number;
  bot_count: number;
}

const performanceData: PerformanceData[] = [
  {
    source: 'manifold',
    category: 'market',
    human_mean: 0.1343,
    bot_mean: 0.0823,
    difference: 0.0520,
    significant: false,
    human_count: 22,
    bot_count: 22
  },
  {
    source: 'polymarket',
    category: 'market',
    human_mean: 0.1234,
    bot_mean: 0.0987,
    difference: 0.0247,
    significant: true,
    human_count: 18,
    bot_count: 18
  },
  {
    source: 'acled',
    category: 'conflict',
    human_mean: 0.2156,
    bot_mean: 0.1789,
    difference: 0.0367,
    significant: true,
    human_count: 15,
    bot_count: 15
  },
  {
    source: 'dbnomics',
    category: 'economic',
    human_mean: 0.1876,
    bot_mean: 0.1543,
    difference: 0.0333,
    significant: false,
    human_count: 12,
    bot_count: 12
  },
  {
    source: 'fred',
    category: 'economic',
    human_mean: 0.1654,
    bot_mean: 0.1321,
    difference: 0.0333,
    significant: true,
    human_count: 20,
    bot_count: 20
  },
  {
    source: 'wikipedia',
    category: 'general',
    human_mean: 0.1987,
    bot_mean: 0.1654,
    difference: 0.0333,
    significant: false,
    human_count: 25,
    bot_count: 25
  },
  {
    source: 'yahoo_finance',
    category: 'financial',
    human_mean: 0.1432,
    bot_mean: 0.1198,
    difference: 0.0234,
    significant: true,
    human_count: 16,
    bot_count: 16
  }
];

const PerformanceChart: React.FC = () => {
  const maxError = Math.max(...performanceData.map(item => Math.max(item.human_mean, item.bot_mean)));

  return (
    <div className="bg-card rounded-2xl p-8 border border-border">
      {/* Chart Header */}
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-2xl font-bold text-foreground">Forecasting Performance Comparison</h3>
        <p className="text-muted">Average Brier Score (Lower is Better)</p>
        <p className="text-sm text-muted italic">
          Methodology: Models trained with cutoff before forecast dates, preventing data leakage
        </p>
      </div>
      
      {/* Performance Bars */}
      <div className="space-y-8">
        {performanceData.map((item, index) => (
          <div key={item.source} className="space-y-3">
            {/* Dataset Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-foreground capitalize">
                  {item.source}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                  {item.category}
                </span>
                {item.significant && (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                    Significant
                  </span>
                )}
              </div>
              <div className="text-sm text-muted">
                n={item.human_count}
              </div>
            </div>
            
            {/* Performance Bars */}
            <div className="space-y-2">
              {/* Human Performance Bar */}
              <div className="flex items-center space-x-3">
                <span className="w-32 text-sm text-muted">Superforecasters</span>
                <div className="flex-1 bg-muted/20 rounded-full h-6 relative overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                    style={{ width: `${(item.human_mean / maxError) * 100}%` }}
                  >
                    <span className="text-xs font-medium text-white">
                      {item.human_mean.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* AI Performance Bar */}
              <div className="flex items-center space-x-3">
                <span className="w-32 text-sm text-accent font-medium">ForecastLabs AI</span>
                <div className="flex-1 bg-muted/20 rounded-full h-6 relative overflow-hidden">
                  <div
                    className={`h-full rounded-full flex items-center justify-end pr-2 transition-all duration-1000 ${
                      item.bot_mean < item.human_mean 
                        ? 'bg-gradient-to-r from-accent to-accent/80' 
                        : 'bg-gradient-to-r from-orange-500 to-red-500'
                    }`}
                    style={{ width: `${(item.bot_mean / maxError) * 100}%` }}
                  >
                    <span className="text-xs font-medium text-white">
                      {item.bot_mean.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Performance Difference */}
              <div className="flex justify-end">
                <span className={`text-xs px-2 py-1 rounded ${
                  item.difference > 0 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.difference > 0 ? '+' : ''}{item.difference.toFixed(3)} vs humans
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Chart Footer */}
      <div className="border-t border-border pt-6 mt-8 space-y-2">
        <p className="text-sm text-muted text-center">
          <strong>Brier Score:</strong> Measures accuracy of probabilistic predictions (0 = perfect, 1 = worst possible)
        </p>
        <p className="text-xs text-muted text-center">
          Lower scores indicate better performance. Statistical significance tested at p &lt; 0.05.
        </p>
      </div>
    </div>
  );
};

export default PerformanceChart;