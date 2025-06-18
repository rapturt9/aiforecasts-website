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
      <main className="space-y-16 sm:space-y-20 lg:space-y-24">
        <Hero />
        <div id="performance" className="scroll-mt-24">
          <KeyResults />
        </div>
        <div id="our-mission" className="scroll-mt-24">
          <ValueProposition />
        </div>
      </main>
      <Footer />
    </div>
  );
}
