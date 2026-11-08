
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  MapPin,
  Heart,
  ArrowUpRight
} from 'lucide-react';

const families = [
  {
    initial: 'N',
    name: 'Ninan',
    relation: 'Beloved Son of',
    parents: 'Mrs. Bindu Shantu',
    secondParent: 'Mr. Shantu Padayattil',
    address: 'Padayattil House, Angamaly, Ernakulam'
  },
  {
    initial: 'A',
    name: 'Anu',
    relation: 'Beloved Daughter of',
    parents: 'Mrs. Litty Paul',
    secondParent: 'Mr. Paulachan T.P',
    address: 'Thekkanath Pulickalan House, Besleham, Karukutty, Ernakulam'
  }
];

const FamilyColumn = ({ family, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: index * 0.15 }}
    className="relative flex flex-col items-center text-center"
  >
    <span className="font-serif text-[10px] uppercase tracking-[0.45em] text-gold-dark">
      {index === 0 ? 'The Groom' : 'The Bride'}
    </span>

    <div className="relative mt-8 flex h-28 w-28 items-center justify-center rounded-full border border-gold/40">
      <div className="absolute inset-2 rounded-full border border-gold/20" />
      <span className="font-cursive text-7xl text-rose-900">
        {family.initial}
      </span>
    </div>

    <h3 className="mt-8 font-cursive text-7xl text-rose-950 md:text-8xl">
      {family.name}
    </h3>

    <div className="my-8 flex items-center gap-3">
      <span className="h-px w-8 bg-gold/40" />
      <Heart size={13} className="text-gold-dark" />
      <span className="h-px w-8 bg-gold/40" />
    </div>

    <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.4em] text-gold-dark">
      {family.relation}
    </p>

    <div className="mt-5 space-y-2">
      <p className="font-serif text-xl text-rose-950">
        {family.parents}
      </p>
      <p className="font-serif text-xl text-rose-950">
        {family.secondParent}
      </p>
    </div>

    <div className="mt-8 flex max-w-xs items-start gap-3 text-left">
      <MapPin size={16} className="mt-1 shrink-0 text-gold-dark" />
      <p className="font-serif text-sm italic leading-relaxed text-rose-800/60">
        {family.address}
      </p>
    </div>
  </motion.div>
);

const FamilyDetails = () => (
  <MotionConfig reducedMotion="user">
    <section id="families" className="relative overflow-hidden bg-[#f7f0e9] px-5 py-32 md:py-44">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-rose-200/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-28 max-w-2xl text-center">
          <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.5em] text-gold-dark">
            The People Behind Our Journey
          </p>

          <h2 className="mt-6 font-cursive text-7xl text-rose-950 md:text-9xl">
            Two Families
          </h2>

          <p className="mx-auto mt-7 max-w-lg font-serif text-base font-light leading-[1.9] text-rose-800/70">
            With the blessings of our parents and the love of our families, we joyfully begin this new chapter.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-[1fr_auto_1fr] md:gap-12">
          <FamilyColumn family={families[0]} index={0} />

          <div className="flex items-center justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-[#f7f0e9]">
              <span className="font-cursive text-6xl text-gold-dark">&</span>
              <div className="absolute -left-8 h-px w-8 bg-gold/30 md:hidden" />
              <div className="absolute -right-8 h-px w-8 bg-gold/30 md:hidden" />
            </div>
          </div>

          <FamilyColumn family={families[1]} index={1} />
        </div>

        <div className="mt-32 border-y border-gold/25 py-16">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.5em] text-gold-dark">
                Stay Connected
              </p>
              <h3 className="mt-5 font-cursive text-6xl text-rose-950 md:text-7xl">
                Contact Us
              </h3>
              <p className="mt-5 max-w-md font-serif text-sm font-light leading-relaxed text-rose-800/70">
                For any questions or assistance regarding the celebration, please feel free to reach out.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="tel:+919446990357"
                className="group flex items-center justify-between border-b border-gold/20 py-5 transition-colors hover:border-gold/60"
              >
                <div className="flex items-center gap-5">
                  <Phone size={20} className="text-gold-dark" />
                  <div>
                    <p className="font-serif text-[9px] uppercase tracking-[0.35em] text-gold-dark">
                      Call Us
                    </p>
                    <p className="mt-2 font-serif text-lg text-rose-950">
                      +91 9446990357
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-gold-dark transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919446990357?text=Hello!%20Regarding%20the%20wedding..."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-gold/20 py-5 transition-colors hover:border-gold/60"
              >
                <div className="flex items-center gap-5">
                  <MessageCircle size={20} className="text-gold-dark" />
                  <div>
                    <p className="font-serif text-[9px] uppercase tracking-[0.35em] text-gold-dark">
                      WhatsApp
                    </p>
                    <p className="mt-2 font-serif text-lg text-rose-950">
                      Start a Conversation
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-gold-dark transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MotionConfig>
);

export default FamilyDetails;
