'use client';

import React, { useState } from 'react';
import { ArrowUpRight, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudyModalProps {
  study: any | null;
  onClose: () => void;
  onSelectStudy: (study: any) => void;
  onOpenProjectModal: () => void;
  allStudies: any[];
}

const CaseStudyDrawer: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onSelectStudy,
  onOpenProjectModal,
  allStudies,
}) => {
  if (!study) return null;

  const currentIndex = allStudies.findIndex((s) => s.id === study.id);
  const nextStudy = allStudies[(currentIndex + 1) % allStudies.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-950/70 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-2xl h-full bg-paper-100 border-l border-paper-300 shadow-2xl overflow-y-auto z-10 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        <div>
          {/* Top Header */}
          <div className="sticky top-0 bg-paper-100/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-paper-300 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-900 font-semibold">
                {study.client}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-paper-200 text-ink-950 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Banner */}
          <div className="relative aspect-[16/9] w-full bg-ink-950 overflow-hidden border-b border-paper-300">
            <img
              src={study.image}
              alt={study.client}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-paper-100">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">
                  {study.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold mt-0.5">
                  {study.headline}
                </h3>
              </div>
            </div>
          </div>

          {/* Core Case Study Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Impact Metric Strip */}
            <div className="p-5 rounded-2xl bg-white border border-paper-300 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
                  KEY OUTCOME
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-sans text-ink-950 mt-0.5">
                  {study.metric}
                </div>
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-ink-700 text-right max-w-[200px]">
                {study.metricLabel}
              </div>
            </div>

            {/* Strategic Challenge & Solution from macnoms.media */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-ink-500 font-bold">
                THE STRATEGIC CHALLENGE &amp; SOLUTION
              </h4>
              <p className="text-sm text-ink-800 leading-relaxed font-normal">
                {study.fullDescription}
              </p>
            </div>

            {study.framework && (
              <div className="p-4 rounded-xl bg-paper-200 border border-paper-300">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-600 block mb-1">
                  THE 6-STAGE EXECUTION LOOP:
                </span>
                <p className="text-xs font-mono text-ink-900">
                  {study.framework}
                </p>
              </div>
            )}

            {/* Core Execution Deliverables from macnoms.media */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-ink-500 font-bold">
                CORE EXECUTION DELIVERABLES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {study.deliverables.map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-paper-200 text-xs font-mono text-ink-900"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-ink-950 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Drawer Bottom Bar: Next Project & Scoping CTA */}
        <div className="sticky bottom-0 bg-paper-100/95 backdrop-blur-md p-6 border-t border-paper-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onSelectStudy(nextStudy)}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-600 hover:text-ink-950 transition-colors"
          >
            <span>Next: {nextStudy.client}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenProjectModal();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-ink-950 text-paper-100 text-xs font-semibold hover:bg-ink-800 transition-colors flex items-center justify-center gap-2"
          >
            <span>Build a Similar Growth System</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

      </div>
    </div>
  );
};

const CASE_STUDIES = [
  {
    id: 'woomeout',
    number: '01',
    client: 'Woomeout',
    tagline: 'Growth · Community · Marketing',
    category: 'Growth Strategy',
    headline: 'Building momentum & organic customer acquisition for a modern social dating platform.',
    summary: 'Helping a Nigerian dating/social platform build awareness, community and user acquisition.',
    fullDescription:
      'Woomeout required rapid user acquisition in a crowded market without relying on burn-rate paid ad campaigns. Macnoms Media built a multi-stage community growth loop—pairing relatable culture content, campus-led activation blitzes, and interactive social games that spurred organic viral sign-ups.',
    metric: '5K+',
    metricLabel: 'sign-ups generated through campaign strategy',
    image: '/images/woomeout-rooftop.jpg',
    deliverables: [
      'Growth strategy',
      'Community management',
      'Campaign execution',
      'Viral short-form content',
      'User engagement funnels',
    ],
  },
  {
    id: 'warri-vendors',
    number: '02',
    client: 'Warri Vendors',
    tagline: 'Community · Social Growth · Events',
    category: 'Community',
    headline: 'Transforming online audience engagement into physical commerce & community experiences.',
    summary: 'Built and grew a digital community while supporting the transition from online engagement to physical community experiences.',
    fullDescription:
      'We architected an authentic digital ecosystem uniting local food, lifestyle, and retail artisans in Delta State. Beyond cultivating an 11K+ digital community, Macnoms bridged the gap into physical experiential pop-ups and vendor trade markets with high foot traffic.',
    metric: '11K+',
    metricLabel: 'community growth & verified attendees',
    image: '/images/warri-vendors.jpg',
    deliverables: [
      'Digital community building',
      'Event marketing strategy',
      'Vendor outreach & partner onboarding',
      'Physical event social coverage',
    ],
  },
  {
    id: 'client-campaign',
    number: '03',
    client: 'Client Campaign',
    tagline: 'Content · Digital Campaign',
    category: 'Campaigns',
    headline: 'Viral content systems engineered for authentic cultural distribution.',
    summary: 'High-impact organic digital campaign generating exponential reach through cultural resonance.',
    fullDescription:
      'Through sharp visual storytelling and sound-first short-form video formats, this digital campaign penetrated target consumer feeds with zero ad-spend dependency, driving massive inbound audience conversion.',
    metric: '12M+',
    metricLabel: 'organic views generated',
    image: '/images/case-campaign.jpg',
    deliverables: [
      'Content ideation & scripting',
      'Organic distribution tactics',
      'Video production & sound design',
      'Real-time engagement optimization',
    ],
  },
  {
    id: 'influencer-campaigns',
    number: '04',
    client: 'Influencer Campaigns',
    tagline: 'Influencer Campaign Management',
    category: 'Influencer',
    headline: 'High-ROI creator matchmaking executed through our 6-stage framework.',
    summary: 'Structured creator discovery, deal negotiation, creative direction, and campaign reporting.',
    fullDescription:
      'Instead of generic influencer product seeding, we manage end-to-end influencer partnerships that deliver measurable commercial outcomes. Our rigorous 6-stage framework protects client confidentiality while maximizing authentic audience influence.',
    metric: '6-Stage',
    metricLabel: 'Proven Creator Campaign Framework',
    image: '/images/case-influencer.jpg',
    framework: 'Strategy → Discovery → Matchmaking → Negotiation → Execution → Reporting',
    deliverables: [
      'Audience fraud & demographic audit',
      'Creative briefs & messaging alignment',
      'Contract negotiation & rights clearance',
      'Performance reporting & attribution',
    ],
  },
];

interface CaseStudiesProps {
  onOpenModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  const [activeStudy, setActiveStudy] = useState<any | null>(null);

  return (
    <section id="work" className="py-20 sm:py-32 bg-paper-100 border-b border-paper-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from macnoms.media */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-paper-300 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-ink-950 leading-[1.08]">
              Case Studies &amp;{' '}
              <span className="font-serif italic font-normal text-ink-700">
                Track Record.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-600 max-w-sm font-mono leading-relaxed">
            Every partnership is approached as a measurable growth laboratory. Here is how we turned audience curiosity into verifiable scale.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveStudy(study)}
              className="cursor-pointer group rounded-2xl border border-paper-300 bg-white overflow-hidden hover:border-ink-950 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/10] w-full bg-ink-950 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-ink-950/90 text-paper-100 font-medium backdrop-blur-md border border-white/10">
                      {study.client}
                    </span>
                  </div>

                  {/* Impact Stamp */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-paper-100">
                    <div className="bg-ink-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-gold-500/30 shadow-lg flex items-baseline gap-2.5">
                      <span className="text-2xl sm:text-3xl font-extrabold font-sans text-gold-400 tracking-tight leading-none">
                        {study.metric}
                      </span>
                      <span className="text-xs font-mono text-paper-200 font-medium">
                        {study.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
                    {study.tagline}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-ink-950 tracking-tight leading-snug group-hover:text-ink-700 transition-colors">
                    {study.summary}
                  </h3>

                  {study.framework && (
                    <div className="p-3 rounded-xl bg-paper-100 border border-paper-200 text-xs font-mono text-ink-800">
                      <span className="font-bold text-ink-950 block mb-0.5 uppercase tracking-wider text-[10px]">
                        The 6-Stage Execution Loop:
                      </span>
                      {study.framework}
                    </div>
                  )}

                  {/* What We Did Deliverables */}
                  <div className="pt-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-ink-800 mb-2 font-mono">
                      What we did:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {study.deliverables.map((d: string, dIdx: number) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-md bg-paper-100 border border-paper-200 text-[11px] text-ink-800 font-mono"
                        >
                          &bull; {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between border-t border-paper-200/80 text-xs font-semibold text-ink-900 group-hover:text-ink-950">
                <span>View Case Study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detailed Drawer */}
      <CaseStudyDrawer
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
        onSelectStudy={(s) => setActiveStudy(s)}
        onOpenProjectModal={onOpenModal}
        allStudies={CASE_STUDIES}
      />
    </section>
  );
};
