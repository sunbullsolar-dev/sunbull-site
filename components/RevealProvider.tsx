"use client";

import { useEffect } from "react";

/**
 * Lightweight, dependency-free scroll-reveal.
 *
 * Any element with the `reveal` class starts slightly lowered + transparent
 * (see globals.css) and animates into place the first time it scrolls into
 * view. We use ONE shared IntersectionObserver for the whole page rather than
 * a component per element, so this stays cheap.
 *
 * Safety nets (content must never stay hidden):
 *  - prefers-reduced-motion → CSS forces `.reveal` visible (no animation).
 *  - no-JS → a <noscript> style in layout.tsx forces `.reveal` visible.
 *  - no IntersectionObserver support → we reveal everything immediately below.
 */
export function RevealProvider() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
