"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { themes, type Theme } from "@/data/themes";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return themes;
    return themes.filter((t) =>
      `${t.title} ${t.description} ${t.category} ${t.tags.join(" ")}`
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const openTheme = (theme: Theme) => {
    if (theme.status !== "live") return;
    router.push(`/${theme.slug}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Ambient color field so the glass cards have something to refract */}
      <BackgroundField />

      {/* Header: just the search bar, centered */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center px-4 py-4">
          <SearchBar query={query} onChange={setQuery} />
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
        {/* Intro */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
            ✨ Theme catalogue
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Explore the storefronts
          </h1>
          <p className="mt-3 text-pretty text-sm text-white/60 sm:text-base">
            Search a theme to preview it. Click a live card to open the full page.
          </p>
        </div>

        {/* Card grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((theme) => (
              <ThemeCard
                key={theme.slug}
                theme={theme}
                onClick={() => openTheme(theme)}
              />
            ))}
          </div>
        ) : (
          <EmptyState query={query} onClear={() => setQuery("")} />
        )}

        {/* Result hint while searching */}
        {query.trim() && filtered.length > 0 && (
          <p className="mt-8 text-center text-sm text-white/50">
            {filtered.length} result{filtered.length === 1 ? "" : "s"} for{" "}
            <span className="font-medium text-white/80">&ldquo;{query.trim()}&rdquo;</span>
          </p>
        )}
      </main>
    </div>
  );
}

/* --------------------------- Search bar --------------------------- */
function SearchBar({
  query,
  onChange,
}: {
  query: string;
  onChange: (value: string) => void;
}) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="group flex w-full items-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-xl transition focus-within:bg-white/15 focus-within:ring-2 focus-within:ring-white/40"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search themes, categories, tags…"
        aria-label="Search themes"
        className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/50 sm:text-base"
      />
      {query && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <ClearIcon />
        </button>
      )}
      <button
        type="submit"
        aria-label="Search"
        className="flex h-11 shrink-0 items-center gap-2 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
      >
        <SearchIcon />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}

/* ----------------------------- Card ------------------------------- */
function ThemeCard({ theme, onClick }: { theme: Theme; onClick: () => void }) {
  const live = theme.status === "live";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!live}
      aria-label={`Open ${theme.title}`}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-2xl p-px text-left transition duration-300",
        "bg-white/10 ring-1 ring-white/15 backdrop-blur-xl",
        live
          ? "cursor-pointer hover:-translate-y-1 hover:bg-white/15 hover:ring-white/40 hover:shadow-2xl hover:shadow-black/40"
          : "cursor-not-allowed",
      ].join(" ")}
    >
      {/* Accent gradient glow */}
      <div
        className={`pointer-events-none absolute inset-0 bg-linear-to-br ${theme.gradient} opacity-70 transition group-hover:opacity-100`}
      />

      {/* Content sits above the glow */}
      <div className="relative flex h-full flex-1 flex-col rounded-[15px] bg-slate-950/30 p-5 backdrop-blur-sm">
        <div className="mb-4 flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl ring-1 ring-white/20 backdrop-blur">
            {theme.emoji}
          </span>
          {live ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          ) : (
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/60 ring-1 ring-white/15">
              Coming soon
            </span>
          )}
        </div>

        <span className="text-[11px] font-medium uppercase tracking-wider text-white/50">
          {theme.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white">{theme.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
          {theme.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {theme.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-white/55 ring-1 ring-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className={[
              "flex items-center gap-1 text-sm font-medium transition",
              live
                ? "text-white opacity-70 group-hover:translate-x-0.5 group-hover:opacity-100"
                : "text-white/30",
            ].join(" ")}
          >
            {live ? "Open" : "Soon"}
            <ArrowIcon />
          </span>
        </div>
      </div>
    </button>
  );
}

/* -------------------------- Empty state --------------------------- */
function EmptyState({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl bg-white/5 px-6 py-16 text-center ring-1 ring-white/10 backdrop-blur-xl">
      <span className="text-4xl">🔍</span>
      <h3 className="mt-4 text-lg font-semibold text-white">No themes found</h3>
      <p className="mt-1 text-sm text-white/55">
        Nothing matches{" "}
        <span className="font-medium text-white/80">&ldquo;{query}&rdquo;</span>. Try a
        different keyword.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
      >
        Clear search
      </button>
    </div>
  );
}

/* --------------------------- Background --------------------------- */
function BackgroundField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-500/30 blur-3xl" />
      <div className="absolute right-[-10%] top-1/4 h-112 w-md rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute bottom-[-15%] left-1/3 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
    </div>
  );
}

/* ----------------------------- Icons ------------------------------ */
function SearchIcon() {
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
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
function ClearIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
