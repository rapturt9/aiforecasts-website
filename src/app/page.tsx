'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyResults from '@/components/KeyResults';
import ValueProposition from '@/components/ValueProposition';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
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
    </ThemeProvider>
  );
}