import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { EnvelopeWithFlowers } from './Envelope';
import { INVITE } from '../config';

const Entrance = ({ onOpen, onStartOpen }) => {
  const [opening, setOpening] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);
    onStartOpen?.();

    timer.current = setTimeout(() => {
      onOpen?.();
    }, 1500);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="paper-texture relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-12 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-10 h-64 w-64 rounded-full bg-blush/15 blur-3xl" />
          <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 flex w-full max-w-md flex-col items-center"
          animate={opening ? { opacity: 0, y: -25 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="font-serif text-xs uppercase tracking-[0.38em] text-sage-dark">
            In the name of Allah
          </p>

          <h1 className="mt-5 font-script text-[clamp(3rem,11vw,5rem)] leading-[0.95] text-plum">
            {INVITE.bride}
          </h1>

          <span className="my-2 font-serif text-3xl italic text-gold">
            &
          </span>

          <h2 className="font-script text-[clamp(2.6rem,9vw,4.3rem)] leading-none text-ink">
            {INVITE.groom}
          </h2>

          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-12 bg-gold/70" />
            <span className="font-serif text-sm uppercase tracking-[0.3em] text-ink/60">
              Save the Date
            </span>
            <span className="h-px w-12 bg-gold/70" />
          </div>

          <p className="mt-3 font-serif text-lg tracking-[0.2em] text-ink/75">
            THURSDAY · 03 DECEMBER 2026
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={handleOpen}
          disabled={opening}
          aria-label="Open wedding invitation"
          className="relative z-10 mt-12 block w-[min(78vw,350px)] cursor-pointer outline-offset-8 focus-visible:outline-2 focus-visible:outline-plum disabled:cursor-default"
          animate={
            opening
              ? { scale: 1.04, y: -12, opacity: 0 }
              : { y: [0, -8, 0] }
          }
          transition={
            opening
              ? { duration: 0.7 }
              : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <EnvelopeWithFlowers open={opening} />
        </motion.button>

        <motion.div
          className="relative z-10 mt-9"
          animate={{ opacity: opening ? 0 : [0.5, 1, 0.5] }}
          transition={
            opening
              ? { duration: 0.3 }
              : { duration: 2.5, repeat: Infinity }
          }
        >
          <p className="font-serif text-sm uppercase tracking-[0.35em] text-plum">
            {opening ? 'Opening your invitation' : 'Tap to open'}
          </p>
          <div className="mx-auto mt-3 h-px w-16 bg-gold/60" />
        </motion.div>

        <p className="absolute bottom-7 font-script text-3xl text-sage-dark">
          Insha Allah
        </p>
      </main>
    </MotionConfig>
  );
};

export default Entrance;