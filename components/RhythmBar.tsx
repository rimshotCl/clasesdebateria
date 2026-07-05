export default function RhythmBar({ className = "" }: { className?: string }) {
  const heights = [40, 70, 100, 55, 85, 65, 45];
  return (
    <div
      aria-hidden="true"
      className={`rhythm-bar flex items-end gap-1.5 h-10 ${className}`}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-1.5 rounded-full bg-teal"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
