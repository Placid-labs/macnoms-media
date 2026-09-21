'use client';

import React from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingPackagesProps {
  onOpenModal: (pkgId?: string) => void;
}

const PACKAGES = [
  {
    id: 'audit',
    name: 'CLARITY AUDIT',
    price: '₦50,000',
    type: 'One-off diagnostic',
    target: 'For brands that need direction.',
    description: 'A surgical audit of your current digital presence, content effectiveness, and conversion leaks with an actionable turnaround plan.',
    features: [
      'Comprehensive social & funnel audit',
      'Audience disconnect analysis',
      'Top 3 immediate conversion fixes',
      '60-min live strategic debrief call',
      'Actionable step-by-step PDF roadmap',
    ],
    cta: 'GET STARTED →',
    popular: false,
    badge: null,
  },
  {
    id: 'sprint',
    name: 'GROWTH SPRINT',
    price: '₦100,000',
    type: '14-day execution sprint',
    target: '14-day strategy + content + growth system.',
    description: 'An intensive, two-week acceleration to build and deploy your entire audience-to-customer conversion flywheel.',
    features: [
      'Full 14-day strategic playbook',
      'Content pillars & short-form video hooks',
      'Community activation gameplan',
      'High-converting bio & offer re-architecture',
      'Dedicated Slack / WhatsApp sprint access',
    ],
    cta: 'GET STARTED →',
    popular: true,
    badge: 'MOST POPULAR',
  },
  {
    id: 'retainer',
    name: 'GROWTH & COMMUNITY',
    price: '₦175,000',
    period: '/month',
    type: 'Monthly advisory & execution',
    target: 'Ongoing strategy + social + community + growth.',
    description: 'A monthly strategic partnership to continuously steer content creation, community engagement, and acquisition pipelines.',
    features: [
      'Ongoing content strategy & review',
      'Weekly community management oversight',
      'Monthly creator & influencer matchmaking',
      'Bi-weekly performance & KPI reviews',
      'Priority sprint queue for new launches',
    ],
    cta: 'LET’S TALK →',
    popular: false,
    badge: 'RETAINER',
  },
  {
    id: 'partner',
    name: 'GROWTH PARTNER',
    price: 'FROM ₦300,000',
    period: '/month',
    type: 'Full-service embedded team',
    target: 'For brands that need a strategic growth extension of their team.',
    description: 'An embedded executive growth squad managing omnichannel strategy, PR, creator deals, and high-stakes launch campaigns.',
    features: [
      'Embedded growth & community lead',
      'Full campaign ideation to real-world launch',
      'Creator contract negotiation & management',
      'Custom KPI dashboards & weekly sprint syncs',
      'Direct executive advisory for founders',
    ],
    cta: 'LET’S TALK →',
    popular: false,
    badge: 'ENTERPRISE',
  },
];

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenModal }) => {
  return (
    <section id="packages" className="py-24 sm:py-32 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-900/10 text-burgundy-900 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>07 &bull; SERVICES &amp; PACKAGES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-burgundy-950 leading-[1.12]">
            Predictable investment.{' '}
            <span className="italic font-normal font-serif text-burgundy-800">
              Uncompromising rigor.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-burgundy-900/75">
            Transparent pricing designed for ambitious brands at every stage of their market presence.
          </p>

          {/* Prompt Display Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-cream-200 border border-gold-500/40 text-xs sm:text-sm font-serif font-bold text-burgundy-950 shadow-xs">
            <span>Projects from ₦50K</span>
            <span className="text-gold-600">&bull;</span>
            <span>Retainers from ₦175K/month</span>
          </div>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative ${
                  pkg.popular
                    ? 'bg-white border-burgundy-900 shadow-xl ring-2 ring-burgundy-900/10 scale-102 lg:-translate-y-2'
                    : 'bg-white/80 border-cream-300 hover:border-gold-500 hover:shadow-lg'
                }`}
              >
                {/* Popular Pill */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm ${
                        pkg.popular
                          ? 'bg-burgundy-900 text-gold-300'
                          : 'bg-cream-200 text-burgundy-900 border border-gold-500/30'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title & Subtitle */}
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gold-700 font-bold mb-1">
                    {pkg.type}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950 tracking-tight">
                    {pkg.name}
                  </h3>

                  {/* Pricing */}
                  <div className="my-5 pb-5 border-b border-cream-200">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-3xl sm:text-4xl font-black text-burgundy-950">
                        {pkg.price}
                      </span>
                      {pkg.period && (
                        <span className="text-xs font-semibold text-burgundy-800/70">
                          {pkg.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-burgundy-850 mt-2 italic">
                      {pkg.target}
                    </p>
                  </div>

                  <p className="text-xs text-burgundy-900/80 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-burgundy-900">
                        <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => onOpenModal(pkg.id)}
                  className={`w-full py-3.5 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? 'bg-burgundy-900 hover:bg-burgundy-850 text-cream-100 shadow-md'
                      : 'border border-burgundy-900/30 hover:border-burgundy-900 hover:bg-burgundy-900 hover:text-white text-burgundy-950'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Proposal Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-cream-200/80 border border-gold-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div>
            <h4 className="font-serif text-lg font-bold text-burgundy-950">
              Need a custom multi-channel campaign or physical activation?
            </h4>
            <p className="text-xs text-burgundy-800/80 mt-0.5">
              We design bespoke project scopes for launches, events, and rebrands.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenModal('custom')}
            className="px-6 py-2.5 rounded-full bg-burgundy-900 hover:bg-burgundy-800 text-cream-100 text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors"
          >
            Request a Proposal &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
