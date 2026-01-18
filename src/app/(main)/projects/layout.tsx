import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Projects | Web Applications, E-commerce, SaaS, Healthcare",
  description:
    "Explore my portfolio of 50+ successful projects: AgTrakk (AgriTech), Knowledge Hub (HealthTech), TidyDen (Marketplace), ICSP Portal (Government), S&R Shopping (E-commerce). Real-world solutions across industries worldwide.",
  keywords: [
    "web development portfolio",
    "developer projects",
    "React projects",
    "Next.js portfolio",
    "e-commerce projects",
    "SaaS development",
    "healthcare software",
    "agritech solutions",
    "government portal development",
    "marketplace development",
    "full stack projects",
    "web application examples",
    "case studies",
    "client work",
  ],
  alternates: {
    canonical: "https://jpsolutions.art/projects",
  },
  openGraph: {
    title: "Portfolio & Projects | JPSOLUTIONS",
    description:
      "50+ successful projects across AgriTech, HealthTech, E-commerce, Government sectors. View real-world solutions.",
    url: "https://jpsolutions.art/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
