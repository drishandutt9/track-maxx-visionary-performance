// Track-Maxx landing page
import Navbar from '@/components/Navbar';
import HeroContent from '@/components/HeroContent';
import LensReveal from '@/components/LensReveal';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import EcosystemSection from '@/components/EcosystemSection';
import AppShowcaseSection from '@/components/AppShowcaseSection';
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

        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '45%',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)',
            zIndex: 2,
          }}
        />

        {/* MODEL A: Standalone band */}
        <model-viewer
          id="track-maxx-model"
          src="/track-maxx-band.glb"
          alt="Track-Maxx camera band"
          disable-zoom
          disable-pan
          disable-tap
          environment-image="neutral"
          shadow-intensity="0.4"
          shadow-softness="0.8"
          exposure="1.1"
          interaction-prompt="none"
          camera-orbit="0deg 75deg 105%"
          camera-target="auto auto auto"
          field-of-view="30deg"
          min-field-of-view="20deg"
          max-field-of-view="45deg"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        {/* MODEL B: Band on bottle (fades in during "Place it") */}
        <model-viewer
          id="track-maxx-bottle"
          src="/bottle-band.glb"
          alt="Track-Maxx band on water bottle"
          camera-controls
          disable-zoom
          environment-image="neutral"
          shadow-intensity="0.4"
          shadow-softness="0.8"
          exposure="1.1"
          interaction-prompt="none"
          camera-orbit="0deg 65deg 350%"
          field-of-view="35deg"
          min-field-of-view="20deg"
          max-field-of-view="50deg"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Hero bottle preview — small, bottom-right corner, fades out on scroll */}
        <model-viewer
          id="track-maxx-bottle-preview"
          src="/bottle-band.glb"
          alt="Track-Maxx on bottle"
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="12deg"
          environment-image="neutral"
          shadow-intensity="0.3"
          exposure="1.1"
          interaction-prompt="none"
          camera-orbit="20deg 75deg 500%"
          field-of-view="12deg"
          min-field-of-view="10deg"
          max-field-of-view="15deg"
          disable-zoom
          loading="eager"
          style={{
            position: 'absolute',
            bottom: '14%',
            right: '4%',
            width: '180px',
            height: '260px',
            background: 'transparent',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Scrolling content layer */}
      <div className="relative" style={{ zIndex: 2 }}>
        <HeroContent />
        <LensReveal />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MarqueeTicker />
        <EcosystemSection />
        <AppShowcaseSection />
        <BottleFitSection />
        <ComparisonSection />
        
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
