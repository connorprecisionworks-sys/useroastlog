import Link from "next/link";
import {
  InventoryBars,
  ArtisanImport,
  RoastCurve,
  InvoiceOCR,
} from "./components/Viz";

export default function HomePage() {
  const inventoryRows = [
    { name: "Mexico HG Chiapas EP", pct: 88.5, daysLeft: 5, warn: true },
    { name: "Ethiopia Sidamo Guji", pct: 85.9, daysLeft: 6, warn: true },
    { name: "Sumatra Takengon", pct: 59, daysLeft: 24 },
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
      {/* HERO */}
      <section className="hero">
        <div className="hero-tag reveal">Beta · v1 · Open to new roasters</div>
        <h1 className="reveal">
          Operations for coffee roasters<span className="em">.</span>
          <br />
          <span className="soft">Without the spreadsheet.</span>
        </h1>
        <p className="hero-sub reveal">
          Roast Log is the back-of-house for commercial craft roasters. Green
          inventory, Artisan roast data, COGS, and supplier invoices — finally
          one system that knows your numbers.
        </p>
        <div className="hero-actions reveal">
          <Link className="btn btn-primary" href="/contact">
            Start Free Trial <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/contact?mode=demo">
            Book a 20-minute demo
          </Link>
        </div>

        <div className="dash reveal">
          <div className="dash-head">
            <div>
              <div className="dash-hero-val">
                4,581<span className="unit">lbs green on hand</span>
              </div>
              <div className="dash-hero-sub">
                12 lots · $20,685 landed value · updated 3 min ago
              </div>
            </div>
            <div className="dash-pulse">Live</div>
          </div>
          <div className="dash-grid">
            <div>
              <div className="dash-cell-label">Loss Rate</div>
              <div className="dash-cell-val">16.3%</div>
              <div className="dash-cell-sub">On target · 149 batches</div>
            </div>
            <div>
              <div className="dash-cell-label">Roasted YTD</div>
              <div className="dash-cell-val">
                2,128
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: "var(--mocha)",
                    marginLeft: 3,
                  }}
                >
                  lbs
                </span>
              </div>
              <div className="dash-cell-sub">vs. 1,740 last year</div>
            </div>
            <div>
              <div className="dash-cell-label">COGS / lb roasted</div>
              <div className="dash-cell-val em">$8.80</div>
              <div className="dash-cell-sub">Wholesale floor $14.08</div>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS STRIP */}
      <section className="strip reveal">
        <div className="strip-cell">
          <div className="label">Built for</div>
          <div className="val">
            500<span className="unit">–10,000 lbs/mo</span>
          </div>
          <div className="sub">Commercial craft shops</div>
        </div>
        <div className="strip-cell">
          <div className="label">Artisan import</div>
          <div className="val">
            500<span className="unit"> files at once</span>
          </div>
          <div className="sub">Bulk or drag-and-drop</div>
        </div>
        <div className="strip-cell">
          <div className="label">Invoice OCR</div>
          <div className="val">
            ~20<span className="unit">s</span>
          </div>
          <div className="sub">Photo to line items</div>
        </div>
        <div className="strip-cell">
          <div className="label">Setup time</div>
          <div className="val">
            20<span className="unit">min</span>
          </div>
          <div className="sub">You&apos;re running same day</div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="reveal">
        <div className="section-label">
          <span>What it does</span>
          <span className="idx">01 / 04</span>
        </div>
        <div className="section-body">
          <p>
            Every craft roaster we&apos;ve worked with runs the same pile of tools:
            a spreadsheet for green coffee, Artisan .alog files in a folder
            somewhere, a notes app for cupping scores, a pile of PDF invoices
            from Royal and Genuine Origin, and a calculator for COGS. By Friday
            nobody knows what&apos;s actually in the building.
          </p>
          <p>
            Roast Log puts all of it in one place. Inventory updates when you
            roast. Costs update when invoices come in. And your numbers — loss
            rate, DTR, COGS, margin floor — are there when a wholesale customer
            asks.
          </p>
        </div>
      </section>

      {/* FEATURE PREVIEW */}
      <section className="reveal">
        <div className="section-label">
          <span>A few things it does well</span>
          <span className="idx">02 / 04</span>
        </div>

        <div className="features">
          <div className="feature">
            <h3>Green inventory</h3>
            <p className="feature-desc">
              Burn-down per lot. Reorder signals before you&apos;re out.
            </p>
            <div className="feature-viz">
              <InventoryBars rows={inventoryRows} />
            </div>
          </div>

          <div className="feature">
            <h3>Artisan import</h3>
            <p className="feature-desc">
              Drop a roast file. Inventory updates in seconds.
            </p>
            <div className="feature-viz">
              <ArtisanImport />
              <p
                style={{
                  fontSize: 10.5,
                  color: "var(--mocha)",
                  marginTop: 14,
                  lineHeight: 1.5,
                }}
              >
                One file or a full archive — bulk upload 500 at a time.
              </p>
            </div>
          </div>

          <div className="feature">
            <h3>Curve analysis</h3>
            <p className="feature-desc">
              Full BT/ET curves with phases, markers, and DTR.
            </p>
            <div className="feature-viz">
              <RoastCurve />
            </div>
          </div>

          <div className="feature">
            <h3>AI invoice scan</h3>
            <p className="feature-desc">
              Photograph a supplier invoice. Line items extracted in 20 seconds.
            </p>
            <div className="feature-viz">
              <InvoiceOCR lines={invoiceLines} />
            </div>
          </div>
        </div>

        <p style={{ marginTop: 36 }}>
          <Link className="btn btn-ghost" href="/features">
            See every feature <span className="arrow">→</span>
          </Link>
        </p>
      </section>

      {/* PULLQUOTE */}
      <section className="pullquote reveal">
        <blockquote>
          &ldquo;We used to close on Sundays to do inventory. Now I know
          what&apos;s on the floor before I&apos;ve finished my first cup.&rdquo;
        </blockquote>
        <div className="attribution">
          — CRAFT ROASTER · BETA COHORT · 2,400 LBS/MO
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="reveal">
        <div className="section-label">
          <span>Who it&apos;s for</span>
          <span className="idx">03 / 04</span>
        </div>
        <div className="section-body">
          <p>
            Commercial craft roasters doing 500 to 10,000 lbs per month. Shops
            that have outgrown a notebook but can&apos;t justify a six-figure
            ERP. Operators who want to know their numbers without doing the
            math by hand.
          </p>
          <p>
            If you&apos;re running a Diedrich, a Loring, a Probat, a San
            Franciscan — and you export Artisan .alog files — you&apos;ll be up
            and running the same day.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="cta reveal">
        <div className="cta-lead">Try it.</div>
        <p className="cta-sub">
          Twenty minutes to get your shop in. Your green inventory, your last
          month of roasts, your COGS — all working by the end of the call.
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
