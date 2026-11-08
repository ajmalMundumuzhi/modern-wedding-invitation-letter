import React, { useRef, useState } from 'react';
import gsap from 'gsap';

const rand = (min, max) => min + Math.random() * (max - min);
const makeSparkles = (n) =>
  Array.from({ length: n }, () => ({
    top: `${rand(0, 100)}%`,
    left: `${rand(0, 100)}%`,
    delay: `${rand(0, 5).toFixed(2)}s`,
    duration: `${rand(3, 7).toFixed(2)}s`,
  }));

const UPPER_SPARKLES = makeSparkles(7);
const LOWER_SPARKLES = makeSparkles(7);

const Sparkles = ({ items }) =>
  items.map((s, i) => (
    <span
      key={i}
      className="animate-twinkle absolute h-1 w-1 rounded-full bg-gold-light/60"
      style={{ top: s.top, left: s.left, '--delay': s.delay, '--d': s.duration }}
    />
  ));

const Preloader = ({ isLoaded, onOpen, onStartOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const rootRef = useRef(null);
  const cardRef = useRef(null);
  const upperRef = useRef(null);
  const lowerRef = useRef(null);

  const handleOpen = () => {
    if (!isLoaded || isOpening) return;
    setIsOpening(true);
    onStartOpen?.();

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.to(rootRef.current, { opacity: 0, duration: 0.4, onComplete: onOpen });
      return;
    }

    gsap
      .timeline({ onComplete: onOpen })
      .to(cardRef.current, { scale: 1.06, opacity: 0, y: -40, duration: 1.1, ease: 'power2.in' }, 0)
      .to(upperRef.current, { yPercent: -100, duration: 1.4, ease: 'expo.inOut' }, 0.4)
      .to(lowerRef.current, { yPercent: 100, duration: 1.4, ease: 'expo.inOut' }, 0.4);
  };

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-label="Wedding invitation"
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
    >
      {/* Split panels: they slide apart when the invitation opens */}
      <div ref={upperRef} className="absolute inset-x-0 top-0 h-1/2 bg-rose-950 border-b border-gold/20">
        <Sparkles items={UPPER_SPARKLES} />
      </div>
      <div ref={lowerRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-rose-950 border-t border-gold/20">
        <Sparkles items={LOWER_SPARKLES} />
      </div>

      {/* Invitation card */}
      <div ref={cardRef} className="relative z-10 w-[88%] max-w-sm">
        <div className="relative aspect-[3/4] overflow-hidden bg-rose-950 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
          <img
            src="/media__1776859894044.jpg"
            alt="Ninan and Anu"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-rose-950/55 to-rose-950/10" />

          {/* Gold inner frame */}
          <div className="pointer-events-none absolute inset-3 border border-gold-light/50" />
          <div className="pointer-events-none absolute inset-[18px] border border-gold-light/20" />

          <div className="absolute inset-x-0 top-0 px-8 pt-10 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.5em] text-gold-light">
              Together with their families
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-8 pb-10 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.5em] text-gold-light/90">
              Wedding Invitation
            </p>
            <h2 className="mt-3 font-cursive text-6xl leading-none text-white drop-shadow-lg sm:text-7xl">
              Ninan &amp; Anu
            </h2>
            <p className="mt-4 font-serif text-lg tracking-[0.35em] text-white/90">11 . 07 . 2026</p>

            {/* Loader and button share one cell and cross-fade */}
            <div className="mt-6 grid h-12 place-items-center">
              <div
                className={`col-start-1 row-start-1 flex flex-col items-center gap-3 transition-opacity duration-500 ${
                  isLoaded ? 'opacity-0' : 'opacity-100'
                }`}
                aria-hidden={isLoaded}
              >
                <div className="relative h-px w-40 overflow-hidden bg-white/15">
                  <div className="absolute inset-y-0 w-1/3 animate-[loader-slide_1.8s_linear_infinite] bg-gold-light/70" />
                </div>
                <span className="font-serif text-[10px] uppercase tracking-[0.4em] text-white/60">
                  Preparing your invitation
                </span>
              </div>

              <button
                type="button"
                onClick={handleOpen}
                disabled={!isLoaded || isOpening}
                className={`col-start-1 row-start-1 border border-gold-light/70 bg-rose-950/40 px-9 py-3.5 font-serif text-[11px] uppercase tracking-[0.5em] text-gold-light backdrop-blur-md transition-all duration-500 hover:bg-gold-light hover:text-rose-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light active:scale-95 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
                }`}
              >
                Open Invitation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;