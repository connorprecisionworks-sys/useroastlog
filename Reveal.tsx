"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    // Reset state on route change
    els.forEach((el) => el.classList.remove("in"));

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    // Reveal the first element quickly
    const first = document.querySelector<HTMLElement>(".reveal");
    const firstTimer = window.setTimeout(() => {
      first?.classList.add("in");
    }, 60);

    // Safety net
    const safetyTimer = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(firstTimer);
      window.clearTimeout(safetyTimer);
    };
  }, [pathname]);

  return null;
}
