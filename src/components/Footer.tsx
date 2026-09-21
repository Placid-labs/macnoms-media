'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-burgundy-950 text-cream-100 border-t border-burgundy-900/80 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-burgundy-900/60">
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md border border-gold-400/40 flex-shrink-0 bg-burgundy-900">
              <Image
                src="/logo.png"
                alt="Macnoms Media Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                  MACNOMS MEDIA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              </div>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-mono mt-1">
                Growth &bull; Community &bull; Digital Strategy
              </p>
              <p className="text-xs text-cream-200/60 mt-2 max-w-sm">
                We help ambitious brands turn attention into community, customers and long-term brand equity.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-cream-200">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4 text-gold-500" />
              <span>Instagram</span>
            </a>
            <span className="text-burgundy-800">&bull;</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-gold-500" />
              <span>LinkedIn</span>
            </a>
            <span className="text-burgundy-800">&bull;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-gold-300 transition-colors flex items-center gap-1 text-gold-400 font-mono"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/50">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center sm:text-left">
            <span>&copy; 2026 Macnoms Media. All rights reserved.</span>
            <span className="hidden sm:inline text-burgundy-700">&bull;</span>
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
          <div className="text-[11px] font-mono uppercase tracking-wider text-cream-200/40">
            Editorial Growth Consultancy &bull; Lagos / Global
          </div>
        </div>

      </div>
    </footer>
  );
};
