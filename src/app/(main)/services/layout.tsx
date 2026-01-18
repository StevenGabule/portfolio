import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Filipino Full Stack Developer",
  description:
    "Professional web development services by an experienced Filipino developer: Full Stack, Frontend (React, Next.js), Backend (Node.js, Laravel, Python), E-commerce, API, Cloud & DevOps. Affordable rates, excellent communication, quality code. Get a free quote!",
  keywords: [
    "web development services",
    "Filipino developer services",
    "hire Filipino developer",
    "Philippines web development",
    "full stack development",
    "frontend development",
    "backend development",
    "e-commerce development",
    "API development",
    "cloud services",
    "DevOps services",
    "React development services",
    "Next.js development",
    "Node.js development",
    "Laravel development",
    "custom web application",
    "website development cost",
    "affordable web development",
    "outsource to Philippines",
    "Filipino programmer services",
  ],
  alternates: {
    canonical: "https://jpsolutions.dev/services",
  },
  openGraph: {
    title: "Web Development Services | JPSOLUTIONS",
    description:
      "Full Stack, Frontend, Backend, E-commerce, API, and Cloud development services. Quality code at affordable rates.",
    url: "https://jpsolutions.dev/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
