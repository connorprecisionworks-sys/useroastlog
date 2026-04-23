import Link from "next/link";
import CountUp from "./components/CountUp";
import AnimatedBar from "./components/AnimatedBar";
import LiveSync from "./components/LiveSync";
import CogsTicker from "./components/CogsTicker";
import { ArtisanImport, RoastCurve, InvoiceOCR } from "./components/Viz";

export default function HomePage() {
  const invoiceLines = [
    { name: "Sumatra Takengon", lbs: "798 lbs", price: "$5.69" },
    { name: "Bali Blue Moon", lbs: "268 lbs", price: "$5.46" },
    { name: "Colombia Excelso", lbs: "1542 lbs", price: "$4.26" },
    { name: "Ethiopia Sidamo", lbs: "527 lbs", price: "$4.86" },
    { name: "+ 7 more lots imported", accent: true },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-tag">
          <span className="pulse" />
          Roastlytics
          <span style={{ letterSpacing: "0.14em", color: "var(--warm-gray)" }}>
            / v1.0 · beta
          </span>
        </div>

        <h1>
          The data layer
          <br />
          for your <em className="trace">roastery</em>
          <span className="dot">.</span>
        </h1>

        <p className="hero-sub">
          Every roast, every lot, every invoice — streamed into one system that
          tells you what to do, not just what happened.
        </p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contact">
            Start free trial <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/contact?mode=demo">
            Book a demo
          </Link>
        </div>

        <div className="dash">
          <div className="dash-head">
            <span className="label">Your shop · live</span>
            <span className="dash-head-live">
              <span className="pulse" />
              <LiveSync />
            </span>
          </div>
          <div className="dash-grid">
            <div className="kpi" style={{ animationDelay: "0.6s" }}>
              <div className="kpi-label">Green on hand</div>
              <div className="kpi-value">
                <CountUp to={4581} format="int" />
                <span className="unit">lbs</span>
              </div>
              <div className="kpi-sub">12 lots · $20,685 landed</div>
            </div>
            <div className="kpi" style={{ animationDelay: "0.72s" }}>
              <div className="kpi-label">Loss rate</div>
              <div className="kpi-value">
                <CountUp to={16.3} format="dec" />
                <span className="unit">%</span>
              </div>
              <div className="kpi-sub">On target · 149 batches</div>
            </div>
            <div className="kpi" style={{ animationDelay: "0.84s" }}>
              <div className="kpi-label">COGS / lb roasted</div>
              <div className="kpi-value red">
                <CogsTicker base={8.8} />
              </div>
              <div className="kpi-sub">↑ 2.1% this week</div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>What it does</span>
          <span className="idx">01 / 04</span>
        </div>
        <div className="section-body">
          <p>
            Every craft roaster runs the same pile of tools: a spreadsheet for
            green coffee, Artisan files in a folder, PDF invoices from Royal and
            Genuine Origin, a calculator for COGS. By Friday nobody knows
            what&apos;s actually in the building.
          </p>
          <p>
            Roastlytics puts all of it in one place — then layers intelligence
            on top. Inventory predicts when you&apos;ll run out. Curves flag
            anomalies before you taste them. Invoices extract themselves. COGS
            updates in real time.
          </p>
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Green inventory · live burn-down</span>
          <span className="idx">02 / 04</span>
        </div>

        <div style={{ marginTop: 8 }}>
          <div className="inv-row">
            <span className="name">Mexico HG Chiapas EP</span>
            <span className="pct red">88.5% · 5d left</span>
            <span className="hint">Royal · $5.42/lb · reorder advised</span>
          </div>
          <AnimatedBar pct={88.5} warn delay={0} />

          <div className="inv-row">
            <span className="name">Ethiopia Sidamo Guji</span>
            <span className="pct red">85.9% · 6d left</span>
            <span className="hint">Genuine Origin · $6.18/lb</span>
          </div>
          <AnimatedBar pct={85.9} warn delay={120} />

          <div className="inv-row">
            <span className="name">Sumatra Takengon</span>
            <span className="pct">59.0% · 24d left</span>
            <span className="hint">Royal · $4.86/lb</span>
          </div>
          <AnimatedBar pct={59} delay={240} />

          <div className="inv-row">
            <span className="name">Colombia Excelso EP</span>
            <span className="pct">18.2% · 90+ days</span>
            <span className="hint">Cafe Imports · $4.26/lb</span>
          </div>
          <AnimatedBar pct={18.2} delay={360} />
        </div>

        <p
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            color: "var(--warm-gray)",
            marginTop: 14,
          }}
        >
          Hover any lot — supplier and landed cost reveal.
        </p>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>A few things it does well</span>
          <span className="idx">03 / 04</span>
        </div>

        <div className="features">
          <div className="feature">
            <h3>Artisan import</h3>
            <p className="feature-desc">
              Drop a roast file. Inventory updates in seconds.
            </p>
            <div className="feature-viz">
              <ArtisanImport />
            </div>
          </div>

          <div className="feature">
            <h3>Curve analysis</h3>
            <p className="feature-desc">
              Full BT/ET curves with phases, markers, DTR.
            </p>
            <div className="feature-viz">
              <RoastCurve />
            </div>
          </div>
        </div>

        <div className="features" style={{ marginTop: 56 }}>
          <div className="feature">
            <h3>AI invoice scan</h3>
            <p className="feature-desc">
              Photograph a supplier invoice. Line items extracted in 20 seconds.
            </p>
            <div className="feature-viz">
              <InvoiceOCR lines={invoiceLines} />
            </div>
          </div>

          <div className="feature">
            <h3>COGS in real time</h3>
            <p className="feature-desc">
              Landed cost + loss rate + labor, per pound roasted.
            </p>
            <div className="feature-viz">
              <div
                className="kpi"
                style={{
                  animation: "none",
                  opacity: 1,
                  transform: "none",
                  borderTop: 0,
                  paddingTop: 0,
                }}
              >
                <div className="kpi-label">Right now</div>
                <div className="kpi-value red">
                  <CogsTicker base={8.8} />
                </div>
                <div className="kpi-sub">
                  Wholesale floor $14.08 · margin 37.3%
                </div>
              </div>
            </div>
          </div>
        </div>

        <p style={{ marginTop: 40 }}>
          <Link className="btn btn-ghost" href="/features">
            See every feature <span className="arrow">→</span>
          </Link>
        </p>
      </section>

      <section className="pullquote reveal">
        <blockquote>
          &ldquo;We used to close on Sundays to do inventory. Now I know
          what&apos;s on the floor before I&apos;ve finished my first cup.&rdquo;
        </blockquote>
        <div className="attribution">
          Craft roaster · beta cohort · 2,400 lbs/mo
        </div>
      </section>

      <section className="reveal">
        <div className="section-label">
          <span>Who it&apos;s for</span>
          <span className="idx">04 / 04</span>
        </div>
        <div className="section-body">
          <p>
            Commercial craft roasters doing 500 to 10,000 lbs per month. Shops
            that have outgrown a notebook but can&apos;t justify a six-figure
            ERP. Operators who want to know their numbers without doing the
            math by hand.
          </p>
          <p>
            If you roast on a Diedrich, Loring, Probat, or San Franciscan — and
            you export Artisan .alog files — you&apos;ll be up and running the
            same day.
          </p>
        </div>
      </section>

      <div className="cta reveal">
        <div className="cta-lead">Twenty minutes. Your shop, live.</div>
        <p className="cta-sub">
          Bring a month of .alog files and a recent supplier invoice. We&apos;ll
          have your green, your roasts, your COGS — all working by the end of
          the call.
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
