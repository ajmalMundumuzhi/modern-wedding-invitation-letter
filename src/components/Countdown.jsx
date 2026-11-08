
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

const TARGET_DATE = new Date('2026-07-11T15:00:00').getTime();

const getTimeLeft = () => {
  const difference = TARGET_DATE - Date.now();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference % 86400000) / 3600000),
    minutes: Math.floor((difference % 3600000) / 60000),
    seconds: Math.floor((difference % 60000) / 1000)
  };
};

const units = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' }
];

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-[#f5eee8] py-28 md:py-40">
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gold/15 md:left-[8%]" />
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gold/15 md:right-[8%]" />

        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full border border-gold/10" />
        <div className="absolute -right-24 top-24 h-64 w-64 rounded-full border border-gold/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.5em] text-gold-dark">
                The Beginning of Forever
              </p>

              <h2 className="mt-8 max-w-lg font-cursive text-7xl leading-[1.05] text-rose-950 md:text-8xl">
                Every Second
                <span className="block text-rose-400">Brings Us Closer</span>
              </h2>

              <div className="mt-10 flex items-center gap-5">
                <div className="h-px w-14 bg-gold/60" />
                <span className="font-serif text-xs uppercase tracking-[0.3em] text-rose-800/60">
                  Ninan & Anu
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="border-y border-gold/30 py-10 md:py-14">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-serif text-[10px] uppercase tracking-[0.4em] text-gold-dark">
                    Our Wedding Day
                  </span>
                  <span className="font-serif text-sm text-rose-800">
                    11 / 07 / 2026
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {timeLeft ? (
                    <motion.div
                      key="countdown"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4"
                    >
                      {units.map((unit, index) => (
                        <div key={unit.key} className="relative">
                          <div className="flex items-start">
                            <motion.span
                              key={timeLeft[unit.key]}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="font-serif text-6xl font-light leading-none tracking-tighter text-rose-950 md:text-7xl"
                            >
                              {String(timeLeft[unit.key]).padStart(2, '0')}
                            </motion.span>
                          </div>

                          <p className="mt-5 font-serif text-[9px] font-semibold uppercase tracking-[0.35em] text-gold-dark">
                            {unit.label}
                          </p>

                          {index !== 3 && (
                            <div className="absolute -right-2 top-1 hidden h-12 w-px bg-gold/20 md:block" />
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="completed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-5"
                    >
                      <p className="font-cursive text-6xl text-rose-900 md:text-8xl">
                        Forever has begun.
                      </p>
                      <p className="mt-5 font-serif text-sm italic text-rose-800/60">
                        July 11, 2026 · A lifetime of love and memories.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-7 flex justify-between font-serif text-[9px] uppercase tracking-[0.3em] text-rose-800/50">
                <span>A Day to Remember</span>
                <span>With God's Blessings</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default Countdown;
