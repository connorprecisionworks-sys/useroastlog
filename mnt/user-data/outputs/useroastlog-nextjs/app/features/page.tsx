import Link from "next/link";
import type { Metadata } from "next";
import {
  InventoryBars,
  ArtisanImport,
  RoastCurve,
  RoastCompare,
  InvoiceOCR,
} from "../components/Viz";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Green inventory, Artisan import, curve analysis, roast comparison, AI invoice scanning, COGS, wholesale, cupping — everything Roast Log does.",
};

export default function FeaturesPage() {
  const inventoryRows = [
    { name: "Mexico HG Chiapas EP", pct: 88.5, daysLeft: 5, warn: true },
    { name: "Ethiopia Sidamo Guji", pct: 85.9, daysLeft: 6, warn: true },
    { name: "Sumatra Takengon", pct: 59.0, daysLeft: 24 },
    { name: "Colombia Excelso EP", pct: 18.2, daysLeft: 90 },
  ];

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
        <div className="hero-tag reveal">Features</div>
        <h1 className="reveal" style={{ maxWidth: 820 }}>
          Everything a craft roaster needs<span className="em">.</span>
          <br />
          <span className="soft">Nothing a roaster doesn&apos;t.</span>
        </h1>
        <p className="hero-sub reveal">
          We built Roast Log for the shop, not for a demo. Here&apos;s what&apos;s
          actually in it.
        </p>
      </section>

      {/* INVENTORY */}
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
            Low-stock signals fire before you&apos;re scrambling. Reorder before
            you&apos;re out, not two weeks after.
          </p>
        </div>
        <div className="feature">
          <div
            className="feature-viz"
            style={{ borderTop: "1px solid var(--tan)", paddingTop: 22 }}
          >
            <InventoryBars rows={inventoryRows} />
          </div>
        </div>
      </section>

      {/* ARTISAN IMPORT */}
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
                color: "var(--ember)",
              }}
            >
              .alog
            </code>{" "}
            file or a whole archive — up to 500 files at once — and your
            inventory moves. Charge weight out of green, drop weight into
            roasted, loss rate logged automatically.
          </p>
          <p>
            If you already roast with Artisan, you already have everything Roast
            Log needs.
          </p>
        </div>
        <div className="feature">
          <div
            className="feature-viz"
            style={{ borderTop: "1px solid var(--tan)", paddingTop: 22 }}
          >
            <ArtisanImport filename="Kenya_Kirinyaga_Peaberry_2026-04-18.alog" />
          </div>
        </div>
      </section>

      {/* CURVE ANALYSIS */}
      <section className="reveal">
        <div className="section-label">
          <span>Curve analysis</span>
          <span className="idx">03</span>
        </div>
        <div className="section-body" style={{ marginBottom: 24 }}>
          <p>
            Full BT and ET curves for every roast. Phase shading for drying,
            Maillard, and development. Markers for charge, first crack, and
            drop. DTR calculated automatically.
          </p>
          <p>
            Click into any roast from six months ago and see exactly what you
            did — without opening Artisan.
          </p>
        </div>
        <div className="feature">
          <div
            className="feature-viz"
            style={{ borderTop: "1px solid var(--tan)", paddingTop: 22 }}
          >
            <RoastCurve />
          </div>
        </div>
      </section>

      {/* ROAST COMPARISON */}
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
        <div className="feature">
          <div
            className="feature-viz"
            style={{ borderTop: "1px solid var(--tan)", paddingTop: 22 }}
          >
            <RoastCompare />
          </div>
        </div>
      </section>

      {/* AI INVOICE */}
      <section className="reveal">
        <div className="section-label">
          <span>AI invoice scan</span>
          <span className="idx">05</span>
        </div>
        <div className="section-body" style={{ marginBottom: 24 }}>
          <p>
            Photograph a supplier invoice — or drop the PDF. Every line item is
            extracted in about twenty seconds, matched to existing lots where
            possible, and your landed cost updates automatically.
          </p>
          <p>No more transcribing Royal PDFs into a spreadsheet at 9pm.</p>
        </div>
        <div className="feature">
          <div
            className="feature-viz"
            style={{ borderTop: "1px solid var(--tan)", paddingTop: 22 }}
          >
            <InvoiceOCR lines={invoiceLines} />
          </div>
        </div>
      </section>

      {/* COGS & MARGIN */}
      <section className="reveal">
        <div className="section-label">
          <span>COGS & margin floor</span>
          <span className="idx">06</span>
        </div>
        <div className="section-body">
          <p>
            Landed green cost, loss rate, labor, and packaging roll up into a
            live COGS number per pound roasted. Your wholesale floor updates
            automatically — so the number you quote a café today is the one
            that actually holds.
          </p>
          <p>
            Answer &ldquo;what does it cost us to roast a pound?&rdquo; in one
            click, with a straight face.
          </p>
        </div>
      </section>

      {/* WHOLESALE */}
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

      {/* CUPPING */}
      <section className="reveal">
        <div className="section-label">
          <span>Cupping & QC</span>
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
