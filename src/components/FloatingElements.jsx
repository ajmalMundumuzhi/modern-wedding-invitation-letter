
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const petals = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 41 + 7) % 100}%`,
  delay: (index % 9) * 1.7,
  duration: 18 + (index % 6) * 3,
  size: 7 + (index % 4) * 3,
  direction: index % 2 === 0 ? 1 : -1
}));

const FloatingElements = () => (
  <MotionConfig reducedMotion="user">
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-0"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.5
          }}
          initial={{ y: '110vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-15vh',
            x: [0, petal.direction * 35, 0],
            rotate: [0, petal.direction * 180, petal.direction * 360],
            opacity: [0, 0.35, 0.25, 0]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <svg viewBox="0 0 24 32" className="h-full w-full">
            <path
              d="M12 1 C24 9 23 23 12 31 C1 23 0 9 12 1Z"
              fill="#d49a9a"
              fillOpacity="0.45"
            />
          </svg>
        </motion.div>
      ))}

      <motion.div
        className="absolute -left-24 top-[20%] h-72 w-72 rounded-full bg-rose-200/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute -right-24 bottom-[10%] h-80 w-80 rounded-full bg-gold/5 blur-[110px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </div>
  </MotionConfig>
);

export default FloatingElements;
