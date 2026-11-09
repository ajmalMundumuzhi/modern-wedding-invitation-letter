
import React from 'react';
import { motion } from 'framer-motion';
import { INVITE } from '../config';

const OurFamilies = () => (
  <section
    id="families"
    className="wedding-section border-t border-gold/15 px-6 py-24 text-center sm:py-32"
  >
    <div className="mx-auto max-w-3xl">
      <p className="section-kicker">With the blessings of our families</p>

      <h2 className="mt-5 font-script text-6xl text-ivory sm:text-7xl">
        Our Families
      </h2>

      <div className="gold-divider mt-8">✦</div>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-8">
        {INVITE.families.map((family, index) => (
          <motion.article
            key={family.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="border border-gold/35 px-6 py-10 sm:px-8"
          >
            <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-gold">
              {index === 0 ? 'The Bride' : 'The Groom'}
            </p>

            <h3 className="mt-6 font-script text-5xl text-ivory">
              {family.name}
            </h3>

            <p className="mt-5 font-serif text-xs italic text-gold-light">
              {family.relation}
            </p>

            <p className="mt-3 font-serif text-lg leading-7 text-ivory/90">
              {family.parents}
            </p>

            <div className="gold-divider my-6">✦</div>

            <p className="font-serif text-sm leading-7 text-muted">
              {family.home}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default OurFamilies;
