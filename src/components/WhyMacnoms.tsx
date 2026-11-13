'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PROFILES = [
  {
    title: 'Startups & founders',
    desc: 'Community foundations that speed up acquisition.',
    bg: 'bg-[#200D13]',
    textColor: 'text-white',
    subColor: 'text-white/80',
    border: 'border-[#351922]',
  },
  {
    title: 'Lifestyle, beauty & fashion',
    desc: 'Turn one-off buyers into a vocal tribe.',
    bg: 'bg-[#B85D3D]',
    textColor: 'text-white',
    subColor: 'text-white/90',
    border: 'border-transparent',
  },
  {
    title: 'Events & experiences',
    desc: 'Digital excitement into packed venues.',
    bg: 'bg-[#E8D4BA]',
    textColor: 'text-[#1E0C12]',
    subColor: 'text-[#1E0C12]/80',
    border: 'border-transparent',
  },
  {
    title: 'Digital products & creators',
    desc: 'Frictionless onramps and retention loops.',
    bg: 'bg-[#200D13]',
    textColor: 'text-white',
    subColor: 'text-white/80',
    border: 'border-[#351922]',
  },
];

export const WhyMacnoms: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F6F3EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Headline */}
        <h2 className="font-stencil text-[28px] min-[400px]:text-3xl sm:text-5xl md:text-6xl text-[#1E0C12] leading-[1.12] tracking-tight max-w-4xl mx-auto">
          Built for brands{' '}
          <span className="font-sans italic font-normal text-[#B85D3D]">
            with somewhere to go.
          </span>
        </h2>

        {/* 4 Cards in a row */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {PROFILES.map((card, idx) => {
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`${card.bg} ${card.textColor} ${card.border} border rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 lg:p-8 shadow-xl flex flex-col justify-between min-h-[175px] sm:min-h-[210px] lg:min-h-[230px] transition-all`}
              >
                <h3 className="font-stencil text-xl sm:text-2xl leading-snug">
                  {card.title}
                </h3>
                <p className={`${card.subColor} text-sm leading-relaxed mt-4 font-normal`}>
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};