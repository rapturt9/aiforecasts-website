import Header from '@/components/Header';
import PerformanceChart from '@/components/PerformanceChart';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb Navigation */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm sm:text-base lg:text-lg"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
              Performance Analysis
            </h1>
            <p className="text-secondary text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive evaluation across multiple datasets and prediction markets, 
              with rigorous methodology to prevent data leakage. Our AI demonstrates 
              measurable superiority over expert human forecasters.
            </p>
          </div>

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl border border-border">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-3 sm:mb-4">0.082</div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">AI Brier Score</div>
              <div className="text-secondary text-sm sm:text-base">vs 0.134 Human (Manifold)</div>
            </div>
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl border border-border">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-3 sm:mb-4">1,000+</div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Questions Evaluated</div>
              <div className="text-secondary text-sm sm:text-base">Across 7 Datasets</div>
            </div>
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl border border-border sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-3 sm:mb-4">100%</div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Methodology Compliance</div>
              <div className="text-secondary text-sm sm:text-base">Data Leakage Prevention</div>
            </div>
          </div>

          {/* Detailed Chart */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Detailed Performance Comparison</h2>
              <p className="text-secondary text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
                Average Brier Score comparison across all evaluated datasets. 
                Lower values indicate better performance.
              </p>
            </div>
            <PerformanceChart />
          </div>

          {/* Methodology Note */}
          <div className="bg-card border border-border rounded-xl p-8 sm:p-10 lg:p-12 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Rigorous Methodology</h3>
            <p className="text-secondary mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl">
              All models were trained with cutoff dates before forecast dates to prevent data leakage. 
              Only articles last updated before the forecast date were used to supplement knowledge.
            </p>
            <Link 
              href="/methodology" 
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors text-base sm:text-lg lg:text-xl font-semibold"
            >
              Learn About Our Methodology
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}