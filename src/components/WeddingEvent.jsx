
import React from 'react';
import { motion } from 'framer-motion';
import { INVITE } from '../config';

const WeddingEvents = () => (
  <section
    id="events"
    className="wedding-section px-6 py-24 text-center sm:py-32"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-2xl"
    >
      <p className="section-kicker">Details of the blessed days</p>

      <h2 className="mt-5 font-script text-5xl text-ivory sm:text-7xl">
        Wedding Celebrations
      </h2>

      <div className="gold-divider mt-8">✦</div>

      <div className="mt-14 space-y-10">
        {INVITE.events.map((event, index) => (
          <motion.article
            key={event.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="relative border border-gold/40 px-6 py-10 sm:px-12 sm:py-14"
          >
            <div className="absolute inset-[7px] border border-gold/15" />

            <div className="relative">
              <p className="font-serif text-xs tracking-[0.3em] text-gold">
                {event.number}
              </p>

              <h3 className="mt-5 font-script text-5xl text-ivory sm:text-6xl">
                {event.title}
              </h3>

              <p className="mt-7 font-serif text-3xl italic text-gold-light sm:text-4xl">
                {event.time}
              </p>

              <p className="mt-5 font-serif text-xs uppercase tracking-[0.2em] text-muted">
                {event.date}
              </p>

              <div className="gold-divider my-7">✦</div>

              <p className="font-serif text-base text-ivory/85">
                {event.venue}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
);

export default WeddingEvents;
