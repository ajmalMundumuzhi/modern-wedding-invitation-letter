
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import AdvancedRose from './AdvancedRose';

const milestones = [
  {
    year: '2020',
    title: 'The Sparks Begin',
    subtitle: 'Where it all started',
    text: 'In the quiet moments of shared conversation, we found a heartbeat that resonated with our own. A simple friendship blossomed into a love that feels like destiny.'
  },
  {
    year: '2023',
    title: 'Growing Together',
    subtitle: 'A journey of understanding',
    text: "Through every season, we've built a foundation of trust, laughter, and unwavering support. Every memory created has been a step towards this beautiful tomorrow."
  },
  {
    year: '2026',
    title: 'The Promise',
    subtitle: 'The beginning of forever',
    text: 'Now, we stand at the threshold of a lifetime together. With hearts full of hope and a promise that knows no bounds, we begin our greatest adventure yet.'
  }
];

const StoryMilestone = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 45 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.9 }}
    className={`relative grid grid-cols-1 items-center gap-8 pb-24 md:grid-cols-[1fr_140px_1fr] md:gap-12 ${
      index % 2 !== 0 ? 'md:[direction:rtl]' : ''
    }`}
  >
    <div className="relative overflow-hidden py-6 text-center md:[direction:ltr] md:text-left">
      <span className="pointer-events-none absolute -left-3 -top-12 font-serif text-[11rem] leading-none text-rose-100/70 md:-left-6 md:text-[14rem]">
        {item.year}
      </span>

      <div className="relative z-10">
        <p className="font-serif text-[9px] font-semibold uppercase tracking-[0.4em] text-gold-dark">
          {item.subtitle}
        </p>

        <h3 className="mt-6 font-cursive text-6xl text-rose-950 md:text-7xl">
          {item.title}
        </h3>

        <div className="mx-auto my-7 h-px w-16 bg-gold/50 md:mx-0" />

        <p className="mx-auto max-w-md font-serif text-base font-light leading-[2] text-rose-800/75 md:mx-0 md:text-lg">
          {item.text}
        </p>
      </div>
    </div>

    <div className="relative flex items-center justify-center md:[direction:ltr]">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-gold/30 bg-[#fffafa] shadow-[0_0_0_12px_rgba(184,150,62,0.04)]">
        <div className="absolute inset-3 rounded-full border border-gold/20" />
        <span className="font-serif text-3xl font-light text-rose-900">
          {item.year}
        </span>
      </div>

      {index !== 2 && (
        <div className="absolute left-1/2 top-full hidden h-28 w-px -translate-x-1/2 bg-gradient-to-b from-gold/40 to-gold/10 md:block" />
      )}
    </div>

    <div className="flex justify-center md:[direction:ltr]">
      <div className="relative flex aspect-square w-full max-w-[290px] items-center justify-center rounded-full border border-gold/20 bg-white/30">
        <div className="absolute inset-5 rounded-full border border-gold/15" />
        <div className="absolute inset-10 rounded-full border border-gold/10" />

        <span className="font-cursive text-7xl text-rose-200">
          {['N', '&', 'A'][index]}
        </span>

        <div className="absolute bottom-9 font-serif text-[8px] uppercase tracking-[0.4em] text-gold-dark">
          Chapter {index + 1}
        </div>
      </div>
    </div>
  </motion.article>
);

const OurStory = () => (
  <MotionConfig reducedMotion="user">
    <section id="our-story" className="relative overflow-hidden bg-[#fffafa] px-5 py-32 md:py-44">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-rose-200/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-28 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <AdvancedRose className="h-20 w-20 md:h-24 md:w-24" delay={0.2} />
          </motion.div>

          <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.5em] text-gold-dark">
            A Walk Through Time
          </p>

          <h2 className="mt-6 font-cursive text-7xl text-rose-950 md:text-9xl">
            Our Love Story
          </h2>

          <div className="mx-auto mt-8 h-px w-20 bg-gold/50" />

          <p className="mx-auto mt-7 max-w-lg font-serif text-base font-light leading-relaxed text-rose-800/60">
            Every beautiful story has a beginning. Here are a few chapters of ours.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-24 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gold/10 via-gold/40 to-transparent md:block" />

          {milestones.map((item, index) => (
            <StoryMilestone key={item.year} item={item} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="font-cursive text-5xl text-gold-dark md:text-7xl">
            To a lifetime of chapters.
          </p>
        </div>
      </div>
    </section>
  </MotionConfig>
);

export default OurStory;
