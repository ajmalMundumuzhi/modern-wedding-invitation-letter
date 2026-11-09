import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { Bouquet, Ferns, WaxSeal } from './Florals';

export const Envelope = ({ open = false }) => {
  const id = useId();

  return (
    <div
      className="relative w-full"
      style={{
        filter: 'drop-shadow(0 20px 22px rgba(104, 61, 76, 0.18))',
      }}
    >
      <div
        className="relative aspect-[4/3] w-full"
        style={{ perspective: 1300 }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 300 225"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${id}-back`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f4dce4" />
              <stop offset="100%" stopColor="#dca9bb" />
            </linearGradient>
          </defs>

          <rect
            width="300"
            height="225"
            rx="5"
            fill={`url(#${id}-back)`}
          />
        </svg>

        <svg
          className="absolute inset-0 z-[5] h-full w-full"
          viewBox="0 0 300 225"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${id}-front`} x1="0" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#f8e8ed" />
              <stop offset="100%" stopColor="#e6c1ce" />
            </linearGradient>
          </defs>

          <polygon
            points="0,0 150,124 300,0 300,225 0,225"
            fill={`url(#${id}-front)`}
          />

          <path
            d="M0 0 L150 124 L300 0"
            stroke="#d5a6b7"
            strokeWidth="1.5"
            fill="none"
          />

          <path
            d="M0 225 L150 124 L300 225"
            stroke="#d5a6b7"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        <motion.div
          className="absolute inset-x-0 top-0 z-[7] h-[55%]"
          style={{
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{
            duration: 1.15,
            ease: [0.45, 0, 0.2, 1],
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <svg
              viewBox="0 0 300 124"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <polygon
                points="0,0 300,0 150,124"
                fill="#f1d5df"
                stroke="#d5a6b7"
                strokeWidth="1.2"
              />
            </svg>
          </div>

          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)',
            }}
          >
            <svg
              viewBox="0 0 300 124"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <polygon
                points="150,0 300,124 0,124"
                fill="#f8e8ed"
                stroke="#d5a6b7"
                strokeWidth="1.2"
              />
              <Ferns />
            </svg>
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-[55%] z-[9] w-[18%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={open ? { scale: [1, 1.12, 0.9] } : { scale: 1 }}
            transition={{ duration: 0.65 }}
          >
            <WaxSeal className="w-full drop-shadow-md" />
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-[5%] bottom-[3%] z-[6] flex justify-center opacity-35">
          <span className="font-script text-[clamp(1rem,5vw,1.8rem)] text-plum">
            Sana & Zainulabidheen
          </span>
        </div>
      </div>
    </div>
  );
};

export const EnvelopeWithFlowers = ({
  open = false,
  className = '',
}) => (
  <div className={`relative ${className}`}>
    <Envelope open={open} />

    <Bouquet className="pointer-events-none absolute -left-[17%] -top-[27%] z-10 w-[38%] drop-shadow-sm" />

    <Bouquet
      flip
      className="pointer-events-none absolute -bottom-[27%] -right-[15%] z-10 w-[36%] drop-shadow-sm"
    />
  </div>
);