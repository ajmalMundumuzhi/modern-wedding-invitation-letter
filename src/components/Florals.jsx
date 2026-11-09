import React, { useId } from 'react';

const Rose = ({ x, y, r = 13, tone = 'blush', rotate = 0 }) => {
  const palettes = {
    blush: ['#d990a9', '#f5cbd6', '#bd7089'],
    rose: ['#c77d99', '#e9afc0', '#a95376'],
    cream: ['#ead4c9', '#fff0e8', '#d4afa4'],
  };

  const [base, petal, center] = palettes[tone];

  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse
          key={i}
          cx="0"
          cy={-r * 0.4}
          rx={r * 0.45}
          ry={r * 0.62}
          fill={petal}
          transform={`rotate(${i * 45})`}
        />
      ))}
      <circle r={r * 0.48} fill={base} />
      <circle r={r * 0.2} fill={center} />
    </g>
  );
};

const Leaf = ({ x, y, rotate = 0, scale = 1, fill = '#91a47a' }) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <path
      d="M0 0 C9 -16 27 -17 36 0 C25 16 9 17 0 0Z"
      fill={fill}
    />
    <path
      d="M0 0 Q18 0 36 0"
      fill="none"
      stroke="#d2ddbd"
      strokeWidth="0.8"
    />
  </g>
);

export const Bouquet = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 160 250"
    className={className}
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
    fill="none"
    aria-hidden="true"
  >
    <g stroke="#82936b" strokeWidth="1.6" strokeLinecap="round">
      <path d="M76 113 Q60 175 45 245" />
      <path d="M80 120 Q92 180 117 242" />
      <path d="M71 130 Q40 180 30 229" />
      <path d="M87 128 Q123 175 139 226" />
      <path d="M80 116 Q77 185 78 245" />
    </g>

    <Leaf x={75} y={170} rotate={-155} scale={0.8} />
    <Leaf x={78} y={194} rotate={18} scale={0.9} />
    <Leaf x={53} y={185} rotate={-120} scale={0.7} />
    <Leaf x={103} y={183} rotate={65} scale={0.8} />
    <Leaf x={62} y={213} rotate={-145} scale={0.7} />
    <Leaf x={93} y={218} rotate={45} scale={0.7} />

    <Rose x={48} y={92} r={17} tone="blush" rotate={10} />
    <Rose x={81} y={77} r={16} tone="rose" rotate={-20} />
    <Rose x={107} y={104} r={13} tone="cream" rotate={35} />
    <Rose x={69} y={117} r={13} tone="cream" rotate={-10} />
    <Rose x={112} y={72} r={9} tone="blush" />

    <g fill="#e8b9c8" stroke="#bd8097" strokeWidth="0.8">
      <circle cx="31" cy="70" r="4" />
      <circle cx="94" cy="46" r="4" />
      <circle cx="126" cy="92" r="3.5" />
      <circle cx="43" cy="130" r="3" />
    </g>

    <g stroke="#aab98f" strokeWidth="1.3" fill="none">
      <path d="M48 87 Q20 52 25 22" />
      <path d="M82 68 Q76 36 96 15" />
      <path d="M108 96 Q142 64 139 37" />
    </g>
  </svg>
);

export const WaxSeal = ({ className = '', initials = 'S&Z' }) => {
  const id = useId();

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={id} cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#d993ad" />
          <stop offset="65%" stopColor="#a94d73" />
          <stop offset="100%" stopColor="#78334f" />
        </radialGradient>
      </defs>

      <path
        d="M50 4 C62 3 66 11 76 12 C88 14 89 25 92 35 C100 48 94 60 89 69 C86 83 76 86 65 90 C55 100 44 95 34 91 C20 91 14 81 11 69 C2 58 7 46 10 35 C11 22 22 17 33 13 C39 6 43 5 50 4Z"
        fill={`url(#${id})`}
      />

      <circle
        cx="50"
        cy="50"
        r="33"
        fill="none"
        stroke="#efc2d2"
        strokeOpacity="0.6"
        strokeWidth="1.2"
      />

      <text
        x="50"
        y="59"
        textAnchor="middle"
        fill="#fff0f4"
        fontFamily="Cormorant Garamond, serif"
        fontSize="22"
        fontStyle="italic"
      >
        {initials}
      </text>
    </svg>
  );
};

const Frond = ({ x, y, rotation, length }) => (
  <g transform={`translate(${x} ${y}) rotate(${rotation})`}>
    <path d={`M0 0 L0 ${-length}`} />
    {Array.from({ length: 8 }, (_, i) => {
      const distance = (i + 1) * length / 9;
      const width = 10 * (1 - distance / length);

      return (
        <g key={i}>
          <path d={`M0 ${-distance} l${-width} ${-width * 0.6}`} />
          <path d={`M0 ${-distance} l${width} ${-width * 0.6}`} />
        </g>
      );
    })}
  </g>
);

export const Ferns = () => (
  <g
    fill="none"
    stroke="#a2b28a"
    strokeWidth="1"
    strokeLinecap="round"
    opacity="0.9"
  >
    <Frond x={150} y={125} rotation={0} length={110} />
    <Frond x={120} y={125} rotation={-18} length={95} />
    <Frond x={180} y={125} rotation={18} length={95} />
    <Frond x={90} y={125} rotation={-36} length={72} />
    <Frond x={210} y={125} rotation={36} length={72} />
  </g>
);