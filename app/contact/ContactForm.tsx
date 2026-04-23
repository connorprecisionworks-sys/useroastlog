"use client";

import { useState, FormEvent } from "react";

type Mode = "trial" | "demo";

const copy = {
  trial: {
    eyebrow: "Start your trial",
    titleLine1: "Twenty minutes",
    titleLine2: "Then your shop is live.",
    sub: "Tell us about your roastery. Bring a month of .alog files and a recent supplier invoice to the call — we'll have it all working before you hang up.",
    submit: "Start my trial",
    notesLabel: "What are you hoping Roastlytics will fix?",
    successMsg:
      "We'll be in touch within a business day to set up your account and walk you through onboarding.",
  },
  demo: {
    eyebrow: "Book a demo",
    titleLine1: "Twenty minutes",
    titleLine2: "Bring your own data.",
    sub: "We'll walk through Roastlytics with your actual roast files and a recent invoice. No demo sandbox, no slideshows.",
    submit: "Request demo",
    notesLabel: "What do you want to see in the demo?",
    successMsg: "We'll email you a calendar link within a business day.",
  },
} as const;

export default function ContactForm({ initialMode }: { initialMode: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const c = copy[mode];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      mode,
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      volume: formData.get("volume"),
      roaster: formData.get("roaster"),
      notes: formData.get("notes"),
    };

    try {
      // Wire this to your backend:
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
      console.log("[contact] submission:", payload);
      await new Promise((r) => setTimeout(r, 400));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert(
        "Something went wrong. Please email connor.precisionworks@gmail.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="hero" style={{ marginBottom: 48 }}>
        <div className="hero-tag">
          <span className="pulse" />
          {c.eyebrow}
        </div>
        <h1 style={{ maxWidth: 820 }}>
          {c.titleLine1}
          <span className="dot">.</span>
          <br />
          <em>{c.titleLine2}</em>
        </h1>
        <p className="hero-sub">{c.sub}</p>
      </section>

      <section className="reveal">
        <div className="mode-toggle">
          <button
            type="button"
            className={mode === "trial" ? "on" : undefined}
            onClick={() => setMode("trial")}
          >
            Start trial
          </button>
          <button
            type="button"
            className={mode === "demo" ? "on" : undefined}
            onClick={() => setMode("demo")}
          >
            Book a demo
          </button>
        </div>

        {!submitted ? (
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="company">Roastery</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                autoComplete="organization"
              />
            </div>
            <div className="field">
              <label htmlFor="volume">Monthly roast volume</label>
              <select id="volume" name="volume" defaultValue="500 – 2,000 lbs">
                <option>Under 500 lbs</option>
                <option>500 – 2,000 lbs</option>
                <option>2,000 – 5,000 lbs</option>
                <option>5,000 – 10,000 lbs</option>
                <option>Over 10,000 lbs</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="roaster">Roaster(s) you use</label>
              <input
                id="roaster"
                name="roaster"
                type="text"
                placeholder="e.g. Diedrich IR-12, Loring S15 Falcon"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <label htmlFor="notes">{c.notesLabel}</label>
              <textarea id="notes" name="notes" rows={4} />
            </div>
            <button
              className="btn btn-primary form-submit"
              type="submit"
              disabled={submitting}
            >
              <span>{submitting ? "Sending…" : c.submit}</span>{" "}
              <span className="arrow">→</span>
            </button>
          </form>
        ) : (
          <div className="success show">
            <strong>Got it. Check your email.</strong>
            <p>{c.successMsg}</p>
          </div>
        )}

        <div className="contact-rail">
          <div className="rail-cell">
            <div className="rail-label">Prefer email?</div>
            <div>
              <a href="mailto:connor.precisionworks@gmail.com">
                connor.precisionworks@gmail.com
              </a>
            </div>
          </div>
          <div className="rail-cell">
            <div className="rail-label">Support hours</div>
            <div>Mon–Fri, 8am–6pm PT</div>
          </div>
          <div className="rail-cell">
            <div className="rail-label">Response time</div>
            <div>Usually within a few hours</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mode-toggle {
          display: inline-flex;
          gap: 0;
          border: 1px solid var(--rule);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 36px;
        }
        .mode-toggle button {
          font-family: var(--f-mono);
          background: transparent;
          border: 0;
          padding: 10px 18px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--warm-gray);
          cursor: pointer;
          transition: background 180ms ease, color 180ms ease;
        }
        .mode-toggle button + button {
          border-left: 1px solid var(--rule);
        }
        .mode-toggle button.on {
          background: var(--ink);
          color: var(--paper);
        }
        .mode-toggle button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .form-submit {
          align-self: flex-start;
          margin-top: 10px;
        }
        .contact-rail {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid var(--rule);
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          font-size: 13px;
        }
        .rail-cell .rail-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--warm-gray);
          margin-bottom: 6px;
        }
        .rail-cell :global(a) {
          color: var(--ink);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: var(--warm-gray);
        }
        .success {
          padding: 24px;
          background: var(--surface);
          border-left: 3px solid var(--red);
          border-radius: 2px;
        }
        .success :global(strong) {
          font-family: var(--f-serif);
          font-size: 20px;
          color: var(--ink);
          font-weight: 400;
        }
        .success :global(p) {
          margin-top: 8px;
          font-size: 14px;
          color: var(--ink-muted);
        }
        @media (min-width: 640px) {
          .contact-rail {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
