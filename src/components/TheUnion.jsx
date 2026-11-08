import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const Ornament = () => (
  <div className="mx-auto flex items-center justify-center gap-4" aria-hidden="true">
    <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
    <span className="h-2 w-2 rotate-45 border border-gold" />
    <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
  </div>
);

const TheUnion = () => (
  <MotionConfig reducedMotion="user">
    <section className="relative overflow-hidden bg-rose-bg px-6 py-28 md:py-40">
      <div className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/40" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p variants={item} className="font-serif text-xs font-semibold uppercase tracking-[0.5em] text-gold-dark">
          A New Beginning
        </motion.p>

        <motion.h2 variants={item} className="mt-6 font-cursive text-7xl text-rose-900 md:text-9xl">
          The Union
        </motion.h2>

        <motion.div variants={item} className="my-10">
          <Ornament />
        </motion.div>

        <motion.p variants={item} className="font-serif text-xl font-light leading-relaxed text-rose-800 md:text-2xl">
          With the grace of God and the blessings of our beloved families, we invite you to share in the joy of our
          wedding celebration. We look forward to beginning our lives together surrounded by those we love.
        </motion.p>

        <motion.div variants={item} className="my-12">
          <Ornament />
        </motion.div>

        <motion.p variants={item} className="font-serif text-2xl font-light italic text-rose-900 md:text-3xl">
          “Two families united, two hearts bound.”
        </motion.p>
      </motion.div>
    </section>
  </MotionConfig>
);

export default TheUnion;