import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flat $99/month. Roast 500 lbs or 10,000 lbs — same price. No volume pricing, no per-seat fees, no surprises.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Is there really a free trial?",
    a: "Yes — 14 days, no card, no quota games. If you can import a month of Artisan files and a couple of supplier invoices, you'll know inside of an hour whether it fits.",
  },
  {
    q: "Why flat pricing instead of per-volume?",
    a: "Because you shouldn't get punished for growing. Most roasting software charges more the more you roast — so your software bill goes up right when you're working harder. Roastlytics is $99/mo whether you roast 500 or 10,000 lbs. Same features, same support.",
  },
  {
    q: "What happens to the $49 lifetime rate after public launch?",
    a: "It stays $49/mo for your account, forever. New signups will move to $99/mo. Early roasters are taking a bet on us — we honor that clearly.",
  },
  {
    q: "Do I need to use Artisan?",
    a: "No. Artisan import is the fastest on-ramp if you already use it, but you can log roasts manually, import from CSV, or skip that module entirely and use Roastlytics purely for inventory, COGS, and wholesale.",
  },
  {
    q: "What about multiple locations?",
    a: "Multi-shop support is in active development. For now, each location runs as its own account. If you're opening a second roastery and want to consolidate, email us — we'll work something out.",
  },
  {
    q: "What if I cancel?",
    a: "You export everything — green inventory, every roast curve, every invoice — as CSV and .alog before you leave. Your data is yours. Always.",
  },
  {
    q: "How do you handle data and AI training?",
    a: "Encrypted at rest, daily backups. The AI that analyzes your invoices and curves operates on your data for your benefit — we don't train models on it, sell it, or share it with anyone.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="hero" style={{ marginBottom: 56 }}>
        <div className="hero-tag">
          <span className="pulse" />
          Pricing
        </div>
        <h1 style={{ maxWidth: 820 }}>
          Flat <em>$99</em>/month<span className="dot">.</span>
          <br />
          Any volume.
        </h1>
        <p className="hero-sub">
          Roast 500 lbs or 10,000 lbs — same price. No per-pound fees, no
          per-seat charges, no feature tiers. We don&apos;t punish you for
          growing.
        </p>
      </section>

      <section className="reveal">
        <div className="price-row">
          <div className="price-cell">
            <div className="price-cell-label">Public launch</div>
            <div className="price">
              $99<span className="unit">/mo</span>
            </div>
            <p className="price-detail">
              Single shop. Every feature. Unlimited roasts, lots, invoices.
              14-day free trial. Cancel anytime.
            </p>
            <ul className="price-list">
              <li>Unlimited roasts &amp; green lots</li>
              <li>Bulk Artisan import (500 files at a time)</li>
              <li>AI invoice scanning &amp; curve analysis</li>
              <li>COGS, wholesale, cupping, reports</li>
              <li>Email support</li>
            </ul>
            <div style={{ marginTop: 22 }}>
              <Link className="btn btn-ghost" href="/contact">
                Start 14-day trial <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="price-cell featured">
            <div className="price-cell-label">Beta · Lifetime</div>
            <div className="price">
              $49<span className="unit">/mo</span>
            </div>
            <p className="price-detail">
              Half price, forever — for roasters who help shape the product
              before public launch.
            </p>
            <ul className="price-list">
              <li>Everything in the public plan</li>
              <li>Locked at $49/mo for the life of your account</li>
              <li>Direct line to the team</li>
              <li>Feature requests reviewed weekly</li>
              <li>Limited to early beta cohort</li>
            </ul>
            <div style={{ marginTop: 22 }}>
              <Link className="btn btn-primary" href="/contact">
                Claim beta spot <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Questions we get</span>
          <span className="idx">FAQ</span>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="cta reveal">
        <div className="cta-lead">Twenty minutes, then your call.</div>
        <p className="cta-sub">
          Start the trial or book a demo. Either way, you&apos;ll see your own
          numbers — not a sandbox — before anyone asks for a credit card.
        </p>
        <div className="cta-actions">
          <Link className="btn btn-primary" href="/contact">
            Start free trial <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/contact?mode=demo">
            Book a demo
          </Link>
        </div>
      </div>
    </>
  );
}
