'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Plus, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatWeDoProps {
  onOpenModal: (pkg?: string) => void;
}

const SERVICES = [
  {
    id: 'growth-strategy',
    title: 'Growth Strategy',
    tagline: 'Audits, positioning, growth experiments and digital roadmaps.',
    description:
      'We dismantle your existing brand mechanics to identify why prospects drop off. Through quantitative audits, market positioning, and rapid experimentation sprints, we build a predictable roadmap to revenue.',
    deliverables: [
      'Full-funnel digital brand audit',
      'Competitor & audience positioning matrix',
      'Growth experiment design & KPI tracking',
      '90-day actionable commercial roadmap',
    ],
  },
  {
    id: 'social-content',
    title: 'Social & Content',
    tagline: 'Content systems designed around your audience and business goals.',
    description:
      'We do not post for the sake of an algorithm. We craft high-retention content systems engineered to build authority, provoke emotion, and drive direct commercial clicks.',
    deliverables: [
      'Multi-channel content pillars & calendars',
      'Short-form video scripts & direction',
      'Visual identity & aesthetic tone guidelines',
      'Conversion copywriting & lead hooks',
    ],
  },
  {
    id: 'community',
    title: 'Community',
    tagline: 'Audience engagement, community building and activation.',
    description:
      'A follower is a bystander; a community member is an evangelist. We architect VIP groups, subscriber clubs, and active dialogue hubs that turn single-purchase customers into a self-sustaining tribe.',
    deliverables: [
      'Community architecture & platform setup',
      'Engagement routines & discussion facilitation',
      'Physical & digital meetup activations',
      'Ambassador & super-fan retention programs',
    ],
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    tagline: 'Finding the right people, building the campaign and managing execution.',
    description:
      'No vanity endorsements. We discover niche cultural creators who actually hold genuine trust with your target demographic, negotiating and directing content that converts.',
    deliverables: [
      'Creator discovery, vetting & audience verification',
      'Campaign briefing & creative storytelling',
      'End-to-end contractual negotiation',
      'Attribution tracking & ROI reporting',
    ],
  },
  {
    id: 'campaigns-projects',
    title: 'Campaigns & Projects',
    tagline: 'From launch ideas to real-world activations.',
    description:
      'Launching a new product, flagship pop-up, or brand reinvention? We provide end-to-end strategic campaign orchestration—uniting PR, social blitzes, experiential pop-ups, and sales triggers.',
    deliverables: [
      'Product launch concept & go-to-market strategy',
      'Experiential & physical event synergy',
      'Omnichannel digital media takeover',
      'Real-time crisis management & iteration',
    ],
  },
  {
    id: 'billboard-ads',
    title: 'Billboard Ads & Out-of-Home Media',
    tagline: 'High-impact physical billboard placements across prime city corridors.',
    description:
      'Dominate physical cityscapes and turn daily commuter traffic into unmissable brand authority. From prime Lekki-Ikoyi link bridges and Victoria Island arteries to major LED gantries, we handle strategic site selection, media buying, creative direction, and verified deployment.',
    image: '/images/billboard-lekki.jpg',
    imageCaption: 'Live Gantry Placement • Lekki, Lagos',
    deliverables: [
      'Prime location scouting & commuter traffic audit',
      'Out-of-home (OOH) media buying & rate negotiation',
      'High-contrast billboard creative direction & production',
      'Regulatory clearance, installation & GPS verification',
    ],
  },
];

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenModal }) => {
  const [expandedId, setExpandedId] = useState<string>('growth-strategy');

  return (
    <section id="services" className="py-20 sm:py-32 bg-paper-100 border-b border-paper-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from macnoms.media */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-paper-300 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-ink-950 leading-[1.08]">
              Strategy first.{' '}
              <span className="font-serif italic font-normal text-ink-700">
                Execution where it matters.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-600 max-w-sm font-mono leading-relaxed">
            We work across 6 core capabilities, designed to turn attention into community, customers and long-term brand equity.
          </p>
        </div>

        {/* Enhanced Interactive Accordion */}
        <div className="divide-y divide-paper-300 border-y border-paper-300">
          {SERVICES.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`transition-colors duration-300 ${
                  isExpanded ? 'bg-white/60 shadow-2xs' : 'hover:bg-white/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left py-7 sm:py-9 px-3 sm:px-6 flex items-center justify-between gap-6 group cursor-pointer focus:outline-hidden"
                >
                  <div className="space-y-1.5 flex-1 pr-4">
                    <h3 className={`text-xl sm:text-3xl font-bold font-sans tracking-tight transition-colors duration-200 ${
                      isExpanded ? 'text-ink-950' : 'text-ink-800 group-hover:text-ink-950'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-serif italic text-ink-600">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Minimalist Rotating Plus Icon Button */}
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border transition-all duration-300 flex items-center justify-center shrink-0 ${
                    isExpanded
                      ? 'bg-ink-950 border-ink-950 text-paper-100 shadow-sm'
                      : 'border-paper-300 bg-white text-ink-950 group-hover:border-ink-950 group-hover:scale-105'
                  }`}>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    >
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Animated Expandable Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.25, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-6 pb-9 pt-2">
                        <div className="pt-6 border-t border-paper-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                          
                          {/* Overview & Action */}
                          <div className="lg:col-span-7 space-y-5">
                            <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-normal">
                              {item.description}
                            </p>

                            {'image' in item && item.image && (
                              <div className="relative rounded-2xl overflow-hidden border border-paper-300 bg-ink-950 aspect-[16/9] max-w-xl shadow-xs">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                                {'imageCaption' in item && item.imageCaption && (
                                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-ink-950/85 backdrop-blur-md text-[11px] font-mono text-paper-100 border border-white/10">
                                    {item.imageCaption}
                                  </div>
                                )}
                              </div>
                            )}

                            <div className="pt-1">
                              <button
                                type="button"
                                onClick={() => onOpenModal(item.id)}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-950 text-paper-100 text-xs font-semibold hover:bg-ink-850 transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 group"
                              >
                                <span>Inquire about this capability</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </button>
                            </div>
                          </div>

                          {/* Deliverables Checklist Box */}
                          <div className="lg:col-span-5 bg-paper-50/80 rounded-2xl p-5 border border-paper-200 space-y-3">
                            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-500 font-bold block">
                              Key Deliverables
                            </span>
                            <div className="space-y-2.5">
                              {item.deliverables.map((deliv, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2.5 text-xs text-ink-800 font-medium"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-ink-950 shrink-0 mt-0.5" />
                                  <span className="leading-snug">{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
