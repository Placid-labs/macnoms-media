'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-paper-100">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Real Authentic Headline from macnoms.media */}
        <div className="max-w-5xl mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-ink-950 leading-[1.04]">
            Your brand deserves{' '}
            <span className="font-serif italic font-normal text-ink-700">
              more than just
            </span>{' '}
            attention.
          </h1>
        </div>

        {/* Studio Brief & Action */}
        <div className="max-w-4xl pb-14 border-b border-paper-300">
          <div className="space-y-6">
            <p className="text-xl sm:text-3xl text-ink-800 leading-relaxed font-normal">
              We build growth systems that turn attention into community, customers and long-term brand value.
            </p>

            {/* Discipline Tagline from macnoms.media */}
            <div>
              <p className="text-xs sm:text-sm font-mono font-medium text-ink-700 border-l-2 border-ink-950 pl-4 py-1">
                Growth Strategy &bull; Social &bull; Community &bull; Influencer Marketing &bull; Billboard Ads &bull; Digital Campaigns
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              
              <a
                href="#work"
                className="w-full sm:w-auto min-w-[180px] px-8 py-4 rounded-full border border-paper-300 hover:border-ink-950 text-ink-900 text-xs font-semibold flex items-center justify-center gap-2 transition-all bg-white/60 whitespace-nowrap shrink-0"
              >
                <span>See Our Work</span>
                <ArrowDown className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Curated 3-Column Editorial Visual Showcase */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            
            {/* Visual 01: Campaign Direction */}
            <div className="group relative rounded-2xl overflow-hidden border border-paper-300 bg-ink-950 aspect-[4/5] shadow-xs hover:border-ink-950 transition-all duration-500">
              <img
                src="/images/hero-campaign.jpg"
                alt="Campaign Direction"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-paper-100">
                <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-mono border border-white/10 tracking-wider">
                  Campaign Direction
                </span>
                <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-paper-100 space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-gold-400">
                  Brand Architecture
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif leading-snug">
                  Turning Cult Culture Into Revenue
                </h3>
              </div>
            </div>

            {/* Visual 02: Warri Vendors */}
            <div className="group relative rounded-2xl overflow-hidden border border-paper-300 bg-ink-950 aspect-[4/5] shadow-xs hover:border-ink-950 transition-all duration-500">
              <img
                src="/images/warri-vendors.jpg"
                alt="Warri Vendors Community"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-paper-100">
                <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-mono border border-white/10 tracking-wider">
                  Community Ecosystem
                </span>
                <span className="px-2.5 py-1 rounded-full bg-ink-950/80 backdrop-blur-md text-xs font-mono font-bold text-gold-400 border border-gold-500/30 shadow-xs">
                  11K+
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-paper-100 space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-gold-400">
                  Warri Vendors
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif leading-snug">
                  Offline Activation &amp; Trade Market
                </h3>
              </div>
            </div>

            {/* Visual 03: Creator Matchmaking */}
            <div className="group relative rounded-2xl overflow-hidden border border-paper-300 bg-ink-950 aspect-[4/5] shadow-xs hover:border-ink-950 transition-all duration-500">
              <img
                src="/images/hero-creator.jpg"
                alt="Creator Matchmaking"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-paper-100">
                <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-mono border border-white/10 tracking-wider">
                  Creator Framework
                </span>
                <span className="px-2.5 py-1 rounded-full bg-ink-950/80 backdrop-blur-md text-xs font-mono font-bold text-gold-400 border border-gold-500/30 shadow-xs">
                  12M+
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-paper-100 space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-gold-400">
                  Influencer Engine
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif leading-snug">
                  High-Trust Creator Matchmaking
                </h3>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Capabilities Ticker */}
      <div className="mt-14 py-3.5 border-y border-paper-300 bg-white/50 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee text-[11px] font-mono tracking-wider text-ink-800 font-semibold">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6">Growth Strategy</span>
              <span className="text-ink-400">&bull;</span>
              <span className="mx-6">Social &amp; Content</span>
              <span className="text-ink-400">&bull;</span>
              <span className="mx-6">Community Building</span>
              <span className="text-ink-400">&bull;</span>
              <span className="mx-6">Influencer Marketing</span>
              <span className="text-ink-400">&bull;</span>
              <span className="mx-6">Billboard &amp; OOH Ads</span>
              <span className="text-ink-400">&bull;</span>
              <span className="mx-6">Digital Campaigns</span>
              <span className="text-ink-400">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
