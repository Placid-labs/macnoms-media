'use client';

import React from 'react';
import { ArrowUpRight, Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 sm:py-36 bg-ink-950 text-paper-100 relative overflow-hidden">
      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow from macnoms.media */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-ink-800 bg-ink-900 text-gold-300 text-xs font-mono">
          <span>Next Move &bull; Strategic Initiation</span>
        </div>

        {/* Huge Headline from macnoms.media */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-paper-100 leading-[1.04] max-w-4xl mx-auto">
          Ready to make your{' '}
          <span className="font-serif italic font-normal text-gold-300 block sm:inline">
            next move?
          </span>
        </h2>

        {/* Lead Prompt from macnoms.media */}
        <p className="text-base sm:text-xl text-paper-200/80 max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us what you’re building, where you’re stuck and what you want to achieve.
        </p>

        {/* Primary CTA Button */}
        <div className="pt-4 flex justify-center">
          
        </div>

        {/* Direct Contacts Block from macnoms.media */}
        <div className="pt-12 border-t border-ink-850 max-w-lg mx-auto space-y-3">
          <a
            href="mailto:hello@macnomsmedia.com"
            className="text-sm sm:text-base text-paper-200 hover:text-gold-300 transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span>hello@macnomsmedia.com</span>
          </a>

          <div className="flex items-center justify-center gap-6 text-xs text-gold-400 pt-2 font-medium">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper-100 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <span className="text-ink-700">&bull;</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper-100 transition-colors flex items-center gap-1.5"
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
