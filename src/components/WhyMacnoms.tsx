'use client';

import React from 'react';
import { Users, Layers, TrendingUp, Check, ShieldCheck } from 'lucide-react';

export const WhyMacnoms: React.FC = () => {
  return (
    <section id="why" className="py-24 sm:py-32 bg-burgundy-950 text-cream-100 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy-850/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>04 &bull; STRATEGIC FOUNDATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream-100 leading-[1.12]">
            We sit at the intersection of{' '}
            <span className="italic font-normal font-serif text-gold-300 block sm:inline">
              people, product and growth.
            </span>
          </h2>

          <div className="mt-8 space-y-4 text-base sm:text-lg text-cream-200/80 leading-relaxed">
            <p>
              Macnoms Media brings together experience across growth marketing, community, social media, PR, influencer marketing, product and project management.
            </p>
            <p className="text-sm sm:text-base text-cream-200/70 border-l-2 border-gold-500 pl-4 py-1">
              That means we don’t look at your Instagram in isolation. We look at the business behind it, the people you’re trying to reach and the action you want them to take.
            </p>
          </div>
        </div>

        {/* 3 Pillars Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 01: PEOPLE */}
          <div className="p-8 sm:p-10 rounded-3xl bg-burgundy-900/60 border border-burgundy-800/80 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>

              <div className="text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase mb-1">
                PILLAR 01
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                PEOPLE
              </h3>
              
              <div className="mt-3 pt-3 border-t border-burgundy-800/60">
                <p className="text-sm font-semibold text-gold-300 italic mb-3">
                  Who are you trying to reach?
                </p>
                <p className="text-xs sm:text-sm text-cream-200/70 leading-relaxed">
                  We delve deep into subcultures, customer psychological triggers, emotional affinities, and authentic digital habits. We do not target generic demographics; we build for defined tribes.
                </p>
              </div>
            </div>

            <ul className="mt-6 pt-6 border-t border-burgundy-800/60 space-y-2 text-xs text-cream-200/60">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Audience Persona Modeling</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Cultural Community Mapping</span>
              </li>
            </ul>
          </div>

          {/* Pillar 02: PRODUCT */}
          <div className="p-8 sm:p-10 rounded-3xl bg-burgundy-900/60 border border-burgundy-800/80 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>

              <div className="text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase mb-1">
                PILLAR 02
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                PRODUCT
              </h3>
              
              <div className="mt-3 pt-3 border-t border-burgundy-800/60">
                <p className="text-sm font-semibold text-gold-300 italic mb-3">
                  What are you actually asking them to care about?
                </p>
                <p className="text-xs sm:text-sm text-cream-200/70 leading-relaxed">
                  Great marketing cannot salvage an ambiguous offer. We refine your core product narrative, friction-free customer journey, and distinct value proposition so people immediately understand why you matter.
                </p>
              </div>
            </div>

            <ul className="mt-6 pt-6 border-t border-burgundy-800/60 space-y-2 text-xs text-cream-200/60">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Offer Positioning &amp; Pricing Clarity</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Customer Journey De-frictioning</span>
              </li>
            </ul>
          </div>

          {/* Pillar 03: GROWTH */}
          <div className="p-8 sm:p-10 rounded-3xl bg-burgundy-900/60 border border-burgundy-800/80 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>

              <div className="text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase mb-1">
                PILLAR 03
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                GROWTH
              </h3>
              
              <div className="mt-3 pt-3 border-t border-burgundy-800/60">
                <p className="text-sm font-semibold text-gold-300 italic mb-3">
                  How do we move them from awareness to action?
                </p>
                <p className="text-xs sm:text-sm text-cream-200/70 leading-relaxed">
                  We build predictable conversion flywheels. From organic viral loops and creator matchmaking to email nurturing and high-converting launch blitzes, we convert passive eyes into paying advocates.
                </p>
              </div>
            </div>

            <ul className="mt-6 pt-6 border-t border-burgundy-800/60 space-y-2 text-xs text-cream-200/60">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Full-Funnel Acquisition Loops</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>LTV Retention &amp; Advocacy Sprints</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
