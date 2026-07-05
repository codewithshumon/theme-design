import { testimonials } from "../data";
import Stars from "./shared/Stars";

/**
 * "What Our Customers Say" — Sony Smart style testimonial cards.
 */
export default function Testimonials() {
  return (
    <section className="rounded-md bg-white px-6 py-12 ring-1 ring-black/5 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-shopee-light px-3 py-1 text-xs font-medium uppercase tracking-widest text-shopee">
          Reviews
        </span>
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-4xl">
          What Our Customers Say
        </h2>
        <div className="mx-auto mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
          <Stars rating={5} size={16} />
          <span>
            <strong className="text-gray-900">4.9/5</strong> from 12,000+ reviews
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Stars rating={t.rating} size={14} />
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-700">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-2 flex items-center gap-3 border-t border-gray-100 pt-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-gray-400">
                    {t.location} · bought {t.product}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
