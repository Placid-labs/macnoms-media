'use client';

import React from 'react';

const FUNNEL_STAGES = [
  {
    name: 'Attention',
    desc: 'Views that don’t pay overhead.',
    isHighlighted: false,
  },
  {
    name: 'Interest',
    desc: 'Curiosity about your value.',
    isHighlighted: false,
  },
  {
    name: 'Community',
    desc: 'A tribe that advocates for you.',
    isHighlighted: true,
  },
  {
    name: 'Action',
    desc: 'Sign-ups, bookings, sales.',
    isHighlighted: false,
  },
  {
    name: 'Growth',
    desc: 'Equity that compounds.',
    isHighlighted: false,
  },
];

export const TheProblem: React.FC = () => {
  return (
    <section id="doctrine" className="pt-14 sm:pt-20 pb-20 sm:pb-24 bg-[#F6F3EB] relative border-t border-[#E5DFD5]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Headline */}
        <h2 className="font-stencil text-[28px] min-[400px]:text-3xl sm:text-5xl md:text-6xl text-[#1E0C12] leading-[1.12] tracking-tight max-w-4xl mx-auto">
          You don’t have an attention <br className="hidden sm:inline" />
          problem.{' '}
          <span className="font-sans italic font-normal text-[#B85D3D]">
            You have a conversion problem.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#524944] max-w-2xl mx-auto leading-relaxed">
          Good products and beautiful content still don’t build a business. We connect content to community, community to action and action to growth.
        </p>

        {/* 5-Stage Conversion Funnel Container */}
        <div className="mt-10 sm:mt-16 bg-[#200D13] text-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl text-left border border-[#351922]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-5">
            {FUNNEL_STAGES.map((stage, idx) => {
              return (
                <div
                  key={stage.name}
                  className={`flex flex-col justify-between ${
                    idx !== FUNNEL_STAGES.length - 1
                      ? 'border-b border-white/10 pb-5 sm:border-b-0 sm:pb-0'
                      : ''
                  } ${
                    idx === FUNNEL_STAGES.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                  } ${idx !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-5' : ''}`}
                >
                  <div>
                    {/* Stage Name */}
                    <h3
                      className={`font-stencil text-xl sm:text-2xl mb-2 tracking-tight ${
                        stage.isHighlighted ? 'text-[#E28D75]' : 'text-white'
                      }`}
                    >
                      {stage.name}
                    </h3>
                  </div>

                  {/* Stage Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      stage.isHighlighted ? 'text-white/90 font-medium' : 'text-white/60'
                    }`}
                  >
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};