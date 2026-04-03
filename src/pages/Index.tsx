import Navbar from '@/components/Navbar';
import HeroContent from '@/components/HeroContent';
import LensReveal from '@/components/LensReveal';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import BottleFitSection from '@/components/BottleFitSection';
import ComparisonSection from '@/components/ComparisonSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useScrollOrbit } from '@/hooks/useScrollOrbit';

const Index = () => {
  const { containerRef, glowRef } = useScrollOrbit();

  return (
    <div ref={containerRef} className="relative" style={{ background: 'var(--bg)' }}>
      <Navbar />

      {/* Sticky model layer */}
      <div className="sticky top-0 h-screen w-full" style={{ zIndex: 1 }}>
        {/* Ambient glow */}
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full pointer-events-none"
          style={{ boxShadow: '0 0 200px 60px rgba(255,107,53,0.06)' }}
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
          shadow-intensity="0.3"
          shadow-softness="0.9"
          exposure="1.2"
          interaction-prompt="none"
          camera-orbit="0deg 75deg 2.5m"
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        />
      </div>

      {/* Scrolling content layer */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Hero — occupies 0%–15% scroll */}
        <HeroContent />

        {/* Lens Reveal — 15%–28% */}
        <LensReveal />

        {/* Problem — 28%–42% */}
        <ProblemSection />

        {/* How It Works (Steps 1-3) — 42%–60% */}
        <HowItWorksSection />

        {/* Features — 60%–72% */}
        <FeaturesSection />

        {/* Bottle Fit + Inner Reveal — 72%–82% */}
        <BottleFitSection />

        {/* Comparison — 82%–90% */}
        <ComparisonSection />

        {/* CTA — 90%–100% */}
        <CTASection />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
