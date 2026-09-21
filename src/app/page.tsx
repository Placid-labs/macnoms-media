'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TheProblem } from '@/components/TheProblem';
import { WhatWeDo } from '@/components/WhatWeDo';
import { WhyMacnoms } from '@/components/WhyMacnoms';
import { CaseStudies } from '@/components/CaseStudies';
import { HowWeWork } from '@/components/HowWeWork';
import { PricingPackages } from '@/components/PricingPackages';
import { WhoWeWorkWith } from '@/components/WhoWeWorkWith';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { ProjectModal } from '@/components/ProjectModal';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('sprint');

  const handleOpenModal = (pkg: string = 'sprint') => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cream-100 text-burgundy-950 flex flex-col">
      {/* Sticky Header */}
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* 01 — Hero */}
        <Hero onOpenModal={() => handleOpenModal('sprint')} />

        {/* 02 — The Problem */}
        <TheProblem />

        {/* 03 — What Macnoms Does */}
        <WhatWeDo onOpenModal={handleOpenModal} />

        {/* 04 — Why Macnoms */}
        <WhyMacnoms />

        {/* 05 — Selected Case Studies */}
        <CaseStudies onOpenModal={() => handleOpenModal('custom')} />

        {/* 06 — How We Work */}
        <HowWeWork />

        {/* 07 — Services & Packages */}
        <PricingPackages onOpenModal={handleOpenModal} />

        {/* 08 — Who We Work With */}
        <WhoWeWorkWith />

        {/* 11 — High-Converting Closing CTA */}
        <CtaSection onOpenModal={() => handleOpenModal('sprint')} />
      </main>

      {/* 12 — Footer */}
      <Footer />

      {/* Interactive Project Intake Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPackage={selectedPackage}
      />
      </div>
    </SmoothScroll>
  );
}
