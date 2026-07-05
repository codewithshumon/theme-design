interface StarsProps {
  rating: number; // 0..5
  size?: number; // px
  className?: string;
}

/** Renders 5 stars with fractional fill via a clipped gold overlay. */
export default function Stars({ rating, size = 12, className = "" }: StarsProps) {
  const pct = `${Math.max(0, Math.min(100, (rating / 5) * 100))}%`;
  return (
    <span
      className={`relative inline-flex leading-none ${className}`}
      style={{ width: size * 5, height: size }}
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      <StarRow size={size} className="text-gray-300" />
      <span
        className="absolute left-0 top-0 overflow-hidden"
        style={{ width: pct }}
      >
        <StarRow size={size} className="text-shopee-yellow" />
      </span>
    </span>
  );
}

function StarRow({ size, className }: { size: number; className: string }) {
  return (
    <span className={`flex ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27l-5.18 3.04 1.4-5.92L3.5 9.5l6.06-.5L12 3.5l2.44 5.5 6.06.5-4.72 4.89 1.4 5.92z" />
        </svg>
      ))}
    </span>
  );
}
