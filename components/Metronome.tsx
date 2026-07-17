export default function Metronome({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 520"
      className={className}
      role="img"
      aria-label="Metrónomo animado balanceándose"
    >
      <style>{`
        @keyframes metronome-swing {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        .metronome-pendulum {
          transform-origin: 340px 435px;
          animation: metronome-swing 1.1s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .metronome-pendulum { animation: none; }
        }
      `}</style>
      <rect x="260" y="448" width="160" height="16" rx="4" fill="#111111" />
      <path
        d="M275 448 L405 448 L365 160 Q340 130 315 160 Z"
        fill="#111111"
      />
      <rect x="322" y="200" width="36" height="230" rx="6" fill="#ffffff" />
      <circle cx="340" cy="235" r="2.5" fill="#111111" />
      <circle cx="340" cy="275" r="2.5" fill="#111111" />
      <circle cx="340" cy="315" r="2.5" fill="#111111" />
      <circle cx="340" cy="355" r="2.5" fill="#111111" />
      <circle cx="340" cy="395" r="2.5" fill="#111111" />
      <g className="metronome-pendulum">
        <line
          x1="340"
          y1="435"
          x2="340"
          y2="145"
          stroke="#111111"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="328" y="240" width="24" height="34" rx="5" fill="#00d1b2" />
      </g>
      <circle cx="340" cy="140" r="6" fill="#00d1b2" />
      <circle cx="340" cy="435" r="8" fill="#111111" />
    </svg>
  );
}