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
          0%, 100% { transform: rotate(-16deg); }
          50% { transform: rotate(16deg); }
        }
        .metronome-pendulum {
          transform-origin: 340px 440px;
          animation: metronome-swing 1.1s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .metronome-pendulum { animation: none; }
        }
      `}</style>
      <rect x="270" y="450" width="140" height="14" rx="3" fill="#111111" />
      <path d="M280 450 L410 450 L378 150 L302 150 Z" fill="#111111" />
      <rect x="302" y="150" width="76" height="10" rx="2" fill="#111111" />
      <circle cx="340" cy="230" r="3" fill="#00d1b2" />
      <circle cx="340" cy="290" r="3" fill="#00d1b2" />
      <circle cx="340" cy="350" r="3" fill="#00d1b2" />
      <circle cx="340" cy="410" r="3" fill="#00d1b2" />
      <g className="metronome-pendulum">
        <line
          x1="340"
          y1="440"
          x2="340"
          y2="120"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="326" y="255" width="28" height="38" rx="6" fill="#00d1b2" />
      </g>
      <circle cx="340" cy="440" r="9" fill="#111111" />
      <circle cx="340" cy="440" r="3.5" fill="#00d1b2" />
    </svg>
  );
}
