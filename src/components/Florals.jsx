import React, { useId } from 'react';

const TONES = {
  blush: { base: '#e7a9bd', petal: '#f2c3d1', line: '#c9788f' },
  rose: { base: '#d9879f', petal: '#e9a6b9', line: '#b0566f' },
  cream: { base: '#f1ddd6', petal: '#fbf1ee', line: '#d9b7ad' },
};

const Rose = ({ x, y, r = 13, tone = 'blush', rot = 0 }) => {
  const c = TONES[tone];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <circle r={r} fill={c.base} />
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cy={-r * 0.42} rx={r * 0.56} ry={r * 0.52} fill={c.petal} opacity="0.92" transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.42} fill={c.base} opacity="0.85" />
      <path
        d={`M0 ${-r * 0.3}a${r * 0.3} ${r * 0.3} 0 1 1 ${r * 0.08} ${r * 0.42}`}
        fill="none"
        stroke={c.line}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </g>
  );
};

const Leaf = ({ x, y, rot = 0, s = 1, fill = '#8fa57a' }) => (
  <path
    d="M0 0C6-9 18-9 26 0C18 9 6 9 0 0Z"
    fill={fill}
    transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}
  />
);

const Tassel = ({ x, y, len = 70, bend = 6 }) => {
  const n = Math.floor(len / 7);
  return (
    <g>
      <path d={`M${x} ${y}q${bend} ${len / 2} 0 ${len}`} fill="none" stroke="#7b2a49" strokeWidth="1" opacity="0.8" />
      {Array.from({ length: n }, (_, i) => {
        const t = (i + 1) / (n + 1);
        const cx = x + 2 * (1 - t) * t * bend;
        const cy = y + 2 * (1 - t) * t * (len / 2) + t * t * len;
        return <circle key={i} cx={cx} cy={cy} r={2.3 - t * 0.7} fill="#8a2f55" />;
      })}
    </g>
  );
};

const LEAVES = [
  { x: 70, y: 104, rot: -170, s: 1.7, fill: '#8fa57a' },
  { x: 70, y: 104, rot: -130, s: 1.6, fill: '#a9bb91' },
  { x: 70, y: 104, rot: -95, s: 1.5, fill: '#7f9669' },
  { x: 70, y: 104, rot: -55, s: 1.5, fill: '#a9bb91' },
  { x: 70, y: 104, rot: -15, s: 1.6, fill: '#8fa57a' },
  { x: 70, y: 104, rot: 25, s: 1.5, fill: '#7f9669' },
  { x: 70, y: 104, rot: 65, s: 1.4, fill: '#a9bb91' },
  { x: 70, y: 104, rot: 110, s: 1.5, fill: '#8fa57a' },
  { x: 70, y: 104, rot: 150, s: 1.4, fill: '#7f9669' },
];

const BUDS = [[70, 56], [106, 72], [26, 98], [114, 130], [44, 140]];

export const Bouquet = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 140 230"
    className={className}
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
    aria-hidden="true"
    focusable="false"
  >
    {LEAVES.map((l, i) => (
      <Leaf key={i} {...l} />
    ))}
    <Tassel x={96} y={96} len={112} bend={7} />
    <Tassel x={108} y={102} len={84} bend={-6} />
    <Tassel x={86} y={102} len={62} bend={5} />
    <Rose x={52} y={92} r={17} tone="blush" rot={10} />
    <Rose x={84} y={80} r={15} tone="rose" rot={-20} />
    <Rose x={66} y={118} r={14} tone="cream" rot={30} />
    <Rose x={98} y={112} r={11} tone="blush" />
    <Rose x={38} y={118} r={9} tone="cream" />
    {BUDS.map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="4" fill="#f4d2dc" stroke="#c9788f" strokeWidth="0.8" />
    ))}
  </svg>
);

const SEAL_PATH = (() => {
  const pts = [];
  const N = 48;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const r = 44 + Math.sin(a * 7) * 1.8 + Math.sin(a * 3 + 1) * 1.2;
    pts.push(`${(50 + Math.cos(a) * r).toFixed(2)} ${(50 + Math.sin(a) * r).toFixed(2)}`);
  }
  return `M${pts.join('L')}Z`;
})();

export const WaxSeal = ({ className = '', initials = 'N&A' }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={id} cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#b4416f" />
          <stop offset="0.6" stopColor="#8a2a52" />
          <stop offset="1" stopColor="#5d1a38" />
        </radialGradient>
      </defs>
      <path d={SEAL_PATH} fill={`url(#${id})`} />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#c46b92" strokeOpacity="0.55" strokeWidth="1.4" />
      <text x="50" y="60" textAnchor="middle" fontFamily="'Pinyon Script', cursive" fontSize="28" fill="#eab9cd" fillOpacity="0.9">
        {initials}
      </text>
    </svg>
  );
};

const Frond = ({ x, y, rot, len }) => {
  let d = `M0 0L0 ${-len}`;
  for (let t = 10; t < len; t += 9) {
    const w = 9 * (1 - t / (len * 1.15));
    d += `M0 ${-t}l${(-w).toFixed(1)} ${(-w * 0.7).toFixed(1)}M0 ${-t}l${w.toFixed(1)} ${(-w * 0.7).toFixed(1)}`;
  }
  return <path d={d} transform={`translate(${x} ${y}) rotate(${rot})`} />;
};

const FRONDS = [
  [150, 124, 0, 104],
  [112, 124, -13, 92],
  [188, 124, 13, 92],
  [76, 124, -27, 74],
  [224, 124, 27, 74],
  [42, 124, -42, 52],
  [258, 124, 42, 52],
];

// Fern line-art for the inside of the envelope flap (viewBox 0 0 300 124)
export const Ferns = () => (
  <g fill="none" stroke="#a9ba8c" strokeWidth="0.9" strokeLinecap="round" opacity="0.9">
    {FRONDS.map(([x, y, rot, len], i) => (
      <Frond key={i} x={x} y={y} rot={rot} len={len} />
    ))}
  </g>
);