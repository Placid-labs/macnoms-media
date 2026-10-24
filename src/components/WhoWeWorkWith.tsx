'use client';

import React from 'react';

const SECTORS = [
  'STARTUPS',
  'FOUNDERS',
  'LIFESTYLE',
  'BEAUTY',
  'FASHION',
  'EVENTS',
  'DIGITAL PRODUCTS',
  'CREATORS',
];

const PROFILES = [
  {
    num: '01',
    category: 'STARTUPS & FOUNDERS',
    headline: 'High-growth ventures ready to convert attention into market authority.',
    description: 'Whether post-funding or self-bootstrapped, we build the organic community foundations and conversion systems that accelerate customer acquisition.',
  },
  {
    num: '02',
    category: 'LIFESTYLE, BEAUTY & FASHION',
    headline: 'Aesthetic brands demanding cult customer retention & repeat orders.',
    description: 'You make exceptional physical products; we turn one-off purchasers into an active, vocal tribe that advocates for your label.',
  },
  {
    num: '03',
    category: 'EVENTS & EXPERIENTIAL HUBS',
    headline: 'Festivals, pop-ups, markets, and regional experiential moments.',
    description: 'Bridging digital social excitement into packed physical experiences, high-traffic vendor trade, and sold-out ticket cohorts.',
  },
  {
    num: '04',
    category: 'DIGITAL PRODUCTS & CREATORS',
    headline: 'Apps, platforms, and modern content-led enterprises.',
    description: 'Engineering frictionless customer onramps, high-retention community networks, and creative distribution loops.',
  },
];

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-paper-200/50 border-b border-paper-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-ink-950 leading-[1.08]">
            For brands with{' '}
            <span className="font-serif italic font-normal text-ink-700">
              somewhere to go.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
            Whether you’re launching something new, rebuilding your digital presence or trying to figure out why your growth has stalled, we’ll help you identify the next move.
          </p>
        </div>

      </div>

      {/* Marquee Ticker with exact sectors from macnoms.media */}
      <div className="w-full py-4 bg-ink-950 text-paper-100 border-y border-paper-300 overflow-hidden mb-16">
        <div className="flex whitespace-nowrap animate-marquee text-xs font-mono uppercase tracking-widest">
          {[...Array(4)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center">
              {SECTORS.map((sector, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="mx-6 text-paper-100 font-bold tracking-widest">{sector}</span>
                  <span className="text-gold-500 font-bold">&bull;</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4 Profile Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILES.map((p) => (
            <div
              key={p.num}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-paper-300 flex flex-col justify-between hover:border-ink-950 transition-colors"
            >
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-950 mb-2">
                  {p.category}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-ink-900 leading-snug mb-3">
                  {p.headline}
                </p>
                <p className="text-xs text-ink-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-paper-200 text-[10px] font-mono uppercase tracking-wider text-ink-400">
                ACTIVE COHORTS WELCOME
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
