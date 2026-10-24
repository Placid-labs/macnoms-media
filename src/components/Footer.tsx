'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-950 text-paper-100 border-t border-ink-850 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-ink-850">
          
          {/* Studio Profile from macnoms.media */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-paper-400/30 bg-ink-900 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Macnoms Media"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                MACNOMS MEDIA
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-gold-400 font-mono">
              Growth &bull; Community &bull; Digital Strategy
            </p>

            <p className="text-xs text-ink-300 max-w-sm leading-relaxed">
              We help ambitious brands turn attention into community, customers and long-term brand equity.
            </p>

            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-500 pt-1">
              Editorial Growth Consultancy &bull; Lagos / Global
            </div>
          </div>

          {/* Directory Navigation */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs tracking-wider text-ink-400">
            <div className="text-[10px] text-ink-500 font-bold tracking-widest pb-1 border-b border-ink-850">
              NAVIGATION
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a href="#work" className="hover:text-paper-100 transition-colors">
                Selected Work
              </a>
              <a href="#services" className="hover:text-paper-100 transition-colors">
                What We Do
              </a>
              <a href="#doctrine" className="hover:text-paper-100 transition-colors">
                The Shift
              </a>
              <a href="#about" className="hover:text-paper-100 transition-colors">
                Why Us
              </a>
              <a href="#method" className="hover:text-paper-100 transition-colors">
                How We Work
              </a>
              <a href="#journal" className="hover:text-paper-100 transition-colors">
                Journal
              </a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-[10px] text-ink-500 font-bold uppercase tracking-widest pb-1 border-b border-ink-850">
              CONNECT
            </div>
            <a
              href="mailto:hello@macnomsmedia.com"
              className="block text-paper-200 hover:text-gold-300 transition-colors"
            >
              hello@macnomsmedia.com
            </a>
            <div className="flex items-center gap-4 text-ink-400 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper-100 transition-colors flex items-center gap-1 text-[11px] uppercase tracking-wider"
              >
                <Instagram className="w-3.5 h-3.5 text-gold-500" />
                <span>Instagram</span>
              </a>
              <span>&bull;</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper-100 transition-colors flex items-center gap-1 text-[11px] uppercase tracking-wider"
              >
                <Linkedin className="w-3.5 h-3.5 text-gold-500" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="text-gold-400 hover:text-paper-100 transition-colors inline-flex items-center gap-1 text-[10px] uppercase tracking-widest"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Monumental Wordmark (Vantra Studio Colophon) */}
        <div className="py-12 sm:py-16 border-b border-ink-850 overflow-hidden text-center select-none">
          <div className="font-serif font-black text-4xl sm:text-7xl md:text-8xl lg:text-[108px] tracking-tighter uppercase text-paper-100/90 leading-none">
            MACNOMS MEDIA
          </div>
        </div>

        {/* Legal Colophon from macnoms.media */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <div>
            &copy; 2026 Macnoms Media. All rights reserved. &bull;{' '}
            <span>
              Built by{' '}
              <a
                href="https://placidlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 font-medium transition-colors hover:underline underline-offset-2"
              >
                Placid Labs
              </a>
            </span>
          </div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-ink-500">
            Editorial Growth Consultancy &bull; Lagos / Global
          </div>
        </div>

      </div>
    </footer>
  );
};
