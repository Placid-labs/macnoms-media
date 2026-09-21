'use client';

import React from 'react';
import { Search, Compass, Zap, BarChart3, Check } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    name: 'DISCOVER',
    icon: Search,
    headline: 'We understand your brand, audience, goals and current challenges.',
    detail: 'An exhaustive deep-dive into your existing funnel analytics, customer sentiment, product friction points, and competitor blind spots.',
  },
  {
    step: '02',
    name: 'STRATEGISE',
    icon: Compass,
    headline: 'We identify opportunities and create a focused growth plan.',
    detail: 'No 80-page slide decks that gather digital dust. We deliver a distilled, high-leverage growth roadmap with clear milestones and immediate tests.',
  },
  {
    step: '03',
    name: 'EXECUTE',
    icon: Zap,
    headline: 'We turn strategy into content, campaigns, community and action.',
    detail: 'Hands-on creative direction, high-converting content production, creator negotiations, and community activation rollouts.',
  },
  {
    step: '04',
    name: 'OPTIMISE',
    icon: BarChart3,
    headline: 'We measure what happened, learn and improve.',
    detail: 'Continuous feedback loops, conversion attribution, cohort retention tracking, and iterative doubling-down on what drives revenue.',
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-cream-200/50 border-y border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-900/10 text-burgundy-900 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>06 &bull; OUR METHODOLOGY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-burgundy-950 leading-[1.15]">
            No unnecessary complexity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-burgundy-900/80 max-w-xl">
            Clean, transparent frameworks built for rapid momentum. We move from strategic diagnosis to execution in days, not months.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-white border border-cream-300 shadow-sm hover:border-gold-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-gold-600 tracking-wider">
                      PHASE {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-burgundy-900 text-cream-100 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950 tracking-tight mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-burgundy-900 leading-snug mb-3">
                    {step.headline}
                  </p>

                  <p className="text-xs text-burgundy-900/70 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-100 flex items-center gap-1.5 text-[11px] text-gold-700 font-medium font-mono">
                  <Check className="w-3.5 h-3.5 text-gold-600" />
                  <span>Verified Sprint Gate</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Commitment Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-burgundy-900 text-cream-100 text-center max-w-3xl mx-auto shadow-xl border border-gold-500/30">
          <p className="font-serif text-xl sm:text-2xl font-semibold italic text-gold-300 mb-2">
            &ldquo;Strategy isn’t something we hand you and disappear. We stay close to execution.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-cream-200/80 uppercase tracking-widest font-mono">
            &bull; Macnoms Media Operating Doctrine &bull;
          </p>
        </div>

      </div>
    </section>
  );
};
