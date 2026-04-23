"use client";

import { useEffect, useState } from "react";

export default function LiveSync() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const id = setInterval(() => setSeconds((s) => s + 4), 4000);
    return () => clearInterval(id);
  }, []);

  const label =
    seconds === 0
      ? "synced just now"
      : seconds < 60
      ? `synced ${seconds}s ago`
      : `synced ${Math.floor(seconds / 60)}m ago`;

  return <span>{label}</span>;
}
