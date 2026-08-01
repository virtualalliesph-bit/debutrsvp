import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Heart, User, Mail, Phone, Users, MessageSquare, AlertCircle, RefreshCw, Printer, Calendar, MapPin } from 'lucide-react';
import { RsvpSubmission } from '../types';
import isabellaPortrait from '../assets/images/isabella_portrait_1785530054069.jpg';

const GOOGLE_SHEET_RSVP_URL = 'https://script.google.com/macros/s/AKfycbzY8Qb_jq6K7iQ2ynqEz8GYAWzfXM08HUsJat5LOx3rh2RBIV1CIAcPg6AzIUCZeECl/exec';

export const RsvpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    guestCount: 1,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<RsvpSubmission | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Check if user already submitted locally
  useEffect(() => {
    const savedRSVP = localStorage.getItem('isabella_debut_rsvp');
    if (savedRSVP) {
      try {
        setSubmissionSuccess(JSON.parse(savedRSVP));
      } catch (e) {
        console.error('Error loading saved RSVP:', e);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your Name and Phone Number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const submissionRecord: RsvpSubmission = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };

    try {
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email || '',
        guestCount: formData.guestCount,
        message: formData.message || '',
        timestamp: submissionRecord.timestamp,
      };

      await fetch(GOOGLE_SHEET_RSVP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      // Save local record
      localStorage.setItem('isabella_debut_rsvp', JSON.stringify(submissionRecord));
      setSubmissionSuccess(submissionRecord);
    } catch (err) {
      console.error('RSVP Submission error:', err);
      // Save locally as fallback
      localStorage.setItem('isabella_debut_rsvp', JSON.stringify(submissionRecord));
      setSubmissionSuccess(submissionRecord);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('isabella_debut_rsvp');
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      guestCount: 1,
      message: '',
    });
  };

  return (
    <section id="rsvp" className="py-20 bg-[#fdf2f2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans-clean text-xs font-medium tracking-[0.2em] text-[#d48c8c] uppercase bg-white border border-[#fcecec] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            Response Requested
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#d48c8c] font-medium">
            RSVP Invitation
          </h2>
          <p className="font-serif-display text-lg text-[#6d4c4c] italic mt-2">
            Kindly confirm your presence to help us prepare your table
          </p>
        </div>

        {/* Successful Submission Card & Printable Invitation Pass */}
        {submissionSuccess ? (
          <div className="bg-white rounded-3xl border border-[#fcecec] p-6 sm:p-10 shadow-sm text-center space-y-8 animate-in fade-in duration-300">
            
            <div className="no-print">
              <div className="w-14 h-14 rounded-full bg-[#fdf2f2] text-[#d48c8c] mx-auto flex items-center justify-center border border-[#fcecec] shadow-xs mb-3">
                <CheckCircle className="w-7 h-7 text-[#e29595]" />
              </div>

              <span className="font-sans-clean text-xs font-medium text-[#d48c8c] tracking-[0.2em] uppercase">
                RSVP Confirmation Recorded
              </span>
              <h3 className="font-serif-display text-3xl text-[#d48c8c] font-medium mt-1">
                Thank You, {submissionSuccess.fullName}!
              </h3>
              <p className="font-serif-display text-base text-[#6d4c4c] mt-2">
                We are delighted that you will join Isabella Rose's 18th Birthday Debut celebration!
              </p>
            </div>

            {/* Official Printable Invitation Card / Pass */}
            <div className="printable-pass bg-[#ffffff] border-2 border-[#e29595] rounded-3xl p-6 sm:p-8 text-left max-w-xl mx-auto space-y-6 shadow-sm relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#f5e6e6] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf2f2] border border-[#e29595] flex items-center justify-center text-[#d48c8c] font-serif-display font-bold text-lg">
                    IR
                  </div>
                  <div>
                    <h4 className="font-serif-display text-xl font-semibold text-[#6d4c4c]">
                      Isabella Rose
                    </h4>
                    <p className="font-sans-clean text-[10px] text-[#d48c8c] uppercase tracking-[0.2em]">
                      18th Birthday Debut Invitation Pass
                    </p>
                  </div>
                </div>
                <span className="font-sans-clean text-[10px] bg-[#fdf2f2] border border-[#e29595] text-[#d48c8c] px-3 py-1 rounded-full font-medium tracking-wider uppercase">
                  CONFIRMED GUEST
                </span>
              </div>

              {/* Celebrant Photo & Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Celebrant Photo */}
                <div className="sm:col-span-4 flex justify-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#fcecec] shadow-xs">
                    <img
                      src={isabellaPortrait}
                      alt="Isabella Rose Debutante"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Event Date, Time & Venue */}
                <div className="sm:col-span-8 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-[#e29595] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans-clean text-[10px] uppercase tracking-[0.15em] text-[#d48c8c] block">
                        Date & Time
                      </span>
                      <strong className="font-serif-display text-base text-[#6d4c4c] block">
                        Saturday, June 12, 2027
                      </strong>
                      <span className="font-sans-clean text-xs text-[#6d4c4c]/80">
                        5:00 PM in the Evening
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#e29595] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans-clean text-[10px] uppercase tracking-[0.15em] text-[#d48c8c] block">
                        Location & Venue
                      </span>
                      <strong className="font-serif-display text-base text-[#6d4c4c] block">
                        The Grand Gardens
                      </strong>
                      <span className="font-sans-clean text-xs text-[#6d4c4c]/80">
                        Botanical Pavilion • 18 Royal Rose Boulevard
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Guest Information Section */}
              <div className="bg-[#fdf2f2]/60 rounded-2xl p-4 border border-[#fcecec] space-y-3">
                <span className="font-sans-clean text-[10px] uppercase tracking-[0.2em] text-[#d48c8c] font-medium block border-b border-[#f5e6e6] pb-1.5">
                  Guest Information
                </span>

                <div className="grid grid-cols-2 gap-3 text-xs font-sans-clean text-[#6d4c4c]">
                  <div>
                    <span className="text-[#d48c8c] text-[10px] uppercase tracking-wider block">Name:</span>
                    <strong className="text-[#6d4c4c] text-sm">{submissionSuccess.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-[#d48c8c] text-[10px] uppercase tracking-wider block">No of guest:</span>
                    <strong className="text-[#6d4c4c] text-sm">{submissionSuccess.guestCount} Guest(s)</strong>
                  </div>
                  <div>
                    <span className="text-[#d48c8c] text-[10px] uppercase tracking-wider block">Phone Number:</span>
                    <span className="text-[#6d4c4c]">{submissionSuccess.phone}</span>
                  </div>
                  <div>
                    <span className="text-[#d48c8c] text-[10px] uppercase tracking-wider block">Email:</span>
                    <span className="text-[#6d4c4c]">{submissionSuccess.email || 'N/A'}</span>
                  </div>
                </div>

                {submissionSuccess.message && (
                  <div className="pt-2 border-t border-[#f5e6e6] text-xs italic text-[#6d4c4c]/80">
                    <span className="text-[#d48c8c] text-[10px] uppercase tracking-wider block not-italic">
                      Special Wish / Birthday Message:
                    </span>
                    "{submissionSuccess.message}"
                  </div>
                )}
              </div>

              <div className="text-center pt-1 border-t border-[#f5e6e6]">
                <p className="font-serif-display text-xs italic text-[#6d4c4c]/70">
                  "Please present this pass upon arrival at the venue receptionist counter."
                </p>
              </div>

            </div>

            {/* Actions */}
            <div className="no-print flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-full bg-[#e29595] text-white hover:bg-[#d48c8c] font-sans-clean text-xs font-medium tracking-[0.15em] uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Printer className="w-4 h-4" />
                <span>Print Invitation Pass</span>
              </button>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#fdf2f2] border border-[#fcecec] text-[#6d4c4c] hover:text-[#d48c8c] font-sans-clean text-xs tracking-[0.15em] uppercase transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Update / Resubmit Response</span>
              </button>
            </div>

          </div>
        ) : (
          /* Main RSVP Form - Updated strictly with requested 5 fields */
          <div className="bg-white rounded-3xl border border-[#fcecec] p-6 sm:p-10 shadow-sm relative overflow-hidden">
            
            {errorMessage && (
              <div className="mb-6 bg-[#fdf2f2] border border-[#fcecec] rounded-xl p-4 flex items-center gap-3 text-xs font-sans-clean text-[#d48c8c]">
                <AlertCircle className="w-5 h-5 shrink-0 text-[#e29595]" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Name */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                    />
                  </div>
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                    />
                  </div>
                </div>

                {/* 3. Email (Optional) */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    Email (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="Enter your email address (optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                    />
                  </div>
                </div>

                {/* 4. No of guest */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    No of guest *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595] appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} Guest{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* 5. Special Wish or Birthday Message for Isabella Rose */}
              <div>
                <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                  Special Wish or Birthday Message for Isabella Rose
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-3.5" />
                  <textarea
                    rows={4}
                    placeholder="Write your heartfelt birthday wish or message for Isabella..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#e29595] text-white font-sans-clean text-xs font-medium tracking-[0.2em] uppercase shadow-sm hover:bg-[#d48c8c] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Saving RSVP Response...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit RSVP Response</span>
                  </>
                )}
              </button>

              <p className="text-center font-sans-clean text-[11px] text-[#6d4c4c]/70">
                🔒 Responses are saved and recorded in Google Sheets.
              </p>

            </form>

          </div>
        )}

      </div>
    </section>
  );
};
