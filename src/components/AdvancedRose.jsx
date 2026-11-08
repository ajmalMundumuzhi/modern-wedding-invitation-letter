
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AdvancedRose = ({ className = '', delay = 0 }) => {
  const roseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.rose-petal',
        {
          scale: 0,
          opacity: 0,
          rotate: -25
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1.8,
          stagger: 0.12,
          delay,
          ease: 'back.out(1.5)'
        }
      );

      gsap.to('.rose-center', {
        scale: 1.12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.rose-aura', {
        scale: 1.3,
        opacity: 0.18,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, roseRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={roseRef} className={`relative ${className}`}>
      <div className="rose-aura absolute inset-0 rounded-full bg-rose-300/40 blur-3xl" />

      <svg viewBox="0 0 200 200" className="relative h-full w-full overflow-visible">
        <defs>
          <radialGradient id="rosePetalGradient">
            <stop offset="0%" stopColor="#fff4e8" />
            <stop offset="55%" stopColor="#e8b7b9" />
            <stop offset="100%" stopColor="#b96e79" />
          </radialGradient>

          <radialGradient id="roseInnerGradient">
            <stop offset="0%" stopColor="#f7dfb0" />
            <stop offset="100%" stopColor="#bd9140" />
          </radialGradient>
        </defs>

        <g transform="translate(100 100)">
          {Array.from({ length: 8 }, (_, index) => (
            <path
              key={`outer-${index}`}
              className="rose-petal"
              d="M0 0 C-54 -38 -52 -100 0 -96 C52 -100 54 -38 0 0"
              transform={`rotate(${index * 45})`}
              fill="url(#rosePetalGradient)"
              stroke="#b98d72"
              strokeOpacity="0.25"
              strokeWidth="1"
              style={{ transformBox: 'view-box', transformOrigin: 'center' }}
            />
          ))}

          {Array.from({ length: 6 }, (_, index) => (
            <path
              key={`inner-${index}`}
              className="rose-petal"
              d="M0 0 C-30 -20 -29 -58 0 -63 C29 -58 30 -20 0 0"
              transform={`rotate(${index * 60 + 15})`}
              fill="#d9959b"
              fillOpacity="0.8"
              stroke="#b96e79"
              strokeOpacity="0.4"
              strokeWidth="0.8"
              style={{ transformBox: 'view-box', transformOrigin: 'center' }}
            />
          ))}

          <circle className="rose-center" r="13" fill="url(#roseInnerGradient)" />
          <circle r="5" fill="#fff0c6" />
        </g>
      </svg>
    </div>
  );
};

export default AdvancedRose;
