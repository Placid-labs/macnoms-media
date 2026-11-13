'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F6F3EB] border-t border-[#E8E1D5] py-10 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#524944] font-medium">
        <div>
          <span>© 2026 Macnoms Media · Lagos / Global</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B85D3D] transition-colors"
          >
            Instagram
          </a>
          <span className="text-[#DDD3C4]">·</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B85D3D] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};