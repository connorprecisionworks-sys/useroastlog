import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site" style={{ maxWidth: 1040, margin: "0 auto", padding: "32px 20px 20px" }}>
      <div className="foot-brand">
        Roastlytics<span className="dot">.</span>
      </div>
      <div>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>roastlytics.com · © 2026</div>
    </footer>
  );
}
