
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X, MessageCircle } from 'lucide-react';
import { INVITE, waLink } from '../config';

const WeddingClosing = () => {
  const [response, setResponse] = useState(null);

  const message =
    response === 'yes'
      ? `Wedding RSVP - ${INVITE.bride} & ${INVITE.groom}\nResponse: Joyfully accepts the invitation.`
      : `Wedding RSVP - ${INVITE.bride} & ${INVITE.groom}\nResponse: Regretfully declines the invitation.`;

  return (
    <section
      id="rsvp"
      className="wedding-section border-t border-gold/20 px-6 py-28 text-center sm:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl"
      >
        <p className="section-kicker">A beautiful beginning</p>

        <h2 className="mt-6 font-script text-6xl leading-tight text-ivory sm:text-8xl">
          Insha Allah
        </h2>

        <div className="gold-divider mt-9">✦</div>

        <p className="mx-auto mt-9 max-w-lg font-serif text-lg leading-8 text-muted">
          {INVITE.verse}
        </p>

        <p className="mt-8 font-serif text-xs uppercase tracking-[0.25em] text-gold">
          {INVITE.dateNumeric}
        </p>

        <div className="mt-20 border border-gold/35 px-5 py-12 sm:px-12">
          <p className="section-kicker">We would be honoured</p>

          <h3 className="mt-5 font-script text-5xl text-ivory sm:text-6xl">
            Would You Join Us?
          </h3>

          <p className="mt-5 font-serif text-sm text-muted">
            Kindly let us know if you can celebrate with us.
          </p>

          <AnimatePresence mode="wait">
            {response === null ? (
              <motion.div
                key="choices"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => setResponse('yes')}
                  className="border border-gold bg-gold px-7 py-4 font-serif text-[10px] uppercase tracking-[0.2em] text-wine transition-colors hover:bg-gold-light"
                >
                  Joyfully Accept
                </button>

                <button
                  type="button"
                  onClick={() => setResponse('no')}
                  className="border border-gold/50 px-7 py-4 font-serif text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-wine"
                >
                  Regretfully Decline
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={response}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
                  {response === 'yes' ? (
                    <Check size={28} strokeWidth={1.4} />
                  ) : (
                    <X size={28} strokeWidth={1.4} />
                  )}
                </div>

                <h4 className="mt-6 font-script text-5xl text-ivory">
                  {response === 'yes' ? 'Wonderful!' : "We'll Miss You"}
                </h4>

                <p className="mt-4 font-serif text-base leading-7 text-muted">
                  {response === 'yes'
                    ? "We're delighted you'll be joining us."
                    : "Thank you for letting us know. You'll be with us in spirit."}
                </p>

                <a
                  href={waLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 border border-gold/50 px-7 py-4 font-serif text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-wine"
                >
                  Send Response
                  <MessageCircle size={15} />
                </a>

                <button
                  type="button"
                  onClick={() => setResponse(null)}
                  className="mt-6 block w-full font-serif text-xs text-muted underline underline-offset-4 transition-colors hover:text-gold"
                >
                  Change Response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-20">
          <p className="font-script text-5xl text-ivory">
            {INVITE.bride} & {INVITE.groom}
          </p>

          <p className="mt-5 font-serif text-[10px] uppercase tracking-[0.3em] text-gold">
            With love and blessings
          </p>

          <div className="gold-divider mt-8">✦</div>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingClosing;
