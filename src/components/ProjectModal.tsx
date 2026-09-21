'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, ArrowRight, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

const PACKAGES = [
  { id: 'audit', name: 'Clarity Audit', price: '₦50K' },
  { id: 'sprint', name: 'Growth Sprint', price: '₦100K' },
  { id: 'retainer', name: 'Growth & Community', price: '₦175K/mo' },
  { id: 'partner', name: 'Growth Partner', price: 'From ₦300K/mo' },
  { id: 'custom', name: 'Custom Project / Campaign', price: 'Tailored' },
];

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  defaultPackage = 'sprint',
}) => {
  const [selectedPkg, setSelectedPkg] = useState(defaultPackage);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3D0C14', '#C5A880', '#F4ECE1'],
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-burgundy-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-cream-100 rounded-3xl border border-gold-500/30 shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-burgundy-900 text-cream-100 px-6 sm:px-8 py-5 flex items-center justify-between border-b border-gold-500/20">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-burgundy-950 border border-gold-400/40 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Macnoms Media"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold text-gold-400">
                <Sparkles className="w-3 h-3" />
                <span>Project Inquiry</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                Let&apos;s Build Your Growth System
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-burgundy-100 text-burgundy-900 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-burgundy-950">
              Inquiry Received
            </h4>
            <p className="text-sm text-burgundy-800/80 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-burgundy-950">{name}</span>. We will review <span className="font-semibold text-burgundy-950">{brand || 'your brand'}</span> and reach out within 24 hours to schedule our strategic kickoff call.
            </p>
            <div className="pt-4 border-t border-cream-200">
              <p className="text-xs text-burgundy-800/60 mb-4">
                Prefer immediate correspondence? Direct email:{' '}
                <a
                  href="mailto:hello@macnomsmedia.com"
                  className="font-semibold text-burgundy-900 underline"
                >
                  hello@macnomsmedia.com
                </a>
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-burgundy-900 text-cream-100 text-xs font-semibold hover:bg-burgundy-800 transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Package Selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                Select Service / Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedPkg === pkg.id;
                  return (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => setSelectedPkg(pkg.id)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-burgundy-900 bg-burgundy-900 text-white shadow-md'
                          : 'border-cream-300 bg-white/70 text-burgundy-900 hover:border-gold-500'
                      }`}
                    >
                      <span className="font-semibold">{pkg.name}</span>
                      <span
                        className={`text-[11px] font-mono ${
                          isSelected ? 'text-gold-300' : 'text-gold-600 font-semibold'
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tola Adeleke"
                  className="w-full px-3.5 py-2.5 bg-white border border-cream-300 rounded-xl text-xs text-burgundy-950 focus:outline-none focus:border-burgundy-900 focus:ring-1 focus:ring-burgundy-900"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tola@brand.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-cream-300 rounded-xl text-xs text-burgundy-950 focus:outline-none focus:border-burgundy-900 focus:ring-1 focus:ring-burgundy-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                Brand / Website / Instagram Link
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. www.yourbrand.com or @yourbrand"
                className="w-full px-3.5 py-2.5 bg-white border border-cream-300 rounded-xl text-xs text-burgundy-950 focus:outline-none focus:border-burgundy-900 focus:ring-1 focus:ring-burgundy-900"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                What are you building &amp; where are you stuck?
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your audience, current roadblocks, and goals for the next 90 days..."
                className="w-full px-3.5 py-2.5 bg-white border border-cream-300 rounded-xl text-xs text-burgundy-950 focus:outline-none focus:border-burgundy-900 focus:ring-1 focus:ring-burgundy-900 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-burgundy-900 text-cream-100 hover:bg-burgundy-800 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-burgundy-950/20 transition-all group"
              >
                <span>Submit Strategic Brief</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-burgundy-800/60 mt-2.5">
                Zero spam. Direct review by Macnoms Media strategy leads.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
