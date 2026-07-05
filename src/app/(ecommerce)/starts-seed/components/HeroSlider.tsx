"use client";

import { useEffect, useState } from "react";
import { heroSlides, heroPromos } from "../data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[index];

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_320px]">
      {/* main slider */}
      <div className="relative aspect-[1200/420] w-full overflow-hidden rounded-md bg-gray-200">
        <div key={slide.id} className="animate-hero-fade absolute inset-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              slide.align === "left"
                ? "from-black/70 via-black/30 to-transparent"
                : "from-transparent via-black/30 to-black/70"
            }`}
          />
        </div>

        {/* text */}
        <div
          className={`absolute inset-0 flex flex-col justify-center gap-3 p-6 sm:p-10 ${
            slide.align === "right" ? "items-end text-right" : "items-start"
          }`}
        >
          {slide.badge && (
            <span className="rounded-full bg-shopee px-3 py-1 text-xs font-semibold text-white">
              {slide.badge}
            </span>
          )}
          <h2 className="max-w-md text-2xl font-bold leading-tight text-white drop-shadow sm:text-4xl">
            {slide.title}
          </h2>
          <p className="max-w-md text-sm text-white/90 drop-shadow sm:text-base">
            {slide.subtitle}
          </p>
          <button className="mt-1 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-shopee shadow-lg transition hover:bg-shopee-light">
            {slide.cta}
          </button>
        </div>

        {/* arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 sm:flex"
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 sm:flex"
        >
          <Arrow dir="right" />
        </button>

        {/* dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* promo column */}
      <div className="hidden flex-col gap-3 lg:flex">
        {heroPromos.map((promo) => (
          <a
            key={promo.id}
            href="#"
            className="group relative flex flex-1 items-end overflow-hidden rounded-md bg-gray-200"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative p-4 text-white">
              <p className="text-lg font-bold">{promo.title}</p>
              <p className="text-sm text-white/80">{promo.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
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
