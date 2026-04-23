"use client";

import { useEffect, useRef, useState } from "react";

type Format = "int" | "dec" | "money";

export default function CountUp({
  to,
  format = "int",
  duration = 1600,
  delay = 600,
  className,
}: {
  to: number;
  format?: Format;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setValue(to);
      return;
    }

    let rafId: number;
    let startTs: number | null = null;

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setValue(to * ease(p));
      if (p < 1) rafId = requestAnimationFrame(step);
    };

    const timer = window.setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [to, duration, delay]);

  const formatted =
    format === "int"
      ? Math.round(value).toLocaleString()
      : format === "dec"
      ? value.toFixed(1)
      : value.toFixed(2);

  return <span className={className}>{formatted}</span>;
}
