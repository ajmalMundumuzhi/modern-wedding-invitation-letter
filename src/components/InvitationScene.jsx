
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { Bouquet } from './Florals';
import { EnvelopeWithFlowers } from './Envelope';
import { INVITE, PHOTOS } from '../config';

const Piece = ({
  show,
  instant,
  delay = 0,
  rotate = 0,
  className = '',
  children,
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={
      instant
        ? false
        : {
            opacity: 0,
            y: 45,
            rotate: 0,
            scale: 0.92,
          }
    }
    animate={
      show
        ? {
            opacity: 1,
            y: 0,
            rotate,
            scale: 1,
          }
        : undefined
    }
    transition={{
      type: 'spring',
      stiffness: 65,
      damping: 16,
      delay,
    }}
  >
    {children}
  </motion.div>
);

const GreenCard = () => (
  <div
    className="relative w-full overflow-hidden bg-sage text-white"
    style={{
      aspectRatio: '2.45 / 4.4',
      boxShadow: '0 12px 24px rgba(57, 62, 40, 0.22)',
    }}
  >
    <div className="absolute inset-[3.5%] border border-white/60" />

    <div className="absolute inset-0 opacity-20">
      <svg viewBox="0 0 200 280" className="h-full w-full">
        <path
          d="M0 0 Q100 80 200 0 M0 280 Q100 200 200 280"
          stroke="white"
          strokeWidth="0.7"
          fill="none"
        />
      </svg>
    </div>

    <div className="relative flex h-full flex-col items-center justify-center px-[7%] text-center">
      <p
        className="font-serif uppercase"
        style={{
          fontSize: 'clamp(8px, 2.7cqw, 12px)',
          letterSpacing: '0.24em',
        }}
      >
        {INVITE.kicker}
      </p>

      <div className="my-[7%] h-px w-[40%] bg-white/60" />

      <p
        className="font-script leading-none"
        style={{ fontSize: 'clamp(29px, 10cqw, 46px)' }}
      >
        {INVITE.bride}
      </p>

      <span
        className="font-script leading-none"
        style={{ fontSize: 'clamp(25px, 7cqw, 34px)' }}
      >
        &
      </span>

      <p
        className="font-script leading-none"
        style={{ fontSize: 'clamp(25px, 8cqw, 39px)' }}
      >
        {INVITE.groom}
      </p>

      <div className="mt-[8%] h-px w-[40%] bg-white/60" />

      <p
        className="mt-[7%] font-serif uppercase tracking-[0.22em]"
        style={{ fontSize: 'clamp(7px, 2.1cqw, 10px)' }}
      >
        Insha Allah
      </p>
    </div>
  </div>
);

const WhiteCard = () => {
  const card = INVITE.card;

  return (
    <div
      className="relative w-full overflow-hidden bg-[#fcfaf7] text-ink"
      style={{
        aspectRatio: '2.45 / 4.5',
        boxShadow: '0 12px 25px rgba(53, 41, 38, 0.19)',
      }}
    >
      <div className="absolute inset-[3.5%] border border-plum/35" />
      <div className="absolute inset-[5.5%] border border-gold/25" />

      <div className="relative flex h-full flex-col items-center justify-center px-[10%] text-center">
        <p
          className="font-serif uppercase tracking-[0.3em] text-plum"
          style={{ fontSize: 'clamp(7px, 2.1cqw, 10px)' }}
        >
          You're invited
        </p>

        <div className="my-[8%] h-px w-[45%] bg-gold/60" />

        <p
          className="font-script leading-none text-plum"
          style={{ fontSize: 'clamp(35px, 12cqw, 55px)' }}
        >
          {card.day}
          <sup
            className="font-serif"
            style={{ fontSize: 'clamp(9px, 3cqw, 13px)' }}
          >
            {card.ordinal}
          </sup>
        </p>

        <p
          className="mt-[3%] font-script leading-none"
          style={{ fontSize: 'clamp(30px, 10cqw, 48px)' }}
        >
          {card.month}
        </p>

        <p
          className="mt-[4%] font-serif tracking-[0.3em]"
          style={{ fontSize: 'clamp(12px, 3.6cqw, 16px)' }}
        >
          {card.year}
        </p>

        <div className="my-[9%] h-px w-[42%] bg-gold/60" />

        <p
          className="font-serif uppercase leading-relaxed tracking-[0.12em] text-ink/75"
          style={{ fontSize: 'clamp(7px, 2.3cqw, 11px)' }}
        >
          {card.venue}
        </p>

        <p
          className="mt-[8%] font-serif italic text-plum"
          style={{ fontSize: 'clamp(10px, 3cqw, 14px)' }}
        >
          {card.note}
        </p>

        <div className="mt-[8%] flex items-center gap-2">
          <span className="h-px w-7 bg-gold/60" />
          <span className="text-gold">✦</span>
          <span className="h-px w-7 bg-gold/60" />
        </div>
      </div>
    </div>
  );
};

const Polaroid = ({ photo }) => (
  <div
    className="w-full bg-white p-[5%] pb-[16%]"
    style={{
      boxShadow: '0 9px 19px rgba(40, 34, 34, 0.18)',
    }}
  >
    <div className="aspect-[4/5] overflow-hidden bg-blush">
      <img
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full object-cover"
        style={{
          objectPosition: photo.pos,
          transform: `scale(${photo.zoom})`,
        }}
        loading="eager"
      />
    </div>
  </div>
);

const InvitationScene = ({ instant = false, onNext }) => {
  const [phase, setPhase] = useState(instant ? 'done' : 'envelope');

  useEffect(() => {
    if (instant) {
      setPhase('done');
      return undefined;
    }

    setPhase('envelope');

    const first = setTimeout(() => setPhase('cards'), 1100);
    const second = setTimeout(() => setPhase('done'), 3300);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
    };
  }, [instant]);

  const show = phase !== 'envelope';

  return (
    <MotionConfig reducedMotion="user">
      <main className="paper-texture relative flex min-h-[100svh] items-center justify-center overflow-hidden px-3 py-10 sm:px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-[10%] h-72 w-72 rounded-full bg-blush/20 blur-3xl" />
          <div className="absolute -right-28 bottom-[5%] h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
        </div>

        <div
          className="relative z-10 w-full max-w-[490px]"
          style={{ containerType: 'inline-size' }}
        >
          <div
            className="relative w-full"
            style={{ aspectRatio: '4 / 7.2' }}
          >
            <AnimatePresence>
              {phase !== 'done' && (
                <motion.div
                  key="envelope"
                  className="absolute left-[14%] top-[29%] z-20 w-[72%]"
                  style={{ rotate: -4 }}
                  initial={instant ? false : { opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: -65,
                    scale: 1.04,
                  }}
                  transition={{ duration: 0.85 }}
                >
                  <EnvelopeWithFlowers open />
                </motion.div>
              )}
            </AnimatePresence>

            <Piece
              show={show}
              instant={instant}
              rotate={-7}
              delay={0.2}
              className="left-[3%] top-[12%] z-[2] w-[49%]"
            >
              <GreenCard />
            </Piece>

            <Piece
              show={show}
              instant={instant}
              rotate={5}
              delay={0.1}
              className="left-[49%] top-[5%] z-[3] w-[46%]"
            >
              <WhiteCard />
            </Piece>

            <Piece
              show={show}
              instant={instant}
              rotate={-5}
              delay={0.55}
              className="left-[6%] top-[61%] z-[5] w-[34%]"
            >
              <Polaroid photo={PHOTOS[0]} />
            </Piece>

            <Piece
              show={show}
              instant={instant}
              rotate={5}
              delay={0.7}
              className="left-[39%] top-[66%] z-[6] w-[34%]"
            >
              <Polaroid photo={PHOTOS[1] ?? PHOTOS[0]} />
            </Piece>

            <Piece
              show={show}
              instant={instant}
              delay={0.45}
              className="left-[32%] top-[38%] z-[8] w-[35%] pointer-events-none"
            >
              <Bouquet className="w-full drop-shadow-sm" />
            </Piece>

            <Piece
              show={show}
              instant={instant}
              rotate={0}
              delay={0.9}
              className="right-[2%] top-[44%] z-[10] w-[30%]"
            >
              <button
                type="button"
                onClick={onNext}
                aria-label="Share your RSVP details"
                className="relative grid aspect-square w-full cursor-pointer place-items-center rounded-full bg-plum text-center text-white shadow-[0_12px_25px_rgba(104,45,74,0.3)] transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-[7%] rounded-full border border-white/30" />

                <span className="relative flex flex-col items-center">
                  <span
                    className="font-serif uppercase tracking-[0.18em]"
                    style={{ fontSize: 'clamp(7px, 2.2cqw, 11px)' }}
                  >
                    {INVITE.cta.top}
                  </span>

                  <span
                    className="font-script leading-none"
                    style={{ fontSize: 'clamp(20px, 7cqw, 34px)' }}
                  >
                    {INVITE.cta.script}
                  </span>
                </span>
              </button>
            </Piece>

            <Piece
              show={show}
              instant={instant}
              delay={0.8}
              className="right-[2%] bottom-[1%] z-[1] w-[30%] pointer-events-none"
            >
              <Bouquet flip className="w-full opacity-80" />
            </Piece>
          </div>

          <motion.p
            initial={false}
            animate={{ opacity: show ? 1 : 0 }}
            className="mt-3 text-center font-serif text-xs uppercase tracking-[0.35em] text-sage-dark"
          >
            A beautiful beginning · Insha Allah
          </motion.p>
        </div>
      </main>
    </MotionConfig>
  );
};

export default InvitationScene;
