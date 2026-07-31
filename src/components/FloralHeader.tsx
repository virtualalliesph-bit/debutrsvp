import React, { useState } from 'react';
import { Sparkles, Music, VolumeX, Menu, X, Heart } from 'lucide-react';

interface FloralHeaderProps {
  onRsvpClick: () => void;
}

export const FloralHeader: React.FC<FloralHeaderProps> = ({ onRsvpClick }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Soft synth piano/harp audio preview using Web Audio API
  const toggleMusic = () => {
    if (!isPlayingMusic) {
      try {
        const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
        const ctx = new AudioContext();
        
        // Gentle chord progression sound loop simulation
        const playTone = (freq: number, time: number, duration: number) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.01, ctx.currentTime + time);
          gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + time + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + time);
          osc.stop(ctx.currentTime + time + duration);
        };

        // Gentle waltz notes (F major / D minor soft lullaby)
        const notes = [349.23, 440.00, 523.25, 659.25, 523.25, 440.00];
        notes.forEach((freq, idx) => {
          playTone(freq, idx * 0.8, 1.8);
        });

        setIsPlayingMusic(true);
        setTimeout(() => setIsPlayingMusic(false), 5000);
      } catch (err) {
        console.log('Audio error:', err);
      }
    } else {
      setIsPlayingMusic(false);
    }
  };

  const navLinks = [
    { name: 'Debutante', href: '#debutante' },
    { name: 'Event Details', href: '#details' },
    { name: 'Attire Guide', href: '#attire' },
    { name: 'The 18 Program', href: '#program' },
    { name: 'Guestbook', href: '#wishes' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/90 backdrop-blur-md border-b border-[#fcecec] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#fdf2f2] border border-[#e29595] flex items-center justify-center text-[#d48c8c] font-serif-display font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              IR
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-2xl text-[#d48c8c] leading-none tracking-wide font-medium">
                Isabella Rose
              </span>
              <span className="font-sans-clean text-[10px] tracking-[0.25em] text-[#6d4c4c]/70 uppercase font-medium">
                18th Birthday Debut
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans-clean text-xs tracking-[0.15em] uppercase text-[#6d4c4c] hover:text-[#d48c8c] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e29595] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Ambient Music Sound Toggle */}
            <button
              onClick={toggleMusic}
              title={isPlayingMusic ? "Playing ambient melody..." : "Play background music theme"}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
                isPlayingMusic
                  ? 'bg-[#fdf2f2] border-[#e29595] text-[#d48c8c] animate-pulse'
                  : 'bg-white border-[#fcecec] text-[#6d4c4c] hover:bg-[#fdf2f2]'
              }`}
            >
              {isPlayingMusic ? <Music className="w-4 h-4 text-[#d48c8c]" /> : <VolumeX className="w-4 h-4 text-[#6d4c4c]/70" />}
            </button>

            {/* Quick RSVP Button */}
            <button
              onClick={onRsvpClick}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#e29595] text-white font-sans-clean text-xs font-medium tracking-[0.1em] uppercase shadow-sm hover:bg-[#d48c8c] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white/80" />
              <span>RSVP Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#6d4c4c] hover:bg-[#fdf2f2] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-[#fcecec] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-sans-clean text-sm tracking-[0.15em] uppercase text-[#6d4c4c] hover:text-[#d48c8c] py-2 border-b border-[#f5e6e6]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onRsvpClick();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-full bg-[#e29595] text-white font-sans-clean text-xs font-medium tracking-[0.1em] uppercase shadow-sm"
          >
            <Heart className="w-4 h-4 fill-white/80" />
            <span>RSVP Now</span>
          </button>
        </div>
      )}
    </header>
  );
};
