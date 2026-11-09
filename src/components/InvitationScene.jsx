import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { Bouquet } from './Florals';
import { EnvelopeWithFlowers } from './Envelope';
import { INVITE, PHOTOS } from '../config';

// Everything is sized in cqw (% of the canvas width) so the layout scales like a fixed design.
const cq = (n) => `${n}cqw`;

const Piece = ({ show, instant, delay = 0, rotate = 0, className = '', children }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={instant ? false : { opacity: 0, y: '40%', rotate: 0, scale: 0.94 }}
    animate={show ? { opacity: 1, y: 0, rotate, scale: 1 } : undefined}
    transition={{ type: 'spring', stiffness: 55, damping: 15, delay }}
  >
    {children}
  </motion.div>
);

const DOTS = [[12, 10], [84, 16], [20, 88], [78, 82], [50, 5], [91, 52], [7, 48]];

const GreenCard = () => (
  <div className="relative w-full bg-sage shadow-[0_8px_16px_rgba(70,80,50,0.25)]" style={{ aspectRatio: '3 / 4.1' }}>
    <div className="absolute inset-[3.5%] border border-white/70" />
    {DOTS.map(([x, y], i) => (
      <span key={i} className="absolute rounded-full bg-white/70" style={{ left: `${x}%`, top: `${y}%`, width: cq(0.9), height: cq(0.9) }} />
    ))}
    <div className="flex h-full flex-col items-center justify-center text-center text-white">
      <p className="font-serif uppercase" style={{ fontSize: cq(2.8), letterSpacing: '0.28em' }}>{INVITE.kicker}</p>
      <p className="mt-[4%] font-script leading-none" style={{ fontSize: cq(11) }}>{INVITE.groom}</p>
      <p className="font-script leading-none" style={{ fontSize: cq(7) }}>&amp;</p>
      <p className="font-script leading-none" style={{ fontSize: cq(11) }}>{INVITE.bride}</p>
    </div>
  </div>
);

const WhiteCard = () => {
  const c = INVITE.card;
  return (
    <div className="relative w-full bg-paper shadow-[0_8px_16px_rgba(0,0,0,0.16)]" style={{ aspectRatio: '3 / 4.3' }}>
      <div className="absolute inset-[4%] border border-plum/30" />
      <div className="absolute inset-[6.5%] border border-plum/15" />
      <div className="flex h-full flex-col items-center justify-center px-[12%] text-center text-ink">
        <p className="font-script leading-none" style={{ fontSize: cq(8) }}>
          {c.day}
          <sup className="font-serif" style={{ fontSize: cq(3) }}>{c.ordinal}</sup>
        </p>
        <p className="font-script leading-[0.95] text-plum" style={{ fontSize: cq(13) }}>{c.month}</p>
        <p className="mt-[3%] font-serif" style={{ fontSize: cq(5.5), letterSpacing: '0.3em' }}>{c.year}</p>
        <span className="my-[7%] block h-px w-[40%] bg-plum/30" />
        <p className="font-serif uppercase leading-snug" style={{ fontSize: cq(2.3), letterSpacing: '0.2em' }}>{c.venue}</p>
        <p className="my-[5%] text-plum/60" style={{ fontSize: cq(2.5), letterSpacing: '0.5em' }}>• • • • •</p>
        <p className="font-serif uppercase" style={{ fontSize: cq(2.1), letterSpacing: '0.22em' }}>{c.note}</p>
      </div>
    </div>
  );
};

const Polaroid = ({ photo }) => (
  <div className="w-full bg-white p-[5%] pb-[16%] shadow-[0_8px_16px_rgba(0,0,0,0.18)]">
    <div className="aspect-square overflow-hidden bg-blush">
      <img
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full object-cover"
        style={{ objectPosition: photo.pos, transform: `scale(${photo.zoom})` }}
      />
    </div>
  </div>
);

const InvitationScene = ({ instant = false, onNext }) => {
  const [phase, setPhase] = useState(instant ? 'done' : 'envelope'); // envelope -> cards -> done

  useEffect(() => {
    if (instant) return undefined;
    const t1 = setTimeout(() => setPhase('cards'), 1000);
    const t2 = setTimeout(() => setPhase('done'), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [instant]);

  const show = phase !== 'envelope';

  return (
    <MotionConfig reducedMotion="user">
      <main className="flex min-h-[100svh] items-center justify-center bg-white px-4 py-8">
        <div className="relative w-full max-w-[30rem]" style={{ containerType: 'inline-size' }}>
          <div className="relative w-full" style={{ aspectRatio: '4 / 5.2' }}>
            {/* Screen 2: the open envelope with its fern liner */}
            <AnimatePresence>
              {phase !== 'done' && (
                <motion.div
                  key="envelope"
                  className="absolute left-[14%] top-[30%] w-[72%]"
                  style={{ rotate: -4 }}
                  exit={{ opacity: 0, y: -60, scale: 1.04 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                >
                  <EnvelopeWithFlowers open />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Screen 3: the composed layout */}
            <Piece show={show} instant={instant} rotate={-7} delay={0.15} className="left-[4%] top-[10%] w-[50%]">
              <GreenCard />
            </Piece>
            <Piece show={show} instant={instant} rotate={5} delay={0} className="left-[47%] top-[2%] w-[48%]">
              <WhiteCard />
            </Piece>
            <Piece show={show} instant={instant} rotate={-4} delay={0.5} className="left-[7%] top-[58%] w-[34%]">
              <Polaroid photo={PHOTOS[0]} />
            </Piece>
            <Piece show={show} instant={instant} rotate={4} delay={0.65} className="left-[40%] top-[62%] w-[34%]">
              <Polaroid photo={PHOTOS[1] ?? PHOTOS[0]} />
            </Piece>
            <Piece show={show} instant={instant} rotate={0} delay={0.4} className="pointer-events-none left-[36%] top-[33%] w-[24%]">
              <Bouquet className="w-full" />
            </Piece>
            <Piece show={show} instant={instant} rotate={0} delay={1} className="right-[3%] top-[40%] w-[30%]">
              <button
                type="button"
                onClick={onNext}
                aria-label="RSVP and share your details"
                className="relative grid aspect-square w-full cursor-pointer place-items-center rounded-full bg-plum text-center text-white shadow-[0_8px_18px_rgba(138,47,92,0.35)] transition-transform hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-plum/25" />
                <span>
                  <span className="block font-serif uppercase" style={{ fontSize: cq(2.3), letterSpacing: '0.22em' }}>
                    {INVITE.cta.top}
                  </span>
                  <span className="block font-script leading-none" style={{ fontSize: cq(9) }}>
                    {INVITE.cta.script}
                  </span>
                </span>
              </button>
            </Piece>
          </div>
        </div>
      </main>
    </MotionConfig>
  );
};

export default InvitationScene;