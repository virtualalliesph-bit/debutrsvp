import React from 'react';
import { Quote, Heart, Sparkles } from 'lucide-react';
import isabellaPortrait from '../assets/images/isabella_portrait_1785530054069.jpg';

export const DebutanteMessage: React.FC = () => {
  return (
    <section id="debutante" className="py-20 bg-[#fdf2f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-[#fcecec] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Portrait Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-xs sm:max-w-sm">
                
                {/* Clean Minimalism Double Border Frame */}
                <div className="absolute -inset-4 rounded-3xl border-double-minimal p-1 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border-2 border-[#fcecec] shadow-xs">
                  <img
                    src={isabellaPortrait}
                    alt="Isabella Rose Debutante Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6d4c4c]/40 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                    <p className="font-script text-3xl drop-shadow-xs">
                      Isabella Rose
                    </p>
                    <p className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#fdf2f2]">
                      The Debutante
                    </p>
                  </div>
                </div>

                {/* Floating Floral Badge */}
                <div className="absolute -bottom-5 -right-5 bg-white border border-[#fcecec] px-4 py-2.5 rounded-full shadow-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#e29595]" />
                  <span className="font-serif-display text-sm font-semibold text-[#d48c8c]">
                    Turning 18
                  </span>
                </div>

              </div>
            </div>

            {/* Letter Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-[#e29595]">
                <Heart className="w-4 h-4 fill-[#e29595]" />
                <span className="font-sans-clean text-xs font-medium tracking-[0.2em] uppercase text-[#d48c8c]">
                  A Note From Isabella
                </span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl text-[#d48c8c] leading-tight font-medium">
                Welcome to My 18th Milestone
              </h2>

              <div className="relative pt-2 text-[#6d4c4c] font-serif-display text-base sm:text-lg leading-relaxed space-y-4">
                <Quote className="absolute -top-3 -left-4 w-8 h-8 text-[#fcecec] -z-10 opacity-70" />
                
                <p>
                  As I reach my 18th milestone, my heart fills with immense gratitude for the love, guidance, and warmth each of you has brought into my life. Every smile shared and every memory created has shaped me into who I am today.
                </p>

                <p>
                  Stepping into young womanhood surrounded by the people I cherish most is the greatest gift I could ever ask for. I warmly invite you to join me for an evening of flowers, laughter, dance, and memorable stories at <strong className="text-[#d48c8c]">The Grand Gardens</strong>.
                </p>

                <p>
                  Thank you for walking alongside me and for being a part of my story. I look forward to celebrating this magical night together with you!
                </p>
              </div>

              {/* Signature Block */}
              <div className="pt-4 border-t border-[#f5e6e6] flex items-center justify-between">
                <div>
                  <p className="font-script text-3xl text-[#d48c8c]">
                    With all my love,
                  </p>
                  <p className="font-serif-display text-xl font-semibold text-[#6d4c4c] tracking-wide">
                    Isabella Rose
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-sans-clean text-xs text-[#6d4c4c]/80 block">
                    June 12, 2027
                  </span>
                  <span className="font-sans-clean text-[10px] text-[#d48c8c] uppercase tracking-[0.15em]">
                    The Grand Gardens
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
