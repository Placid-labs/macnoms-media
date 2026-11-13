'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RollingDigitProps {
  digits: string[];
  delay?: number;
  duration?: number;
  active: boolean;
}

const RollingDigit: React.FC<RollingDigitProps> = ({
  digits,
  delay = 0,
  duration = 1.8,
  active,
}) => {
  const count = digits.length;
  const targetY = `${-((count - 1) / count) * 100}%`;

  return (
    <span className="relative inline-block overflow-hidden h-[1.12em] leading-[1.12] align-bottom">
      {/* Spacer matches exact final glyph width */}
      <span className="invisible block select-none" aria-hidden="true">
        {digits[count - 1]}
      </span>
      <motion.span
        initial={{ y: '0%' }}
        animate={active ? { y: targetY } : { y: '0%' }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-0 left-0 right-0 flex flex-col items-center will-change-transform"
      >
        {digits.map((digit, idx) => (
          <span
            key={idx}
            className="h-[1.12em] leading-[1.12] flex items-center justify-center shrink-0"
          >
            {digit}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

interface OdometerNumberProps {
  columns: string[][];
  suffix: string;
  baseDelay?: number;
  active: boolean;
}

const OdometerNumber: React.FC<OdometerNumberProps> = ({
  columns,
  suffix,
  baseDelay = 0,
  active,
}) => {
  return (
    <div className="inline-flex items-baseline font-stencil text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight select-none">
      {columns.map((digits, colIdx) => (
        <RollingDigit
          key={colIdx}
          digits={digits}
          delay={baseDelay + colIdx * 0.12}
          duration={1.5 + colIdx * 0.25}
          active={active}
        />
      ))}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{
          duration: 0.5,
          delay: baseDelay + 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        {suffix}
      </motion.span>
    </div>
  );
};

export const MetricsSection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 sm:py-24 bg-[#F6F3EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center mb-6">
          <span className="bg-[#ECD7BF] text-[#7A3F2A] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-xs">
            IMPACT
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-stencil text-[28px] min-[400px]:text-3xl sm:text-5xl md:text-6xl text-[#1E0C12] leading-[1.12] tracking-tight">
          Real numbers,{' '}
          <span className="font-sans italic font-normal text-[#B85D3D]">
            not vanity metrics.
          </span>
        </h2>

        {/* 3 Metric Cards */}
        <div
          ref={gridRef}
          className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 text-left"
        >
          {/* Card 1: Organic views (Rust) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.2 } }}
            className="bg-[#B85D3D] text-white rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between min-h-[190px] sm:min-h-[220px] md:min-h-[240px]"
          >
            <OdometerNumber
              columns={[
                ['0', '1'],
                ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2'],
              ]}
              suffix="M+"
              baseDelay={0.1}
              active={isInView}
            />
            <div className="mt-6">
              <h3 className="font-bold text-lg sm:text-xl text-white">
                Organic views
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Zero paid ad spend.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Community members (Tan) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.2 } }}
            className="bg-[#E8D4BA] text-[#1E0C12] rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between min-h-[190px] sm:min-h-[220px] md:min-h-[240px]"
          >
            <OdometerNumber
              columns={[
                ['0', '1'],
                ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1'],
              ]}
              suffix="K+"
              baseDelay={0.25}
              active={isInView}
            />
            <div className="mt-6">
              <h3 className="font-bold text-lg sm:text-xl text-[#1E0C12]">
                Community members
              </h3>
              <p className="text-[#1E0C12]/80 text-sm mt-1">
                Moved from online to live events.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Direct sign-ups (Dark Espresso) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.2 } }}
            className="bg-[#200D13] text-white rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between min-h-[190px] sm:min-h-[220px] md:min-h-[240px] border border-[#351922]"
          >
            <OdometerNumber
              columns={[['0', '1', '2', '3', '4', '5']]}
              suffix="K+"
              baseDelay={0.4}
              active={isInView}
            />
            <div className="mt-6">
              <h3 className="font-bold text-lg sm:text-xl text-white">
                Direct sign-ups
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Driven by multi-stage viral loops.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};