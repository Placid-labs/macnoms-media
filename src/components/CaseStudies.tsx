'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  imageLabel: string;
  image: string;
  gradient: string;
  tagline: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'woomeout',
    client: 'Woomeout',
    imageLabel: '[IMAGE: Woomeout]',
    image: '/images/case-woomeout.jpg',
    gradient: 'from-[#7A3326]/90 via-[#4A1B24]/90 to-[#220B13]/95',
    tagline: 'Awareness, community and acquisition for a dating platform.',
    tags: ['5K+ sign-ups', 'Growth'],
    metrics: [
      { label: 'Verified Sign-ups', value: '5,000+' },
      { label: 'Organic Impressions', value: '2.4M+' },
      { label: 'Customer CAC Reduction', value: '-42%' },
    ],
    overview:
      'Woomeout required an organic user-acquisition funnel in Lagos and Abuja that avoided generic paid user ads.',
    challenge:
      'Dating applications face high churn, user skepticism, and expensive customer acquisition costs on paid ad channels.',
    solution:
      'We designed high-energy rooftop speed dating activations, relatable short-form cultural skits, and localized social loops that prompted organic referrals.',
    results: [
      '5,000+ organic downloads & sign-ups during the 60-day launch window.',
      'Viral UGC engagement across Instagram and TikTok with zero ad spend.',
      'Active community dialogue groups driving weekly active user retention.',
    ],
  },
  {
    id: 'warri-vendors',
    client: 'Warri Vendors',
    imageLabel: '[IMAGE: Warri Vendors]',
    image: '/images/warri-vendors.jpg',
    gradient: 'from-[#755523]/90 via-[#4B3416]/90 to-[#241A0A]/95',
    tagline: 'From online community to physical trade markets.',
    tags: ['11K+ attendees', 'Events'],
    metrics: [
      { label: 'Physical Attendees', value: '11,000+' },
      { label: 'Vendor Stalls Filled', value: '180+' },
      { label: 'Total Vendor GMV', value: '₦45M+' },
    ],
    overview:
      'Warri Vendors was an active digital community group that wanted to materialize into a dominant regional trade exhibition.',
    challenge:
      'Convincing online followers to physically leave their homes and spend real money at a weekend trade fair requires deep trust and intense social proof.',
    solution:
      'Comprehensive experiential campaign rollout: street hype teams, hyper-local creator takeovers, and vendor spotlight storytelling.',
    results: [
      '11,000+ registered attendees across the two-day flagship exhibition.',
      '100% of vendor slots sold out two weeks prior to the event date.',
      'Established the event as the benchmark trade market in Delta State.',
    ],
  },
  {
    id: 'organic-campaign',
    client: 'Organic Campaign',
    imageLabel: '[IMAGE: Organic campaign]',
    image: '/images/case-campaign.jpg',
    gradient: 'from-[#54301C]/90 via-[#361E14]/90 to-[#1C0E0B]/95',
    tagline: 'Exponential reach through cultural resonance.',
    tags: ['12M+ views', 'Content'],
    metrics: [
      { label: 'Organic Reach', value: '12,000,000+' },
      { label: 'Total Shares', value: '180K+' },
      { label: 'Earned Media Value', value: '$85,000+' },
    ],
    overview:
      'Engineering culturally resonant short-form content systems that trigger algorithmic lift and community debate.',
    challenge:
      'Organic reach on social platforms is declining as networks prioritize paid ad monetization.',
    solution:
      'We reverse-engineered high-share mechanics: emotional tension, cultural commentary, and authentic street-level vox pops.',
    results: [
      '12 Million+ total views across TikTok, Reels and X organically.',
      'Over 180,000 user shares and commentary bookmarks.',
      'Drove immediate brand awareness and inbound partnership requests.',
    ],
  },
  {
    id: 'influencer-campaigns',
    client: 'Influencer Campaigns',
    imageLabel: '[IMAGE: Creator framework]',
    image: '/images/case-influencer.jpg',
    gradient: 'from-[#6E2638]/90 via-[#3E1420]/90 to-[#1E0911]/95',
    tagline: 'Discovery, negotiation, creative direction, reporting.',
    tags: ['6-stage framework', 'Influencer'],
    metrics: [
      { label: 'Creators Mobilized', value: '45+' },
      { label: 'Engagement Rate', value: '8.4%' },
      { label: 'Contract Compliance', value: '100%' },
    ],
    overview:
      'A structured 6-stage creator framework ensuring zero vanity metrics and maximum authentic brand integration.',
    challenge:
      'Most influencer campaigns suffer from fake followers, poor creative alignment, lack of deliverables delivery, and low commercial conversion.',
    solution:
      'Strict 6-stage operational framework: vetting, narrative briefing, contract safeguards, content direction, coordinated blitz, and conversion attribution.',
    results: [
      'Zero fraudulent creator engagements; 100% on-time deliverable compliance.',
      '8.4% average engagement rate across all active creator posts.',
      'Direct correlation to sign-ups and revenue through custom tracking links.',
    ],
  },
];

