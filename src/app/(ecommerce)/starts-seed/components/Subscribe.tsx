"use client";

import { subscribeCopy } from "../data";

/**
 * Section 19 — newsletter subscribe band.
 */
export default function Subscribe() {
  return (
    <section className="relative overflow-hidden rounded-md bg-shopee text-white">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-shopee-yellow/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 py-12 text-center sm:py-14">
        <span className="text-4xl">✉️</span>
        <h2 className="text-2xl font-bold sm:text-3xl">{subscribeCopy.title}</h2>
        <p className="max-w-xl text-sm text-white/90 sm:text-base">
          {subscribeCopy.subtitle}
        </p>

        <form
          className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
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
            className="rounded-full bg-amazon-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-white/70">{subscribeCopy.finePrint}</p>
      </div>
    </section>
  );
}
