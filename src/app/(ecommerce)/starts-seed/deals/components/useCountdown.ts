"use client";

import { useEffect, useState } from "react";

/**
 * Duration-based countdown (no wall-clock `Date` — SSR-safe and deterministic).
 * Counts down from `totalSeconds` and resets to it on reaching zero, so the
 * page always shows an active sale. Returns zero-padded hh/mm/ss plus a day
 * figure for multi-day campaigns.
 */
export function useCountdown(totalSeconds: number) {
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    const id = setInterval(
      () => setRemaining((r) => (r > 0 ? r - 1 : totalSeconds)),
      1000
    );
    return () => clearInterval(id);
  }, [totalSeconds]);

  const days = Math.floor(remaining / 86_400);
  const hours = Math.floor((remaining % 86_400) / 3_600);
  const minutes = Math.floor((remaining % 3_600) / 60);
  const seconds = remaining % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    days,
    h: pad(hours),
    m: pad(minutes),
    s: pad(seconds),
  };
}
