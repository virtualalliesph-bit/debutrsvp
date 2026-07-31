import React from 'react';
import { FloralHeader } from './components/FloralHeader';
import { HeroBanner } from './components/HeroBanner';
import { DebutanteMessage } from './components/DebutanteMessage';
import { EventDetails } from './components/EventDetails';
import { AttireGuidelines } from './components/AttireGuidelines';
import { ProgramEighteens } from './components/ProgramEighteens';
import { RsvpForm } from './components/RsvpForm';
import { GuestbookWishes } from './components/GuestbookWishes';
import { FloralFooter } from './components/FloralFooter';

export default function App() {
  const scrollToRsvp = () => {
    const rsvpElement = document.getElementById('rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F3] text-[#5C454B] font-serif-display selection:bg-[#F3D8E2] selection:text-[#7A364B]">
      {/* Sticky Header */}
      <FloralHeader onRsvpClick={scrollToRsvp} />

      <main>
        {/* Main Hero Banner with Countdown Timer */}
        <HeroBanner onRsvpClick={scrollToRsvp} />

        {/* Debutante Letter & Welcome */}
        <DebutanteMessage />

        {/* When & Where: Event Schedule & The Grand Gardens Venue */}
        <EventDetails />

        {/* Attire Guidelines & Semi-Formal Floral Color Palette */}
        <AttireGuidelines />

        {/* The 18 Traditions: 18 Roses, 18 Candles, 18 Butterflies, 18 Bills */}
        <ProgramEighteens />

        {/* Interactive RSVP Form sending data to Google Apps Script Sheet */}
        <RsvpForm />

        {/* Birthday Wish Wall / Guestbook */}
        <GuestbookWishes />
      </main>

      {/* Footer */}
      <FloralFooter />
    </div>
  );
}
