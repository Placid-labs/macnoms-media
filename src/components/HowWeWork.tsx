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
    <section id="method" className="py-20 sm:py-32 bg-paper-100 border-b border-paper-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from macnoms.media */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-ink-950 leading-[1.08]">
            No unnecessary complexity.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-700 leading-relaxed font-normal">
            Clean, transparent frameworks built for rapid momentum. We move from strategic diagnosis to execution in days, not months.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-paper-300 flex flex-col justify-between hover:border-ink-950 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-paper-200 mb-4">
                    <span className="font-mono text-xs font-bold text-ink-950">
                      PHASE {step.step}
                    </span>
                    <Icon className="w-4 h-4 text-ink-950" />
                  </div>

                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-ink-950 mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-ink-900 leading-snug mb-3">
                    {step.headline}
                  </p>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-paper-200 flex items-center gap-1.5 text-[10px] font-mono text-ink-700">
                  <Check className="w-3.5 h-3.5 text-ink-950" />
                  <span>Verified Sprint Gate</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Commitment Banner from macnoms.media */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-paper-200 border border-paper-300 text-center max-w-3xl mx-auto">
          <p className="font-serif text-lg sm:text-xl italic text-ink-900 mb-2">
            &ldquo;Strategy isn’t something we hand you and disappear. We stay close to execution.&rdquo;
          </p>
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
            &bull; MACNOMS MEDIA OPERATING DOCTRINE &bull;
          </span>
        </div>

      </div>
    </section>
  );
};
