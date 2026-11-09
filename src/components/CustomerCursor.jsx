
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    if (!finePointer) return undefined;

    document.body.classList.add('custom-cursor-enabled');

    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      setHovering(
        Boolean(
          event.target.closest(
            'button, a, input, textarea, select, [role="button"]'
          )
        )
      );
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className="absolute rounded-full border border-red-800 transition-all duration-200"
        style={{
          width: hovering ? 48 : 40,
          height: hovering ? 48 : 40,
          left: hovering ? -24 : -20,
          top: hovering ? -24 : -20,
        }}
      />

      <div
        className="absolute h-[10px] w-[10px] rounded-full bg-[#8b4513] transition-transform duration-200"
        style={{
          left: -23,
          top: -23,
          transform: hovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
