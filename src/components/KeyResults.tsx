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
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      icon: Target,
      title: "Yahoo Finance",
      subtitle: "Financial Predictions",
      value: "0.095",
      description: "AI Brier Score vs 0.123 Human",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      icon: TrendingUp,
      title: "1,000+",
      subtitle: "Questions Evaluated",
      value: "7 Datasets",
      description: "Comprehensive benchmarking",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      icon: Award,
      title: "Scientific Rigor",
      subtitle: "Data Leakage Prevention",
      value: "100%",
      description: "Methodology compliance",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section className="py-40 px-8 bg-background" id="performance">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-6xl font-bold mb-12 leading-tight">
            Proven <span className="text-accent">Performance</span>
          </h2>
          <p className="text-2xl text-secondary max-w-5xl mx-auto leading-relaxed">
            Our AI consistently outperforms expert human forecasters across multiple domains, 
            delivering superior accuracy with rigorous scientific methodology.
          </p>
        </div>

        {/* Key Achievement Card */}
        <div className="bg-accent/5 border border-accent/20 rounded-3xl p-20 text-center mb-32">
          <div className="flex items-center justify-center mb-16">
            <Trophy className="w-16 h-16 text-accent mr-6" />
            <h3 className="text-5xl font-bold">🏆 Key Achievement</h3>
          </div>
          <p className="text-2xl mb-20 max-w-5xl mx-auto leading-relaxed">
            <span className="text-accent font-semibold">ForecastLabs AI outperforms superforecasters</span> on Manifold Markets 
            with statistical significance, demonstrating superior accuracy in real-world prediction scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="bg-card/50 rounded-2xl p-16 border border-border">
              <div className="text-7xl font-bold text-accent mb-6">0.082</div>
              <div className="text-secondary font-medium text-xl">AI Brier Score</div>
            </div>
            <div className="bg-card/50 rounded-2xl p-16 border border-border">
              <div className="text-7xl font-bold text-secondary mb-6">0.134</div>
              <div className="text-secondary font-medium text-xl">Human Brier Score</div>
            </div>
            <div className="bg-card/50 rounded-2xl p-16 border border-border">
              <div className="text-7xl font-bold text-green-400 mb-6">38.8%</div>
              <div className="text-secondary font-medium text-xl">Better Performance</div>
            </div>
          </div>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {keyMetrics.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.title}
                className={`${metric.bgColor} ${metric.borderColor} border rounded-2xl p-16 text-center hover:scale-105 transition-transform duration-300`}
              >
                <IconComponent className={`w-16 h-16 mx-auto mb-12 ${metric.color}`} />
                <h3 className="font-bold text-3xl mb-6 leading-tight">{metric.title}</h3>
                <p className="text-secondary text-lg mb-8 leading-relaxed">{metric.subtitle}</p>
                <div className={`text-5xl font-bold mb-6 ${metric.color}`}>
                  {metric.value}
                </div>
                <p className="text-base text-muted leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/performance" 
            className="inline-flex items-center px-12 py-6 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors duration-300 text-xl font-semibold"
          >
            📈 View Detailed Performance Analysis
          </a>
          <p className="text-secondary mt-8 text-lg">
            Explore comprehensive charts, datasets, and statistical analysis
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyResults;