'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Check, ArrowRight } from 'lucide-react';
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
  { id: 'custom', name: 'Custom Growth Plan', tag: 'Tailored scope' },
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
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#200D13', '#B85D3D', '#E8D4BA'],
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setBrand('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#F6F3EB] rounded-[24px] sm:rounded-[32px] border border-[#E5DFD5] shadow-2xl overflow-hidden z-10 my-4 sm:my-8 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#200D13] text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-[#351922] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-black flex-shrink-0 border border-white/20">
              <Image
                src="/logo.png"
                alt="Macnoms Media"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase font-mono text-[#E28D75]">
                MACNOMS MEDIA &bull; INITIATION
              </div>
              <h3 className="font-stencil text-lg sm:text-xl text-white">
                Start A Project
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#B85D3D] text-white mx-auto flex items-center justify-center shadow-lg">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-stencil text-2xl sm:text-3xl text-[#1E0C12]">
                Request Received
              </h4>
              <p className="text-sm text-[#524944] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out, {name}. We’ll review your brand requirements and reply within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="bg-[#200D13] hover:bg-[#B85D3D] text-white text-xs font-bold px-7 py-3 rounded-full transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E0C12] mb-2 font-mono">
                  Select Focus Area
                </label>
                <div className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-2">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs ${
                        selectedService === srv.id
                          ? 'border-[#200D13] bg-[#200D13] text-white shadow-xs'
                          : 'border-[#DDD3C4] bg-white text-[#1E0C12] hover:border-[#1E0C12]'
                      }`}
                    >
                      <div className="font-bold truncate">{srv.name}</div>
                      <div
                        className={`text-[10px] truncate ${
                          selectedService === srv.id ? 'text-[#E8D4BA]' : 'text-[#524944]'
                        }`}
                      >
                        {srv.tag}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E0C12] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tunde Adebayo"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDD3C4] bg-white text-sm text-[#1E0C12] focus:outline-hidden focus:border-[#200D13]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E0C12] mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDD3C4] bg-white text-sm text-[#1E0C12] focus:outline-hidden focus:border-[#200D13]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E0C12] mb-1.5">
                  Brand or Company Name
                </label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="e.g. Acme Lifestyle Co."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD3C4] bg-white text-sm text-[#1E0C12] focus:outline-hidden focus:border-[#200D13]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E0C12] mb-1.5">
                  Tell us what you’re building & where you’re stuck
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your current traction, objectives or questions..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD3C4] bg-white text-sm text-[#1E0C12] focus:outline-hidden focus:border-[#200D13] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#200D13] hover:bg-[#B85D3D] text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};