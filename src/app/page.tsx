'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MetricsSection } from '@/components/MetricsSection';
import { TheProblem } from '@/components/TheProblem';
import { WhatWeDo } from '@/components/WhatWeDo';
import { CaseStudies } from '@/components/CaseStudies';
import { WhyMacnoms } from '@/components/WhyMacnoms';
import { HowWeWork } from '@/components/HowWeWork';
import { JournalSection } from '@/components/JournalSection';
import { WhoWeWorkWith } from '@/components/WhoWeWorkWith';
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
      <div className="relative min-h-screen bg-paper-100 text-ink-950 flex flex-col font-sans selection:bg-ink-950 selection:text-paper-100">
        {/* Architectural Sticky Header */}
        <Header onOpenModal={handleOpenModal} />

        <main className="flex-1">
          {/* Hero Showcase */}
          <Hero onOpenModal={() => handleOpenModal('growth-strategy')} />

          {/* Dedicated Metrics & Track Record Section */}
          <MetricsSection />

          {/* Diagnostic Doctrine & Conversion Shift */}
          <TheProblem />

          {/* 03 — Disciplines & Capabilities Matrix */}
          <WhatWeDo onOpenModal={handleOpenModal} />

          {/* 04 — Selected Archive & Filterable Case Study CMS */}
          <CaseStudies onOpenModal={() => handleOpenModal('growth-strategy')} />

          {/* 05 — Studio Philosophy & Three Pillars Snapshot */}
          <WhyMacnoms />

          {/* 06 — Operating Methodology & Sprint Gates */}
          <HowWeWork />

          {/* 07 — Field Notes & Editorial Journal */}
          <JournalSection />

          {/* 08 — Target Partnerships & Partner Ticker */}
          <WhoWeWorkWith />

          {/* 09 — Initiate Project Scoping Banner */}
          <CtaSection onOpenModal={() => handleOpenModal('growth-strategy')} />
        </main>

        {/* 10 — Monumental Colophon Footer */}
        <Footer />

        {/* Interactive Studio Project Inquiry Drawer */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultPackage={selectedDiscipline}
        />
      </div>
    </SmoothScroll>
  );
}
