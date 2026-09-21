'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, TrendingUp, Users, Award, Play } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background Subtle Editorial Grain Texture & Glow */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-60" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-burgundy-100/40 via-gold-300/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow & Issue Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-cream-300/80 pb-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-burgundy-900/5 border border-gold-500/30 text-burgundy-900 text-xs font-semibold uppercase tracking-widest">
            <div className="w-5 h-5 rounded-md overflow-hidden bg-burgundy-950 flex-shrink-0 border border-gold-500/40">
              <Image
                src="/logo.png"
                alt="Macnoms Media"
                width={20}
                height={20}
                className="w-full h-full object-cover"
              />
            </div>
            <span>MACNOMS MEDIA &bull; STUDIO DIRECTORY</span>
          </div>
          <div className="text-[11px] font-mono tracking-wider uppercase text-burgundy-800/60 hidden sm:block">
            VOL. 01 &bull; Q1 2026 EDITION &bull; NIGERIA / GLOBAL
          </div>
        </div>

        {/* Hero Grid: Left Typography + Right Editorial Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Huge Headline & Core Positioning */}
          <div className="lg:col-span-7 space-y-7">
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-burgundy-950 leading-[1.08]">
              Your brand deserves{' '}
              <span className="italic font-normal font-serif text-burgundy-800">
                more than just
              </span>{' '}
              attention.
            </h1>

            <p className="text-base sm:text-xl text-burgundy-900/80 leading-relaxed font-normal max-w-2xl">
              We build growth systems that turn attention into community, customers and long-term brand value.
            </p>

            {/* Small Discipline Line */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-burgundy-850 border-l-2 border-gold-500 pl-3.5 py-0.5">
                Growth Strategy &bull; Social &bull; Community &bull; Influencer Marketing &bull; Digital Campaigns
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenModal}
                className="px-8 py-4 rounded-full bg-burgundy-900 hover:bg-burgundy-850 text-cream-100 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-burgundy-950/20 transition-all hover:translate-y-[-2px]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#work"
                className="px-7 py-4 rounded-full border border-burgundy-900/30 hover:border-burgundy-900 hover:bg-burgundy-900/5 text-burgundy-950 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                SEE OUR WORK &rarr;
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-cream-300/80 text-burgundy-950">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold">12M+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-burgundy-800/70 mt-0.5">
                  Organic Views
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold">11K+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-burgundy-800/70 mt-0.5">
                  Community Cohorts
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold">5K+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-burgundy-800/70 mt-0.5">
                  Direct Sign-ups
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Magazine Cover Collage */}
          <div className="lg:col-span-5 relative">
            {/* Outer Magazine Frame */}
            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-cream-300/80 rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Magazine Masthead Ribbon */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-cream-200 mb-3 text-[10px] font-mono uppercase tracking-widest text-burgundy-800/70">
                <span>MACNOMS ARCHIVE &bull; NO. 04</span>
                <span className="text-gold-600 font-bold">EXCLUSIVE STRATEGY</span>
              </div>

              {/* Collage Grid */}
              <div className="grid grid-cols-12 gap-2.5">
                
                {/* Main Hero Shot: Campaign Direction */}
                <div className="col-span-12 relative rounded-2xl overflow-hidden aspect-[4/3] bg-burgundy-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                    alt="Creative Direction & Growth Strategy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-gold-500 text-burgundy-950 font-bold text-[9px] uppercase tracking-wider mb-1">
                        Campaign Direction
                      </span>
                      <h4 className="text-white font-serif text-base sm:text-lg font-bold">
                        Turning Cult Culture Into Revenue
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Sub Image 1: Community Activation */}
                <div className="col-span-6 relative rounded-xl overflow-hidden aspect-square bg-cream-200">
                  <img
                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80"
                    alt="Community Gathering"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white tracking-wide">
                    Community Activation &bull; 11K+
                  </span>
                </div>

                {/* Sub Image 2: Creators & Digital Production */}
                <div className="col-span-6 relative rounded-xl overflow-hidden aspect-square bg-cream-200">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                    alt="Influencer & Creator Direction"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white tracking-wide">
                    Creator Matchmaking &bull; 12M+
                  </span>
                </div>
              </div>

              {/* Floating Gold Seal Stamp */}
              <div className="absolute -bottom-5 -right-4 bg-burgundy-900 text-cream-100 p-3.5 rounded-2xl shadow-xl border-2 border-gold-400 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-burgundy-950 border border-gold-400/50 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Macnoms Media Seal"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-gold-300 font-semibold font-mono">
                    VERIFIED GROWTH
                  </div>
                  <div className="text-xs font-serif font-bold text-white">
                    Built for Conversion
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Frame Shadow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-500/10 to-burgundy-900/10 rounded-3xl -z-10 blur-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
