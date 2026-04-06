import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Watch, Moon, Apple, TestTube2, Activity, Eye, Brain } from 'lucide-react';

const SPOKES = [
  { icon: Watch, label: 'Wearables', sub: 'HR · HRV · Stress', primary: false },
  { icon: Moon, label: 'Sleep', sub: 'Quality · Duration · Cycles', primary: false },
  { icon: Apple, label: 'Nutrition', sub: 'Macros · Calories · Timing', primary: false },
  { icon: TestTube2, label: 'Blood Work', sub: 'Panels · Deficiencies · Hormones', primary: false },
  { icon: Activity, label: 'Body Metrics', sub: 'Weight · Body Fat · Hydration', primary: false },
  { icon: Eye, label: 'Vision AI', sub: 'Form · Reps · Velocity · ROM', primary: true },
];

// Hex positions for 6 spokes around centre (desktop)
const POSITIONS = [
  { top: '8%', left: '15%' },   // top-left
  { top: '8%', right: '15%' },  // top-right
  { top: '50%', left: '2%', transform: 'translateY(-50%)' },  // mid-left
  { top: '50%', right: '2%', transform: 'translateY(-50%)' }, // mid-right
  { bottom: '8%', left: '15%' }, // bottom-left
  { bottom: '8%', right: '15%' }, // bottom-right
];

const EcosystemSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ padding: 'var(--section-pad) var(--gutter)' }}
    >
      <style>{`
        @keyframes flowToCenter {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes flowSolid {
          0% { stroke-dashoffset: 12; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes hubPulse {
          0%, 100% { box-shadow: 0 0 30px 8px rgba(255,107,53,0.15), 0 0 60px 20px rgba(255,107,53,0.06); }
          50% { box-shadow: 0 0 40px 14px rgba(255,107,53,0.25), 0 0 80px 30px rgba(255,107,53,0.1); }
        }
        .eco-line { stroke-dasharray: 6 4; animation: flowToCenter 0.8s linear infinite; }
        .eco-line-solid { stroke-dasharray: 4 2; animation: flowSolid 0.6s linear infinite; }
        .eco-hub { animation: hubPulse 3s ease-in-out infinite; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 anim-up">
          <span
            className="font-mono-label text-[11px] tracking-[0.2em] uppercase mb-4 inline-block"
            style={{ color: 'var(--tm-accent)' }}
          >
            Beyond Vision
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
            Your entire health stack. <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>One brain.</em>
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
          >
            Track-Maxx doesn't just watch you train — it listens to your body. Connect your wearables, upload blood work, sync nutrition. Every data point sharpens your coaching.
          </p>
        </div>

        {/* === DESKTOP: Radial hub-and-spoke === */}
        <div className="hidden md:block anim-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative mx-auto" style={{ width: '100%', maxWidth: 640, aspectRatio: '1 / 1' }}>
            {/* SVG connector lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 640 640"
              fill="none"
            >
              {/* Lines from each spoke position to centre (320,320) */}
              {[
                [116, 76],    // top-left
                [524, 76],    // top-right
                [33, 320],    // mid-left
                [607, 320],   // mid-right
                [116, 564],   // bottom-left
                [524, 564],   // bottom-right
              ].map(([x, y], i) => (
                <line
                  key={i}
                  x1={x} y1={y} x2={320} y2={320}
                  stroke={SPOKES[i].primary ? 'rgba(255,107,53,0.6)' : 'rgba(255,107,53,0.18)'}
                  strokeWidth={SPOKES[i].primary ? 1.5 : 1}
                  className={SPOKES[i].primary ? 'eco-line-solid' : 'eco-line'}
                />
              ))}
            </svg>

            {/* Centre hub */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              style={{ zIndex: 2 }}
            >
              <div
                className="eco-hub w-[120px] h-[120px] rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255,107,53,0.08)',
                  border: '1.5px solid rgba(255,107,53,0.3)',
                }}
              >
                <Brain size={36} style={{ color: 'var(--tm-accent)' }} />
              </div>
              <span className="font-mono-label text-[10px] tracking-[0.15em]" style={{ color: 'var(--tm-accent)' }}>
                TRACK-MAXX INTELLIGENCE
              </span>
            </div>

            {/* Spokes */}
            {SPOKES.map((spoke, i) => {
              const Icon = spoke.icon;
              const pos = POSITIONS[i];
              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center text-center"
                  style={{ ...pos, width: 120, zIndex: 2 } as React.CSSProperties}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background: spoke.primary ? 'rgba(255,107,53,0.2)' : 'rgba(10,10,14,0.8)',
                      border: `1px solid ${spoke.primary ? 'var(--tm-accent)' : 'rgba(255,107,53,0.2)'}`,
                    }}
                  >
                    <Icon size={16} style={{ color: spoke.primary ? 'var(--tm-accent)' : 'rgba(255,255,255,0.6)' }} />
                  </div>
                  <span className="font-heading text-xs" style={{ color: 'var(--text)' }}>{spoke.label}</span>
                  <span className="font-mono-label text-[9px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{spoke.sub}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* === MOBILE: Vertical hub + list === */}
        <div className="md:hidden anim-up" style={{ animationDelay: '0.1s' }}>
          {/* Hub */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="eco-hub w-[90px] h-[90px] rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,107,53,0.08)',
                border: '1.5px solid rgba(255,107,53,0.3)',
              }}
            >
              <Brain size={28} style={{ color: 'var(--tm-accent)' }} />
            </div>
            <span className="font-mono-label text-[9px] tracking-[0.15em] mt-2" style={{ color: 'var(--tm-accent)' }}>
              TRACK-MAXX INTELLIGENCE
            </span>
            {/* Vertical line from hub */}
            <div className="w-px h-6 mt-2" style={{ background: 'rgba(255,107,53,0.2)' }} />
          </div>

          {/* Spoke list */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            {SPOKES.map((spoke, i) => {
              const Icon = spoke.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  {/* Line stub */}
                  <svg width="24" height="2" className="shrink-0">
                    <line
                      x1="0" y1="1" x2="24" y2="1"
                      stroke={spoke.primary ? 'rgba(255,107,53,0.6)' : 'rgba(255,107,53,0.18)'}
                      strokeWidth={1}
                      className={spoke.primary ? 'eco-line-solid' : 'eco-line'}
                    />
                  </svg>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: spoke.primary ? 'rgba(255,107,53,0.2)' : 'rgba(10,10,14,0.8)',
                      border: `1px solid ${spoke.primary ? 'var(--tm-accent)' : 'rgba(255,107,53,0.2)'}`,
                    }}
                  >
                    <Icon size={14} style={{ color: spoke.primary ? 'var(--tm-accent)' : 'rgba(255,255,255,0.6)' }} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading text-xs block" style={{ color: 'var(--text)' }}>{spoke.label}</span>
                    <span className="font-mono-label text-[9px]" style={{ color: 'var(--text-tertiary)' }}>{spoke.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className="flex items-center justify-center gap-4 md:gap-8 mt-12 anim-fade"
          style={{ animationDelay: '0.25s' }}
        >
          {['6+ data sources', '1 unified AI coach', '0 manual logging'].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8">
              <span className="font-mono-label text-[11px] md:text-xs tracking-[0.1em]" style={{ color: 'var(--text-secondary)' }}>
                {stat}
              </span>
              {i < 2 && (
                <div className="w-px h-4" style={{ background: 'var(--tm-border)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
