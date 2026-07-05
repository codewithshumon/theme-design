import { blogPosts } from "../data";

/**
 * "Latest from Our Blog" — Sony Smart style editorial cards.
 */
export default function LatestBlog() {
  return (
    <section className="rounded-md bg-white px-6 py-12 ring-1 ring-black/5 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between">
          <div>
            <span className="inline-block rounded-full bg-shopee-light px-3 py-1 text-xs font-medium uppercase tracking-widest text-shopee">
              Blog
            </span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-4xl">
              Latest from Our Blog
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-sm font-medium text-shopee hover:text-shopee-dark sm:inline"
          >
            View all →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[5/3] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-shopee">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-900 group-hover:text-shopee">
                  {post.title}
                </h3>
                <p className="line-clamp-2 mt-1 text-xs text-gray-500">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-auto pt-2 text-xs font-medium text-shopee hover:text-shopee-dark"
                >
                  Read article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
