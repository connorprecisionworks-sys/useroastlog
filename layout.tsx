import type { Metadata, Viewport } from "next";
import Nav from "./components/Nav";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://useroastlog.com"),
  title: {
    default: "Roast Log — Operations software for coffee roasters",
    template: "%s — Roast Log",
  },
  description:
    "The back-of-house for commercial craft coffee roasters. Green inventory, roast curves, COGS, and AI invoice scanning — in one place.",
  openGraph: {
    title: "Roast Log — Operations software for coffee roasters",
    description:
      "The back-of-house for commercial craft coffee roasters. Green inventory, roast curves, COGS, and AI invoice scanning — in one place.",
    url: "https://useroastlog.com",
    siteName: "Roast Log",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inconsolata:wght@400;500;600&display=swap"
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
