import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="foot-brand">
        Roast Log<span className="em">.</span>
      </div>
      <div>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>useroastlog.com · © 2026</div>
    </footer>
  );
}
