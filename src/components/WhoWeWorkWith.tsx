'use client';

import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  'STARTUPS',
  'FOUNDERS',
  'LIFESTYLE',
  'BEAUTY',
  'FASHION',
  'EVENTS',
  'DIGITAL PRODUCTS',
  'CREATORS',
];

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-cream-200/40 border-y border-cream-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-900/10 text-burgundy-900 text-xs font-semibold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>08 &bull; TARGET PARTNERSHIPS</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-burgundy-950 leading-[1.12]">
          For brands with{' '}
          <span className="italic font-normal font-serif text-burgundy-800">
            somewhere to go.
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-burgundy-900/80 max-w-2xl mx-auto leading-relaxed">
          Whether you’re launching something new, rebuilding your digital presence or trying to figure out why your growth has stalled, we’ll help you identify the next move.
        </p>
      </div>

      {/* Moving Horizontal Marquee Ticker */}
      <div className="relative w-full py-6 bg-burgundy-950 text-cream-100 border-y-2 border-gold-500/40 overflow-hidden shadow-inner">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((item, index) => (
            <div key={index} className="flex items-center mx-6 sm:mx-8">
              <span className="font-serif text-xl sm:text-3xl lg:text-4xl font-black tracking-widest uppercase text-cream-100/90 hover:text-gold-400 transition-colors cursor-default">
                {item}
              </span>
              <span className="text-gold-500 text-base sm:text-2xl ml-6 sm:ml-8">&bull;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Marquee for depth */}
      <div className="relative w-full py-4 bg-burgundy-900 text-gold-300 overflow-hidden border-b border-burgundy-950">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[
            'AUDIENCE INTO COMMUNITY',
            'COMMUNITY INTO CUSTOMERS',
            'STRATEGY FIRST',
            'RIGOROUS EXECUTION',
            'LONG-TERM BRAND VALUE',
            'MEASURABLE CONVERSION',
          ].map((phrase, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="font-mono text-xs sm:text-sm tracking-widest font-semibold uppercase text-gold-200">
                {phrase}
              </span>
              <span className="text-white/40 text-sm ml-6">&mdash;</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Core Engagement Scenarios */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-3xl bg-white border border-cream-300">
          <span className="text-xs font-mono font-bold text-gold-600 block mb-2">SCENARIO 01</span>
          <h4 className="font-serif text-lg font-bold text-burgundy-950 mb-2">Launching Something New</h4>
          <p className="text-xs text-burgundy-800/80 leading-relaxed">
            Pre-launch buzz, waitlist momentum, day-one influencer coverage, and community foundation before public debut.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-cream-300">
          <span className="text-xs font-mono font-bold text-gold-600 block mb-2">SCENARIO 02</span>
          <h4 className="font-serif text-lg font-bold text-burgundy-950 mb-2">Rebuilding Digital Presence</h4>
          <p className="text-xs text-burgundy-800/80 leading-relaxed">
            Outdated content strategies that attract followers but fail to convert. We restructure your positioning and content systems.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-cream-300">
          <span className="text-xs font-mono font-bold text-gold-600 block mb-2">SCENARIO 03</span>
          <h4 className="font-serif text-lg font-bold text-burgundy-950 mb-2">Overcoming Stalled Growth</h4>
          <p className="text-xs text-burgundy-800/80 leading-relaxed">
            Plateaued acquisition? We conduct rigorous audits, diagnose drop-off points, and run growth sprints to reignite customer traction.
          </p>
        </div>
      </div>
    </section>
  );
};
