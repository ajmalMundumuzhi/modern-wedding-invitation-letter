
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INVITE } from '../config';

const Entrance = ({ onOpen, onStartOpen }) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);
    onStartOpen?.();

    setTimeout(() => onOpen?.(), 1100);
  };

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#21070d] px-6 py-12 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(116,42,57,0.32),transparent_65%)]" />

      <div className="pointer-events-none absolute inset-5 border border-gold/20 sm:inset-8">
        <div className="absolute inset-2 border border-gold/10" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center"
        animate={
          opening
            ? { opacity: 0, y: -20, scale: 1.03 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{ duration: 0.7 }}
      >
        <p className="font-serif text-[10px] uppercase tracking-[0.4em] text-gold">
          {INVITE.arabic}
        </p>

        <div className="my-12 flex flex-col items-center">
          <p className="font-script text-7xl text-ivory sm:text-8xl">
            S<span className="mx-2 text-gold">&</span>Z
          </p>

          <div className="gold-divider mt-5">✦</div>
        </div>

        <p className="font-serif text-xs uppercase tracking-[0.35em] text-gold">
          {INVITE.kicker}
        </p>

        <h1 className="mt-6 font-script text-4xl leading-tight text-ivory sm:text-5xl">
          {INVITE.bride}
        </h1>

        <p className="my-2 font-serif text-xl italic text-gold">&</p>

        <h2 className="font-script text-4xl leading-tight text-ivory sm:text-5xl">
          {INVITE.groom}
        </h2>

        <p className="mt-8 font-serif text-[10px] uppercase tracking-[0.3em] text-muted">
          {INVITE.weekday} · {INVITE.dateNumeric}
        </p>

        <motion.button
          type="button"
          onClick={handleOpen}
          disabled={opening}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-14 border border-gold/60 px-10 py-4 font-serif text-[10px] uppercase tracking-[0.35em] text-gold transition-colors hover:bg-gold hover:text-wine disabled:opacity-60"
        >
          {opening ? 'Opening Invitation' : 'See Invitation'}
        </motion.button>

        <p className="mt-8 font-serif text-xs italic tracking-[0.2em] text-muted">
          Insha Allah
        </p>
      </motion.div>
    </main>
  );
};

export default Entrance;
