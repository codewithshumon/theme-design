"use client";

import { useEffect, useState } from "react";
import {
  topBarLeft,
  socialLinks,
  topBarRight,
  languages,
  deliverTo,
  accountLinks,
  cartCount,
  mainNav,
  searchPlaceholders,
} from "../data";

/* ------------------------------------------------------------------ */
/* Header = 3 full-width rows                                          */
/* Row 1: Shopee-style utility bar (Seller Centre / Download / lang)   */
/* Row 2: Amazon-style primary header (logo / search / account / cart) */
/* Row 3: Amazon-style secondary nav (All / Today's Deals / ...)       */
/* ------------------------------------------------------------------ */
export default function Header() {
  const [phIndex, setPhIndex] = useState(0);

  // Rotate the search placeholder through latest campaigns / slogans
  useEffect(() => {
    const id = setInterval(
      () => setPhIndex((i) => (i + 1) % searchPlaceholders.length),
      3200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="w-full">
      <Row1 />
      <Row2 placeholder={searchPlaceholders[phIndex]} />
      <Row3 />
    </header>
  );
}

/* ----------------------------- Row 1 ------------------------------ */
function Row1() {
  return (
    <div className="w-full border-b border-black/5 bg-[#fafafa] text-xs text-gray-600">
      <div className="mx-auto flex h-8 max-w-[1920px] items-center justify-between px-[2%]">
        {/* left */}
        <div className="flex items-center gap-4">
          {topBarLeft.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hidden items-center gap-1 hover:text-shopee sm:flex"
            >
              {item.label === "Download" && <DownloadIcon />}
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <span className="hidden text-gray-400 sm:inline">Follow us on</span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-gray-500 hover:text-shopee"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex items-center gap-4">
          {topBarRight.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 hover:text-shopee"
            >
              {item.label === "Notifications" && <BellIcon />}
              {item.label === "Help" && <HelpIcon />}
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}

          {/* language dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-shopee">
              <GlobeIcon />
              <span className="hidden sm:inline">English</span>
              <CaretDown />
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-40 translate-y-1 rounded bg-white py-1 opacity-0 shadow-lg ring-1 ring-black/10 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {languages.map((l) => (
                <a
                  key={l.code}
                  href="#"
                  className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50"
                >
                  <span className="w-6 text-xs text-gray-400">{l.code}</span>
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* account */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-shopee">
              <UserIcon />
              <span className="hidden sm:inline">Account</span>
              <CaretDown />
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-52 translate-y-1 rounded bg-white p-2 opacity-0 shadow-lg ring-1 ring-black/10 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-2 flex gap-2">
                <a
                  href="#"
                  className="flex-1 rounded bg-shopee py-1.5 text-center text-xs font-medium text-white hover:bg-shopee-dark"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="flex-1 rounded ring-1 ring-shopee py-1.5 text-center text-xs font-medium text-shopee hover:bg-shopee-light"
                >
                  Register
                </a>
              </div>
              <div className="grid grid-cols-2 gap-1 pt-1 text-[11px]">
                {accountLinks.account.slice(0, 6).map((a) => (
                  <a key={a} href="#" className="rounded px-1 py-1 hover:text-shopee">
                    {a}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Row 2 ------------------------------ */
function Row2({ placeholder }: { placeholder: string }) {
  return (
    <div className="w-full bg-amazon-dark text-white">
      <div className="mx-auto flex h-15 max-w-[1920px] items-center gap-2 px-[2%] sm:gap-4">
        {/* hamburger (mobile) + logo */}
        <button className="flex h-10 w-10 items-center justify-center rounded border border-transparent hover:border-white md:hidden">
          <Hamburger />
        </button>

        <a href="#" className="flex shrink-0 items-center gap-1.5 hover:ring-1 hover:ring-white">
          <span className="text-2xl">🌱</span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-lg font-bold tracking-tight">starts<span className="text-shopee">·</span>seed</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400">mall &amp; marketplace</span>
          </span>
        </a>

        {/* deliver to */}
        <a
          href="#"
          className="hidden items-end gap-1 rounded px-2 py-1 hover:ring-1 hover:ring-white lg:flex"
        >
          <PinIcon />
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] text-gray-300">{deliverTo.label}</span>
            <span className="text-sm font-bold">{deliverTo.place}</span>
          </span>
        </a>

        {/* search */}
        <div className="flex h-10 flex-1 overflow-hidden rounded-md ring-2 ring-transparent focus-within:ring-amazon-accent">
          <button className="hidden items-center gap-1 bg-gray-100 px-2 text-xs text-gray-700 hover:bg-gray-200 sm:flex">
            All
            <CaretDown className="text-gray-500" />
          </button>
          <input
            type="text"
            aria-label="Search products"
            placeholder={placeholder}
            className="min-w-0 flex-1 bg-white px-3 text-sm text-gray-900 outline-none placeholder:text-gray-500"
          />
          <button
            aria-label="Search"
            className="flex w-11 items-center justify-center bg-amazon-accent text-amazon-dark hover:bg-amazon-accent-hover"
          >
            <SearchIcon />
          </button>
        </div>

        {/* language */}
        <button className="hidden items-center gap-1 px-1 hover:ring-1 hover:ring-white lg:flex">
          <span className="text-sm font-bold">EN</span>
          <CaretDown />
        </button>

        {/* account */}
        <a
          href="#"
          className="group relative hidden flex-col leading-tight px-1 hover:ring-1 hover:ring-white sm:flex"
        >
          <span className="text-[11px] text-gray-300">{accountLinks.greeting}</span>
          <span className="flex items-center gap-0.5 text-sm font-bold">
            Account &amp; Lists
            <CaretDown />
          </span>
        </a>

        {/* orders */}
        <a
          href="#"
          className="hidden flex-col leading-tight px-1 hover:ring-1 hover:ring-white lg:flex"
        >
          <span className="text-[11px] text-gray-300">Returns</span>
          <span className="text-sm font-bold">&amp; Orders</span>
        </a>

        {/* cart */}
        <a
          href="#"
          className="relative flex items-end gap-1 px-1 hover:ring-1 hover:ring-white"
          aria-label="Cart"
        >
          <span className="relative">
            <CartIcon />
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-shopee px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </span>
          <span className="hidden text-sm font-bold sm:inline">Cart</span>
        </a>
      </div>
    </div>
  );
}

/* ----------------------------- Row 3 ------------------------------ */
function Row3() {
  return (
    <div className="w-full bg-amazon-nav text-white">
      <div className="mx-auto flex h-10 max-w-[1920px] items-center gap-1 overflow-x-auto px-[2%] no-scrollbar">
        <button className="flex shrink-0 items-center gap-1 rounded px-2 py-1 text-sm font-bold ring-1 ring-transparent hover:ring-white">
          <Hamburger />
          All
        </button>
        {mainNav.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative flex shrink-0 items-center gap-1 rounded px-2 py-1 text-sm ring-1 ring-transparent hover:ring-white"
          >
            {link.hot && (
              <span className="rounded bg-shopee px-1 text-[10px] font-bold uppercase">
                Hot
              </span>
            )}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- icons ------------------------------- */
function CaretDown({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}
function Hamburger() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
  );
}
function BellIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>
  );
}
function HelpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7" /><path d="M12 17h.01" /></svg>
  );
}
function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>
  );
}
function SocialIcon({ name }: { name: string }) {
  if (name === "facebook")
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
    );
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  );
}
