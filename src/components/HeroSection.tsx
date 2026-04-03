import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero text in
      gsap.fromTo(
        taglineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
      gsap.fromTo(
        modelRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out', delay: 0.2 }
      );

      // Scroll-driven model rotation
      const mv = document.querySelector('#hero-model') as any;
      if (mv) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const theta = 30 + progress * 320;
            const phi = 75 + progress * 15;
            mv.setAttribute('camera-orbit', `${theta}deg ${phi}deg 2.5m`);
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] flex flex-col items-center"
      style={{ background: 'var(--bg)' }}
    >
      {/* Sticky hero content */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        {/* Accent glow behind model */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'var(--tm-accent)', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />

        {/* Eyebrow */}
        <p className="font-mono-label mb-6" style={{ color: 'var(--tm-accent)' }}>
          Vision AI × Fitness Hardware
        </p>

        {/* 3D Model */}
        <div ref={modelRef} className="relative w-full max-w-xl aspect-square mx-auto">
          <model-viewer
            id="hero-model"
            src="/models/band.glb"
            alt="Track-Maxx camera band"
            camera-orbit="30deg 75deg 2.5m"
            camera-target="0m 0m 0m"
            field-of-view="30deg"
            disable-zoom
            disable-pan
            disable-tap
            interaction-prompt="none"
            exposure="1.2"
            shadow-intensity="0"
            loading="eager"
            style={{ width: '100%', height: '100%', background: 'transparent' }}
          />
        </div>

        {/* Headline */}
        <div ref={taglineRef} className="text-center mt-4 px-4">
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95]"
            style={{ color: 'var(--text)' }}
          >
            Your Gym.
            <br />
            <span style={{ color: 'var(--tm-accent)' }}>Your Vision AI.</span>
          </h1>
        </div>

        <div ref={subtitleRef} className="text-center mt-6 max-w-lg px-4">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A camera band that wraps around any water bottle. Computer vision tracks every rep, every angle, every set — automatically.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono-label text-[10px]" style={{ color: 'var(--text-tertiary)' }}>Scroll</span>
          <div className="w-px h-8 bg-foreground/20 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
