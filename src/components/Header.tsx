'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenModal: (pkg?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const marqueeItems = [
    { text: 'FREE GROWTH AUDIT ↗', action: () => onOpenModal('growth-strategy'), isLink: true },
    { text: '12M+ ORGANIC VIEWS' },
    { text: '11K+ COMMUNITY' },
    { text: '5K+ SIGN-UPS' },
  ];

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How We Work', href: '#how-we-work' },
  ];

  return (
    <>
      {/* Top Continuous Ticker Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#18090E] text-white text-[10px] sm:text-[11px] font-semibold tracking-wider py-2 overflow-hidden border-b border-[#2C131B] select-none">
        <div className="flex w-max animate-marquee space-x-6 sm:space-x-8 items-center">
          {[...Array(6)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center space-x-6 sm:space-x-8 shrink-0">
              {marqueeItems.map((item, idx) => (
                <span
                  key={`${loopIdx}-${idx}`}
                  onClick={item.action}
                  className={`flex items-center gap-1.5 transition-colors uppercase ${
                    item.isLink
                      ? 'cursor-pointer hover:text-[#E28D75] underline underline-offset-4 decoration-[#B85D3D]'
                      : 'text-white/90'
                  }`}
                >
                  {item.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Island Navigation Pill */}
      <header className="fixed top-10 sm:top-12 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto max-w-4xl mx-auto rounded-full bg-white/95 backdrop-blur-md transition-all duration-300 border border-[#E8E1D5] ${
            isScrolled
              ? 'py-2 px-3.5 sm:px-5 shadow-[0_12px_32px_rgba(24,9,14,0.12)]'
              : 'py-2 sm:py-2.5 px-3.5 sm:px-6 shadow-[0_4px_24px_rgba(24,9,14,0.06)]'
          } flex items-center justify-between gap-2`}
        >
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group min-w-0 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#18090E] flex items-center justify-center text-white shrink-0 shadow-xs overflow-hidden">
              <Image
                src="/logo.png"
                alt="Macnoms Media Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="font-stencil text-sm min-[400px]:text-base sm:text-lg tracking-tight text-[#18090E] group-hover:text-[#B85D3D] transition-colors whitespace-nowrap">
              Macnoms Media
            </span>
          </a>

          {/* Desktop / Tablet Nav Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7 text-xs lg:text-sm font-semibold text-[#18090E]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B85D3D] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => onOpenModal('growth-strategy')}
              className="bg-[#18090E] hover:bg-[#B85D3D] text-white text-[11px] min-[400px]:text-xs sm:text-sm font-bold px-3 min-[400px]:px-4 sm:px-5 py-1.5 min-[400px]:py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              Start a project
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-full text-[#18090E] hover:bg-black/5 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 top-10 bg-black/20 backdrop-blur-[1px] md:hidden pointer-events-auto -z-10"
              />
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto mt-2.5 max-w-sm mx-auto bg-white rounded-3xl border border-[#E8E1D5] shadow-2xl p-4 sm:p-5 flex flex-col gap-1.5 md:hidden"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-2xl font-semibold text-sm text-[#18090E] hover:bg-[#F6F3EB] hover:text-[#B85D3D] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 mt-1 border-t border-[#E8E1D5]">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal('growth-strategy');
                    }}
                    className="w-full bg-[#18090E] hover:bg-[#B85D3D] text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-wider transition-colors"
                  >
                    Start a project
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};