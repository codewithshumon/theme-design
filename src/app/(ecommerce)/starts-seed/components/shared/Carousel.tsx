"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  Children,
  type ReactNode,
} from "react";

interface CarouselProps {
  children: ReactNode;
  ariaLabel?: string;
  /** how far (px) each arrow click scrolls */
  step?: number;
  className?: string;
  /** applied to each wrapped item */
  itemClassName?: string;
}

/**
 * Responsive item width for a `gap-3` carousel track so exactly N cards fit per
 * view at each breakpoint (the rest scroll horizontally):
 *   2 → 3 → 4 → 5 → 6 → 7  across  base → sm → md → lg → xl → 2xl
 * Each value subtracts the (N-1) gaps so the row fills edge-to-edge.
 */
export const carouselItemCols =
  "w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-1.5rem)/3)] md:w-[calc((100%-2.25rem)/4)] lg:w-[calc((100%-3rem)/5)] xl:w-[calc((100%-3.75rem)/6)] 2xl:w-[calc((100%-4.5rem)/7)]";

/**
 * Horizontal, scroll-snap carousel with left/right arrow buttons.
 * Each child is wrapped in a shrink-0 snap-start item. Arrows auto-hide
 * at the start/end of the track.
 */
export default function Carousel({
  children,
  ariaLabel,
  step = 600,
  className = "",
  itemClassName = "",
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const items = Children.toArray(children);

  return (
    <div className={`relative ${className}`}>
      {!atStart && (
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md ring-1 ring-black/10 hover:bg-white md:flex"
        >
          <Chevron dir="left" />
        </button>
      )}
      {!atEnd && (
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          className="absolute right-1 top-1/2 z-20 hidden -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md ring-1 ring-black/10 hover:bg-white md:flex"
        >
          <Chevron dir="right" />
        </button>
      )}

      <div
        ref={trackRef}
        aria-label={ariaLabel}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1"
      >
        {items.map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={dir === "left" ? "rotate-180" : ""}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
