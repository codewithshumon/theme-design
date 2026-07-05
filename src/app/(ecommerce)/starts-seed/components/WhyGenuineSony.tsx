import { genuineFeatures, genuineStats } from "../data";

/**
 * "Why Genuine from Authorized Distributor" — Sony Smart style.
 * Dark, premium band with feature columns and trust stats.
 */
export default function WhyGenuineSony() {
  return (
    <section className="relative overflow-hidden rounded-md bg-amazon-dark text-white">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-shopee/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-shopee/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-12 text-center sm:py-16">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-shopee-yellow">
          Authorized Distributor
        </span>
        <h2 className="mt-4 text-2xl font-bold sm:text-4xl">
          Why Genuine from Authorized Distributor
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
          Every product we ship is sourced directly from licensed distributors —
          brand-new, factory-sealed and backed by the full manufacturer warranty.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {genuineFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-lg bg-white/5 p-5 text-left ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-shopee/20 text-2xl">
                {f.emoji}
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {genuineStats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-shopee-yellow sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
