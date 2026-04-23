"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link className="brand" href="/">
        Roast Log<span className="em">.</span>
      </Link>
      <div className="nav-links">
        {links.map((l) => {
          const active = pathname === l.href || pathname?.startsWith(l.href + "/");
          return (
            <Link
              key={l.href}
              href={l.href}
              className={active ? "active" : undefined}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
      <Link className="nav-cta" href="/contact">
        Start Free Trial <span className="arrow">→</span>
      </Link>
    </nav>
  );
}
