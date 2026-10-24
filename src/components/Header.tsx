'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (pkg?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active section spy
    const sections = ['work', 'services', 'doctrine', 'about', 'method', 'journal'];
    const handleSpy = () => {
      const scrollY = window.scrollY + 160;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleSpy, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSpy);
    };
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#work', id: 'work' },
    { label: 'What We Do', href: '#services', id: 'services' },
    { label: 'The Shift', href: '#doctrine', id: 'doctrine' },
    { label: 'Why Us', href: '#about', id: 'about' },
    { label: 'How We Work', href: '#method', id: 'method' },
    { label: 'Journal', href: '#journal', id: 'journal' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 pt-3 sm:pt-4 px-3 sm:px-6">
      {/* Floating Island Navigation Capsule */}
      <div
        className={`pointer-events-auto max-w-5xl mx-auto transition-all duration-300 rounded-full border ${
          isScrolled
            ? 'bg-paper-100/90 backdrop-blur-xl border-ink-950/15 shadow-[0_12px_36px_-6px_rgba(18,18,20,0.12)] py-2 sm:py-2.5 px-3.5 sm:px-5'
            : 'bg-paper-100/75 backdrop-blur-md border-paper-300/80 shadow-[0_4px_20px_-4px_rgba(18,18,20,0.05)] py-2.5 sm:py-3 px-4 sm:px-6'
        } flex items-center justify-between`}
      >
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-ink-950/20 bg-ink-950 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Image
                src="/logo.png"
                alt="Macnoms Media Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-black text-sm sm:text-base tracking-tight text-ink-950 group-hover:text-ink-700 transition-colors">
                Macnoms Media
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse hidden xs:inline-block" />
            </div>
          </a>
        </div>

        {/* Center: Desktop Nav Links with Active Capsule Indicator (Title Case) */}
        <nav className="hidden lg:flex items-center gap-1 bg-paper-200/50 p-1 rounded-full border border-paper-300/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-ink-950 text-paper-100 shadow-xs'
                    : 'text-ink-700 hover:text-ink-950 hover:bg-white/70'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Primary Action (Title Case) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-paper-200/80 hover:bg-paper-300 text-ink-950 flex items-center justify-center transition-colors border border-paper-300 shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Curtain Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-3 sm:inset-x-6 top-18 bg-paper-100/98 backdrop-blur-2xl border border-ink-950/15 rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-paper-300 text-xs text-ink-600 font-medium">
            <span>Macnoms Media</span>
            <span className="text-ink-400 text-[11px] font-mono">Lagos &bull; Global</span>
          </div>

          {/* Editorial Nav Links (Title Case) */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-2xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-ink-950 text-paper-100 font-semibold'
                      : 'text-ink-950 hover:bg-paper-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg tracking-tight">{link.label}</span>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'opacity-40'}`} />
                </a>
              );
            })}
          </nav>

          {/* Quick Direct Inquiries & Button */}
          <div className="pt-2 border-t border-paper-300 space-y-3">

            <div className="flex items-center justify-between text-xs text-ink-500 pt-1 px-1">
              <span>hello@macnomsmedia.com</span>
              <span>Lagos / Global</span>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
