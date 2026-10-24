'use client';

import React from 'react';
import { Users, Layers, TrendingUp, CheckCircle2 } from 'lucide-react';

const MILESTONES = [
  { year: '2026', partner: 'Woomeout Social Dating', scope: 'Growth Strategy & Acquisition', impact: '5,000+ Direct Sign-ups' },
  { year: '2025', partner: 'Warri Vendors Ecosystem', scope: 'Community & Event Activation', impact: '11,000+ Community Attendees' },
  { year: '2025', partner: 'Cultural Short-Form Campaigns', scope: 'Organic Distribution & Production', impact: '12,000,000+ Organic Views' },
  { year: '2024', partner: 'Institutional Creator Engine', scope: '6-Stage Creator Framework', impact: 'Zero-Fraud Vetted Partnerships' },
];

export const WhyMacnoms: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-paper-200/50 border-b border-paper-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact copy from macnoms.media */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-ink-950 leading-[1.08]">
            We sit at the intersection of{' '}
            <span className="font-serif italic font-normal text-ink-700">
              people, product and growth.
            </span>
          </h2>

          <div className="mt-6 space-y-3 text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
            <p>
              Macnoms Media brings together experience across growth marketing, community, social media, PR, influencer marketing, product and project management.
            </p>
            <p className="text-sm sm:text-base text-ink-600 font-mono border-l-2 border-ink-950 pl-3.5 py-0.5">
              That means we don’t look at your Instagram in isolation. We look at the business behind it, the people you’re trying to reach and the action you want them to take.
            </p>
          </div>
        </div>

        {/* The 3 Pillars Columns: PEOPLE, PRODUCT, GROWTH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 01: PEOPLE */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-paper-300 flex flex-col justify-between hover:border-ink-950 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-paper-200 mb-6">
                <span className="font-mono text-xs font-bold text-ink-400">
                  PILLAR
                </span>
                <Users className="w-5 h-5 text-ink-950" />
              </div>

              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-ink-950 mb-1">
                PEOPLE
              </h3>
              <p className="font-serif italic text-xs text-ink-600 mb-4">
                Who are you trying to reach?
              </p>
              <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-normal">
                We delve deep into subcultures, customer psychological triggers, emotional affinities, and authentic digital habits. We do not target generic demographics; we build for defined tribes.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-200 space-y-2 text-xs font-mono text-ink-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-950 shrink-0" />
                <span>Audience Persona Modeling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-950 shrink-0" />
                <span>Cultural Community Mapping</span>
              </div>
            </div>
          </div>

          {/* Pillar 02: PRODUCT */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-paper-300 flex flex-col justify-between hover:border-ink-950 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-paper-200 mb-6">
                <span className="font-mono text-xs font-bold text-ink-400">
                  PILLAR
                </span>
                <Layers className="w-5 h-5 text-ink-950" />
              </div>

              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-ink-950 mb-1">
                PRODUCT
              </h3>
              <p className="font-serif italic text-xs text-ink-600 mb-4">
                What are you actually asking them to care about?
              </p>
              <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-normal">
                Great marketing cannot salvage an ambiguous offer. We refine your core product narrative, friction-free customer journey, and distinct value proposition so people immediately understand why you matter.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-200 space-y-2 text-xs font-mono text-ink-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-950 shrink-0" />
                <span>Offer Positioning &amp; Clarity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-950 shrink-0" />
                <span>Friction-Free Customer Journey</span>
              </div>
            </div>
          </div>

          {/* Pillar 03: GROWTH */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-paper-300 flex flex-col justify-between hover:border-ink-950 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-paper-200 mb-6">
                <span className="font-mono text-xs font-bold text-ink-400">
                  PILLAR
                </span>
                <TrendingUp className="w-5 h-5 text-ink-950" />
              </div>

              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-ink-950 mb-1">
                GROWTH
              </h3>
              <p className="font-serif italic text-xs text-ink-600 mb-4">
                How does attention become action?
              </p>
              <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-normal">
                We build the conversion mechanisms: clear offers, content funnels, community engagement, and distribution strategies that turn reach into revenue and compounding brand equity.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-200 space-y-2 text-xs font-mono text-ink-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-950 shrink-0" />
                <span>Conversion Funnel Mechanics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ink-950 shrink-0" />
                <span>Long-Term Brand Equity Loops</span>
              </div>
            </div>
          </div>

        </div>

        {/* Studio Track Record Table */}
        <div className="border border-paper-300 rounded-2xl bg-white overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-paper-300 flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-950">
              MACNOMS MEDIA &bull; TRACK RECORD ARCHIVE
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-400">
              VERIFIED IMPACT
            </span>
          </div>

          <div className="divide-y divide-paper-200 font-mono text-xs">
            {MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-paper-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-ink-400 text-[11px]">[{m.year}]</span>
                  <span className="font-bold text-ink-950">{m.partner}</span>
                  <span className="hidden md:inline text-ink-400">&bull;</span>
                  <span className="hidden md:inline text-ink-600">{m.scope}</span>
                </div>
                <div className="text-ink-900 font-semibold sm:text-right">
                  {m.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
