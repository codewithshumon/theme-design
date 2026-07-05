"use client";

import { subscribeCopy } from "../data";

/**
 * Section 19 — newsletter subscribe band.
 * Two-column layout: copy on the left, form on the right (keeps it short).
 */
export default function Subscribe() {
  return (
    <section className="relative overflow-hidden rounded-md bg-linear-to-br from-amazon-nav via-amazon-dark to-amazon-nav text-white">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-shopee/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-8 sm:py-10 lg:flex-row lg:justify-between lg:gap-12">
        {/* Left — copy */}
        <div className="flex max-w-md flex-col items-center gap-2 text-center lg:items-start lg:text-left">
          <span className="text-3xl sm:text-4xl">✉️</span>
          <h2 className="text-xl font-bold sm:text-2xl">{subscribeCopy.title}</h2>
          <p className="text-sm text-white/80 sm:text-base">
            {subscribeCopy.subtitle}
          </p>
        </div>

        {/* Right — form */}
        <div className="w-full max-w-md lg:border-l lg:border-white/10 lg:pl-12">
          <form
            className="flex w-full flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-full px-5 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="rounded-full bg-shopee px-6 py-3 text-sm font-semibold text-white transition hover:bg-shopee-dark"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-center text-xs text-white/60 sm:text-left">
            {subscribeCopy.finePrint}
          </p>
        </div>
      </div>
    </section>
  );
}
