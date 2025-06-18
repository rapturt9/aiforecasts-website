import React from 'react';
import { Trophy, TrendingUp, Target, Award } from 'lucide-react';

export const KeyResults: React.FC = () => {
  const keyMetrics = [
    {
      icon: Trophy,
      title: "Manifold Markets",
      subtitle: "Outperforms Superforecasters",
      value: "0.082",
      description: "AI Brier Score (Lower is Better)",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: Target,
      title: "Yahoo Finance",
      subtitle: "Financial Predictions",
      value: "0.095",
      description: "AI Brier Score vs 0.123 Human",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: TrendingUp,
      title: "1,000+",
      subtitle: "Questions Evaluated",
      value: "7 Datasets",
      description: "Comprehensive benchmarking",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Award,
      title: "Scientific Rigor",
      subtitle: "Data Leakage Prevention",
      value: "100%",
      description: "Methodology compliance",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900" id="performance">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight text-white">
            Proven <span className="text-indigo-400">Performance</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            Our AI consistently outperforms expert human forecasters across multiple domains, 
            delivering superior accuracy with rigorous scientific methodology.
          </p>
        </div>

        {/* Key Achievement Card */}
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 text-center mb-12 sm:mb-16 lg:mb-24">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 lg:mb-16">
            <Trophy className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-indigo-400 mb-4 sm:mb-0 sm:mr-4 lg:mr-6" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              🏆 Key Achievement
            </h3>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 sm:mb-16 lg:mb-20 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed text-gray-300">
            <span className="text-indigo-400 font-semibold">ForecastLabs AI outperforms superforecasters</span> on Manifold Markets 
            with statistical significance, demonstrating superior accuracy in real-world prediction scenarios.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-indigo-400 mb-3 sm:mb-4 lg:mb-6">
                0.082
              </div>
              <div className="text-gray-400 font-medium text-base sm:text-lg lg:text-xl">
                AI Brier Score
              </div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 hover:border-gray-600 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-400 mb-3 sm:mb-4 lg:mb-6">
                0.134
              </div>
              <div className="text-gray-400 font-medium text-base sm:text-lg lg:text-xl">
                Human Brier Score
              </div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 hover:border-green-400/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-400 mb-3 sm:mb-4 lg:mb-6">
                38.8%
              </div>
              <div className="text-gray-400 font-medium text-base sm:text-lg lg:text-xl">
                Better Performance
              </div>
            </div>
          </div>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-24">
          {keyMetrics.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.title}
                className={`${metric.bgColor} ${metric.borderColor} border rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-center hover:scale-105 transition-all duration-300 hover:border-opacity-50`}
              >
                <IconComponent className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 sm:mb-8 lg:mb-12 ${metric.color}`} />
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 leading-tight text-white">
                  {metric.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                  {metric.subtitle}
                </p>
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 ${metric.color}`}>
                  {metric.value}
                </div>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/performance" 
            className="inline-flex items-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl"
          >
            📈 View Detailed Performance Analysis
          </a>
          <p className="text-gray-400 mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg">
            Explore comprehensive charts, datasets, and statistical analysis
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyResults;