'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CtaSectionProps {
  onOpenModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F6F3EB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#200D13] text-white rounded-[24px] sm:rounded-[32px] p-7 sm:p-12 md:p-16 text-center shadow-2xl border border-[#351922] relative overflow-hidden"
        >
          {/* Headline */}
          <h2 className="font-stencil text-[28px] min-[400px]:text-3xl sm:text-5xl md:text-6xl text-white leading-[1.12] tracking-tight">
            Ready to make{' '}
            <span className="font-sans italic font-normal text-[#E28D75]">
              your next move?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-lg text-white/70 max-w-md mx-auto leading-relaxed font-normal">
            Tell us what you’re building and where you’re stuck.
          </p>

          {/* Button */}
          <div className="mt-7 sm:mt-8 flex justify-center">
            <button
              onClick={onOpenModal}
              className="bg-[#E8D4BA] hover:bg-[#F2DFCA] text-[#200D13] font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-base transition-all duration-200 shadow-md hover:scale-105 active:scale-95 max-w-full break-all sm:break-normal"
            >
              hello@macnomsmedia.com
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};