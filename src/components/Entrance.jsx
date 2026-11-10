
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
      <img
        src="/bg.jpeg"
        alt=""
        className="absolute inset-0 object-cover w-full h-full pointer-events-none opacity-40"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#21070d]/50" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(116,42,57,0.25),transparent_70%)]" />

      <div className="absolute border pointer-events-none inset-5 border-gold/20 sm:inset-8">
        <div className="absolute border inset-2 border-gold/10" />
      </div>

      <div className="absolute top-0 w-px h-40 -translate-x-1/2 pointer-events-none left-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto"
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
          className="flex flex-col items-center my-14 sm:my-16"
          animate={
            opening
              ? { scale: 1.05, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-6xl italic font-light leading-tight tracking-wide text-ivory sm:text-7xl">
            Zain
          </p>

          <p className="my-4 font-serif text-3xl italic font-light text-gold">
            &
          </p>

          <p className="font-serif italic font-light leading-tight tracking-wide text-7xl text-ivory sm:text-8xl">
            Sana
          </p>

          <div className="mt-8 gold-divider text-gold/80">
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

      <div className="absolute w-px h-10 -translate-x-1/2 pointer-events-none bottom-12 left-1/2 bg-gradient-to-b from-gold/40 to-transparent" />
    </main>
  );
};

export default Entrance;
