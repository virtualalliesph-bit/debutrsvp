import React, { useState } from 'react';
import { Search, Heart, Flame, Sparkles, Banknote, Flower2, User } from 'lucide-react';
import { EIGHTEEN_ROSES, EIGHTEEN_CANDLES, EIGHTEEN_BUTTERFLIES, EIGHTEEN_BILLS } from '../data/programData';
import { EighteenCategory, EighteenItem } from '../types';

export const ProgramEighteens: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EighteenCategory>('roses');
  const [searchQuery, setSearchQuery] = useState('');

  const getActiveList = (): EighteenItem[] => {
    switch (activeTab) {
      case 'roses': return EIGHTEEN_ROSES;
      case 'candles': return EIGHTEEN_CANDLES;
      case 'butterflies': return EIGHTEEN_BUTTERFLIES;
      case 'bills': return EIGHTEEN_BILLS;
      default: return EIGHTEEN_ROSES;
    }
  };

  const currentItems = getActiveList().filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.relation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const tabs: { id: EighteenCategory; label: string; icon: React.ReactNode; subtitle: string }[] = [
    {
      id: 'roses',
      label: '18 Roses',
      icon: <Flower2 className="w-4 h-4 text-[#e29595]" />,
      subtitle: 'Gentlemen of the Grand Debut Waltz',
    },
    {
      id: 'candles',
      label: '18 Candles',
      icon: <Flame className="w-4 h-4 text-[#e29595]" />,
      subtitle: 'Ladies Offering Inspirational Light & Wisdom',
    },
    {
      id: 'butterflies',
      label: '18 Butterflies',
      icon: <Sparkles className="w-4 h-4 text-[#e29595]" />,
      subtitle: 'Cherished Relatives Releasing Symbolic Wishes',
    },
    {
      id: 'bills',
      label: '18 Bills',
      icon: <Banknote className="w-4 h-4 text-[#e29595]" />,
      subtitle: 'Godparents & Elders Gifting Future Seeds',
    },
  ];

  return (
    <section id="program" className="py-20 bg-[#fdf2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans-clean text-xs font-medium tracking-[0.2em] text-[#d48c8c] uppercase bg-white border border-[#fcecec] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            Debut Traditions
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#d48c8c] font-medium">
            The 18 Program Highlights
          </h2>
          <p className="font-serif-display text-lg text-[#6d4c4c] italic mt-2">
            Honoring the 18 special people guiding Isabella Rose into young womanhood
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery('');
                }}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#fdf2f2] border-[#e29595] shadow-xs scale-[1.02]'
                    : 'bg-white border-[#fcecec] hover:bg-[#fdf2f2]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif-display text-xl sm:text-2xl font-semibold text-[#6d4c4c]">
                    {tab.label}
                  </span>
                  <div className={`p-2 rounded-full ${isActive ? 'bg-white border border-[#fcecec]' : 'bg-[#fdf2f2]'}`}>
                    {tab.icon}
                  </div>
                </div>
                <span className="font-sans-clean text-[11px] text-[#6d4c4c]/70 line-clamp-1">
                  {tab.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-[#fcecec] p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search in ${tabs.find(t => t.id === activeTab)?.label}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-sans-clean text-[#6d4c4c]">
            <span>Showing</span>
            <span className="font-medium text-[#d48c8c] bg-[#fdf2f2] border border-[#fcecec] px-2.5 py-0.5 rounded-full">
              {currentItems.length} of 18
            </span>
            <span>Participants</span>
          </div>
        </div>

        {/* 18 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-[#fcecec] p-5 shadow-xs hover:shadow-sm hover:border-[#e29595] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                
                {/* Number Badge (1 to 18) */}
                <div className="w-10 h-10 rounded-full bg-[#fdf2f2] border border-[#fcecec] text-[#d48c8c] font-serif-display font-bold text-lg flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                  {item.number}
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="font-serif-display text-lg font-semibold text-[#6d4c4c] group-hover:text-[#d48c8c] transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fdf2f2]/60 border border-[#fcecec] text-[#6d4c4c]/80 text-[11px] font-sans-clean font-medium">
                    <User className="w-3 h-3 text-[#e29595]" />
                    <span>{item.relation}</span>
                  </div>

                  {item.note && (
                    <p className="font-sans-clean text-xs text-[#6d4c4c]/80 leading-relaxed pt-2 border-t border-[#f5e6e6] mt-2 italic">
                      "{item.note}"
                    </p>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {currentItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#fcecec] p-6">
            <p className="font-serif-display text-lg text-[#6d4c4c]">
              No participants found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-sans-clean text-[#e29595] underline font-medium cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
