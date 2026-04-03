import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface OrbitKeyframe {
  progress: number;
  theta: number;
  phi: number;
  radius: number;
  fov: number;
}

const ORBIT_KEYFRAMES: OrbitKeyframe[] = [
  { progress: 0.00, theta: 0,   phi: 75, radius: 105, fov: 30 },
  { progress: 0.15, theta: 45,  phi: 80, radius: 80,  fov: 28 },
  { progress: 0.28, theta: 0,   phi: 90, radius: 120, fov: 32 },
  { progress: 0.40, theta: 0,   phi: 90, radius: 120, fov: 32 },
  { progress: 0.42, theta: 90,  phi: 85, radius: 95,  fov: 30 },
  { progress: 0.48, theta: 200, phi: 70, radius: 95,  fov: 30 },
  { progress: 0.55, theta: 315, phi: 75, radius: 90,  fov: 28 },
  { progress: 0.58, theta: 30,  phi: 80, radius: 110, fov: 32 },
  { progress: 0.72, theta: 0,   phi: 90, radius: 70,  fov: 25 },
  { progress: 0.75, theta: 0,   phi: 90, radius: 70,  fov: 25 },
  { progress: 0.78, theta: 180, phi: 85, radius: 75,  fov: 26 },
  { progress: 0.80, theta: 0,   phi: 75, radius: 120, fov: 32 },
  { progress: 0.82, theta: 0,   phi: 75, radius: 120, fov: 32 },
  { progress: 0.88, theta: 0,   phi: 90, radius: 150, fov: 38 },
  { progress: 0.93, theta: 0,   phi: 90, radius: 150, fov: 38 },
  { progress: 1.00, theta: 20,  phi: 78, radius: 105, fov: 30 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number) {
  let diff = ((b - a + 540) % 360) - 180;
  return a + diff * t;
}

function interpolateOrbit(progress: number): { orbit: string; fov: string } {
  const p = Math.max(0, Math.min(1, progress));
  let i = 0;
  for (; i < ORBIT_KEYFRAMES.length - 1; i++) {
    if (ORBIT_KEYFRAMES[i + 1].progress >= p) break;
  }
  const from = ORBIT_KEYFRAMES[i];
  const to = ORBIT_KEYFRAMES[Math.min(i + 1, ORBIT_KEYFRAMES.length - 1)];
  const range = to.progress - from.progress;
  const t = range === 0 ? 0 : (p - from.progress) / range;
  const eased = t * t * (3 - 2 * t);

  const theta = lerpAngle(from.theta, to.theta, eased);
  const phi = lerp(from.phi, to.phi, eased);
  const radius = lerp(from.radius, to.radius, eased);
  const fov = lerp(from.fov, to.fov, eased);

  return {
    orbit: `${theta.toFixed(1)}deg ${phi.toFixed(1)}deg ${radius.toFixed(0)}%`,
    fov: `${fov.toFixed(1)}deg`,
  };
}

function getGlowIntensity(progress: number): number {
  const peaks = [
    { p: 0.15, intensity: 0.15 },
    { p: 0.28, intensity: 0.04 },
    { p: 0.55, intensity: 0.10 },
    { p: 0.72, intensity: 0.22 },
    { p: 0.75, intensity: 0.25 },
    { p: 0.78, intensity: 0.15 },
    { p: 0.88, intensity: 0.03 },
    { p: 1.00, intensity: 0.12 },
  ];
  let intensity = 0.06;
  for (const peak of peaks) {
    const dist = Math.abs(progress - peak.p);
    if (dist < 0.1) {
      const blend = 1 - dist / 0.1;
      intensity = Math.max(intensity, lerp(0.06, peak.intensity, blend * blend));
    }
  }
  return intensity;
}

function getModelOpacity(progress: number): number {
  if (progress >= 0.82 && progress <= 0.93) {
    const t = (progress - 0.82) / 0.06;
    const dimAmount = Math.min(1, t);
    return lerp(1, 0.35, dimAmount > 1 ? 2 - dimAmount : dimAmount);
  }
  if (progress >= 0.30 && progress <= 0.38) {
    return 0.65;
  }
  return 1;
}

const useScrollOrbit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const modelWrapperRef = useRef<HTMLDivElement>(null);

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
            const { orbit, fov } = interpolateOrbit(self.progress);
            mv.setAttribute('camera-orbit', orbit);
            mv.setAttribute('field-of-view', fov);
          }
          if (glowRef.current) {
            const intensity = getGlowIntensity(self.progress);
            glowRef.current.style.boxShadow = `0 0 200px 80px rgba(255,107,53,${intensity})`;
          }
          if (modelWrapperRef.current) {
            modelWrapperRef.current.style.opacity = String(getModelOpacity(self.progress));
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return { containerRef, glowRef, modelWrapperRef };
};

export { useScrollOrbit };
