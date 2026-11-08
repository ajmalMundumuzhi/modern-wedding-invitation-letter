
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const RoseBloom = ({ className = '' }) => {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`relative ${className}`}>
        <motion.div
          className="absolute inset-0 rounded-full bg-rose-200/40 blur-2xl"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <svg viewBox="0 0 120 120" className="relative h-full w-full">
          <defs>
            <radialGradient id="bloomGradient">
              <stop offset="0%" stopColor="#fce7e7" />
              <stop offset="100%" stopColor="#c77d87" />
            </radialGradient>
          </defs>

          <g transform="translate(60 60)">
            {Array.from({ length: 8 }, (_, index) => (
              <motion.path
                key={index}
                d="M0 0 C-22 -13 -20 -40 0 -46 C20 -40 22 -13 0 0"
                transform={`rotate(${index * 45})`}
                fill="url(#bloomGradient)"
                fillOpacity="0.8"
                stroke="#b98d72"
                strokeOpacity="0.4"
                strokeWidth="0.6"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                  ease: 'backOut'
                }}
                style={{
                  transformOrigin: '0px 0px'
                }}
              />
            ))}

            <circle r="8" fill="#b8963e" />
            <circle r="3" fill="#fff1bd" />
          </g>
        </svg>
      </div>
    </MotionConfig>
  );
};

export default RoseBloom;
