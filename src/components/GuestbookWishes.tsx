import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Sparkles, User } from 'lucide-react';
import { SAMPLE_WISHES } from '../data/programData';
import { GuestWish } from '../types';

export const GuestbookWishes: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>(SAMPLE_WISHES);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: GuestWish = {
      id: `w-${Date.now()}`,
      name: name.trim(),
      relationship: relationship.trim() || 'Guest',
      message: message.trim(),
      date: 'Today',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setRelationship('');
    setMessage('');
    setIsAdding(false);
  };

  return (
    <section id="wishes" className="py-20 bg-[#fdf2f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans-clean text-xs font-medium tracking-[0.2em] text-[#d48c8c] uppercase bg-white border border-[#fcecec] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            Birthday Wishes Wall
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#d48c8c] font-medium">
            Love & Blessings
          </h2>
          <p className="font-serif-display text-lg text-[#6d4c4c] italic mt-2">
            Leave a message for Isabella Rose on her 18th Milestone
          </p>
        </div>

        {/* Add Wish Toggle / Form */}
        <div className="max-w-2xl mx-auto mb-12">
          {!isAdding ? (
            <button
              onClick={() => setIsAdding(true)}
              className="w-full py-4 rounded-2xl bg-white border border-[#fcecec] hover:border-[#e29595] text-[#6d4c4c] hover:text-[#d48c8c] font-sans-clean text-xs font-medium tracking-[0.15em] uppercase shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#e29595]" />
              <span>Write a Birthday Wish for Isabella</span>
            </button>
          ) : (
            <form onSubmit={handleAddWish} className="bg-white rounded-3xl border border-[#fcecec] p-6 sm:p-8 shadow-sm space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-[#f5e6e6] pb-3 mb-2">
                <h3 className="font-serif-display text-xl font-semibold text-[#6d4c4c] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#e29595]" />
                  <span>Post Your Birthday Wish</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="font-sans-clean text-xs text-[#6d4c4c]/70 hover:text-[#d48c8c] cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aunt Maria"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                  />
                </div>

                <div>
                  <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-1">
                    Relationship (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cousin, Ninang, High School Friend"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans-clean text-xs font-medium text-[#d48c8c] uppercase tracking-[0.15em] mb-1">
                  Message for Isabella *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share your wishes, prayers, or happy memories..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#fdf2f2]/60 border border-[#fcecec] text-xs font-sans-clean text-[#6d4c4c] focus:outline-none focus:ring-2 focus:ring-[#e29595]/30 focus:border-[#e29595]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#e29595] text-white font-sans-clean text-xs font-medium tracking-[0.2em] uppercase shadow-xs hover:bg-[#d48c8c] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Birthday Wish</span>
              </button>
            </form>
          )}
        </div>

        {/* Wishes Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-white rounded-2xl border border-[#fcecec] p-6 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#f5e6e6]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#fdf2f2] border border-[#fcecec] text-[#d48c8c] font-bold text-xs flex items-center justify-center">
                      <User className="w-4 h-4 text-[#e29595]" />
                    </div>
                    <div>
                      <h4 className="font-serif-display text-base font-semibold text-[#6d4c4c]">
                        {wish.name}
                      </h4>
                      <span className="font-sans-clean text-[10px] text-[#d48c8c] uppercase tracking-wider block">
                        {wish.relationship}
                      </span>
                    </div>
                  </div>
                  <Heart className="w-4 h-4 text-[#e29595]" />
                </div>

                <p className="font-serif-display text-sm text-[#6d4c4c] leading-relaxed italic">
                  "{wish.message}"
                </p>
              </div>

              <div className="mt-4 pt-2 text-right">
                <span className="font-sans-clean text-[10px] text-[#6d4c4c]/60">
                  {wish.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
