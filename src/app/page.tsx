'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyResults from '@/components/KeyResults';
import PerformanceChart from '@/components/PerformanceChart';
import ValueProposition from '@/components/ValueProposition';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <KeyResults />
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Detailed Performance Analysis</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Comprehensive evaluation across multiple datasets and prediction markets, 
                with rigorous methodology to prevent data leakage.
              </p>
            </div>
            <PerformanceChart />
          </div>
        </section>
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
}
