import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { Bouquet, Ferns, WaxSeal } from './Florals';

const hidden = { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' };

// 4:3 envelope. The flap rotates open in 3D; the seal stays on the pocket.
export const Envelope = ({ open }) => {
  const gid = useId();
  return (
    <div style={{ filter: 'drop-shadow(0 16px 18px rgba(138,47,92,0.16))' }}>
      <div className="relative aspect-[4/3] w-full" style={{ perspective: 1400 }}>
        {/* inside / back */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 225" aria-hidden="true">
          <rect width="300" height="225" rx="4" fill="#dcb6c5" />
        </svg>

        {/* front pocket */}
        <svg className="absolute inset-0 z-[5] h-full w-full" viewBox="0 0 300 225" aria-hidden="true">
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f3dde5" />
              <stop offset="1" stopColor="#e6c3d0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 150,124 300,0 300,225 0,225" fill={`url(#${gid})`} />
          <path d="M0 225L150 124L300 225" fill="none" stroke="#d3a9bb" strokeWidth="1" />
          <path d="M0 0L150 124L300 0" fill="none" stroke="#d3a9bb" strokeWidth="1" />
        </svg>

        {/* flap */}
        <motion.div
          className="absolute inset-x-0 top-0 z-[6] h-[55%]"
          style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
          initial={false}
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 1.1, ease: [0.45, 0, 0.2, 1] }}
        >
          <div className="absolute inset-0" style={hidden}>
            <svg viewBox="0 0 300 124" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
              <polygon points="0,0 300,0 150,124" fill="#eed3de" stroke="#d3a9bb" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute inset-0" style={{ ...hidden, transform: 'rotateX(180deg)' }}>
            <svg viewBox="0 0 300 124" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
              <polygon points="150,0 300,124 0,124" fill="#f8e8ee" stroke="#d3a9bb" strokeWidth="1.2" strokeLinejoin="round" />
              <Ferns />
            </svg>
          </div>
        </motion.div>

        {/* wax seal sits at the tip of the flap */}
        <div className="absolute left-1/2 top-[55%] z-[8] w-[17%] -translate-x-1/2 -translate-y-1/2">
          <motion.div animate={{ scale: open ? [1, 1.12, 1] : 1 }} transition={{ duration: 0.6 }}>
            <WaxSeal className="w-full drop-shadow-md" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const EnvelopeWithFlowers = ({ open = false, className = '' }) => (
  <div className={`relative ${className}`}>
    <Envelope open={open} />
    <Bouquet className="pointer-events-none absolute -left-[16%] -top-[24%] z-10 w-[38%]" />
    <Bouquet flip className="pointer-events-none absolute -bottom-[26%] -right-[14%] z-10 w-[36%]" />
  </div>
);