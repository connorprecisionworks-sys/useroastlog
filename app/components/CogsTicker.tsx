"use client";

import { useEffect, useState } from "react";

export default function CogsTicker({ base = 8.8 }: { base?: number }) {
  const [value, setValue] = useState(base);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let current = base;
    const id = setInterval(() => {
      const drift = (Math.random() - 0.4) * 0.02;
      current = Math.max(base - 0.1, Math.min(base + 0.1, current + drift));
      setValue(Number(current.toFixed(2)));
    }, 3200);
    return () => clearInterval(id);
  }, [base]);

  return <>${value.toFixed(2)}</>;
}
