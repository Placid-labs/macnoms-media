'use client';

import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  Users2,
  Megaphone,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface WhatWeDoProps {
  onOpenModal: (pkg?: string) => void;
}

const SERVICES = [
  {
    id: 'growth-strategy',
    num: '01',
    title: 'GROWTH STRATEGY',
    tagline: 'Audits, positioning, growth experiments and digital roadmaps.',
    description:
      'We dismantle your existing brand mechanics to identify why prospects drop off. Through quantitative audits, market positioning, and rapid experimentation sprints, we build a predictable roadmap to revenue.',
    deliverables: [
      'Full-funnel digital brand audit',
      'Competitor & audience positioning matrix',
      'Growth experiment design & KPI tracking',
      '90-day actionable commercial roadmap',
    ],
    icon: Compass,
    packageId: 'audit',
  },
  {
    id: 'social-content',
    num: '02',
    title: 'SOCIAL & CONTENT',
    tagline: 'Content systems designed around your audience and business goals.',
    description:
      'We do not post for the sake of an algorithm. We craft high-retention content systems engineered to build authority, provoke emotion, and drive direct commercial clicks.',
    deliverables: [
      'Multi-channel content pillars & calendars',
      'Short-form video scripts & direction',
      'Visual identity & aesthetic tone guidelines',
      'Conversion copywriting & lead hooks',
    ],
    icon: Sparkles,
    packageId: 'sprint',
  },
  {
    id: 'community',
    num: '03',
    title: 'COMMUNITY',
    tagline: 'Audience engagement, community building and activation.',
    description:
      'A follower is a bystander; a community member is an evangelist. We architect VIP groups, subscriber clubs, and active dialogue hubs that turn single-purchase customers into a self-sustaining tribe.',
    deliverables: [
      'Community architecture & platform setup',
      'Engagement routines & discussion facilitation',
      'Physical & digital meetup activations',
      'Ambassador & super-fan retention programs',
    ],
    icon: Users2,
    packageId: 'retainer',
  },
  {
    id: 'influencer-marketing',
    num: '04',
    title: 'INFLUENCER MARKETING',
    tagline: 'Finding the right people, building the campaign and managing execution.',
    description:
      'No vanity endorsements. We discover niche cultural creators who actually hold genuine trust with your target demographic, negotiating and directing content that converts.',
    deliverables: [
      'Creator discovery, vetting & audience verification',
      'Campaign briefing & creative storytelling',
      'End-to-end contractual negotiation',
      'Attribution tracking & ROI reporting',
    ],
    icon: Megaphone,
    packageId: 'custom',
  },
  {
    id: 'campaigns-projects',
    num: '05',
    title: 'CAMPAIGNS & PROJECTS',
    tagline: 'From launch ideas to real-world activations.',
    description:
      'Launching a new product, flagship pop-up, or brand reinvention? We provide end-to-end strategic campaign orchestration—uniting PR, social blitzes, experiential pop-ups, and sales triggers.',
    deliverables: [
      'Product launch concept & go-to-market strategy',
      'Experiential & physical event synergy',
      'Omnichannel digital media takeover',
      'Real-time crisis management & iteration',
    ],
    icon: Rocket,
    packageId: 'partner',
  },
];

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenModal }) => {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-cream-300 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-900/10 text-burgundy-900 text-xs font-semibold uppercase tracking-widest mb-3">
              <span>03 &bull; SERVICES &bull; CAPABILITIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-burgundy-950 leading-[1.1]">
              Strategy first.{' '}
              <span className="italic font-normal font-serif text-burgundy-800 block">
                Execution where it matters.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-burgundy-900/70 max-w-md">
            We don’t believe in bloated retainer overheads that lead nowhere. Every engagement is rooted in sharp strategic insight and executed with rigorous creative discipline.
          </p>
        </div>

        {/* Five Services Stack */}
        <div className="space-y-4">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            const isOpen = activeService === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => setActiveService(srv.id)}
                className={`rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? 'bg-white border-burgundy-900/40 shadow-xl ring-1 ring-burgundy-900/10'
                    : 'bg-cream-200/40 border-cream-300 hover:bg-cream-200/80 hover:border-gold-500/40'
                }`}
              >
                {/* Header Bar */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start md:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-gold-600">
                      {srv.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-burgundy-900 text-cream-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950 tracking-tight">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-burgundy-800/80 mt-0.5">
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto">
                    <span className="text-xs font-semibold uppercase tracking-wider text-burgundy-900 hidden sm:inline">
                      {isOpen ? 'Expanded' : 'Explore Service'}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-burgundy-900/30 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-90 bg-burgundy-900 text-white' : 'text-burgundy-900'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-2 border-t border-cream-200 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-sm sm:text-base text-burgundy-900/80 leading-relaxed">
                          {srv.description}
                        </p>
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenModal(srv.packageId);
                            }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-burgundy-900 text-cream-100 text-xs font-semibold uppercase tracking-wider hover:bg-burgundy-850 shadow-md transition-all"
                          >
                            <span>Book {srv.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="lg:col-span-5 bg-cream-100 p-5 sm:p-6 rounded-2xl border border-cream-300/80">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-gold-600 mb-3">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {srv.deliverables.map((item, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2 text-xs text-burgundy-950 leading-normal"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
