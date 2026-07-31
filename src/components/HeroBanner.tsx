import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, Heart } from 'lucide-react';

// Use generated hero image asset
import heroBannerImg from '../assets/images/floral_watercolor_hero_1785530042053.jpg';

interface HeroBannerProps {
  onRsvpClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onRsvpClick }) => {
  // Countdown Timer state calculation for June 12th
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: June 12
    const targetDate = new Date('2027-06-12T17:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fdf2f2] py-16 md:py-24">
      {/* Background Floral Art Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src={heroBannerImg}
          alt="Floral background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      {/* Subtle Soft Radial Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fcecec]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        
        {/* Subtle Ornamental Crown Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] border border-[#fcecec] text-[#d48c8c] text-xs font-sans-clean tracking-[0.2em] uppercase mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#e29595]" />
          <span>Save The Date • 18th Birthday Debut</span>
          <Sparkles className="w-3.5 h-3.5 text-[#e29595]" />
        </div>

        {/* Celebrant Monogram & Invitation Intro */}
        <p className="font-serif-display text-lg sm:text-xl text-[#6d4c4c] italic font-normal tracking-wide mb-3">
          Together with her loving parents, you are cordially invited to celebrate
        </p>

        {/* Main Debutante Script / Serif Title */}
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#d48c8c] font-normal leading-tight tracking-wide my-2">
          Isabella Rose
        </h1>

        <p className="font-script-alex text-3xl sm:text-4xl md:text-5xl text-[#e29595] my-3">
          Eighteenth Birthday Debut
        </p>

        {/* Minimalist Divider Line */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-[1px] w-16 sm:w-28 bg-[#e29595]/40" />
          <span className="text-[#e29595] text-xl">❀</span>
          <div className="h-[1px] w-16 sm:w-28 bg-[#e29595]/40" />
        </div>

        {/* Event Date & Location Card */}
        <div className="max-w-2xl mx-auto bg-white border border-[#fcecec] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#f5e6e6]">
            
            {/* Date Block */}
            <div className="flex flex-col items-center justify-center space-y-2 pb-4 sm:pb-0">
              <div className="w-10 h-10 rounded-full bg-[#fdf2f2] text-[#d48c8c] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em]">
                Date & Time
              </span>
              <p className="font-serif-display text-2xl font-semibold text-[#6d4c4c]">
                June 12th
              </p>
              <p className="font-sans-clean text-xs text-[#6d4c4c]/80">
                Saturday at 5:00 in the Evening
              </p>
            </div>

            {/* Location Block */}
            <div className="flex flex-col items-center justify-center space-y-2 pt-4 sm:pt-0 sm:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#fdf2f2] text-[#d48c8c] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em]">
                Venue Location
              </span>
              <p className="font-serif-display text-2xl font-semibold text-[#6d4c4c]">
                The Grand Gardens
              </p>
              <p className="font-sans-clean text-xs text-[#6d4c4c]/80">
                Botanical Pavilion & Grand Ballroom
              </p>
            </div>

          </div>
        </div>

        {/* Countdown Timer Block */}
        <div className="mt-12">
          <p className="font-sans-clean text-xs font-medium tracking-[0.2em] text-[#d48c8c] uppercase mb-4">
            Counting Down To The Celebration
          </p>
          
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[#fcecec] rounded-xl p-3 sm:p-4 text-center shadow-xs"
              >
                <span className="block font-serif-display text-2xl sm:text-3xl font-bold text-[#d48c8c]">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="font-sans-clean text-[10px] sm:text-xs text-[#6d4c4c]/70 tracking-[0.1em] uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRsvpClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#e29595] text-white font-sans-clean text-xs font-medium tracking-[0.15em] uppercase shadow-sm hover:bg-[#d48c8c] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white/90" />
            <span>Confirm Your Attendance (RSVP)</span>
          </button>
          
          <a
            href="#program"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-[#fcecec] text-[#6d4c4c] hover:bg-[#fdf2f2] hover:text-[#d48c8c] font-sans-clean text-xs font-medium tracking-[0.15em] uppercase transition-all text-center"
          >
            View The 18 Program
          </a>
        </div>

      </div>
    </section>
  );
};
