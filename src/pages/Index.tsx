import Navbar from '@/components/Navbar';
import HeroContent from '@/components/HeroContent';
import LensReveal from '@/components/LensReveal';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import BottleFitSection from '@/components/BottleFitSection';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useScrollOrbit } from '@/hooks/useScrollOrbit';

const Index = () => {
  const { containerRef, glowRef, modelWrapperRef } = useScrollOrbit();

  return (
    <div ref={containerRef} className="relative" style={{ background: 'var(--bg)' }}>
      <Navbar />

      {/* Sticky model layer — persists through entire scroll */}
      <div
        ref={modelWrapperRef}
        className="sticky top-0 h-screen w-full transition-opacity duration-500"
        style={{ zIndex: 1 }}
      >
        {/* Ambient glow */}
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full pointer-events-none"
          style={{ boxShadow: '0 0 200px 60px rgba(255,107,53,0.06)', zIndex: 0 }}
        />

        {/* Bottom vignette — clean transition from model to text */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '45%',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)',
            zIndex: 2,
          }}
        />

        <model-viewer
          id="track-maxx-model"
          src="/track-maxx-band.glb"
          alt="Track-Maxx camera band"
          camera-controls
          disable-zoom
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="8deg"
          environment-image="neutral"
          shadow-intensity="0.4"
          shadow-softness="0.8"
          exposure="1.1"
          interaction-prompt="none"
          camera-orbit="0deg 75deg 105%"
          field-of-view="30deg"
          min-field-of-view="20deg"
          max-field-of-view="45deg"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>

      {/* Scrolling content layer — 9 sections, ~9x viewport height */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* S1: Hero 0%–15% */}
        <HeroContent />

        {/* S2: Lens Reveal 15%–28% */}
        <LensReveal />

        {/* S3: Problem 28%–40% */}
        <ProblemSection />

        {/* S4: How It Works 40%–58% */}
        <HowItWorksSection />

        {/* S5: Features 58%–72% */}
        <FeaturesSection />

        {/* Tech Marquee Ticker */}
        <MarqueeTicker />

        {/* S6: Bottle Fit 72%–82% */}
        <BottleFitSection />

        {/* S7: Comparison 82%–90% */}
        <ComparisonSection />

        {/* S8: Pricing 88%–93% */}
        <PricingSection />

        {/* S9: Final CTA 93%–100% */}
        <CTASection />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
