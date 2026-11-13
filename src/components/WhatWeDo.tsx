'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WhatWeDoProps {
  onOpenModal: (pkg?: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenModal }) => {
  return (
    <section id="what-we-do" className="py-20 sm:py-28 bg-[#F6F3EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center mb-6">
          <span className="bg-[#ECD7BF] text-[#7A3F2A] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-xs">
            WHAT WE DO
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-stencil text-[28px] min-[400px]:text-3xl sm:text-5xl md:text-6xl text-[#1E0C12] leading-[1.12] tracking-tight max-w-4xl mx-auto">
          Strategy first.{' '}
          <span className="font-sans italic font-normal text-[#B85D3D]">
            Execution where it matters.
          </span>
        </h2>

        {/* Bento Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
          {/* Left Column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Card 1: Growth Strategy (Large Dark Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onOpenModal('growth-strategy')}
              className="bg-[#200D13] text-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-xl border border-[#351922] cursor-pointer group"
            >
              <h3 className="font-stencil text-2xl sm:text-3xl text-white group-hover:text-[#E28D75] transition-colors">
                Growth Strategy
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                We find why prospects drop off, then build a 90-day roadmap to revenue.
              </p>

              {/* Sub-items with dividing lines */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="text-sm font-medium text-white/90">
                  Full-funnel brand audit
                </div>
                <div className="pt-4 border-t border-white/10 text-sm font-medium text-white/90">
                  Audience positioning matrix
                </div>
                <div className="pt-4 border-t border-white/10 text-sm font-medium text-white/90">
                  Growth experiments and KPIs
                </div>
              </div>
            </motion.div>

            {/* Card 2: Influencer Marketing (Dark Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onOpenModal('influencer-marketing')}
              className="bg-[#200D13] text-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-xl border border-[#351922] cursor-pointer group"
            >
              <h3 className="font-stencil text-xl sm:text-2xl text-white group-hover:text-[#E28D75] transition-colors">
                Influencer Marketing
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed font-normal">
                The right people, the campaign, the execution.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Card 3: Social & Content (Tan Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onOpenModal('social-content')}
              className="bg-[#E8D4BA] text-[#1E0C12] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-xl cursor-pointer group"
            >
              <h3 className="font-stencil text-xl sm:text-2xl text-[#1E0C12] group-hover:text-[#7A3F2A] transition-colors">
                Social & Content
              </h3>
              <p className="mt-3 text-sm text-[#1E0C12]/80 leading-relaxed font-normal">
                Content systems built around your goals.
              </p>
            </motion.div>

            {/* Card 4: Community (Rust Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onOpenModal('community')}
              className="bg-[#B85D3D] text-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-xl cursor-pointer group"
            >
              <h3 className="font-stencil text-xl sm:text-2xl text-white group-hover:text-[#F3E5D4] transition-colors">
                Community
              </h3>
              <p className="mt-3 text-sm text-white/90 leading-relaxed font-normal">
                Engagement, building and activation.
              </p>
            </motion.div>

            {/* Card 5: Campaigns & Projects (White Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onOpenModal('campaigns-projects')}
              className="bg-white text-[#1E0C12] border border-[#E5DFD5] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-sm cursor-pointer group"
            >
              <h3 className="font-stencil text-xl sm:text-2xl text-[#1E0C12] group-hover:text-[#B85D3D] transition-colors">
                Campaigns & Projects
              </h3>
              <p className="mt-3 text-sm text-[#524944] leading-relaxed font-normal">
                Launch ideas to real-world activations. Plus billboard and OOH media across prime city corridors.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};