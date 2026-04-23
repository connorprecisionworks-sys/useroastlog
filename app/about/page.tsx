import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Roastlytics exists, what we believe about software for craft roasters, and who's behind it.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero" style={{ marginBottom: 56 }}>
        <div className="hero-tag">
          <span className="pulse" />
          About
        </div>
        <h1 style={{ maxWidth: 880 }}>
          Intelligence for<br />
          the back of the shop<span className="dot">.</span>
        </h1>
      </section>

      <section className="reveal">
        <p className="about-lede">
          Most software for coffee roasters is either a cash register that
          thinks it runs a roastery, or a six-figure ERP that assumes you roast
          in tons. We built Roastlytics for the middle — the part of the
          industry where the coffee actually comes from — and we layered AI on
          top so the software tells you what to do, not just what happened.
        </p>
        <div className="prose">
          <p>
            Commercial craft roasters — 500 to 10,000 pounds a month — run on a
            stack of tools that don&apos;t talk: a green inventory spreadsheet,
            Artisan files in a folder, a PDF invoice from Royal every couple
            weeks, a calculator for COGS, and a cupping notebook by the sink.
            Every number you care about lives in a different place, and none of
            them update each other.
          </p>
          <p>
            Roastlytics replaces that stack with one system that knows where
            your coffee is, what it cost, how it roasted, and what you should
            charge for it. Then goes further: predicts when you&apos;ll run
            out, flags roasts that look wrong before you cup them, forecasts
            COGS before invoices land.
          </p>
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>What we believe</span>
          <span className="idx">01</span>
        </div>
        <div className="prose">
          <h3>Software should do the counting.</h3>
          <p>
            You&apos;re busy roasting. If a tool makes you update inventory by
            hand after every batch, it&apos;s not helping — it&apos;s a second
            job. Roastlytics updates itself from the roast file you already
            exported.
          </p>

          <h3>Data belongs to roasters.</h3>
          <p>
            Your curves, your costs, your customers — all exportable, all the
            time. If you ever want to leave, you leave with everything.
            That&apos;s the only defensible way to run SaaS.
          </p>

          <h3>Intelligence, not just storage.</h3>
          <p>
            Other roasting software stores your data. We turn it into
            decisions. A dashboard that says &ldquo;you have 4,581 lbs of
            green&rdquo; is a starting point. A system that says &ldquo;your
            Kenya is 5 days from zero and three suppliers have offerings
            matching your profile&rdquo; is a different category.
          </p>

          <h3>Flat pricing, forever.</h3>
          <p>
            We don&apos;t charge per pound, per seat, or per feature. One
            price, every feature, any volume. Your success should make us
            better, not more expensive.
          </p>

          <h3>We don&apos;t train on your data.</h3>
          <p>
            The AI that reads your invoices reads only your invoices. Your
            pricing, your curves, and your customer list don&apos;t go into any
            training set — ours or anyone else&apos;s.
          </p>
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Who&apos;s behind it</span>
          <span className="idx">02</span>
        </div>
        <div className="prose">
          <p>
            Roastlytics is built by a small team that grew up around coffee —
            roasters, baristas, and engineers who got tired of watching good
            shops run their back-of-house on sticky notes. We&apos;re based in
            the US, the beta cohort is open, and you&apos;ll get a human on the
            phone every time you ask.
          </p>
          <p>
            If you want to talk before signing up, the fastest way is to email
            Connor directly — he answers every message.
          </p>
        </div>
      </section>

      <div className="cta reveal">
        <div className="cta-lead">Come build it with us.</div>
        <p className="cta-sub">
          The beta cohort is small by design. If you want a say in how the
          thing you&apos;ll use every day gets built, now is the window.
        </p>
        <div className="cta-actions">
          <Link className="btn btn-primary" href="/contact">
            Join the beta <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/contact?mode=demo">
            Book a demo
          </Link>
        </div>
      </div>
    </>
  );
}
