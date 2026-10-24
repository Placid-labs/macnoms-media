'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

const SERVICES = [
  { id: 'growth-strategy', name: 'Growth Strategy', tag: 'Audits & roadmaps' },
  { id: 'social-content', name: 'Social & Content', tag: 'Content systems' },
  { id: 'community', name: 'Community', tag: 'Audience activation' },
  { id: 'influencer-marketing', name: 'Influencer Marketing', tag: 'Creator matchmaking' },
  { id: 'campaigns-projects', name: 'Campaigns & Projects', tag: 'Launch & pop-ups' },
  { id: 'billboard-ads', name: 'Billboard & OOH Ads', tag: 'Outdoor & gantry media' },
  { id: 'custom', name: 'Custom Project / Partner', tag: 'Tailored scope' },
];

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  defaultPackage = 'growth-strategy',
}) => {
  const [selectedService, setSelectedService] = useState(defaultPackage);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultPackage) {
      setSelectedService(defaultPackage);
    }
  }, [defaultPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#121214', '#B99665', '#F5F3EC'],
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
        className="fixed inset-0 bg-ink-950/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-paper-100 rounded-3xl border border-paper-300 shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="bg-ink-950 text-paper-100 px-6 sm:px-8 py-5 flex items-center justify-between border-b border-ink-850">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-ink-900 border border-paper-400/30 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Macnoms Media"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase font-mono text-gold-400">
                MACNOMS MEDIA &bull; PROJECT INTAKE
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Start A Project
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-paper-200 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-ink-950 text-paper-100 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-ink-950">
              Project Brief Received
            </h4>
            <p className="text-xs sm:text-sm text-ink-700 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-ink-950">{name}</span>. We will review <span className="font-bold text-ink-950">{brand || 'your brand'}</span> and reach out within 24 hours to schedule our strategic kickoff call.
            </p>
            <div className="pt-4 border-t border-paper-300">
              <p className="text-xs text-ink-500 font-mono mb-4">
                Direct email:{' '}
                <a
                  href="mailto:hello@macnomsmedia.com"
                  className="font-bold text-ink-950 underline"
                >
                  hello@macnomsmedia.com
                </a>
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-ink-950 text-paper-100 text-xs font-mono uppercase tracking-wider hover:bg-ink-850 transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Service Selection */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-ink-500 mb-2">
                SELECT SERVICE / CAPABILITY
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map((s) => {
                  const isSelected = selectedService === s.id;
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`p-3 rounded-xl text-left border text-xs font-mono transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-ink-950 bg-ink-950 text-paper-100 shadow-sm'
                          : 'border-paper-300 bg-white text-ink-800 hover:border-ink-700'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{s.name}</div>
                        <div className={`text-[10px] ${isSelected ? 'text-gold-300' : 'text-ink-500'}`}>
                          {s.tag}
                        </div>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1 text-gold-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-ink-500 mb-1">
                  NAME *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tunde Adeyemi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-xs font-mono text-ink-950 focus:outline-hidden focus:border-ink-950"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-ink-500 mb-1">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tunde@brand.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-xs font-mono text-ink-950 focus:outline-hidden focus:border-ink-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-ink-500 mb-1">
                BRAND / SOCIAL / WEBSITE
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. @yourbrand / yourbrand.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-xs font-mono text-ink-950 focus:outline-hidden focus:border-ink-950"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-ink-500 mb-1">
                TELL US WHAT YOU’RE BUILDING &amp; WHAT YOU WANT TO ACHIEVE
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you're building, where you're stuck and what you want to achieve..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-xs font-mono text-ink-950 focus:outline-hidden focus:border-ink-950 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-ink-950 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
