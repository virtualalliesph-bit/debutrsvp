import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Crown, Utensils, Heart, Wine, Music, Navigation, SunMedium } from 'lucide-react';
import { SCHEDULE_ITEMS } from '../data/programData';
import venueImg from '../assets/images/grand_gardens_venue_1785530065807.jpg';

const getScheduleIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sparkles': return <Sparkles className="w-5 h-5" />;
    case 'Crown': return <Crown className="w-5 h-5" />;
    case 'Utensils': return <Utensils className="w-5 h-5" />;
    case 'Heart': return <Heart className="w-5 h-5" />;
    case 'Wine': return <Wine className="w-5 h-5" />;
    case 'Music': return <Music className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
};

export const EventDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 bg-[#fdf2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans-clean text-xs font-medium tracking-[0.2em] text-[#d48c8c] uppercase bg-white border border-[#fcecec] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            Celebration Guide
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#d48c8c] font-medium">
            When & Where
          </h2>
          <p className="font-serif-display text-lg text-[#6d4c4c] italic mt-2">
            Join us for an unforgettable evening in full bloom
          </p>
        </div>

        {/* Venue & Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Venue Card Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white rounded-3xl border border-[#fcecec] overflow-hidden shadow-sm">
              
              {/* Venue Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={venueImg}
                  alt="The Grand Gardens Venue"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6d4c4c]/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="bg-[#e29595] px-3 py-1 rounded-full text-[10px] font-sans-clean font-medium uppercase tracking-[0.2em]">
                    Venue Spotlight
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold mt-1 drop-shadow-xs">
                    The Grand Gardens
                  </h3>
                  <p className="font-sans-clean text-xs text-[#fdf2f2]">
                    Botanical Pavilion & Glass Conservatory
                  </p>
                </div>
              </div>

              {/* Venue Quick Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#fdf2f2] text-[#d48c8c] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em]">
                      Address
                    </h4>
                    <p className="font-serif-display text-base text-[#6d4c4c]">
                      18 Royal Rose Boulevard, Orchid Valley, Garden Estate
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#fdf2f2] text-[#d48c8c] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em]">
                      Date & Season
                    </h4>
                    <p className="font-serif-display text-base text-[#6d4c4c]">
                      Saturday, June 12th • Summer Bloom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#fdf2f2] text-[#d48c8c] flex items-center justify-center shrink-0">
                    <SunMedium className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em]">
                      Expected Weather
                    </h4>
                    <p className="font-serif-display text-base text-[#6d4c4c]">
                      Pleasant Evening Sunset • 23°C (Indoor Air-Conditioned Pavilion)
                    </p>
                  </div>
                </div>

                {/* Open Maps Direction Link */}
                <a
                  href="https://maps.google.com/?q=The+Grand+Gardens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-3 rounded-full bg-[#fdf2f2] border border-[#fcecec] text-[#6d4c4c] hover:bg-[#fcecec] hover:text-[#d48c8c] font-sans-clean text-xs font-medium tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#e29595]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

            </div>
          </div>

          {/* Timeline / Program Schedule Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#fcecec] p-6 sm:p-8 shadow-sm">
            
            <div className="flex items-center justify-between pb-6 border-b border-[#f5e6e6] mb-8">
              <div>
                <h3 className="font-serif-display text-2xl font-semibold text-[#6d4c4c]">
                  Program Schedule
                </h3>
                <p className="font-sans-clean text-xs text-[#d48c8c]">
                  Evening order of events for June 12th
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#fdf2f2] border border-[#fcecec] text-[#d48c8c] flex items-center justify-center font-serif-display font-bold">
                18
              </div>
            </div>

            {/* Timeline Vertical Path */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#fcecec]">
              {SCHEDULE_ITEMS.map((item, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-white border-2 border-[#e29595] text-[#d48c8c] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-[#e29595]" />
                  </div>

                  <div className="bg-[#fdf2f2]/60 border border-[#fcecec] rounded-2xl p-4 sm:p-5 hover:border-[#e29595] hover:bg-white transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans-clean text-xs font-medium text-[#d48c8c] bg-white border border-[#fcecec] px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                      <div className="text-[#e29595]">
                        {getScheduleIcon(item.iconName)}
                      </div>
                    </div>

                    <h4 className="font-serif-display text-lg font-semibold text-[#6d4c4c]">
                      {item.title}
                    </h4>

                    <p className="font-sans-clean text-xs text-[#6d4c4c]/80 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
