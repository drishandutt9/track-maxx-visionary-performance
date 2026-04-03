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

// Keyframes for the standalone BAND model
const BAND_KEYFRAMES: OrbitKeyframe[] = [
  { progress: 0.00, theta: 0,   phi: 75, radius: 105, fov: 30 },
  { progress: 0.15, theta: 45,  phi: 80, radius: 80,  fov: 28 },
  { progress: 0.28, theta: 0,   phi: 90, radius: 120, fov: 32 },
  { progress: 0.40, theta: 0,   phi: 90, radius: 120, fov: 32 },
  { progress: 0.42, theta: 90,  phi: 85, radius: 95,  fov: 30 },
  { progress: 0.46, theta: 150, phi: 80, radius: 90,  fov: 28 },
  { progress: 0.49, theta: 180, phi: 80, radius: 90,  fov: 28 },
  { progress: 0.84, theta: 0,   phi: 90, radius: 150, fov: 38 },
  { progress: 0.88, theta: 0,   phi: 90, radius: 150, fov: 38 },
  { progress: 0.93, theta: 0,   phi: 90, radius: 150, fov: 38 },
  { progress: 1.00, theta: 20,  phi: 78, radius: 105, fov: 30 },
];

// Keyframes for the BOTTLE model
const BOTTLE_KEYFRAMES: OrbitKeyframe[] = [
  { progress: 0.46, theta: 0,   phi: 80, radius: 110, fov: 30 },
  { progress: 0.49, theta: 0,   phi: 80, radius: 105, fov: 30 },
  { progress: 0.55, theta: 315, phi: 75, radius: 95,  fov: 28 },
  { progress: 0.58, theta: 30,  phi: 80, radius: 110, fov: 32 },
  { progress: 0.65, theta: 60,  phi: 78, radius: 105, fov: 30 },
  { progress: 0.72, theta: 0,   phi: 85, radius: 75,  fov: 25 },
  { progress: 0.75, theta: 0,   phi: 85, radius: 75,  fov: 25 },
  { progress: 0.78, theta: 180, phi: 80, radius: 80,  fov: 26 },
  { progress: 0.80, theta: 0,   phi: 75, radius: 110, fov: 30 },
  { progress: 0.82, theta: 0,   phi: 75, radius: 110, fov: 30 },
  { progress: 0.85, theta: 0,   phi: 75, radius: 120, fov: 32 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number) {
  let diff = ((b - a + 540) % 360) - 180;
  return a + diff * t;
}

function interpolateKeyframes(
  keyframes: OrbitKeyframe[],
  progress: number
): { orbit: string; fov: string } {
  const p = Math.max(0, Math.min(1, progress));

  if (p <= keyframes[0].progress) {
    const k = keyframes[0];
    return { orbit: `${k.theta}deg ${k.phi}deg ${k.radius}%`, fov: `${k.fov}deg` };
  }
  if (p >= keyframes[keyframes.length - 1].progress) {
    const k = keyframes[keyframes.length - 1];
    return { orbit: `${k.theta}deg ${k.phi}deg ${k.radius}%`, fov: `${k.fov}deg` };
  }

  let i = 0;
  for (; i < keyframes.length - 1; i++) {
    if (keyframes[i + 1].progress >= p) break;
  }
  const from = keyframes[i];
  const to = keyframes[Math.min(i + 1, keyframes.length - 1)];
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

function getModelVisibility(progress: number): { bandOpacity: number; bottleOpacity: number } {
  if (progress < 0.46) {
    return { bandOpacity: 1, bottleOpacity: 0 };
  }
  if (progress >= 0.46 && progress < 0.49) {
    const t = (progress - 0.46) / 0.03;
    const eased = t * t * (3 - 2 * t);
    return { bandOpacity: 1 - eased, bottleOpacity: eased };
  }
  if (progress >= 0.49 && progress < 0.82) {
    return { bandOpacity: 0, bottleOpacity: 1 };
  }
  if (progress >= 0.82 && progress < 0.85) {
    const t = (progress - 0.82) / 0.03;
    const eased = t * t * (3 - 2 * t);
    return { bandOpacity: eased, bottleOpacity: 1 - eased };
  }
  return { bandOpacity: 1, bottleOpacity: 0 };
}

function getGlowIntensity(progress: number): number {
  const peaks = [
    { p: 0.15, intensity: 0.15 },
    { p: 0.28, intensity: 0.04 },
    { p: 0.48, intensity: 0.18 },
    { p: 0.55, intensity: 0.10 },
    { p: 0.72, intensity: 0.22 },
    { p: 0.75, intensity: 0.25 },
    { p: 0.78, intensity: 0.15 },
    { p: 0.83, intensity: 0.16 },
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

function getWrapperOpacity(progress: number): number {
  if (progress >= 0.86 && progress <= 0.93) {
    return 0.35;
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
          const bandEl = document.getElementById('track-maxx-model') as HTMLElement | null;
          const bottleEl = document.getElementById('track-maxx-bottle') as HTMLElement | null;

          const { bandOpacity, bottleOpacity } = getModelVisibility(self.progress);

          if (bandEl) {
            const { orbit, fov } = interpolateKeyframes(BAND_KEYFRAMES, self.progress);
            bandEl.setAttribute('camera-orbit', orbit);
            bandEl.setAttribute('field-of-view', fov);
            bandEl.style.opacity = String(bandOpacity);
            bandEl.style.pointerEvents = bandOpacity > 0.3 ? 'auto' : 'none';
          }

          if (bottleEl) {
            const { orbit, fov } = interpolateKeyframes(BOTTLE_KEYFRAMES, self.progress);
            bottleEl.setAttribute('camera-orbit', orbit);
            bottleEl.setAttribute('field-of-view', fov);
            bottleEl.style.opacity = String(bottleOpacity);
            bottleEl.style.pointerEvents = bottleOpacity > 0.3 ? 'auto' : 'none';
          }

          if (glowRef.current) {
            const intensity = getGlowIntensity(self.progress);
            glowRef.current.style.boxShadow = `0 0 200px 80px rgba(255,107,53,${intensity})`;
          }

          if (modelWrapperRef.current) {
            modelWrapperRef.current.style.opacity = String(getWrapperOpacity(self.progress));
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return { containerRef, glowRef, modelWrapperRef };
};

export { useScrollOrbit };
