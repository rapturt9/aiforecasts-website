'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
}
