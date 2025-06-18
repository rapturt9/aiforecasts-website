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
      <main className="space-y-40 md:space-y-48 lg:space-y-56 xl:space-y-64 2xl:space-y-72">
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
