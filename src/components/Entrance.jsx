
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Entrance = ({ onStartOpen, opening = false }) => {
  const [clicked, setClicked] = useState(false);

  const handleOpen = () => {
    if (clicked || opening) return;

    setClicked(true);
    onStartOpen?.();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <main
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Open wedding invitation"
      className="relative flex min-h-[100svh] cursor-pointer items-center justify-center overflow-hidden bg-[#21070d] px-6 py-12 text-center outline-none"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(116,42,57,0.3),transparent_65%)]" />

      <div className="pointer-events-none absolute inset-5 border border-gold/20 sm:inset-8">
        <div className="absolute inset-2 border border-gold/10" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center"
        animate={
          opening
            ? { opacity: 0, scale: 0.96, y: -12 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.p
          className="font-serif text-[10px] uppercase tracking-[0.55em] text-gold/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: opening ? 0 : 1, y: opening ? -8 : 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          Together with their families
        </motion.p>

        <motion.div
          className="my-14 flex flex-col items-center sm:my-16"
          animate={
            opening
              ? { scale: 1.05, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-6xl font-light italic tracking-wide leading-tight text-ivory sm:text-7xl">
  Zainulabidheen
</p>

<p className="mt-1 font-serif text-sm italic tracking-[0.25em] text-gold/90">
  K.P
</p>

<p className="my-4 font-serif text-3xl font-light italic text-gold">
  &
</p>

<p className="font-serif text-7xl font-light italic tracking-wide leading-tight text-ivory sm:text-8xl">
  Sana Ek
</p>

          <div className="gold-divider mt-8 text-gold/80">
            ✦
          </div>
        </motion.div>

        <motion.p
          className="mt-2 font-serif text-[10px] uppercase tracking-[0.45em] text-gold/80"
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          A celebration of love
        </motion.p>

        <motion.p
          className="mt-16 font-serif text-[9px] uppercase tracking-[0.4em] text-muted/80"
          animate={
            opening
              ? { opacity: 0 }
              : { opacity: [0.45, 0.9, 0.45] }
          }
          transition={{
            duration: 2.8,
            repeat: opening ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        >
          Tap anywhere to enter
        </motion.p>
      </motion.div>

      <div className="pointer-events-none absolute bottom-12 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-gold/40 to-transparent" />
    </main>
  );
};

export default Entrance;
