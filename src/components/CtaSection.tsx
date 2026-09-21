'use client';

import React from 'react';
import { ArrowRight, Mail, Instagram, Linkedin, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-28 sm:py-36 bg-burgundy-950 text-cream-100 relative overflow-hidden text-center">
      {/* Editorial Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-burgundy-850/50 via-gold-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-100/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>NEXT MOVE &bull; STRATEGIC INITIATION</span>
        </div>

        {/* Huge Cream Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream-100 leading-[1.06] max-w-4xl mx-auto">
          Ready to make your{' '}
          <span className="italic font-normal font-serif text-gold-300 block">
            next move?
          </span>
        </h2>

        {/* Lead Prompt */}
        <p className="text-base sm:text-xl text-cream-200/80 max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us what you’re building, where you’re stuck and what you want to achieve.
        </p>

        {/* Primary CTA Button */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onOpenModal}
            className="px-10 py-5 rounded-full bg-gold-500 hover:bg-gold-400 text-burgundy-950 font-bold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-3 shadow-2xl shadow-gold-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Contacts Footer Block */}
        <div className="pt-10 sm:pt-14 border-t border-burgundy-850 max-w-lg mx-auto space-y-3">
          <a
            href="mailto:hello@macnomsmedia.com"
            className="font-serif text-lg sm:text-xl font-medium text-cream-200 hover:text-gold-300 transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-gold-500" />
            <span>hello@macnomsmedia.com</span>
          </a>

          <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-widest text-gold-400 pt-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream-100 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <span className="text-burgundy-700">&bull;</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream-100 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
