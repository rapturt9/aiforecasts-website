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
    <section className="py-20 px-6 bg-background" id="performance">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Proven <span className="text-accent">Performance</span>
          </h2>
          <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Our AI consistently outperforms expert human forecasters across multiple domains, 
            delivering superior accuracy with rigorous scientific methodology.
          </p>
        </div>

        {/* Key Achievement Card */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-12 text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-12 h-12 text-accent mr-4" />
            <h3 className="text-4xl font-bold">🏆 Key Achievement</h3>
          </div>
          <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-accent font-semibold">ForecastLabs AI outperforms superforecasters</span> on Manifold Markets 
            with statistical significance, demonstrating superior accuracy in real-world prediction scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 rounded-xl p-8 border border-border">
              <div className="text-5xl font-bold text-accent mb-3">0.082</div>
              <div className="text-secondary font-medium">AI Brier Score</div>
            </div>
            <div className="bg-card/50 rounded-xl p-8 border border-border">
              <div className="text-5xl font-bold text-secondary mb-3">0.134</div>
              <div className="text-secondary font-medium">Human Brier Score</div>
            </div>
            <div className="bg-card/50 rounded-xl p-8 border border-border">
              <div className="text-5xl font-bold text-green-400 mb-3">38.8%</div>
              <div className="text-secondary font-medium">Better Performance</div>
            </div>
          </div>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyMetrics.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.title}
                className={`${metric.bgColor} ${metric.borderColor} border rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300`}
              >
                <IconComponent className={`w-12 h-12 mx-auto mb-6 ${metric.color}`} />
                <h3 className="font-bold text-2xl mb-3 leading-tight">{metric.title}</h3>
                <p className="text-secondary text-base mb-4 leading-relaxed">{metric.subtitle}</p>
                <div className={`text-4xl font-bold mb-3 ${metric.color}`}>
                  {metric.value}
                </div>
                <p className="text-sm text-muted leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/performance" 
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors duration-300 text-lg font-semibold"
          >
            📈 View Detailed Performance Analysis
          </a>
          <p className="text-secondary mt-4 text-base">
            Explore comprehensive charts, datasets, and statistical analysis
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyResults;