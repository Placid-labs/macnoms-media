'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: (pkg?: string) => void;
}

interface WheelCardData {
  tag: string;
  title: string;
  gradient: string;
  discipline: string;
}

const BASE_CARDS: WheelCardData[] = [
  {
    tag: 'CREATOR FRAMEWORK · 12M+',
    title: 'High-Trust Creator Matchmaking',
    gradient: 'linear-gradient(155deg, #A25335 0%, #5B2B1C 58%, #2D1510 100%)',
    discipline: 'influencer-marketing',
  },
  {
    tag: 'WOOMEOUT · 5K+',
    title: 'Sign-ups Through Campaign Strategy',
    gradient: 'linear-gradient(155deg, #52252A 0%, #3A161D 58%, #240D12 100%)',
    discipline: 'growth-strategy',
  },
  {
    tag: 'BILLBOARD & OOH',
    title: 'Prime City Corridors, Big Impact',
    gradient: 'linear-gradient(155deg, #743423 0%, #4E1F19 58%, #2C1011 100%)',
    discipline: 'campaigns-projects',
  },
  {
    tag: 'SOCIAL & CONTENT',
    title: 'Content Systems That Convert',
    gradient: 'linear-gradient(155deg, #9A554A 0%, #76373B 58%, #4A1C2B 100%)',
    discipline: 'social-content',
  },
  {
    tag: 'INFLUENCER ENGINE',
    title: 'A 6-Stage Creator Framework',
    gradient: 'linear-gradient(155deg, #7E5F29 0%, #553E1A 58%, #2C200D 100%)',
    discipline: 'influencer-marketing',
  },
  {
    tag: 'GROWTH STRATEGY',
    title: 'A 90-Day Commercial Roadmap',
    gradient: 'linear-gradient(155deg, #AA5131 0%, #722F1C 58%, #3C1612 100%)',
    discipline: 'growth-strategy',
  },
  {
    tag: 'EXPERIENTIAL',
    title: 'Digital Hype, Packed Venues',
    gradient: 'linear-gradient(155deg, #5A2431 0%, #38141E 58%, #1E0A10 100%)',
    discipline: 'campaigns-projects',
  },
  {
    tag: 'WARRI VENDORS · 11K+',
    title: 'Offline Activation & Trade Market',
    gradient: 'linear-gradient(155deg, #6E4726 0%, #462B16 58%, #24140B 100%)',
    discipline: 'community',
  },
];

