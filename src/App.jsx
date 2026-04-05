import React from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import ComparisonSection from './components/ComparisonSection';
import ValueBentoGrid from './components/ValueBentoGrid';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <TopNavBar />
      <main>
        <HeroSection />
        <ComparisonSection />
        <ValueBentoGrid />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
