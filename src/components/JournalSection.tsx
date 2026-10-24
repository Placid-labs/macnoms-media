'use client';

import React, { useState } from 'react';
import { ArrowUpRight, X, Clock, BookOpen } from 'lucide-react';

interface Article {
  id: string;
  number: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
  takeaways: string[];
}

const ARTICLES: Article[] = [
  {
    id: 'note-01',
    number: '01',
    date: 'OCTOBER 2026',
    readTime: '4 MIN READ',
    category: 'GROWTH STRATEGY',
    title: 'The Death of Vanity Attention: Why Community Retention is the Only Metric in 2026',
    excerpt: 'Algorithmic reach is cheaper than ever, yet converting that attention into customer lifetime value has never been harder. Here is why the modern brand playbook must shift from broadcast to belonging.',
    content: [
      'In the era of algorithmically-driven distribution, hitting 500,000 views on a short-form video is no longer a moat. Every day, feeds are inundated with hyper-optimized hooks engineered to capture eyeballs for 12 seconds.',
      'Yet modern brand operators find that these viral spikes rarely produce recurring cash flow. Why? Because attention without contextual affinity is purely transactional.',
      'Sustainable brands do not rely on constant ad arbitrage or perpetual viral lottery tickets. They construct owned community infrastructure—micro-audiences who view the brand as a reflection of their personal identity.',
      'When you design for community first, acquisition costs plummet because your earliest evangelists become your primary distribution department.'
    ],
    takeaways: [
      'Attention is an input; retained community is the outcome.',
      'Frictionless customer journeys matter more than creative flamboyance.',
      'Owned community channels hedge against volatile platform algorithms.',
    ],
  },
  {
    id: 'note-02',
    number: '02',
    date: 'SEPTEMBER 2026',
    readTime: '5 MIN READ',
    category: 'CREATOR ECONOMY',
    title: 'The 6-Stage Creator Architecture: How We Eliminate Influencer Fatigue',
    excerpt: 'Generic product seeding and paid endorsements have taught audiences to swipe away. We outline the mechanics behind high-trust cultural matchmaking that actually sparks commercial conversion.',
    content: [
      'Consumer cynicism is at an all-time peak. Audiences can sniff out an insincere product placement in the first 1.5 seconds of a video.',
      'To unlock real commercial power, brands must transition from transactional sponsorship to cultural collaboration.',
      'Our 6-stage framework begins with deep fraud auditing and audience alignment, followed by co-creative briefing where the creator retains their natural editorial voice rather than reciting a robotic brand script.',
      'The result is not an ad, but a cultural recommendation that converts skeptical prospects into immediate buyers.'
    ],
    takeaways: [
      'Authenticity cannot be scripted; it must be co-authored.',
      'Niche alignment consistently outperforms superficial follower volume.',
      'Clear contract deliverables and usage rights guarantee compounding ROI.',
    ],
  },
  {
    id: 'note-03',
    number: '03',
    date: 'AUGUST 2026',
    readTime: '3 MIN READ',
    category: 'BRAND ARCHITECTURE',
    title: 'The Friction Audit: Diagnosing Why Your Social Followers Aren’t Buying',
    excerpt: 'If you have an engaged audience that hesitates at checkout, you do not have an audience problem. You have an offer ambiguity problem.',
    content: [
      'We often meet founders with 50,000 engaged social followers who struggle to generate consistent monthly revenue. The assumption is usually: "We need more followers."',
      'In 90% of our diagnostic audits, follower count is not the issue. The real bottleneck is offer obscurity. Prospects enjoy your content, but have no idea what specific problem you solve for them or how to buy with zero friction.',
      'By streamlining the bio architecture, eliminating unnecessary checkout steps, and articulating the core value proposition with surgical clarity, brands typically double their conversion rate without gaining a single new follower.'
    ],
    takeaways: [
      'Clarify your offer before attempting to scale your traffic.',
      'Reduce every unnecessary tap between interest and transaction.',
      'Position your product as the natural answer to your community’s tension.',
    ],
  },
];

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="journal" className="py-20 sm:py-32 bg-paper-100 border-b border-paper-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-paper-300 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-ink-950 leading-[1.08]">
              Studio intelligence.{' '}
              <span className="font-serif italic font-normal text-ink-700">
                Dispatches from the front lines of growth.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-600 max-w-sm font-mono leading-relaxed">
            Our perspectives on consumer culture, algorithm mechanics, community systems, and brand building in modern emerging markets.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="cursor-pointer group p-7 sm:p-8 rounded-2xl bg-white border border-paper-300 hover:border-ink-950 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-paper-200 text-[10px] font-mono uppercase text-ink-500 mb-5">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink-950 leading-snug group-hover:text-ink-700 transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-paper-200 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-ink-900 group-hover:text-ink-950">
                <span>Read Note</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Drawer */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          <div
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 bg-ink-950/70 backdrop-blur-xs transition-opacity"
          />

          <div className="relative w-full max-w-2xl h-full bg-paper-100 border-l border-paper-300 shadow-2xl overflow-y-auto z-10 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              {/* Header */}
              <div className="sticky top-0 bg-paper-100/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-paper-300 flex items-center justify-between z-20">
                <div className="flex items-center gap-3 text-xs font-mono text-ink-600">
                  <span>{selectedArticle.category}</span>
                  <span>&bull;</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full hover:bg-paper-200 text-ink-950 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-10 space-y-6">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-500 mb-2">
                    {selectedArticle.category} &bull; {selectedArticle.date}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ink-950 leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-paper-200 border border-paper-300 text-xs text-ink-700 italic font-serif">
                  {selectedArticle.excerpt}
                </div>

                <div className="space-y-4 pt-2 text-sm sm:text-base text-ink-800 leading-relaxed font-normal">
                  {selectedArticle.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="mt-8 p-6 rounded-2xl bg-white border border-paper-300 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-500 font-bold">
                    STRATEGIC TAKEAWAYS
                  </div>
                  <ul className="space-y-2">
                    {selectedArticle.takeaways.map((t, i) => (
                      <li key={i} className="text-xs font-mono text-ink-900 flex items-start gap-2">
                        <span className="text-ink-400 font-bold">&bull;</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-paper-100/95 backdrop-blur-md p-6 border-t border-paper-300 flex items-center justify-between">
              <span className="text-[10px] font-mono text-ink-500 uppercase">
                MACNOMS MEDIA DISPATCHES
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-full border border-paper-300 hover:border-ink-950 text-xs font-mono uppercase"
              >
                Close Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
