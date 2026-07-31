import React, { useState } from 'react';
import { Palette, CheckCircle2, XCircle, Sparkles, Shirt, UserCheck } from 'lucide-react';
import attirePaletteImg from '../assets/images/attire_palette_guide_1785530077319.jpg';

export const AttireGuidelines: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<number | null>(0);

  const colorSwatches = [
    { name: 'Blush Pink', hex: '#F7D5E1', border: '#EAAEC0', desc: 'Soft & romantic floral pink' },
    { name: 'Rose Quartz', hex: '#ECC2D1', border: '#D998AE', desc: 'Warm feminine hue' },
    { name: 'Light Champagne', hex: '#F8E7D3', border: '#EAD1B6', desc: 'Elegant metallic pastel' },
    { name: 'Pale Sage', hex: '#E2ECE5', border: '#C5D6C9', desc: 'Fresh botanical accent' },
    { name: 'Soft Cream', hex: '#FAF6F3', border: '#EAE1D9', desc: 'Delicate light ivory neutral' },
    { name: 'Muted Lilac', hex: '#EDE3F2', border: '#D7C7E3', desc: 'Soft pastel purple tone' },
  ];

  return (
    <section id="attire" className="py-20 bg-[#fdf2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans-clean text-xs font-medium tracking-[0.2em] text-[#d48c8c] uppercase bg-white border border-[#fcecec] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            Attire & Dress Code
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#d48c8c] font-medium">
            Semi-Formal Floral
          </h2>
          <p className="font-serif-display text-lg text-[#6d4c4c] italic mt-2">
            Please dress in soft floral pastels and lighter tones to celebrate with us
          </p>
        </div>

        {/* Dress Code Main Container */}
        <div className="bg-white rounded-3xl border border-[#fcecec] p-6 sm:p-10 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Moodboard Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#fcecec] shadow-xs">
                <img
                  src={attirePaletteImg}
                  alt="Attire Color Palette Guide"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6d4c4c]/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <p className="font-serif-display text-xl font-semibold">
                    Floral Pink & Soft Pastels Palette
                  </p>
                  <p className="font-sans-clean text-xs text-[#fdf2f2]">
                    No dark colors • Soft watercolors only
                  </p>
                </div>
              </div>

              {/* Interactive Color Palette Swatches */}
              <div className="bg-[#fdf2f2]/60 rounded-2xl p-5 border border-[#fcecec]">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="w-4 h-4 text-[#e29595]" />
                  <span className="font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em]">
                    Recommended Palette Swatches
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {colorSwatches.map((swatch, idx) => (
                    <button
                      key={swatch.name}
                      onClick={() => setSelectedSwatch(idx)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center ${
                        selectedSwatch === idx
                          ? 'ring-2 ring-[#e29595] ring-offset-1 bg-white scale-105 shadow-xs'
                          : 'bg-white border-[#fcecec]'
                      }`}
                    >
                      <span
                        className="w-7 h-7 rounded-full shadow-inner border"
                        style={{ backgroundColor: swatch.hex, borderColor: swatch.border }}
                      />
                      <span className="font-sans-clean text-[10px] font-medium text-[#6d4c4c] leading-tight">
                        {swatch.name}
                      </span>
                    </button>
                  ))}
                </div>

                {selectedSwatch !== null && (
                  <p className="font-sans-clean text-xs text-[#d48c8c] bg-white rounded-lg p-2.5 mt-3 border border-[#fcecec] text-center">
                    ✨ <strong>{colorSwatches[selectedSwatch].name}:</strong> {colorSwatches[selectedSwatch].desc}
                  </p>
                )}
              </div>
            </div>

            {/* Dress Code Guidelines Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Ladies & Gentlemen Guidelines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Ladies */}
                <div className="bg-[#fdf2f2]/50 border border-[#fcecec] rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-[#d48c8c] font-serif-display font-semibold text-lg mb-2">
                    <UserCheck className="w-5 h-5 text-[#e29595]" />
                    <span>For Ladies</span>
                  </div>
                  <ul className="font-sans-clean text-xs text-[#6d4c4c] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e29595] font-bold">•</span>
                      <span>Semi-formal floral print midi or long cocktail dresses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e29595] font-bold">•</span>
                      <span>Blush pink, champagne gold, pale sage green, soft lavender or rose quartz shades.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e29595] font-bold">•</span>
                      <span>Elegant heels, block sandals, or embellished floral flats.</span>
                    </li>
                  </ul>
                </div>

                {/* Gentlemen */}
                <div className="bg-[#fdf2f2]/50 border border-[#fcecec] rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-[#d48c8c] font-serif-display font-semibold text-lg mb-2">
                    <Shirt className="w-5 h-5 text-[#e29595]" />
                    <span>For Gentlemen</span>
                  </div>
                  <ul className="font-sans-clean text-xs text-[#6d4c4c] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e29595] font-bold">•</span>
                      <span>Light-colored suits, beige/tan linen blazers, or classic Barong Tagalog.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e29595] font-bold">•</span>
                      <span>Tailored slacks or trousers in light taupe, khaki, or soft cream.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e29595] font-bold">•</span>
                      <span>Leather dress shoes or loafers.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Do's and Don'ts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Do's */}
                <div className="bg-[#f5e6e6]/30 border border-[#fcecec] rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-[#6d4c4c] font-sans-clean font-medium text-xs uppercase tracking-[0.15em] mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e29595]" />
                    <span>Encouraged (Do's)</span>
                  </div>
                  <p className="font-sans-clean text-xs text-[#6d4c4c]/80 leading-relaxed">
                    Wear light pastels, delicate botanical florals, watercolor patterns, and joyful spring/summer hues!
                  </p>
                </div>

                {/* Don'ts */}
                <div className="bg-[#fdf2f2] border border-[#fcecec] rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-[#d48c8c] font-sans-clean font-medium text-xs uppercase tracking-[0.15em] mb-2">
                    <XCircle className="w-4 h-4 text-[#d48c8c]" />
                    <span>Please Avoid (Don'ts)</span>
                  </div>
                  <p className="font-sans-clean text-xs text-[#6d4c4c]/80 leading-relaxed">
                    Please refrain from wearing dark heavy black tuxedos, dark navy suits, or solid stark bridal white dresses.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
