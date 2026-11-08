
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AdvancedRose from './AdvancedRose';

const Hero = () => (
  <MotionConfig reducedMotion="user">
    <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden bg-rose-bg px-5 py-28">
      <div className="absolute inset-8 border border-gold/15 md:inset-12" />
      <div className="absolute inset-10 border border-gold/10 md:inset-16" />

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-rose-200/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: 'backOut' }}
          className="mx-auto mb-10 flex justify-center"
        >
          <AdvancedRose className="h-24 w-24 md:h-32 md:w-32" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-xs uppercase tracking-[0.5em] text-gold-dark"
        >
          A Promise Before God
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10"
        >
          <h1 className="font-cursive text-[clamp(5rem,14vw,11rem)] leading-[0.9] text-rose-950">
            Ninan
          </h1>

          <span className="my-5 block font-cursive text-6xl text-gold md:text-8xl">
            &
          </span>

          <h1 className="font-cursive text-[clamp(5rem,14vw,11rem)] leading-[0.9] text-rose-950">
            Anu
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mx-auto my-12 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <p className="font-serif text-2xl font-light tracking-[0.25em] text-rose-900 md:text-4xl">
            11 · 07 · 2026
          </p>

          <p className="mt-5 font-serif text-[10px] uppercase tracking-[0.35em] text-gold-dark md:text-xs">
            LA Mirage Convention Center
          </p>

          <p className="mt-2 font-serif text-xs italic text-rose-800/60">
            Koratty, Ernakulam
          </p>
        </motion.div>

        <motion.a
          href="#our-story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-3 text-gold-dark"
        >
          <span className="font-serif text-[9px] uppercase tracking-[0.4em]">
            Discover Our Story
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} strokeWidth={1} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  </MotionConfig>
);

export default Hero;
