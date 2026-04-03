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

interface ScrollAnchors {
  placeStart: number;
  placeEnd: number;
  comparisonStart: number;
  comparisonEnd: number;
}

const DEFAULT_SCROLL_ANCHORS: ScrollAnchors = {
  placeStart: 0.46,
  placeEnd: 0.49,
  comparisonStart: 0.82,
  comparisonEnd: 0.85,
};

// Keyframes for the standalone BAND model
const BAND_KEYFRAMES: OrbitKeyframe[] = [
  { progress: 0.00, theta: 0, phi: 75, radius: 105, fov: 30 },
  { progress: 0.15, theta: 45, phi: 80, radius: 80, fov: 28 },
  { progress: 0.28, theta: 0, phi: 90, radius: 120, fov: 32 },
  { progress: 0.40, theta: 0, phi: 90, radius: 120, fov: 32 },
  { progress: 0.42, theta: 90, phi: 85, radius: 95, fov: 30 },
  { progress: 0.46, theta: 150, phi: 80, radius: 90, fov: 28 },
  { progress: 0.49, theta: 180, phi: 80, radius: 90, fov: 28 },
  { progress: 0.84, theta: 0, phi: 90, radius: 150, fov: 38 },
  { progress: 0.88, theta: 0, phi: 90, radius: 150, fov: 38 },
  { progress: 0.93, theta: 0, phi: 90, radius: 150, fov: 38 },
  { progress: 1.00, theta: 20, phi: 78, radius: 105, fov: 30 },
];

// Keyframes for the BOTTLE model (Place-it → Features → Bottle Fit → Beauty)
const BOTTLE_KEYFRAMES: OrbitKeyframe[] = [
  { progress: 0.46, theta: 0, phi: 65, radius: 300, fov: 45 },
  { progress: 0.49, theta: 20, phi: 65, radius: 280, fov: 42 },
  { progress: 0.55, theta: 315, phi: 60, radius: 270, fov: 40 },
  { progress: 0.58, theta: 30, phi: 65, radius: 290, fov: 44 },
  { progress: 0.65, theta: 60, phi: 62, radius: 280, fov: 42 },
  { progress: 0.72, theta: 0, phi: 68, radius: 220, fov: 38 },
  { progress: 0.75, theta: 0, phi: 68, radius: 220, fov: 38 },
  { progress: 0.78, theta: 180, phi: 65, radius: 250, fov: 40 },
  { progress: 0.80, theta: 0, phi: 62, radius: 300, fov: 45 },
  { progress: 0.82, theta: 0, phi: 62, radius: 300, fov: 45 },
  { progress: 0.85, theta: 0, phi: 65, radius: 320, fov: 45 },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(value: number) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number) {
  const diff = ((b - a + 540) % 360) - 180;
  return a + diff * t;
}

function remapProgress(
  progress: number,
  sourceStart: number,
  sourceEnd: number,
  targetStart: number,
  targetEnd: number
) {
  if (Math.abs(sourceEnd - sourceStart) < 0.0001) {
    return targetStart;
  }

  const t = clamp((progress - sourceStart) / (sourceEnd - sourceStart), 0, 1);
  return lerp(targetStart, targetEnd, t);
}

function getProgressForElementPoint(
  element: HTMLElement,
  container: HTMLElement,
  elementPoint = 0.5,
  viewportFactor = 0.5
) {
  const containerTop = container.getBoundingClientRect().top + window.scrollY;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const scrollableDistance = Math.max(container.offsetHeight - window.innerHeight, 1);
  const elementOffset = elementTop - containerTop + element.offsetHeight * elementPoint;
  const anchoredOffset = elementOffset - window.innerHeight * viewportFactor;

  return clamp(anchoredOffset / scrollableDistance, 0, 1);
}

function getScrollAnchors(container: HTMLElement): ScrollAnchors {
  const placeStep = document.querySelector('[data-scroll-step="place"]') as HTMLElement | null;
  const comparisonSection = document.getElementById('pricing') as HTMLElement | null;

  if (!placeStep || !comparisonSection) {
    return DEFAULT_SCROLL_ANCHORS;
  }

  const placeStart = getProgressForElementPoint(placeStep, container, 0.2, 0.72);
  const placeEnd = Math.max(
    placeStart + 0.025,
    getProgressForElementPoint(placeStep, container, 0.8, 0.48)
  );
  const comparisonStart = getProgressForElementPoint(comparisonSection, container, 0.15, 0.78);
  const comparisonEnd = Math.min(
    Math.max(comparisonStart + 0.03, getProgressForElementPoint(comparisonSection, container, 0.55, 0.55)),
    0.97
  );

  return {
    placeStart,
    placeEnd,
    comparisonStart,
    comparisonEnd,
  };
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
  const eased = smoothstep(t);

  const theta = lerpAngle(from.theta, to.theta, eased);
  const phi = lerp(from.phi, to.phi, eased);
  const radius = lerp(from.radius, to.radius, eased);
  const fov = lerp(from.fov, to.fov, eased);

  return {
    orbit: `${theta.toFixed(1)}deg ${phi.toFixed(1)}deg ${radius.toFixed(0)}%`,
    fov: `${fov.toFixed(1)}deg`,
  };
}

function getBandTimelineProgress(progress: number, anchors: ScrollAnchors) {
  if (progress <= anchors.placeEnd) {
    return remapProgress(progress, 0, anchors.placeEnd, BAND_KEYFRAMES[0].progress, 0.49);
  }

  if (progress < anchors.comparisonStart) {
    return 0.49;
  }

  return remapProgress(progress, anchors.comparisonStart, 1, 0.84, 1.0);
}

