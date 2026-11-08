
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 22,
    mass: 0.5
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 22,
    mass: 0.5
  });

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    setEnabled(media.matches && !reducedMotion.matches);

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      setHovering(
        Boolean(
          event.target.closest(
            'a, button, input, textarea, select, [role="button"]'
          )
        )
      );
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    if (media.matches && !reducedMotion.matches) {
      window.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseleave', handleLeave);
      document.addEventListener('mouseenter', handleEnter);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-gold/70 md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: hovering ? 65 : 34,
          height: hovering ? 65 : 34,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering
            ? 'rgba(184,150,62,0.08)'
            : 'rgba(184,150,62,0)'
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-1.5 w-1.5 rounded-full bg-rose-900 md:block"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
