import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Watch, Moon, Activity, Apple, TestTube2, Heart } from 'lucide-react';

const INTEGRATIONS = [
  { icon: Watch, title: 'Apple Watch / Garmin / Whoop', desc: 'Real-time heart rate overlay during sets. HR zones mapped to every rep.' },
  { icon: Moon, title: 'Sleep Tracking', desc: 'Correlates sleep quality with next-day performance. Bad sleep? Lighter session auto-suggested.' },
  { icon: Activity, title: 'HRV & Stress', desc: 'Import readiness scores. High HRV = push hard. Low HRV = deload day. Your plan adapts.' },
  { icon: Apple, title: 'Nutrition Sync', desc: 'MyFitnessPal integration. See how protein intake correlates with your strength trends.' },
  { icon: TestTube2, title: 'Blood Test Analysis', desc: 'Upload blood panels. Flag deficiencies affecting recovery — iron, vitamin D, testosterone.' },
  { icon: Heart, title: 'Well-Being Score', desc: 'Combines mood, energy, soreness with objective session data. Track your whole self, not just reps.' },
];

const EcosystemSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ padding: 'var(--section-pad) var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 anim-up">
          <span
            className="font-mono-label text-[11px] tracking-[0.2em] uppercase mb-4 inline-block"
            style={{ color: 'var(--tm-accent)' }}
          >
            Beyond Vision
          </span>
          <h2
            className="font-heading text-3xl md:text-5xl mb-4"
            style={{ color: 'var(--text)' }}
          >
            Your entire health stack. <em style={{ color: 'var(--tm-accent)', fontStyle: 'italic' }}>One brain.</em>
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
          >
            Track-Maxx doesn't just watch you train — it listens to your body. Connect your wearables, upload blood work, sync nutrition. Every data point sharpens your coaching.
          </p>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {INTEGRATIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bracket-card anim-up shrink-0 snap-start"
                style={{
                  width: '280px',
                  minWidth: '280px',
                  padding: '24px',
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(255,107,53,0.08)',
                    border: '1px solid rgba(255,107,53,0.15)',
                  }}
                >
                  <Icon size={18} style={{ color: 'var(--tm-accent)' }} />
                </div>

                {/* Title */}
                <h3
                  className="font-heading text-sm md:text-base mb-2"
                  style={{ color: 'var(--text)' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs md:text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stat line */}
        <p
          className="text-center mt-10 font-mono-label text-xs tracking-[0.15em] anim-fade"
          style={{ color: 'var(--tm-accent)', opacity: 0.8 }}
        >
          Every data source makes your AI coach smarter.
        </p>
      </div>
    </section>
  );
};

export default EcosystemSection;
