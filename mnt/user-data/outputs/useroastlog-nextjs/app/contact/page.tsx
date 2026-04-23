import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a free trial of Roast Log or book a 20-minute demo. We'll have your shop live before the call ends.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { mode?: string };
}) {
  const initialMode = searchParams?.mode === "demo" ? "demo" : "trial";
  return <ContactForm initialMode={initialMode} />;
}
