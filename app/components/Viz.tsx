import React from "react";

export function ArtisanImport({
  filename = "Kenya_Kirinyaga_Peaberry.alog",
  displayName = "Kenya Kirinyaga Peaberry",
  before = "7.8",
  after = "6.6",
  loss = "15.5",
}: {
  filename?: string;
  displayName?: string;
  before?: string;
  after?: string;
  loss?: string;
}) {
  return (
    <>
      <div className="alog-file">
        <span className="file-icon" />
        <span>{filename}</span>
      </div>
      <div className="arrow-down">↓</div>
      <div className="alog-result">
        <span className="name">{displayName}</span>
        <span className="meta-text">
          {before} → {after} lbs
        </span>
        <span className="loss">
          {loss}
          <span style={{ color: "var(--warm-gray)", fontSize: 11, marginLeft: 4 }}>
            % loss
          </span>
        </span>
      </div>
    </>
  );
}

export function RoastCurve() {
  return (
    <>
      <svg
        viewBox="0 0 320 140"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        <rect x="20" y="20" width="50" height="110" fill="var(--rule)" fillOpacity="0.5" />
        <rect x="70" y="20" width="140" height="110" fill="var(--rule)" fillOpacity="0.8" />
        <rect x="210" y="20" width="55" height="110" fill="var(--red)" fillOpacity="0.06" />
        <line x1="20" y1="130" x2="300" y2="130" stroke="var(--rule)" strokeWidth="1" />
        <line x1="20" y1="20" x2="20" y2="130" stroke="var(--warm-gray)" strokeWidth="0.75" strokeDasharray="3 3" />
        <text x="20" y="14" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono" letterSpacing="0.08em" fill="var(--warm-gray)">
          CHARGE
        </text>
        <line x1="210" y1="20" x2="210" y2="130" stroke="var(--warm-gray)" strokeWidth="0.75" strokeDasharray="3 3" />
        <text x="210" y="14" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono" letterSpacing="0.08em" fill="var(--warm-gray)">
          FC
        </text>
        <line x1="265" y1="20" x2="265" y2="130" stroke="var(--warm-gray)" strokeWidth="0.75" strokeDasharray="3 3" />
        <text x="265" y="14" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono" letterSpacing="0.08em" fill="var(--warm-gray)">
          DROP
        </text>
        <path
          d="M20,85 Q35,45 70,40 Q140,36 210,32 Q230,34 265,58 Q280,85 300,110"
          fill="none"
          stroke="var(--warm-gray)"
          strokeWidth="1"
          strokeOpacity="0.55"
          strokeLinejoin="round"
          strokeDasharray="2 3"
        />
        <path
          d="M20,118 Q28,95 40,88 Q70,75 120,60 Q170,45 210,38 Q230,41 265,45 Q280,80 300,115"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <div className="curve-label-strip">
        <span>
          <span className="ldot" />
          BT
        </span>
        <span>
          <span className="ldot et" />
          ET
        </span>
      </div>
      <div className="curve-metrics">
        <div>
          <div className="curve-metric-label">Charge→FC</div>
          <div className="curve-metric-value">6:43</div>
        </div>
        <div>
          <div className="curve-metric-label">Dev</div>
          <div className="curve-metric-value">1:18</div>
        </div>
        <div>
          <div className="curve-metric-label">DTR</div>
          <div className="curve-metric-value">16.2%</div>
        </div>
      </div>
    </>
  );
}

export function RoastCompare() {
  return (
    <>
      <div className="compare-summary">
        <div className="compare-card" style={{ borderLeftColor: "var(--ink)" }}>
          <div className="date">Apr 06</div>
          <div className="meta-line">15.0% · Dev 1:11</div>
        </div>
        <div className="compare-card" style={{ borderLeftColor: "var(--red)" }}>
          <div className="date">Apr 09</div>
          <div className="meta-line">5.0% · Dev 0:57</div>
        </div>
        <div className="compare-card" style={{ borderLeftColor: "var(--warm-gray)" }}>
          <div className="date">Apr 20</div>
          <div className="meta-line">12.5% · Dev 0:39</div>
        </div>
      </div>
      <svg viewBox="0 0 320 120" width="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
        <line x1="20" y1="110" x2="300" y2="110" stroke="var(--rule)" strokeWidth="1" />
        <path
          d="M20,100 Q35,70 70,55 Q130,38 200,28 Q230,28 260,32 Q275,55 285,80"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20,102 Q38,72 72,58 Q135,42 205,34 Q230,36 255,42 Q268,60 275,82"
          fill="none"
          stroke="var(--red)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20,105 Q40,78 78,62 Q140,48 195,40 Q215,44 225,55 Q235,75 245,95"
          fill="none"
          stroke="var(--warm-gray)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <text x="60" y="118" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono" fill="var(--warm-gray)">
          2:00
        </text>
        <text x="140" y="118" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono" fill="var(--warm-gray)">
          5:00
        </text>
        <text x="220" y="118" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono" fill="var(--warm-gray)">
          8:00
        </text>
      </svg>
    </>
  );
}

export type InvoiceLine = {
  name: string;
  lbs?: string;
  price?: string;
  accent?: boolean;
};

export function InvoiceOCR({
  filename = "Royal_Coffee_2026-03-10.pdf",
  lines,
}: {
  filename?: string;
  lines: InvoiceLine[];
}) {
  return (
    <>
      <div className="inv-before">{filename}</div>
      <div className="arrow-down">↓</div>
      {lines.map((l, i) => (
        <div className="inv-after" key={i}>
          <span
            className="inv-name"
            style={l.accent ? { color: "var(--red)" } : undefined}
          >
            {l.name}
          </span>
          <span className="inv-num">{l.lbs ?? ""}</span>
          <span className="inv-num">{l.price ?? ""}</span>
        </div>
      ))}
    </>
  );
}
