'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, X, CheckCircle2, TrendingUp, Users, Eye, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  study: any | null;
  onClose: () => void;
  onOpenProjectModal: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onOpenProjectModal }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-sm" />
      <div className="relative w-full max-w-2xl bg-cream-100 rounded-3xl border border-gold-500/30 shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Banner */}
        <div className="bg-burgundy-900 text-cream-100 p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="text-[10px] font-mono tracking-widest uppercase text-gold-400 font-bold mb-2">
            {study.tagline}
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {study.client}: {study.headline}
          </h3>
          <div className="mt-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">
              {study.metric}
            </span>
            <span className="text-xs uppercase tracking-wider text-cream-100 font-medium">
              {study.metricLabel}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-burgundy-900 mb-2">
              The Strategic Challenge &amp; Solution
            </h4>
            <p className="text-sm text-burgundy-900/80 leading-relaxed">
              {study.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-burgundy-900 mb-3">
              Core Execution Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {study.deliverables.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-cream-300/70 text-xs font-medium text-burgundy-950"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-burgundy-800 hover:text-burgundy-950"
            >
              &larr; Back to Case Studies
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenProjectModal();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-burgundy-900 hover:bg-burgundy-800 text-cream-100 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Build a Similar Growth System &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CASE_STUDIES = [
  {
    id: 'woomeout',
    number: '01',
    client: 'WOOMEOUT',
    tagline: 'Growth · Community · Marketing',
    headline: 'Building momentum & organic customer acquisition for a modern social dating platform.',
    summary: 'Helping a Nigerian dating/social platform build awareness, community and user acquisition.',
    fullDescription:
      'Woomeout required rapid user acquisition in a crowded market without relying on burn-rate paid ad campaigns. Macnoms Media built a multi-stage community growth loop—pairing relatable culture content, campus-led activation blitzes, and interactive social games that spurred organic viral sign-ups.',
    metric: '5K+',
    metricLabel: 'sign-ups generated through campaign strategy',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
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
    client: 'WARRI VENDORS',
    tagline: 'Community · Social Growth · Events',
    headline: 'Transforming online audience engagement into physical commerce & community experiences.',
    summary: 'Built and grew a digital community while supporting the transition from online engagement to physical community experiences.',
    fullDescription:
      'We architected an authentic digital ecosystem uniting local food, lifestyle, and retail artisans in Delta State. Beyond cultivating an 11K+ digital community, Macnoms bridged the gap into physical experiential pop-ups and vendor trade markets with high foot traffic.',
    metric: '11K+',
    metricLabel: 'community growth & verified attendees',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
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
    client: 'CLIENT CAMPAIGN',
    tagline: 'Content · Digital Campaign',
    headline: 'Viral content systems engineered for authentic cultural distribution.',
    summary: 'High-impact organic digital campaign generating exponential reach through cultural resonance.',
    fullDescription:
      'Through sharp visual storytelling and sound-first short-form video formats, this digital campaign penetrated target consumer feeds with zero ad-spend dependency, driving massive inbound audience conversion.',
    metric: '12M+',
    metricLabel: 'organic views generated',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
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
    client: 'INFLUENCER CAMPAIGNS',
    tagline: 'Influencer Campaign Management',
    headline: 'High-ROI creator matchmaking executed through our 6-stage framework.',
    summary: 'Structured creator discovery, deal negotiation, creative direction, and campaign reporting.',
    fullDescription:
      'Instead of generic influencer product seeding, we manage end-to-end influencer partnerships that deliver measurable commercial outcomes. Our rigorous 6-stage framework protects client confidentiality while maximizing authentic audience influence.',
    metric: '6-STAGE',
    metricLabel: 'Proven Creator Campaign Framework',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
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
  const [activeModalStudy, setActiveModalStudy] = useState<any | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-cream-300 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-900/10 text-burgundy-900 text-xs font-semibold uppercase tracking-widest mb-3">
              <span>05 &bull; SELECTED WORK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-burgundy-950 leading-[1.1]">
              Case Studies &amp;{' '}
              <span className="italic font-normal font-serif text-burgundy-800">
                Track Record.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-burgundy-900/70 max-w-md">
            Every partnership is approached as a measurable growth laboratory. Here is how we turned audience curiosity into verifiable scale.
          </p>
        </div>

        {/* Case Studies 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl border border-cream-300 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full bg-burgundy-950 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-burgundy-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-burgundy-950 text-[10px] font-mono font-bold uppercase tracking-wider">
                      CASE STUDY {study.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-burgundy-900/90 text-gold-300 text-[10px] font-semibold uppercase tracking-wider border border-gold-500/30">
                      {study.client}
                    </span>
                  </div>

                  {/* Big Impact Metric Banner */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-baseline gap-2 bg-burgundy-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-400">
                        {study.metric}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-cream-200 font-medium">
                        {study.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-gold-600 font-semibold">
                    {study.tagline}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950 tracking-tight leading-snug">
                    {study.summary}
                  </h3>

                  {study.framework && (
                    <div className="p-3 rounded-xl bg-cream-100 border border-cream-300 text-xs font-mono text-burgundy-900">
                      <span className="font-bold text-gold-600 block mb-1 uppercase tracking-wider text-[10px]">
                        The 6-Stage Execution Loop:
                      </span>
                      {study.framework}
                    </div>
                  )}

                  {/* What We Did Checklist */}
                  <div className="pt-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-burgundy-850 mb-2">
                      What we did:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {study.deliverables.map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-md bg-cream-100 border border-cream-200 text-[11px] text-burgundy-900 font-medium"
                        >
                          &bull; {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(study)}
                  className="w-full py-3 rounded-full border border-burgundy-900/30 group-hover:border-burgundy-900 group-hover:bg-burgundy-900 group-hover:text-white text-burgundy-950 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
        onOpenProjectModal={onOpenModal}
      />
    </section>
  );
};
