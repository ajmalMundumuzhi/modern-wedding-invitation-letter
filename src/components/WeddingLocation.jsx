
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { INVITE } from '../config';

const WeddingLocation = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INVITE.venue)}`;

  return (
    <section
      id="location"
      className="wedding-section border-t border-gold/15 px-6 py-28 text-center sm:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-xl"
      >
        <p className="section-kicker">Join us at</p>

        <h2 className="mt-6 font-script text-6xl text-ivory sm:text-7xl">
          Wedding Location
        </h2>

        <div className="gold-divider mt-9">✦</div>

        <div className="mx-auto mt-12 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
          <MapPin size={25} strokeWidth={1} />
        </div>

        <p className="mt-8 font-serif text-2xl text-gold-light">
          {INVITE.venue}
        </p>

        <p className="mt-4 font-serif text-sm leading-7 text-muted">
          We look forward to welcoming you and celebrating this special day
          together.
        </p>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 border border-gold/50 px-8 py-4 font-serif text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-wine"
        >
          Get Directions
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </section>
  );
};

export default WeddingLocation;
