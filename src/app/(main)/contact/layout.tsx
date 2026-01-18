import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hire Filipino Developer | Free Consultation",
  description:
    "Ready to hire a Filipino developer? Contact JPSOLUTIONS for a free consultation. Excellent English communication, fast response within 24 hours. Get in touch via email, phone, or schedule a call. Affordable rates.",
  keywords: [
    "hire Filipino developer",
    "contact Filipino developer",
    "hire Pilipino developer",
    "Philippines developer contact",
    "hire web developer",
    "contact developer",
    "free consultation",
    "web development quote",
    "hire freelancer Philippines",
    "developer contact",
    "book a call",
    "schedule meeting developer",
    "get quote web development",
    "affordable Filipino developer",
    "remote developer contact",
    "outsource to Philippines",
  ],
  alternates: {
    canonical: "https://jpsolutions.art/contact",
  },
  openGraph: {
    title: "Contact JPSOLUTIONS | Free Consultation",
    description:
      "Get in touch for a free consultation. 24-hour response time, flexible scheduling, affordable rates.",
    url: "https://jpsolutions.art/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
