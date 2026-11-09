
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { INVITE, PHOTOS } from '../config';

const getCountdown = () => {
  const target = new Date(2026, 11, 3, 0, 0, 0).getTime();
  const difference = target - Date.now();

  if (difference <= 0) {
    return {
      expired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    expired: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownItem = ({ value, label }) => (
  <div className="flex min-w-0 flex-1 flex-col items-center border-r border-gold/25 last:border-r-0">
    <span className="font-serif text-3xl tabular-nums text-gold-light sm:text-4xl">
      {String(value).padStart(2, '0')}
    </span>

    <span className="mt-2 font-serif text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]">
      {label}
    </span>
  </div>
);

const WeddingCountdown = () => {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (countdown.expired) {
    return (
      <p className="mt-10 font-script text-4xl text-gold-light">
        The Wedding Day Is Here!
      </p>
    );
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-md">
      <p className="section-kicker mb-5">
        Counting down to forever
      </p>

      <div className="grid grid-cols-4 border border-gold/35 bg-black/10 px-3 py-5 sm:px-5">
        <CountdownItem value={countdown.days} label="Days" />
        <CountdownItem value={countdown.hours} label="Hours" />
        <CountdownItem value={countdown.minutes} label="Minutes" />
        <CountdownItem value={countdown.seconds} label="Seconds" />
      </div>
    </div>
  );
};

const HeroInvitation = ({ isRevealed = false }) => (
  <section
    id="home"
    className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-wine px-6 py-24 text-center"
  >
    <motion.img
      src={PHOTOS[0].src}
      alt={PHOTOS[0].alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: PHOTOS[0].pos }}
      initial={{ scale: 1.16 }}
      animate={{
        scale: isRevealed ? 1.03 : 1.16,
      }}
      transition={{
        duration: 3.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    />

    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-[#17050bd9] via-[#250811a8] to-[#17050bf2]"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isRevealed ? 1 : 0.3 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    />

    <div className="gold-frame absolute inset-5 sm:inset-8" />

    <motion.div
      className="relative z-10 mx-auto max-w-2xl"
      initial={{ opacity: 0, y: 35 }}
      animate={
        isRevealed
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 35 }
      }
      transition={{
        duration: 1.5,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.p
        className="font-serif text-xs uppercase tracking-[0.4em] text-gold-light"
        initial={{ opacity: 0, y: 12 }}
        animate={
          isRevealed
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 12 }
        }
        transition={{ duration: 1, delay: 0.65 }}
      >
        {INVITE.arabic}
      </motion.p>

      <motion.p
        className="section-kicker mt-12"
        initial={{ opacity: 0, y: 15 }}
        animate={
          isRevealed
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 15 }
        }
        transition={{ duration: 1, delay: 0.9 }}
      >
        Together with our families
      </motion.p>

      <motion.h1
  className="mt-7 font-serif text-6xl font-light italic tracking-wide leading-tight text-white/90 sm:text-6xl"
  initial={{ opacity: 0, y: 20 }}
  animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 1.2, delay: 1.1 }}
>
  {INVITE.groom}
</motion.h1>

<motion.p
  className="my-3 font-serif text-3xl font-light italic text-gold"
  initial={{ opacity: 0, scale: 0.7 }}
  animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
  transition={{ duration: 1, delay: 1.35 }}
>
  &
</motion.p>

<motion.h2
  className="font-serif text-7xl font-light italic tracking-wide leading-tight text-white/80 sm:text-8xl"
  initial={{ opacity: 0, y: 20 }}
  animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 1.2, delay: 1.5 }}
>
  {INVITE.bride}
</motion.h2>

      <motion.div
        className="gold-divider mt-10"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: isRevealed ? 1 : 0,
          scaleX: isRevealed ? 1 : 0,
        }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        ✦
      </motion.div>

      <motion.p
        className="mt-7 font-serif text-xs uppercase tracking-[0.3em] text-gold-light"
        initial={{ opacity: 0, y: 12 }}
        animate={
          isRevealed
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 12 }
        }
        transition={{ duration: 1, delay: 1.9 }}
      >
        {INVITE.weekday} · {INVITE.dateNumeric}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={
          isRevealed
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 15 }
        }
        transition={{ duration: 1, delay: 2.1 }}
      >
        <WeddingCountdown />
      </motion.div>

      <motion.p
        className="mt-8 font-serif text-sm italic tracking-wide text-white/75"
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        Cordially invite you to celebrate their wedding
      </motion.p>

      <motion.a
        href="#events"
        className="mt-12 inline-block border-b border-gold/60 pb-2 font-serif text-[10px] uppercase tracking-[0.3em] text-gold-light transition-colors hover:text-white"
        initial={{ opacity: 0, y: 12 }}
        animate={
          isRevealed
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 12 }
        }
        transition={{ duration: 1, delay: 2.5 }}
      >
        Discover the celebration
      </motion.a>
    </motion.div>
  </section>
);

export default HeroInvitation;