function getBottleTimelineProgress(progress: number, anchors: ScrollAnchors) {
  if (progress <= anchors.placeStart) {
    return BOTTLE_KEYFRAMES[0].progress;
  }

  if (progress >= anchors.comparisonEnd) {
    return BOTTLE_KEYFRAMES[BOTTLE_KEYFRAMES.length - 1].progress;
  }

  return remapProgress(
    progress,
    anchors.placeStart,
    anchors.comparisonEnd,
    BOTTLE_KEYFRAMES[0].progress,
    BOTTLE_KEYFRAMES[BOTTLE_KEYFRAMES.length - 1].progress
  );
}

function getModelVisibility(
  progress: number,
  anchors: ScrollAnchors
): { bandOpacity: number; bottleOpacity: number } {
  if (progress < anchors.placeStart) {
    return { bandOpacity: 1, bottleOpacity: 0 };
  }

  if (progress < anchors.placeEnd) {
    const eased = smoothstep((progress - anchors.placeStart) / (anchors.placeEnd - anchors.placeStart));
    return { bandOpacity: 1 - eased, bottleOpacity: eased };
  }

  if (progress < anchors.comparisonStart) {
    return { bandOpacity: 0, bottleOpacity: 1 };
  }

  if (progress < anchors.comparisonEnd) {
    const eased = smoothstep(
      (progress - anchors.comparisonStart) / (anchors.comparisonEnd - anchors.comparisonStart)
    );
    return { bandOpacity: eased, bottleOpacity: 1 - eased };
  }

  return { bandOpacity: 1, bottleOpacity: 0 };
}

function getGlowIntensity(progress: number, anchors: ScrollAnchors): number {
  const bottleScenePeak = lerp(anchors.placeEnd, anchors.comparisonStart, 0.72);
  const peaks = [
    { p: 0.15, intensity: 0.15 },
    { p: 0.28, intensity: 0.04 },
    { p: lerp(anchors.placeStart, anchors.placeEnd, 0.5), intensity: 0.18 },
    { p: bottleScenePeak, intensity: 0.22 },
    { p: Math.min(bottleScenePeak + 0.03, anchors.comparisonStart - 0.01), intensity: 0.25 },
    { p: lerp(anchors.comparisonStart, anchors.comparisonEnd, 0.5), intensity: 0.16 },
    { p: Math.min(anchors.comparisonEnd + 0.05, 0.95), intensity: 0.03 },
    { p: 1.0, intensity: 0.12 },
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

function getWrapperOpacity(progress: number, anchors: ScrollAnchors): number {
  if (progress >= anchors.comparisonStart && progress <= Math.min(anchors.comparisonEnd + 0.08, 0.96)) {
    return 0.35;
  }

  if (progress >= 0.3 && progress <= 0.38) {
    return 0.65;
  }

  return 1;
}

const useScrollOrbit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const modelWrapperRef = useRef<HTMLDivElement>(null);
  const anchorsRef = useRef<ScrollAnchors>(DEFAULT_SCROLL_ANCHORS);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateAnchors = () => {
      anchorsRef.current = getScrollAnchors(container);
    };

    const handleRefresh = () => {
      updateAnchors();
    };

    updateAnchors();
    window.addEventListener('resize', updateAnchors);
    ScrollTrigger.addEventListener('refreshInit', handleRefresh);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const bandEl = document.getElementById('track-maxx-model') as HTMLElement | null;
          const bottleEl = document.getElementById('track-maxx-bottle') as HTMLElement | null;
          const anchors = anchorsRef.current;
          const { bandOpacity, bottleOpacity } = getModelVisibility(self.progress, anchors);

          if (bandEl) {
            const { orbit, fov } = interpolateKeyframes(
              BAND_KEYFRAMES,
              getBandTimelineProgress(self.progress, anchors)
            );
            bandEl.setAttribute('camera-orbit', orbit);
            bandEl.setAttribute('field-of-view', fov);
            bandEl.style.opacity = String(bandOpacity);
            bandEl.style.pointerEvents = bandOpacity > 0.3 ? 'auto' : 'none';
          }

          if (bottleEl) {
            const { orbit, fov } = interpolateKeyframes(
              BOTTLE_KEYFRAMES,
              getBottleTimelineProgress(self.progress, anchors)
            );
            bottleEl.setAttribute('camera-orbit', orbit);
            bottleEl.setAttribute('field-of-view', fov);
            bottleEl.style.opacity = String(bottleOpacity);
            bottleEl.style.pointerEvents = bottleOpacity > 0.3 ? 'auto' : 'none';
          }

          if (glowRef.current) {
            const intensity = getGlowIntensity(self.progress, anchors);
            glowRef.current.style.boxShadow = `0 0 200px 80px rgba(255,107,53,${intensity})`;
          }

          if (modelWrapperRef.current) {
            modelWrapperRef.current.style.opacity = String(getWrapperOpacity(self.progress, anchors));
          }
        },
      });
    }, container);

    requestAnimationFrame(() => {
      updateAnchors();
      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener('resize', updateAnchors);
      ScrollTrigger.removeEventListener('refreshInit', handleRefresh);
      ctx.revert();
    };
  }, []);

  return { containerRef, glowRef, modelWrapperRef };
};

export { useScrollOrbit };
