import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const ChristianHero = () => (
  <MotionConfig reducedMotion="user">
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-100/50 via-rose-bg to-rose-bg" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl px-6 pb-16 pt-32 text-center md:pt-44"
      >
        {/* Arched double frame */}
        <div className="pointer-events-none absolute inset-0 rounded-t-[999px] border border-gold/40" />
        <div className="pointer-events-none absolute inset-3 rounded-t-[999px] border border-gold/20" />

        <motion.div variants={item}>
          <svg
            viewBox="0 0 24 36"
            className="mx-auto h-9 w-6 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M12 1v34M2 11h20" />
          </svg>
        </motion.div>

        <motion.div variants={item} className="mt-8">
          <p className="mx-auto max-w-md font-serif text-lg font-light italic leading-relaxed text-rose-800 md:text-2xl">
            “So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”
          </p>
          <span className="mt-4 block font-serif text-xs font-semibold uppercase tracking-[0.4em] text-gold-dark">
            Matthew 19:6
          </span>
        </motion.div>

        <motion.div variants={item} className="mx-auto my-8 h-px w-16 bg-gold/50" />

        <motion.h1
          variants={item}
          className="font-cursive text-[clamp(4.5rem,17vw,9rem)] leading-[0.95] text-rose-900"
        >
          Ninan
        </motion.h1>
        <motion.span
          variants={item}
          className="block font-cursive text-[clamp(2.5rem,9vw,4.5rem)] leading-none text-gold"
        >
          &amp;
        </motion.span>
        <motion.h1
          variants={item}
          className="font-cursive text-[clamp(4.5rem,17vw,9rem)] leading-[0.95] text-rose-900"
        >
          Anu
        </motion.h1>

        <motion.div variants={item} className="mt-10 space-y-3">
          <p className="font-serif text-xs uppercase tracking-[0.5em] text-gold-dark">Saturday</p>
          <p className="font-serif text-3xl font-light tracking-[0.25em] text-rose-900 md:text-5xl md:tracking-[0.3em]">
            11 · 07 · 2026
          </p>
          <p className="font-serif text-[11px] uppercase tracking-[0.3em] text-rose-800 md:text-sm md:tracking-[0.45em]">
            LA Mirage Convention Center
            <br />
            Koratty, Ernakulam
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-serif text-[10px] uppercase tracking-[0.5em] text-gold-dark">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="h-12 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  </MotionConfig>
);

export default ChristianHero;