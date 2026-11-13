'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TheProblem } from '@/components/TheProblem';
import { MetricsSection } from '@/components/MetricsSection';
import { WhatWeDo } from '@/components/WhatWeDo';
import { CaseStudies } from '@/components/CaseStudies';
import { WhyMacnoms } from '@/components/WhyMacnoms';
import { HowWeWork } from '@/components/HowWeWork';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { ProjectModal } from '@/components/ProjectModal';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('growth-strategy');

  const handleOpenModal = (discipline: string = 'growth-strategy') => {
    setSelectedDiscipline(discipline);
    setIsModalOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F6F3EB] text-[#1E0C12] flex flex-col font-sans selection:bg-[#200D13] selection:text-[#F6F3EB]">
        {/* Continuous Ticker & Floating Navbar */}
        <Header onOpenModal={handleOpenModal} />

        <main className="flex-1">
          {/* Hero Section with Convex Arch Fan of Cards */}
          <Hero onOpenModal={() => handleOpenModal('growth-strategy')} />

          {/* The Shift / 5-Stage Conversion Funnel */}
          <TheProblem />

          {/* Impact / Real Numbers Counter */}
          <MetricsSection />

          {/* What We Do / Bento Service Matrix */}
          <WhatWeDo onOpenModal={handleOpenModal} />

          {/* Case Studies / 2x2 Grid Archive */}
          <CaseStudies onOpenModal={handleOpenModal} />

          {/* Why Us / Built for brands with somewhere to go */}
          <WhyMacnoms />

          {/* How We Work / Interactive Accordion */}
          <HowWeWork />

          {/* Call to Action Banner */}
          <CtaSection onOpenModal={() => handleOpenModal('growth-strategy')} />
        </main>

        {/* Minimal Footer */}
        <Footer />

        {/* Project Inquiry Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultPackage={selectedDiscipline}
        />
      </div>
    </SmoothScroll>
  );
}