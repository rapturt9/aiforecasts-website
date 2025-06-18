'use client';

import Header from '@/components/Header';
import PerformanceChart from '@/components/PerformanceChart';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-20 sm:mb-24 lg:mb-32 xl:mb-40">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
              Performance Analysis
            </h1>
            <p className="text-secondary text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4">
              Comprehensive evaluation across multiple datasets and prediction markets, 
              with rigorous methodology to prevent data leakage. Our AI demonstrates 
              measurable superiority over expert human forecasters.
            </p>
          </div>

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl border border-border">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">+5.2%</div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Better than Superforecasters</div>
              <div className="text-secondary text-sm sm:text-base">On Manifold Markets</div>
            </div>
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl border border-border">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">1,000+</div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Questions Evaluated</div>
              <div className="text-secondary text-sm sm:text-base">Across 7 Datasets</div>
            </div>
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl border border-border sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">100%</div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Methodology Compliance</div>
              <div className="text-secondary text-sm sm:text-base">Data Leakage Prevention</div>
            </div>
          </div>

          {/* Detailed Chart */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Detailed Performance Comparison</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Average Brier Score comparison across all evaluated datasets. 
                Lower values indicate better performance.
              </p>
            </div>
            <PerformanceChart />
          </div>

          {/* Methodology Note */}
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Rigorous Methodology</h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              All models were trained with cutoff dates before forecast dates to prevent data leakage. 
              Only articles last updated before the forecast date were used to supplement knowledge.
            </p>
            <Link 
              href="/methodology" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
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