'use client';

import React from 'react';
import { ArrowDown, Eye, Heart, Users, ShoppingBag, TrendingUp, AlertTriangle } from 'lucide-react';

const FUNNEL_STEPS = [
  {
    step: '01',
    name: 'ATTENTION',
    icon: Eye,
    subtitle: 'Where most brands stop',
    description: 'Views, impressions, and vanity metrics that feel good on reports but do not pay overhead.',
    status: 'Cheap & Fleeting',
    highlight: false,
  },
  {
    step: '02',
    name: 'INTEREST',
    icon: Heart,
    subtitle: 'Cultivating resonance',
    description: 'Moving beyond passive scrolling into genuine curiosity about your core value proposition.',
    status: 'Curiosity Sparked',
    highlight: false,
  },
  {
    step: '03',
    name: 'COMMUNITY',
    icon: Users,
    subtitle: 'The Macnoms inflection point',
    description: 'Turning casual observers into an engaged tribe who identify with your brand and advocate for it.',
    status: 'Loyalty Secured',
    highlight: true,
  },
  {
    step: '04',
    name: 'ACTION',
    icon: ShoppingBag,
    subtitle: 'Seamless conversion',
    description: 'Clear, high-converting purchase triggers, sign-ups, ticket bookings, and digital transactions.',
    status: 'Revenue Generated',
    highlight: true,
  },
  {
    step: '05',
    name: 'GROWTH',
    icon: TrendingUp,
    subtitle: 'Compounding brand equity',
    description: 'Repeat purchases, viral referrals, and defensible market positioning that compounds over quarters.',
    status: 'Sustainable Scale',
    highlight: true,
  },
];

export const TheProblem: React.FC = () => {
  return (
    <section id="problem" className="py-24 sm:py-32 bg-cream-200/60 relative border-y border-cream-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-900/10 text-burgundy-900 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>02 &bull; THE REALITY CHECK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-burgundy-950 leading-[1.15]">
            You don’t have an attention problem.{' '}
            <span className="italic font-normal font-serif text-burgundy-800 block sm:inline">
              You have a conversion problem.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg text-burgundy-900/80 leading-relaxed font-normal">
            <p>
              Your brand might already have good products, beautiful content and people paying attention.
            </p>
            <p>
              <strong className="text-burgundy-950 font-semibold">
                But attention alone doesn’t build a business.
              </strong>
            </p>
            <p className="text-sm sm:text-base text-burgundy-900/70">
              You need a strategy that connects <span className="font-semibold text-burgundy-950">content &rarr; community &rarr; action &rarr; growth</span>. That’s where we come in.
            </p>
          </div>
        </div>

        {/* Funnel Flow Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 relative z-10">
            {FUNNEL_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex flex-col h-full">
                  <div
                    className={`h-full p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                      step.highlight
                        ? 'bg-white border-gold-500/50 shadow-xl shadow-gold-600/5 ring-1 ring-gold-500/20'
                        : 'bg-cream-100 border-cream-300 text-burgundy-900 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-gold-600">
                          {step.step}
                        </span>
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            step.highlight
                              ? 'bg-burgundy-900 text-cream-100'
                              : 'bg-cream-200 text-burgundy-900'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-serif text-xl font-bold tracking-tight text-burgundy-950">
                        {step.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mt-0.5 mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-xs text-burgundy-900/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-cream-200 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-burgundy-800/60">Outcome:</span>
                      <span
                        className={`font-semibold ${
                          step.highlight ? 'text-burgundy-950 font-bold' : 'text-burgundy-700'
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                  </div>

                  {/* Down Arrow for Mobile */}
                  {idx < FUNNEL_STEPS.length - 1 && (
                    <div className="md:hidden flex justify-center py-2 text-burgundy-900/40">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Flow Arrow Connector Bar */}
          <div className="hidden md:flex items-center justify-between px-10 pt-4 text-xs font-mono uppercase tracking-widest text-burgundy-800/40">
            <span>Vanity Metrics</span>
            <span className="flex items-center gap-2 text-gold-600 font-semibold">
              Conversion Acceleration &rarr;
            </span>
            <span>Commercial Compounding</span>
          </div>
        </div>

      </div>
    </section>
  );
};
