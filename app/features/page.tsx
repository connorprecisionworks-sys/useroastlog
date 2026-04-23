import Link from "next/link";
import type { Metadata } from "next";
import AnimatedBar from "../components/AnimatedBar";
import {
  ArtisanImport,
  RoastCurve,
  RoastCompare,
  InvoiceOCR,
} from "../components/Viz";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every feature in Roastlytics: predictive green inventory, Artisan import, curve analysis, roast comparison, AI invoice scan, COGS, wholesale, cupping.",
};

export default function FeaturesPage() {
  const invoiceLines = [
    { name: "Sumatra Takengon", lbs: "798 lbs", price: "$5.69" },
    { name: "Bali Blue Moon", lbs: "268 lbs", price: "$5.46" },
    { name: "Colombia Excelso", lbs: "1542 lbs", price: "$4.26" },
    { name: "Ethiopia Sidamo", lbs: "527 lbs", price: "$4.86" },
    { name: "+ 7 more lots imported", accent: true },
  ];

  return (
    <>
      <section className="hero" style={{ marginBottom: 56 }}>
        <div className="hero-tag">
          <span className="pulse" />
          Features
        </div>
        <h1 style={{ maxWidth: 820 }}>
          Everything a craft roaster needs
          <span className="dot">.</span>
          <br />
          <em>Nothing a roaster doesn&apos;t.</em>
        </h1>
        <p className="hero-sub">
          Built for the shop, not for the demo. Here&apos;s what&apos;s actually
          in it.
        </p>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Green inventory</span>
          <span className="idx">01</span>
        </div>
        <div className="section-body" style={{ marginBottom: 24 }}>
          <p>
            Every lot you&apos;ve bought, every lot you have left. Burn-down per
            lot based on your actual roast volume — not a static number you have
            to remember to update.
          </p>
          <p>
            Predictive low-stock signals fire before you&apos;re scrambling.
            Reorder before you&apos;re out, not two weeks after.
          </p>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 22 }}>
          <div className="inv-row">
            <span className="name">Mexico HG Chiapas EP</span>
            <span className="pct red">88.5% depleted · ~5 days left</span>
          </div>
          <AnimatedBar pct={88.5} warn delay={0} />
          <div className="inv-row">
            <span className="name">Ethiopia Sidamo Guji</span>
            <span className="pct red">85.9% depleted · ~6 days left</span>
          </div>
          <AnimatedBar pct={85.9} warn delay={120} />
          <div className="inv-row">
            <span className="name">Sumatra Takengon</span>
            <span className="pct">59.0% depleted · ~24 days left</span>
          </div>
          <AnimatedBar pct={59} delay={240} />
          <div className="inv-row">
            <span className="name">Colombia Excelso EP</span>
            <span className="pct">18.2% depleted · ~90+ days</span>
          </div>
          <AnimatedBar pct={18.2} delay={360} />
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Artisan import</span>
          <span className="idx">02</span>
        </div>
        <div className="section-body" style={{ marginBottom: 24 }}>
          <p>
            Drop a single{" "}
            <code
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 13,
                color: "var(--red)",
              }}
            >
              .alog
            </code>{" "}
            file or a whole archive — up to 500 files at once — and your
            inventory moves. Charge weight out of green, drop weight into
            roasted, loss rate logged automatically.
          </p>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 22 }}>
          <ArtisanImport filename="Kenya_Kirinyaga_Peaberry_2026-04-18.alog" />
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Curve analysis</span>
          <span className="idx">03</span>
        </div>
        <div className="section-body" style={{ marginBottom: 24 }}>
          <p>
            Full BT and ET curves for every roast. Phase shading for drying,
            Maillard, and development. Markers for charge, first crack, and
            drop. DTR calculated automatically. AI flags when a curve deviates
            from your reference profile — before you taste it in the cup.
          </p>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 22 }}>
          <RoastCurve />
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Roast comparison</span>
          <span className="idx">04</span>
        </div>
        <div className="section-body" style={{ marginBottom: 24 }}>
          <p>
            Overlay multiple roasts of the same coffee — aligned at charge. The
            outlier shows itself. Three Kenya Peaberries look identical on paper
            until you see one with half the development time.
          </p>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 22 }}>
          <RoastCompare />
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>AI invoice scan</span>
          <span className="idx">05</span>
        </div>
        <div className="section-body" style={{ marginBottom: 24 }}>
          <p>
            Photograph a supplier invoice — or drop the PDF. Every line item
            extracts in about twenty seconds, matches to existing lots where
            possible, and your landed cost updates automatically.
          </p>
          <p>No more transcribing Royal PDFs into a spreadsheet at 9pm.</p>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 22 }}>
          <InvoiceOCR lines={invoiceLines} />
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>COGS &amp; margin floor</span>
          <span className="idx">06</span>
        </div>
        <div className="section-body">
          <p>
            Landed green cost, loss rate, labor, and packaging roll up into a
            live COGS per pound. Your wholesale floor updates automatically —
            the number you quote a café today is the one that actually holds.
          </p>
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Wholesale orders</span>
          <span className="idx">07</span>
        </div>
        <div className="section-body">
          <p>
            Recurring wholesale accounts, per-customer pricing, roast-to-order
            queues. Print a production schedule for the week. See which accounts
            are slipping before they churn.
          </p>
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Cupping &amp; QC</span>
          <span className="idx">08</span>
        </div>
        <div className="section-body">
          <p>
            SCA-style cupping forms tied to the lot and the roast. Scores and
            notes live next to the curve that produced them — so you know which
            profile to repeat and which one to quietly retire.
          </p>
        </div>
      </section>

      <div className="cta reveal">
        <div className="cta-lead">See it with your own data.</div>
        <p className="cta-sub">
          Twenty minutes. Bring a month of .alog files and a recent Royal
          invoice — we&apos;ll have your shop live by the end of the call.
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
