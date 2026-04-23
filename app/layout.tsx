import type { Metadata, Viewport } from "next";
import Nav from "./components/Nav";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://roastlytics.com"),
  title: {
    default: "Roastlytics — Intelligence for craft coffee roasters",
    template: "%s — Roastlytics",
  },
  description:
    "The data layer for your roastery. AI-driven inventory, roast curves, COGS, and supplier invoices — one system that tells you what to do, not just what happened.",
  openGraph: {
    title: "Roastlytics — Intelligence for craft coffee roasters",
    description:
      "The data layer for your roastery. AI-driven inventory, roast curves, COGS, and supplier invoices — one system that tells you what to do, not just what happened.",
    url: "https://roastlytics.com",
    siteName: "Roastlytics",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <div className="nav-divider">
          <hr />
        </div>
        <main className="page">{children}</main>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
