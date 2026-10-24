'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowUpRight, Sparkles, TrendingUp, Users, UserCheck } from 'lucide-react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2.2,
  suffix = '',
  decimals = 0,
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: '-60px' });
  const motionVal = useMotionValue(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
          }
        },
      });
      return controls.stop;
    }
  }, [inView, motionVal, to, duration, suffix, decimals]);

  return <span ref={nodeRef}>{`${from}${suffix}`}</span>;
};

interface MetricItem {
  number: number;
  suffix: string;
  decimals?: number;
  title: string;
  caption: string;
  context: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const METRICS: MetricItem[] = [
  {
    number: 12,
    suffix: 'M+',
    title: 'Organic views generated',
    caption: 'Zero paid ad spend required to achieve cultural resonance across digital channels.',
    context: 'Campaign Reach',
    icon: TrendingUp,
    tag: 'Viral distribution',
  },
  {
    number: 11,
    suffix: 'K+',
    title: 'Community cohorts engaged',
    caption: 'Active local consumers and retail artisans bridged from digital into live experiences.',
    context: 'Audience Ecosystem',
    icon: Users,
    tag: 'Verified attendees',
  },
  {
    number: 5,
    suffix: 'K+',
    title: 'Direct sign-ups delivered',
    caption: 'Qualified customer registrations driven via targeted multi-stage viral loops.',
    context: 'Conversion Engine',
    icon: UserCheck,
    tag: 'Customer acquisition',
  },
];

export const MetricsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-28 bg-paper-200/60 border-y border-paper-300 relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-paper-300/80 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-paper-300 text-xs font-mono text-ink-700">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span>Proven track record &amp; real outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-ink-950 leading-[1.1]">
              Quantifiable impact{' '}
              <span className="font-serif italic font-normal text-ink-700">
                behind every strategy.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-ink-600 max-w-sm font-mono leading-relaxed"
          >
            We measure our work by the real commercial and community momentum delivered to clients—not vanity dashboard figures.
          </motion.p>
        </div>

        {/* 3 Dedicated Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {METRICS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 * (index + 1),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl bg-white border border-paper-300 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-ink-950 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative gold glow reveal on card hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gold-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div>
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-ink-500 font-medium">
                      {item.context}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-paper-100 border border-paper-200 flex items-center justify-center text-ink-900 group-hover:bg-ink-950 group-hover:text-gold-400 group-hover:border-ink-950 transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Animated Big Number */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-ink-950 leading-none">
                      <AnimatedCounter
                        to={item.number}
                        suffix={item.suffix}
                        decimals={item.decimals ?? 0}
                      />
                    </div>
                  </div>

                  {/* Title without uppercase */}
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-ink-950 tracking-tight leading-snug mb-2 group-hover:text-ink-800 transition-colors">
                    {item.title}
                  </h3>

                  {/* Explanatory Context */}
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                    {item.caption}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-6 mt-6 border-t border-paper-200 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-ink-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
