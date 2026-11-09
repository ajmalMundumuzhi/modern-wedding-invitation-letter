
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X, MessageCircle, ArrowLeft } from 'lucide-react';
import { Bouquet } from './Florals';
import { CALL_NUMBER, INVITE, waLink } from '../config';

const Divider = () => (
  <div className="mx-auto flex items-center justify-center gap-3">
    <span className="h-px w-12 bg-gold/60" />
    <span className="text-gold">✦</span>
    <span className="h-px w-12 bg-gold/60" />
  </div>
);

const InviteDetails = ({ onBack }) => {
  const [response, setResponse] = useState(null);

  const acceptUrl = waLink(
    `Wedding RSVP - ${INVITE.bride} & ${INVITE.groom}\nResponse: Joyfully accepts the invitation.`
  );

  const chooseResponse = (value) => {
    setResponse(value);
  };

  return (
    <main className="paper-texture relative min-h-[100svh] overflow-hidden px-5 pb-20 pt-8 sm:pt-12">
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-blush/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[60%] h-72 w-72 rounded-full bg-sage/15 blur-3xl" />

      <div className="relative mx-auto max-w-lg">
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-2 font-serif text-xs uppercase tracking-[0.2em] text-plum transition-colors hover:text-ink"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to invitation
        </button>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mt-7 overflow-hidden border border-gold/30 bg-[#f3efea] shadow-sm"
        >
          <div className="pointer-events-none absolute inset-[3%] border border-gold/25" />

          <div className="relative flex min-h-44 items-center overflow-hidden px-7 py-9">
            <div className="relative z-10 max-w-[75%]">
              <p className="font-serif text-[9px] uppercase tracking-[0.3em] text-sage-dark sm:text-[10px]">
                We would love to celebrate with you
              </p>

              <h1 className="mt-4 font-serif text-3xl font-light leading-tight text-ink">
                Would You
              </h1>

              <p className="font-script text-[clamp(2.8rem,9vw,4rem)] leading-none text-plum">
                Join Us?
              </p>
            </div>

            <Bouquet className="pointer-events-none absolute -right-3 -top-5 w-[42%] opacity-90" />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-9 text-center"
        >
          <p className="font-script text-[clamp(2rem,7vw,3rem)] leading-tight text-plum">
            {INVITE.bride} & {INVITE.groom}
          </p>

          <p className="mt-3 font-serif text-[10px] uppercase tracking-[0.24em] text-sage-dark sm:text-xs">
            Thursday · 03 December 2026
          </p>

          <div className="mt-6">
            <Divider />
          </div>

          <p className="mx-auto mt-6 max-w-sm font-sans text-sm font-light leading-7 text-ink/70">
            We would be delighted to have you with us as we begin this
            beautiful journey together. Your presence would make our
            celebration even more special.
          </p>
        </motion.section>

        <section className="mt-12">
          <div className="mb-7 text-center">
            <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-sage-dark">
              Wedding celebrations
            </p>

            <h2 className="mt-2 font-script text-4xl text-plum">
              Where & When
            </h2>
          </div>

          <div className="space-y-4">
            {INVITE.events.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative border border-gold/30 bg-white/65 px-6 py-7 text-center"
              >
                <div className="pointer-events-none absolute inset-[7px] border border-gold/15" />

                <div className="relative">
                  <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-sage-dark">
                    {event.title}
                  </span>

                  <p className="mt-3 font-script text-4xl text-plum">
                    {event.time}
                  </p>

                  <p className="mt-2 font-serif text-sm uppercase tracking-[0.15em] text-ink/65">
                    {event.date}
                  </p>

                  <div className="mx-auto my-4 h-px w-12 bg-gold/50" />

                  <p className="font-sans text-sm leading-6 text-ink/80">
                    {event.venue}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-y border-gold/25 py-9 text-center">
          <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-sage-dark">
            With the blessings of our families
          </p>

          <h2 className="mt-3 font-script text-4xl text-plum">
            Our Families
          </h2>

          <div className="mt-8 space-y-9">
            {INVITE.families.map((family, index) => (
              <div key={family.name}>
                {index > 0 && (
                  <div className="mx-auto mb-8 h-px w-12 bg-gold/50" />
                )}

                <h3 className="font-script text-4xl text-ink">
                  {family.name}
                </h3>

                <p className="mt-2 font-serif text-xs uppercase tracking-[0.25em] text-plum">
                  {family.relation}
                </p>

                <p className="mx-auto mt-2 max-w-sm font-serif text-lg leading-7 text-ink/85">
                  {family.parents}
                </p>

                <p className="mt-2 font-sans text-xs leading-6 text-ink/55">
                  {family.home}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 text-center">
          <p className="font-serif text-[10px] uppercase tracking-[0.35em] text-sage-dark">
            A celebration of love
          </p>

          <h2 className="mt-3 font-script text-[clamp(3.5rem,12vw,5.5rem)] leading-tight text-plum">
            Would You Join Us?
          </h2>

          <p className="mt-2 font-serif text-sm uppercase tracking-[0.14em] text-sage-dark">
            We would love to have you with us
          </p>

          <AnimatePresence mode="wait">
            {response === null ? (
              <motion.div
                key="choices"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => chooseResponse('yes')}
                  className="min-h-14 rounded-full bg-plum px-7 py-4 font-serif text-[11px] uppercase tracking-[0.17em] text-white shadow-[0_12px_25px_rgba(104,45,74,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
                >
                  Yes, I'll be there
                </button>

                <button
                  type="button"
                  onClick={() => chooseResponse('no')}
                  className="min-h-14 rounded-full border border-plum/35 bg-white/50 px-7 py-4 font-serif text-[11px] uppercase tracking-[0.17em] text-plum transition-all duration-300 hover:-translate-y-1 hover:border-plum hover:bg-white active:scale-95"
                >
                  Sorry, I can't
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={response}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="mt-10 rounded-[3rem] border border-gold/25 bg-white/75 px-6 py-12 text-center shadow-[0_18px_35px_rgba(60,45,32,0.09)] sm:px-10"
              >
                {response === 'yes' ? (
                  <>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                      <Check size={36} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-7 font-script text-6xl text-plum">
                      Wonderful!
                    </h3>

                    <p className="mx-auto mt-4 max-w-sm font-serif text-lg leading-8 text-ink/75">
                      We're so happy you'll be joining us!
                      <span className="block">
                        Please confirm your response on WhatsApp.
                      </span>
                    </p>

                    <a
                      href={acceptUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 border-b border-plum/50 pb-1 font-serif text-xs uppercase tracking-[0.15em] text-plum transition-colors hover:text-sage-dark"
                    >
                      Confirm on WhatsApp
                      <MessageCircle size={16} />
                    </a>
                  </>
                ) : (
                  <>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blush/30 text-plum">
                      <X size={34} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-7 font-script text-6xl text-plum">
                      We'll Miss You
                    </h3>

                    <p className="mx-auto mt-4 max-w-sm font-serif text-lg leading-8 text-ink/75">
                      Thank you for letting us know.
                      <span className="block">
                        You'll be with us in spirit!
                      </span>
                    </p>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setResponse(null)}
                  className="mt-9 block w-full font-serif text-[11px] uppercase tracking-[0.17em] text-plum/65 transition-colors hover:text-plum"
                >
                  Change response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <footer className="mt-16 text-center">
          <p className="font-script text-5xl text-plum">
            Insha Allah
          </p>

          <p className="mt-4 font-serif text-xs uppercase tracking-[0.25em] text-sage-dark">
            We look forward to celebrating with you
          </p>

          <a
            href={`tel:${CALL_NUMBER}`}
            className="mt-5 inline-block font-sans text-xs text-ink/55 underline underline-offset-4"
          >
            Contact the family
          </a>

          <div className="mt-7">
            <Divider />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default InviteDetails;
