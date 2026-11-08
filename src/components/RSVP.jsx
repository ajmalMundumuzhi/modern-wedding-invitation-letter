
import React, { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  MessageCircle,
  Heart,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

const RSVP = () => {
  const [response, setResponse] = useState(null);

  const whatsappUrl =
    "https://wa.me/61468898137?text=I'll%20be%20attending%20the%20wedding!";

  const handleYes = () => {
    setResponse('yes');

    confetti({
      particleCount: 120,
      spread: 75,
      startVelocity: 35,
      origin: { y: 0.65 },
      colors: ['#b8963e', '#f4dca8', '#d49a9a', '#7a3e0f']
    });
  };

  const handleNo = () => {
    setResponse('no');
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="rsvp" className="relative overflow-hidden bg-[#f5eee8] px-5 py-32 md:py-44">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-rose-200/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid overflow-hidden border border-gold/25 bg-[#fffafa] shadow-[0_30px_100px_rgba(122,62,15,0.08)] md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#713e48] px-8 py-16 text-center text-[#f9e8d0] md:px-12">
              <div className="absolute inset-5 border border-gold/30" />
              <div className="absolute inset-8 border border-white/10" />

              <div className="relative z-10">
                <Heart size={24} strokeWidth={1} className="mx-auto text-[#e5c58d]" />

                <p className="mt-10 font-serif text-[9px] uppercase tracking-[0.5em] text-[#e5c58d]">
                  You Are Invited
                </p>

                <h2 className="mt-8 font-cursive text-7xl leading-tight md:text-8xl">
                  Ninan
                  <span className="my-2 block text-5xl text-[#e5c58d]">&</span>
                  Anu
                </h2>

                <div className="mx-auto my-10 h-px w-16 bg-[#e5c58d]/60" />

                <p className="font-serif text-xs uppercase tracking-[0.35em] text-[#f5dfc1]">
                  July 11, 2026
                </p>

                <p className="mt-3 font-serif text-[9px] uppercase tracking-[0.25em] text-white/60">
                  A Celebration of Love
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-7 py-16 md:px-14 lg:px-20">
              <AnimatePresence mode="wait">
                {!response ? (
                  <motion.div
                    key="initial"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.45em] text-gold-dark">
                      Kindly Respond
                    </p>

                    <h3 className="mt-7 font-cursive text-6xl leading-tight text-rose-950 md:text-7xl">
                      Will You Join Us?
                    </h3>

                    <p className="mt-7 max-w-sm font-serif text-base font-light leading-[1.9] text-rose-800/70">
                      Your presence would make our special day even more meaningful. We hope to celebrate this beautiful occasion with you.
                    </p>

                    <div className="mt-12 space-y-4">
                      <button
                        type="button"
                        onClick={handleYes}
                        className="group flex w-full items-center justify-between bg-rose-900 px-6 py-5 text-left text-[#f9e8d0] transition-all duration-300 hover:bg-[#713e48]"
                      >
                        <span className="font-serif text-[10px] font-semibold uppercase tracking-[0.3em]">
                          Joyfully Accept
                        </span>
                        <ArrowRight size={17} className="transition-transform group-hover:translate-x-2" />
                      </button>

                      <button
                        type="button"
                        onClick={handleNo}
                        className="group flex w-full items-center justify-between border border-gold/30 px-6 py-5 text-left text-rose-900 transition-all duration-300 hover:border-rose-900"
                      >
                        <span className="font-serif text-[10px] font-semibold uppercase tracking-[0.3em]">
                          Regretfully Decline
                        </span>
                        <ArrowRight size={17} className="transition-transform group-hover:translate-x-2" />
                      </button>
                    </div>
                  </motion.div>
                ) : response === 'yes' ? (
                  <motion.div
                    key="accepted"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold-dark">
                      <CheckCircle2 size={27} strokeWidth={1.3} />
                    </div>

                    <p className="mt-8 font-serif text-[10px] uppercase tracking-[0.4em] text-gold-dark">
                      A Joyful Response
                    </p>

                    <h3 className="mt-5 font-cursive text-6xl text-rose-950 md:text-7xl">
                      Wonderful!
                    </h3>

                    <p className="mt-6 font-serif text-base font-light leading-relaxed text-rose-800/70">
                      We are delighted that you'll be joining us. Please send your confirmation through WhatsApp.
                    </p>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 flex items-center justify-between bg-[#713e48] px-6 py-5 text-[#f9e8d0] transition-colors hover:bg-rose-950"
                    >
                      <span className="font-serif text-[10px] font-semibold uppercase tracking-[0.3em]">
                        Confirm on WhatsApp
                      </span>
                      <MessageCircle size={19} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setResponse(null)}
                      className="mt-7 flex items-center gap-2 font-serif text-[9px] uppercase tracking-[0.3em] text-rose-800/50 hover:text-rose-900"
                    >
                      <RotateCcw size={13} />
                      Change Response
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="declined"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-400">
                      <XCircle size={27} strokeWidth={1.3} />
                    </div>

                    <p className="mt-8 font-serif text-[10px] uppercase tracking-[0.4em] text-gold-dark">
                      With Love
                    </p>

                    <h3 className="mt-5 font-cursive text-6xl text-rose-950 md:text-7xl">
                      We'll Miss You
                    </h3>

                    <p className="mt-6 font-serif text-base font-light leading-relaxed text-rose-800/70">
                      Thank you for letting us know. Although you cannot be there, you'll be remembered with love.
                    </p>

                    <button
                      type="button"
                      onClick={() => setResponse(null)}
                      className="mt-10 flex items-center gap-3 border-b border-gold/40 pb-3 font-serif text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-900 transition-colors hover:text-gold-dark"
                    >
                      <RotateCcw size={14} />
                      Change Response
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-12 text-center font-cursive text-4xl text-rose-900 md:text-5xl">
            With love and gratitude.
          </p>
        </div>
      </section>
    </MotionConfig>
  );
};

export default RSVP;
