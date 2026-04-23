"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedBar({
  pct,
  warn = false,
  delay = 0,
}: {
  pct: number;
  warn?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setAnimated(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setAnimated(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setAnimated(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`bar${warn ? " warn" : ""}${animated ? " animate" : ""}`}
      style={{ ["--target" as string]: `${pct}%` } as React.CSSProperties}
    >
      <i />
    </div>
  );
}
