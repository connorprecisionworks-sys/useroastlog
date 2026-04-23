import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for Roast Log. $49/mo lifetime for beta roasters, $99/mo at public launch. All features included.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Is there really a free trial?",
    a: "Yes — 14 days, no card, no quota games. If you can import a month of Artisan files and a couple of supplier invoices, you'll know inside of an hour whether it fits.",
  },
  {
    q: "What happens to the $49 lifetime rate after public launch?",
    a: "It stays $49/mo for your account, forever. New signups will be at the $99/mo rate. We wrote it this way because early roasters are taking a bet on us — we want to honor that clearly.",
  },
  {
    q: "Do I need to use Artisan?",
    a: "No. Artisan import is the fastest on-ramp if you already use it, but you can log roasts manually, import from CSV, or skip that module entirely and use Roast Log purely for inventory, COGS, and wholesale.",
  },
  {
    q: "What about multiple locations?",
    a: "Multi-shop support is in active development. For now, each location runs as its own account. If you're opening a second roastery and want to consolidate, email us — we'll work something out.",
  },
  {
    q: "What if I cancel?",
    a: "You export everything — green inventory, every roast curve, every invoice — as CSV and .alog before you leave. We built this to be unsticky; it's easier for everyone that way.",
  },
  {
    q: "How do you handle data and backups?",
    a: "Encrypted at rest, daily automated backups, and your data is yours. We don't sell it, mine it, or use it to train anything.",
  },
  {
    q: "Can I talk to someone before signing up?",
    a: "Yes — book a 20-minute demo through the Contact page. Bring a month of .alog files and a recent invoice; we'll show you your shop inside Roast Log before you commit to anything.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="hero" style={{ marginBottom: 56 }}>
        <div className="hero-tag reveal">Pricing</div>
        <h1 className="reveal" style={{ maxWidth: 780 }}>
          One plan. Every feature<span className="em">.</span>
          <br />
          <span className="soft">No surprise line items.</span>
        </h1>
        <p className="hero-sub reveal">
          A flat monthly fee per shop. Unlimited roasts, unlimited lots,
          unlimited imports. We don&apos;t charge per seat or per gigabyte —
          this is software for people who already count enough things.
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
              Single shop. All features, all the time. Cancel anytime. 14-day
              free trial.
            </p>
            <ul className="price-list">
              <li>Unlimited roasts &amp; green lots</li>
              <li>Bulk Artisan import (500 files at a time)</li>
              <li>AI invoice scanning</li>
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
              Half price, forever — for roasters who help us shape the product
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
            Start Free Trial <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/contact?mode=demo">
            Book a demo
          </Link>
        </div>
      </div>
    </>
  );
}
