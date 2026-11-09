
import React from 'react';
import { motion } from 'framer-motion';
import { INVITE, PHOTOS } from '../config';

const HeroInvitation = () => (
  <section
    id="home"
    className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-wine px-6 py-24 text-center"
  >
    <img
      src={PHOTOS[0].src}
      alt={PHOTOS[0].alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: PHOTOS[0].pos }}
    />

    <div className="absolute inset-0 bg-gradient-to-b from-[#17050bd9] via-[#250811a8] to-[#17050bf2]" />

    <div className="gold-frame absolute inset-5 sm:inset-8" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative z-10 mx-auto max-w-2xl"
    >
      <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold-light">
        {INVITE.arabic}
      </p>

      <p className="section-kicker mt-12">Together with our families</p>

      <h1 className="mt-7 font-script text-6xl leading-tight text-white sm:text-8xl">
        {INVITE.bride}
      </h1>

      <p className="my-2 font-serif text-3xl italic text-gold">&</p>

      <h2 className="font-script text-5xl leading-tight text-white sm:text-7xl">
        {INVITE.groom}
      </h2>

      <div className="gold-divider mt-10">✦</div>

      <p className="mt-7 font-serif text-xs uppercase tracking-[0.3em] text-gold-light">
        {INVITE.weekday} · {INVITE.dateNumeric}
      </p>

      <p className="mt-5 font-serif text-sm italic tracking-wide text-white/75">
        Cordially invite you to celebrate their wedding
      </p>

      <a
        href="#events"
        className="mt-12 inline-block border-b border-gold/60 pb-2 font-serif text-[10px] uppercase tracking-[0.3em] text-gold-light transition-colors hover:text-white"
      >
        Discover the celebration
      </a>
    </motion.div>
  </section>
);

export default HeroInvitation;
