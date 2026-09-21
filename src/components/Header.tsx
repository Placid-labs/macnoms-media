'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (pkg?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/90 backdrop-blur-md border-b border-cream-300/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Positioning */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-xs border border-gold-500/40 flex-shrink-0 bg-burgundy-950 transition-all duration-300 group-hover:scale-105 group-hover:border-gold-400 group-hover:shadow-md">
            <Image
              src="/logo.png"
              alt="Macnoms Media Logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-xl sm:text-2xl tracking-tighter text-burgundy-950 uppercase group-hover:text-burgundy-800 transition-colors">
                Macnoms Media
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-burgundy-800/70 font-medium">
              Growth &bull; Community &bull; Digital Strategy
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-burgundy-900/80">
          <a
            href="#problem"
            className="hover:text-burgundy-950 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            The Shift
          </a>
          <a
            href="#services"
            className="hover:text-burgundy-950 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            What We Do
          </a>
          <a
            href="#why"
            className="hover:text-burgundy-950 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Why Us
          </a>
          <a
            href="#work"
            className="hover:text-burgundy-950 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Selected Work
          </a>
          <a
            href="#packages"
            className="hover:text-burgundy-950 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Packages
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#work"
            className="px-4 py-2 text-xs font-semibold text-burgundy-900 hover:text-burgundy-950 transition-colors"
          >
            See Our Work
          </a>
          <button
            type="button"
            onClick={() => onOpenModal()}
            className="px-5 py-2.5 rounded-full bg-burgundy-900 text-cream-100 hover:bg-burgundy-800 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-burgundy-950 hover:text-burgundy-800"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-b border-cream-300 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 pb-3 border-b border-cream-200">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-gold-500/40 bg-burgundy-950 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Macnoms Media"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-serif font-black text-lg text-burgundy-950 tracking-tight uppercase">
                Macnoms Media
              </div>
              <div className="text-[9px] uppercase tracking-widest text-burgundy-800/70 font-medium">
                Growth • Community • Digital Strategy
              </div>
            </div>
          </div>
          <nav className="flex flex-col space-y-3 text-sm font-semibold uppercase tracking-wider text-burgundy-950">
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-cream-200"
            >
              The Shift
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-cream-200"
            >
              What We Do
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-cream-200"
            >
              Why Us
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-cream-200"
            >
              Selected Work
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-cream-200"
            >
              Packages
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-burgundy-900/30 text-xs font-semibold uppercase text-burgundy-950"
            >
              See Our Work
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-full bg-burgundy-900 text-cream-100 text-xs font-semibold uppercase tracking-wider"
            >
              Work With Us &rarr;
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
