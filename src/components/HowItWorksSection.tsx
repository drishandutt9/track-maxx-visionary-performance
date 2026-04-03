import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Grip, MapPin, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Wrap it.',
    desc: "Stretch the silicone band around any water bottle. 60mm to 100mm — it fits them all. IP67 rated. Drop it, splash it, sweat on it. It doesn't care.",
    icon: Grip,
    image: '/gym-squat.jpg',
  },
  {
    num: '02',
    title: 'Place it.',
    desc: 'Set your bottle where you normally would — on the floor, on a bench, on a rack. The 150° wide-angle lens captures your entire body from any angle.',
    icon: MapPin,
    image: '/gym-mirror.jpg',
  },
  {
    num: '03',
    title: 'Train.',
    desc: "That's it. Track-Maxx auto-detects your exercise, counts reps, measures time under tension, scores form in real time, and flags dangerous movement patterns. You never touch your phone.",
    icon: Zap,
    image: '/gym-dumbbell.jpg',
  },
];

const HowItWorksSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="how-it-works" className="py-[60px] md:py-[120px]">
      <div className="mx-auto max-w-content px-[var(--gutter)]">
        <div
          className="text-center mb-12 md:mb-16 rounded-2xl p-6 md:p-8 mx-auto max-w-lg"
          style={{
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p className="font-mono-label mb-3 anim-up" style={{ color: 'var(--tm-accent)' }}>
            How It Works
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl anim-up stagger-1"
            style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Three steps. Zero friction.
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="flex justify-center">
                <div
                  className={`anim-up stagger-${i + 2} w-full max-w-md rounded-2xl p-6 md:p-8`}
                  style={{
                    background: 'rgba(0,0,0,0.55)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="font-mono-label text-[40px] md:text-[56px]"
                      style={{ color: 'var(--tm-accent)', lineHeight: 1 }}
                    >
                      {s.num}
                    </span>
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'rgba(255,107,53,0.1)',
                        border: '1px solid rgba(255,107,53,0.2)',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} style={{ color: 'var(--tm-accent)' }} />
                    </div>
                  </div>

                  <div
                    className="overflow-hidden rounded-lg mb-4 max-w-[140px] md:max-w-[200px]"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}
                      loading="lazy"
                    />
                  </div>

                  <h3
                    className="font-heading text-2xl md:text-3xl mb-3"
                    style={{ color: 'var(--text)' }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
