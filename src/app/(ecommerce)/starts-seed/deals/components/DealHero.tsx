"use client";

import type { Campaign } from "../data";
import { wideImg } from "../../data";
import { useCountdown } from "./useCountdown";

/**
 * Mega-sale campaign hero: full-width banner image with a brand-colored
 * gradient overlay, the campaign headline + perks, a live multi-box countdown
 * (days / hh / mm / ss), and a stat strip.
 */
export default function DealHero({ campaign }: { campaign: Campaign }) {
  const { days, h, m, s } = useCountdown(campaign.endsInSec);

  return (
    <section className="relative overflow-hidden rounded-md ring-1 ring-black/5">
      {/* banner image */}
      <img
        src={wideImg(campaign.heroSeed, 1600, 520)}
        alt={campaign.name}
        loading="lazy"
        className="h-full w-full object-cover"
      />

      {/* colored overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(100deg, ${campaign.color}f2 0%, ${campaign.color}cc 40%, ${campaign.color}55 100%)`,
        }}
      />

      {/* content */}
      <div className="relative flex flex-col gap-6 px-5 py-8 text-white sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            {campaign.badge}
          </span>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {campaign.name}
          </h1>
          <p className="mt-2 text-sm text-white/90 sm:text-base">
            {campaign.subtitle}
          </p>

          {/* perks */}
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm">
            {campaign.perks.map((perk) => (
              <span key={perk.label} className="flex items-center gap-1.5">
                <span aria-hidden>{perk.icon}</span>
                {perk.label}
              </span>
            ))}
          </div>
        </div>

        {/* countdown */}
        <div className="flex flex-col items-start gap-2 lg:items-end">
          <span className="text-xs font-medium uppercase tracking-widest text-white/80">
            Sale ends in
          </span>
          <div className="flex items-center gap-2">
            <CountBox value={String(days)} label="Days" wide />
            <Sep />
            <CountBox value={h} label="Hrs" />
            <Sep />
            <CountBox value={m} label="Min" />
            <Sep />
            <CountBox value={s} label="Sec" />
          </div>
          <button
            type="button"
            className="mt-2 rounded-full bg-white px-6 py-2 text-sm font-bold text-shopee shadow-lg transition hover:bg-shopee-light"
          >
            Shop All Deals →
          </button>
        </div>
      </div>

      {/* stat strip */}
      <div className="relative grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-4">
        {campaign.stats.map((stat) => (
          <div key={stat.label} className="bg-black/20 px-4 py-3 text-center backdrop-blur-sm">
            <div className="text-xl font-black sm:text-2xl">{stat.value}</div>
            <div className="text-[11px] uppercase tracking-wide text-white/80">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- primitives -------------------------------- */
function CountBox({
  value,
  label,
  wide = false,
}: {
  value: string;
  label: string;
  wide?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`flex items-center justify-center rounded-md bg-amazon-dark text-lg font-bold tabular-nums shadow-md sm:text-xl ${
          wide ? "min-w-12 px-2" : "h-9 w-9 sm:h-11 sm:w-11"
        }`}
      >
        {value}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-wide text-white/75">
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return <span className="text-xl font-bold text-white/70">:</span>;
}
