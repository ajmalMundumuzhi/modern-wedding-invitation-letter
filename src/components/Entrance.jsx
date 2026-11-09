import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { EnvelopeWithFlowers } from './Envelope';
import { INVITE } from '../config';

const Entrance = ({ onOpen, onStartOpen }) => {
  const [opening, setOpening] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onStartOpen?.(); // inside the click, so browsers allow the music
    timer.current = setTimeout(onOpen, 1400);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="flex min-h-[100svh] flex-col items-center justify-center bg-white px-6 py-10 text-center">
        <motion.header animate={{ opacity: opening ? 0 : 1 }} transition={{ duration: 0.6 }}>
          <h1 className="font-script text-[clamp(2.4rem,9vw,3.4rem)] leading-none text-ink">
            {INVITE.groom} – {INVITE.bride}
          </h1>
          <p className="mt-4 font-serif text-xl tracking-[0.22em] text-ink/70">{INVITE.dateNumeric}</p>
        </motion.header>

        <button
          type="button"
          onClick={handleOpen}
          disabled={opening}
          aria-label="Open the invitation"
          className="mb-20 mt-16 block w-[min(70vw,20rem)] cursor-pointer outline-offset-[18px] focus-visible:outline-2 focus-visible:outline-plum/50"
        >
          <motion.div
            style={{ rotate: -4 }}
            animate={opening ? { y: 0 } : { y: [0, -7, 0] }}
            transition={opening ? { duration: 0.4 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <EnvelopeWithFlowers open={opening} />
          </motion.div>
        </button>

        <motion.p
          aria-hidden="true"
          animate={{ opacity: opening ? 0 : [0.55, 1, 0.55] }}
          transition={opening ? { duration: 0.4 } : { duration: 2.6, repeat: Infinity }}
          className="font-serif text-sm uppercase tracking-[0.28em] text-ink/80"
        >
          Click to open…
        </motion.p>
      </main>
    </MotionConfig>
  );
};

export default Entrance;