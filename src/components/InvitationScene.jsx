
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Bouquet } from './Florals';
import { INVITE, PHOTOS } from '../config';

const Piece = ({
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
    animate={{
      opacity: 1,
      y: 0,
      rotate,
      scale: 1,
    }}
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
      aspectRatio: '2.45 / 5.2',
      boxShadow: '0 14px 28px rgba(57, 62, 40, 0.2)',
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
          fontSize: 'clamp(8px, 2.2cqw, 12px)',
          letterSpacing: '0.24em',
        }}
      >
        {INVITE.kicker}
      </p>

      <div className="my-[8%] h-px w-[40%] bg-white/60" />

      <p
        className="font-script leading-none"
        style={{ fontSize: 'clamp(28px, 7.5cqw, 46px)' }}
      >
        {INVITE.bride}
      </p>

      <span
        className="my-[3%] font-script leading-none"
        style={{ fontSize: 'clamp(24px, 6cqw, 34px)' }}
      >
        &
      </span>

      <p
        className="font-script leading-tight"
        style={{ fontSize: 'clamp(24px, 6.5cqw, 39px)' }}
      >
        {INVITE.groom}
      </p>

      <div className="mt-[10%] h-px w-[40%] bg-white/60" />

      <p
        className="mt-[8%] font-serif uppercase tracking-[0.22em]"
        style={{ fontSize: 'clamp(7px, 1.8cqw, 10px)' }}
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
        aspectRatio: '2.45 / 5.3',
        boxShadow: '0 14px 28px rgba(53, 41, 38, 0.18)',
      }}
    >
      <div className="absolute inset-[3.5%] border border-plum/35" />
      <div className="absolute inset-[5.5%] border border-gold/25" />

      <div className="relative flex h-full flex-col items-center justify-center px-[9%] text-center">
        <p
          className="font-serif uppercase tracking-[0.3em] text-plum"
          style={{ fontSize: 'clamp(7px, 1.8cqw, 10px)' }}
        >
          You're invited
        </p>

        <div className="my-[8%] h-px w-[45%] bg-gold/60" />

        <p
          className="font-script leading-none text-plum"
          style={{ fontSize: 'clamp(34px, 9cqw, 55px)' }}
        >
          {card.day}
          <sup
            className="font-serif"
            style={{ fontSize: 'clamp(9px, 2.5cqw, 13px)' }}
          >
            {card.ordinal}
          </sup>
        </p>

        <p
          className="mt-[5%] font-script leading-none"
          style={{ fontSize: 'clamp(29px, 7.5cqw, 48px)' }}
        >
          {card.month}
        </p>

        <p
          className="mt-[5%] font-serif tracking-[0.3em]"
          style={{ fontSize: 'clamp(11px, 2.7cqw, 16px)' }}
        >
          {card.year}
        </p>

        <div className="my-[10%] h-px w-[42%] bg-gold/60" />

        <p
          className="font-serif uppercase leading-relaxed tracking-[0.12em] text-ink/75"
          style={{ fontSize: 'clamp(7px, 1.9cqw, 11px)' }}
        >
          {card.venue}
        </p>

        <p
          className="mt-[9%] font-serif italic text-plum"
          style={{ fontSize: 'clamp(10px, 2.5cqw, 14px)' }}
        >
          {card.note}
        </p>

        <div className="mt-[9%] flex items-center gap-2">
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
    className="w-full bg-white p-[4.5%] pb-[15%]"
    style={{
      boxShadow: '0 12px 25px rgba(40, 34, 34, 0.18)',
    }}
  >
    <div className="aspect-[3/4.5] overflow-hidden bg-blush">
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
  return (
    <MotionConfig reducedMotion="user">
      <main className="paper-texture relative flex min-h-[100svh] items-start justify-center overflow-hidden px-3 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-[10%] h-72 w-72 rounded-full bg-blush/20 blur-3xl" />
          <div className="absolute -right-28 bottom-[5%] h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
        </div>

        <div
          className="relative z-10 w-full max-w-[680px]"
          style={{ containerType: 'inline-size' }}
        >
          <div
            className="relative w-full"
            style={{ aspectRatio: '4 / 8.7' }}
          >
            <Piece
              instant={instant}
              rotate={-6}
              delay={0.2}
              className="left-[2%] top-[8%] z-[2] w-[50%]"
            >
              <GreenCard />
            </Piece>

            <Piece
              instant={instant}
              rotate={4}
              delay={0.1}
              className="left-[48%] top-[5%] z-[3] w-[49%]"
            >
              <WhiteCard />
            </Piece>

            <Piece
              instant={instant}
              rotate={-5}
              delay={0.55}
              className="left-[5%] top-[59%] z-[5] w-[36%]"
            >
              <Polaroid photo={PHOTOS[0]} />
            </Piece>

            <Piece
              instant={instant}
              rotate={5}
              delay={0.7}
              className="left-[42%] top-[63%] z-[6] w-[36%]"
            >
              <Polaroid photo={PHOTOS[1] ?? PHOTOS[0]} />
            </Piece>

            <Piece
              instant={instant}
              delay={0.45}
              className="left-[33%] top-[34%] z-[8] w-[27%] pointer-events-none"
            >
              <Bouquet className="w-full drop-shadow-sm" />
            </Piece>

            <Piece
              instant={instant}
              rotate={0}
              delay={0.9}
              className="right-[1%] top-[35%] z-[10] w-[28%]"
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
                    style={{ fontSize: 'clamp(7px, 1.8cqw, 11px)' }}
                  >
                    {INVITE.cta.top}
                  </span>

                  <span
                    className="font-script leading-none"
                    style={{ fontSize: 'clamp(20px, 5.5cqw, 34px)' }}
                  >
                    {INVITE.cta.script}
                  </span>
                </span>
              </button>
            </Piece>

            <Piece
              instant={instant}
              delay={0.8}
              className="right-[2%] top-[72%] z-[1] w-[25%] pointer-events-none"
            >
              <Bouquet flip className="w-full opacity-80" />
            </Piece>
          </div>

          <motion.p
            initial={instant ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-5 text-center font-serif text-xs uppercase tracking-[0.35em] text-sage-dark sm:mt-7"
          >
            A beautiful beginning · Insha Allah
          </motion.p>
        </div>
      </main>
    </MotionConfig>
  );
};

export default InvitationScene;