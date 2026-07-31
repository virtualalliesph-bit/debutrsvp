import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const FloralFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fdf2f2] border-t border-[#fcecec] py-16 text-center relative overflow-hidden">
      
      <div className="relative max-w-4xl mx-auto px-4 space-y-6">
        
        {/* Monogram Badge */}
        <div className="w-14 h-14 rounded-full bg-white border border-[#fcecec] text-[#d48c8c] font-serif-display text-2xl font-bold flex items-center justify-center mx-auto shadow-xs">
          IR
        </div>

        <div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#d48c8c] font-medium">
            Isabella Rose
          </h2>
          <p className="font-sans-clean text-xs font-medium tracking-[0.2em] text-[#6d4c4c]/80 uppercase mt-1">
            18th Birthday Debut Celebration
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-serif-display text-[#6d4c4c]">
          <span>June 12, 2027</span>
          <span>•</span>
          <span>The Grand Gardens</span>
          <span>•</span>
          <span>Semi-Formal Floral</span>
        </div>

        <p className="font-serif-display text-sm text-[#6d4c4c]/80 italic max-w-md mx-auto">
          "Thank you for being part of my 18th bloom. Your presence, prayers, and love make this celebration complete."
        </p>

        {/* Scroll To Top Button */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#fcecec] text-[#6d4c4c] hover:text-[#d48c8c] hover:bg-[#fdf2f2] font-sans-clean text-xs tracking-[0.15em] uppercase transition-colors shadow-xs cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#e29595]" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="pt-8 border-t border-[#f5e6e6] text-[11px] font-sans-clean text-[#6d4c4c]/60">
          © 2027 Isabella Rose Debut. All rights reserved. Designed with floral elegance.
        </div>

      </div>
    </footer>
  );
};