interface CaseStudiesProps {
  onOpenModal: (pkg?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#F6F3EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center mb-6">
          <span className="bg-[#ECD7BF] text-[#7A3F2A] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-xs">
            CASE STUDIES
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-stencil text-[28px] min-[400px]:text-3xl sm:text-5xl md:text-6xl text-[#1E0C12] leading-[1.12] tracking-tight max-w-4xl mx-auto">
          Growth,{' '}
          <span className="font-sans italic font-normal text-[#B85D3D]">
            measured.
          </span>
        </h2>

        {/* 2x2 Case Study Cards Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 text-left">
          {CASE_STUDIES.map((study, idx) => {
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedStudy(study)}
                className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 border border-[#E5DFD5] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden mb-5 bg-[#200D13]">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${study.gradient} mix-blend-multiply transition-opacity duration-300`}
                    />

                    {/* Subtle Top Image Label */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="text-white/80 font-mono text-[11px] tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                        {study.imageLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-stencil text-2xl sm:text-3xl text-[#1E0C12] group-hover:text-[#B85D3D] transition-colors leading-snug">
                    {study.client}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="mt-2 text-sm text-[#524944] leading-relaxed font-normal">
                    {study.tagline}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-5 pt-2 flex flex-wrap items-center gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#18090E] text-white text-xs font-semibold px-3 py-1 rounded-full inline-block"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#F6F3EB] rounded-[24px] sm:rounded-[32px] border border-[#E5DFD5] shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#1E0C12] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div>
                <span className="bg-[#ECD7BF] text-[#7A3F2A] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                  CASE STUDY
                </span>
                <h3 className="font-stencil text-2xl sm:text-4xl text-[#1E0C12] mt-3 pr-8">
                  {selectedStudy.client}
                </h3>
                <p className="text-sm sm:text-base text-[#524944] mt-2">
                  {selectedStudy.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 min-[440px]:grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-white border border-[#E5DFD5]">
                  {selectedStudy.metrics.map((m) => (
                    <div key={m.label} className="text-center py-1 min-[440px]:py-0">
                      <div className="font-stencil text-lg sm:text-2xl text-[#1E0C12] break-words">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#524944] font-medium mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm text-[#524944] leading-relaxed">
                  <div>
                    <h4 className="font-bold text-[#1E0C12] uppercase tracking-wider text-xs mb-1">
                      Challenge
                    </h4>
                    <p>{selectedStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E0C12] uppercase tracking-wider text-xs mb-1">
                      Strategy & Execution
                    </h4>
                    <p>{selectedStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E0C12] uppercase tracking-wider text-xs mb-2">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedStudy.results.map((res, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#B85D3D] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#18090E] text-white text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedStudy(null);
                      onOpenModal('growth-strategy');
                    }}
                    className="w-full sm:w-auto justify-center bg-[#B85D3D] hover:bg-[#A34E31] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};