// Repeat 4x around a 360-degree wheel (32 cards * 11.25deg = 360deg)
const WHEEL_CARDS = [...BASE_CARDS, ...BASE_CARDS, ...BASE_CARDS, ...BASE_CARDS];
const TOTAL_CARDS = WHEEL_CARDS.length;
const STEP_DEG = 360 / TOTAL_CARDS; // 11.25deg

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<number>(-3 * STEP_DEG); // Centers SOCIAL & CONTENT at load
  const velocityRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const dragMovedRef = useRef<boolean>(false);
  const lastXRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const speedMultiplierRef = useRef<number>(1);

  const [dims, setDims] = useState({
    radius: 1320,
    cardW: 236,
    cardH: 308,
    viewportH: 416,
    topPadding: 30,
  });

  useEffect(() => {
    const updateDims = () => {
      const w = window.innerWidth;
      if (w < 640) {
        // 32 cards * (176 + 16 gap) / (2 * PI) ≈ 978px radius (zero card overlap)
        setDims({
          radius: 980,
          cardW: 176,
          cardH: 236,
          viewportH: 315,
          topPadding: 20,
        });
      } else if (w < 1024) {
        // 32 cards * (210 + 18 gap) / (2 * PI) ≈ 1161px radius
        setDims({
          radius: 1170,
          cardW: 210,
          cardH: 278,
          viewportH: 370,
          topPadding: 24,
        });
      } else {
        // 32 cards * (236 + 22 gap) / (2 * PI) ≈ 1314px radius
        setDims({
          radius: 1320,
          cardW: 236,
          cardH: 308,
          viewportH: 416,
          topPadding: 30,
        });
      }
    };
    updateDims();
    window.addEventListener('resize', updateDims);
    return () => window.removeEventListener('resize', updateDims);
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.6667, 3); // normalized to 60fps
      lastTime = now;

      // Smoothly pause/resume auto-rotation on hover
      const targetMultiplier = isHoveredRef.current || isDraggingRef.current ? 0 : 1;
      speedMultiplierRef.current += (targetMultiplier - speedMultiplierRef.current) * 0.08 * dt;

      if (!isDraggingRef.current) {
        // Auto-marquee drift + release inertia
        const baseDrift = -0.036 * speedMultiplierRef.current * dt;
        rotationRef.current += baseDrift + velocityRef.current * dt;
        velocityRef.current *= Math.pow(0.93, dt);
        if (Math.abs(velocityRef.current) < 0.001) velocityRef.current = 0;
      }

      if (wheelRef.current) {
        wheelRef.current.style.transform = `translate3d(-50%, 0, 0) rotate(${rotationRef.current}deg)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    if (Math.abs(dx) > 3) dragMovedRef.current = true;
    lastXRef.current = e.clientX;
    const deltaDeg = dx * 0.042;
    rotationRef.current += deltaDeg;
    velocityRef.current = deltaDeg * 0.85;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }
  };

  const { radius, cardW, cardH, viewportH, topPadding } = dims;
  const centerTopOffset = topPadding + cardH / 2 + radius + 24;
  const outerRingRadius = radius + cardH / 2 + topPadding;
  const outerRingDiameter = outerRingRadius * 2;

  return (
    <section className="relative pt-28 sm:pt-36 md:pt-44 pb-0 overflow-hidden bg-[#F6F3EB]">
      {/* Subtle background grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-stencil text-[34px] min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#1E0C12] leading-[1.08] max-w-5xl mx-auto"
        >
          Your brand deserves <br className="hidden sm:inline" />
          <span className="font-sans italic font-normal text-[#B85D3D]">
            more than just
          </span>{' '}
          attention.
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-sm min-[400px]:text-base sm:text-lg md:text-xl text-[#524944] max-w-xl mx-auto leading-relaxed font-normal px-1"
        >
          We build growth systems that turn attention into community, customers and long-term brand value.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 sm:mt-8 flex flex-col min-[400px]:flex-row flex-wrap items-center justify-center gap-3 sm:gap-3.5"
        >
          <a
            href="#work"
            className="w-full min-[400px]:w-auto justify-center bg-[#18090E] hover:bg-[#B85D3D] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md flex items-center gap-1.5 group"
          >
            <span>See our work</span>
            <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
          </a>

          <button
            onClick={() => onOpenModal('growth-strategy')}
            className="w-full min-[400px]:w-auto bg-white hover:bg-[#FAF7F2] text-[#18090E] border border-[#DDD3C4] hover:border-[#18090E] px-7 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs"
          >
            Start a project
          </button>
        </motion.div>
      </div>

      {/* Osmo-Style Radial Cards Marquee Wheel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ height: `${viewportH}px` }}
        className="relative w-full mt-12 sm:mt-16 overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
      >
        {/* Outer White/Cream Circular Disc Frame (Exact curved track behind cards) */}
        <div
          aria-hidden="true"
          style={{
            width: `${outerRingDiameter}px`,
            height: `${outerRingDiameter}px`,
            top: `${centerTopOffset - outerRingRadius}px`,
          }}
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#FAF9F6] border border-[#E5DFD5] shadow-[0_-10px_40px_rgba(32,13,19,0.05)] pointer-events-none"
        />

        {/* Rotating Radial Wheel */}
        <div
          ref={wheelRef}
          style={{
            top: `${centerTopOffset}px`,
            transform: `translate3d(-50%, 0, 0) rotate(${rotationRef.current}deg)`,
          }}
          className="absolute left-1/2 w-0 h-0 will-change-transform"
        >
          {WHEEL_CARDS.map((card, index) => {
            const angle = index * STEP_DEG;
            return (
              <div
                key={`${card.tag}-${index}`}
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  marginLeft: `-${cardW / 2}px`,
                  marginTop: `-${cardH / 2}px`,
                  transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                }}
                className="absolute top-0 left-0 hover:z-30"
              >
                <div
                  onClick={() => {
                    if (!dragMovedRef.current) {
                      onOpenModal(card.discipline);
                    }
                  }}
                  style={{ background: card.gradient }}
                  className="group relative w-full h-full rounded-[20px] sm:rounded-[26px] p-4 sm:p-6 flex flex-col justify-between text-left border border-white/15 shadow-[0_14px_30px_rgba(24,9,14,0.16)] transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.04] hover:shadow-[0_24px_48px_rgba(24,9,14,0.28)] cursor-pointer overflow-hidden"
                >
                  {/* Subtle top radial light sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Pill Badge */}
                  <div className="relative z-10">
                    <span className="inline-block bg-white/15 backdrop-blur-md border border-white/15 text-white/95 text-[8.5px] sm:text-[10px] font-sans font-bold tracking-[0.1em] sm:tracking-[0.12em] px-2.5 sm:px-3 py-1 rounded-full uppercase">
                      {card.tag}
                    </span>
                  </div>

                  {/* Bottom Title */}
                  <div className="relative z-10">
                    <h3 className="font-sans font-extrabold text-white text-[15px] sm:text-[21px] leading-[1.16] tracking-tight drop-shadow-xs">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};