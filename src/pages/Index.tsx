import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComparisonSection from '@/components/ComparisonSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => (
  <div style={{ background: 'var(--bg)' }}>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <ComparisonSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
