import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface OrbitKeyframe {
  progress: number;
  theta: number;
  phi: number;
  radius: number;
}

const ORBIT_KEYFRAMES: OrbitKeyframe[] = [
  { progress: 0.00, theta: 0,   phi: 75, radius: 2.5 },
  { progress: 0.15, theta: 45,  phi: 80, radius: 1.8 },
  { progress: 0.28, theta: 0,   phi: 90, radius: 3.0 },
  { progress: 0.42, theta: 90,  phi: 85, radius: 2.0 },
  { progress: 0.48, theta: 200, phi: 70, radius: 2.2 },
  { progress: 0.55, theta: 315, phi: 75, radius: 2.0 },
  { progress: 0.60, theta: 30,  phi: 80, radius: 2.5 },
  { progress: 0.72, theta: 0,   phi: 90, radius: 1.5 },
  { progress: 0.78, theta: 180, phi: 85, radius: 1.5 },
  { progress: 0.82, theta: 0,   phi: 75, radius: 3.0 },
  { progress: 0.90, theta: 0,   phi: 90, radius: 3.5 },
  { progress: 1.00, theta: 20,  phi: 78, radius: 2.0 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number) {
  // Shortest-path angle interpolation
  let diff = ((b - a + 540) % 360) - 180;
  return a + diff * t;
}

function interpolateOrbit(progress: number): string {
  // Clamp progress
  const p = Math.max(0, Math.min(1, progress));

  // Find surrounding keyframes
  let i = 0;
  for (; i < ORBIT_KEYFRAMES.length - 1; i++) {
    if (ORBIT_KEYFRAMES[i + 1].progress >= p) break;
  }

  const from = ORBIT_KEYFRAMES[i];
  const to = ORBIT_KEYFRAMES[Math.min(i + 1, ORBIT_KEYFRAMES.length - 1)];

  const range = to.progress - from.progress;
  const t = range === 0 ? 0 : (p - from.progress) / range;

  // Smooth easing
  const eased = t * t * (3 - 2 * t); // smoothstep

  const theta = lerpAngle(from.theta, to.theta, eased);
  const phi = lerp(from.phi, to.phi, eased);
  const radius = lerp(from.radius, to.radius, eased);

  return `${theta.toFixed(1)}deg ${phi.toFixed(1)}deg ${radius.toFixed(2)}m`;
}

// Glow intensity keyframes (progress → opacity multiplier)
function getGlowIntensity(progress: number): number {
  // Intensify at lens reveal (0.15), bottle fit (0.72), inner reveal (0.78)
  const peaks = [
    { p: 0.15, intensity: 0.15 },
    { p: 0.28, intensity: 0.04 },
    { p: 0.55, intensity: 0.10 },
    { p: 0.72, intensity: 0.18 },
    { p: 0.78, intensity: 0.15 },
    { p: 0.90, intensity: 0.03 },
    { p: 1.00, intensity: 0.10 },
  ];

  let intensity = 0.06; // base
  for (const peak of peaks) {
    const dist = Math.abs(progress - peak.p);
    if (dist < 0.1) {
      const blend = 1 - dist / 0.1;
      intensity = Math.max(intensity, lerp(0.06, peak.intensity, blend * blend));
    }
  }
  return intensity;
}

const useScrollOrbit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const mv = document.getElementById('track-maxx-model') as any;
          if (mv) {
            mv.setAttribute('camera-orbit', interpolateOrbit(self.progress));
          }

          // Update glow
          if (glowRef.current) {
            const intensity = getGlowIntensity(self.progress);
            glowRef.current.style.boxShadow = `0 0 200px 60px rgba(255,107,53,${intensity})`;
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return { containerRef, glowRef };
};

export { useScrollOrbit, interpolateOrbit };
