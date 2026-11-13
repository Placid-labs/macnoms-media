'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  lead: string;
  body: string;
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'discover',
    title: 'Discover',
    lead: 'We understand your brand, audience, goals and current challenges.',
    body: 'An in-depth look at your funnel analytics, customer sentiment, product friction points and competitor blind spots.',
  },
  {
    id: 'strategise',
    title: 'Strategise',
    lead: 'We identify opportunities and create a focused growth plan.',
    body: 'No 80-page decks that gather dust. You get a distilled roadmap with clear milestones and immediate tests.',
  },
  {
    id: 'execute',
    title: 'Execute',
    lead: 'We turn strategy into content, campaigns, community and action.',
    body: 'Hands-on creative direction, content production, creator negotiations and community activation rollouts.',
  },
  {
    id: 'optimise',
    title: 'Optimise',
    lead: 'We measure what happened, learn and improve.',
    body: 'Continuous feedback loops, conversion attribution and cohort retention tracking, doubling down on what drives revenue.',
  },
];

export const HowWeWork: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>('discover');

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section id="how-we-work" className="py-20 sm:py-28 bg-[#F6F3EB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center mb-6">
          <span className="bg-[#ECD7BF] text-[#7A3F2A] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-xs">
            HOW WE WORK
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-stencil text-[28px] min-[400px]:text-3xl sm:text-5xl md:text-6xl text-[#1E0C12] leading-[1.12] tracking-tight max-w-2xl mx-auto">
          No unnecessary{' '}
          <span className="font-sans italic font-normal text-[#B85D3D]">
            complexity.
          </span>
        </h2>

        {/* Accordion Container */}
        <div className="mt-10 sm:mt-16 bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 border border-[#E5DFD5] shadow-sm text-left divide-y divide-[#EFEAE2]">
          {ACCORDION_ITEMS.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div key={item.id} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between gap-3 text-left group focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-stencil text-xl sm:text-3xl text-[#1E0C12] group-hover:text-[#B85D3D] transition-colors">
                    {item.title}
                  </span>

                  {/* Circular Button */}
                  <span
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-[#18090E] text-white'
                        : 'bg-[#F6F3EB] text-[#1E0C12] group-hover:bg-[#E8D4BA]'
                    }`}
                  >
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 sm:pt-4 pr-2 sm:pr-12">
                        <p className="font-bold text-sm sm:text-base text-[#1E0C12] leading-snug">
                          {item.lead}
                        </p>
                        <p className="mt-2 text-sm text-[#524944] leading-relaxed font-normal">
                          {item.body}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};