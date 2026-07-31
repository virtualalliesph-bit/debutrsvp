import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Heart, Sparkles, User, Mail, Phone, Users, MessageSquare, AlertCircle, RefreshCw, Printer } from 'lucide-react';
import { RsvpSubmission } from '../types';

const GOOGLE_SHEET_RSVP_URL = 'https://script.google.com/macros/s/AKfycbzY8Qb_jq6K7iQ2ynqEz8GYAWzfXM08HUsJat5LOx3rh2RBIV1CIAcPg6AzIUCZeECl/exec';

export const RsvpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attendance: 'attending' as 'attending' | 'declined',
    guestCount: 1,
    dietary: '',
    honorCategory: 'Not part of 18',
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
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your Full Name and Email Address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const submissionRecord: RsvpSubmission = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };

    try {
      // Create URLSearchParams payload for Google Apps Script Web App
      const params = new URLSearchParams();
      params.append('fullName', formData.fullName);
      params.append('name', formData.fullName);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('attendance', formData.attendance);
      params.append('guestCount', String(formData.guestCount));
      params.append('dietary', formData.dietary);
      params.append('honorCategory', formData.honorCategory);
      params.append('message', formData.message);
      params.append('timestamp', submissionRecord.timestamp);

      // Send POST request using mode: 'no-cors' to avoid browser CORS restrictions with Google Apps Script
      await fetch(GOOGLE_SHEET_RSVP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-[#5C2E3B]-form-urlencoded',
        },
        body: params.toString(),
      });

      // Save local record
      localStorage.setItem('isabella_debut_rsvp', JSON.stringify(submissionRecord));
      setSubmissionSuccess(submissionRecord);
    } catch (err) {
      console.error('RSVP Submission error:', err);
      // Even if network mode no-cors succeeds silently, save locally
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
      email: '',
      phone: '',
      attendance: 'attending',
      guestCount: 1,
      dietary: '',
      honorCategory: 'Not part of 18',
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
            Kindly confirm your presence by June 1st to help us prepare your table
          </p>
        </div>

        {/* Successful Submission Card */}
        {submissionSuccess ? (
          <div className="bg-white rounded-3xl border border-[#fcecec] p-8 sm:p-12 shadow-sm text-center space-y-6 animate-in fade-in duration-300">
            
            <div className="w-16 h-16 rounded-full bg-[#fdf2f2] text-[#d48c8c] mx-auto flex items-center justify-center border border-[#fcecec] shadow-xs">
              <CheckCircle className="w-8 h-8 text-[#e29595]" />
            </div>

            <div>
              <span className="font-sans-clean text-xs font-medium text-[#d48c8c] tracking-[0.2em] uppercase">
                RSVP Response Recorded
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#d48c8c] font-medium mt-1">
                Thank You, {submissionSuccess.fullName}!
              </h3>
              <p className="font-serif-display text-base text-[#6d4c4c] mt-2">
                {submissionSuccess.attendance === 'attending'
                  ? `We are delighted that you will join Isabella Rose's 18th Birthday Debut at The Grand Gardens on June 12th!`
                  : `Thank you for letting us know. We will miss you at the celebration!`}
              </p>
            </div>

            {/* Digital Pass / Ticket Summary */}
            <div className="bg-[#fdf2f2]/60 border border-[#fcecec] rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3">
              <div className="flex items-center justify-between border-b border-[#f5e6e6] pb-3">
                <span className="font-serif-display text-lg font-semibold text-[#6d4c4c]">
                  Isabella Rose Debut Pass
                </span>
                <span className="font-sans-clean text-[11px] bg-white border border-[#fcecec] text-[#d48c8c] px-2.5 py-0.5 rounded-full font-medium">
                  {submissionSuccess.attendance === 'attending' ? 'CONFIRMED' : 'DECLINED'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-sans-clean text-[#6d4c4c]">
                <div>
                  <span className="text-[#d48c8c] block">Guest Name:</span>
                  <strong className="text-[#6d4c4c]">{submissionSuccess.fullName}</strong>
                </div>
                <div>
                  <span className="text-[#d48c8c] block">Email:</span>
                  <strong className="text-[#6d4c4c]">{submissionSuccess.email}</strong>
                </div>
                <div>
                  <span className="text-[#d48c8c] block">Seats Reserved:</span>
                  <strong className="text-[#6d4c4c]">{submissionSuccess.guestCount} Guest(s)</strong>
                </div>
                <div>
                  <span className="text-[#d48c8c] block">Program Role:</span>
                  <strong className="text-[#6d4c4c]">{submissionSuccess.honorCategory}</strong>
                </div>
              </div>

              {submissionSuccess.message && (
                <div className="pt-2 border-t border-[#f5e6e6] text-xs italic text-[#6d4c4c]/80">
                  "{submissionSuccess.message}"
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-full bg-white border border-[#fcecec] text-[#6d4c4c] hover:bg-[#fdf2f2] hover:text-[#d48c8c] font-sans-clean text-xs font-medium tracking-[0.15em] uppercase transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#e29595]" />
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
          /* Main RSVP Form */
          <div className="bg-white rounded-3xl border border-[#fcecec] p-6 sm:p-10 shadow-sm relative overflow-hidden">
            
            {errorMessage && (
              <div className="mb-6 bg-[#fdf2f2] border border-[#fcecec] rounded-xl p-4 flex items-center gap-3 text-xs font-sans-clean text-[#d48c8c]">
                <AlertCircle className="w-5 h-5 shrink-0 text-[#e29595]" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Attendance Choice Buttons */}
              <div>
                <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-3">
                  Will you be celebrating with Isabella Rose? *
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                      formData.attendance === 'attending'
                        ? 'bg-[#fdf2f2] border-[#e29595] text-[#d48c8c] ring-1 ring-[#e29595]'
                        : 'bg-white border-[#fcecec] text-[#6d4c4c] hover:bg-[#fdf2f2]/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      formData.attendance === 'attending' ? 'border-[#e29595] bg-[#e29595] text-white' : 'border-[#fcecec]'
                    }`}>
                      {formData.attendance === 'attending' && <CheckCircle className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <span className="font-serif-display font-semibold text-base block">
                        Joyfully Accepts
                      </span>
                      <span className="font-sans-clean text-[11px] text-[#6d4c4c]/80">
                        Yes, I will be attending the debut
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'declined' })}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                      formData.attendance === 'declined'
                        ? 'bg-[#fdf2f2] border-[#e29595] text-[#d48c8c] ring-1 ring-[#e29595]'
                        : 'bg-white border-[#fcecec] text-[#6d4c4c] hover:bg-[#fdf2f2]/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      formData.attendance === 'declined' ? 'border-[#e29595] bg-[#e29595] text-white' : 'border-[#fcecec]'
                    }`}>
                      {formData.attendance === 'declined' && <CheckCircle className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <span className="font-serif-display font-semibold text-base block">
                        Regretfully Declines
                      </span>
                      <span className="font-sans-clean text-[11px] text-[#6d4c4c]/80">
                        Unable to attend, sending love
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Guest Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alexander Rose"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alexander@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    Contact Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                    Number of Guests Attending
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595] appearance-none"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} Guest{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Program Role Honor Dropdown */}
              <div>
                <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                  Are you a participant in the 18 Traditions Program?
                </label>
                <select
                  value={formData.honorCategory}
                  onChange={(e) => setFormData({ ...formData, honorCategory: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                >
                  <option value="Not part of 18">General Guest (Not part of 18 list)</option>
                  <option value="18 Roses">🌹 18 Roses Participant</option>
                  <option value="18 Candles">🕯️ 18 Candles Participant</option>
                  <option value="18 Butterflies">🦋 18 Butterflies Participant</option>
                  <option value="18 Bills">💵 18 Bills / Treasures Participant</option>
                </select>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                  Dietary Preferences / Allergies (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Vegetarian, Gluten-Free, Seafood allergy"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                />
              </div>

              {/* Wishes & Message for Isabella */}
              <div>
                <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-2">
                  Special Wish or Birthday Message for Isabella Rose
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#d48c8c] absolute left-3.5 top-3.5" />
                  <textarea
                    rows={4}
                    placeholder="Write your heartfelt birthday wishes for Isabella..."
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
                    <span>Sending RSVP to Google Sheet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit RSVP Response</span>
                  </>
                )}
              </button>

              <p className="text-center font-sans-clean text-[11px] text-[#6d4c4c]/70">
                🔒 Responses are automatically recorded in Google Sheets.
              </p>

            </form>

          </div>
        )}

      </div>
    </section>
  );
};
