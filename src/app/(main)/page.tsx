import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "JPSOLUTIONS | Hire Filipino Full Stack Developer | Web Development Services",
  description:
    "Hire an experienced Filipino full stack developer. JPSOLUTIONS offers affordable, professional web development using React, Next.js, Node.js, Laravel. 6+ years experience, 50+ projects worldwide. Excellent English communication. Free consultation!",
  keywords: [
    "hire Filipino developer",
    "Filipino full stack developer",
    "Pilipino developer",
    "hire full stack developer",
    "web developer for hire",
    "freelance developer Philippines",
    "affordable web development",
    "React developer",
    "Next.js developer",
    "remote developer",
    "software engineer Philippines",
    "outsource to Philippines",
  ],
  alternates: {
    canonical: "https://jpsolutions.dev",
  },
  openGraph: {
    title: "JPSOLUTIONS | Hire Filipino Full Stack Developer",
    description:
      "Experienced Filipino developer with 6+ years experience. React, Next.js, Node.js, Laravel. Excellent English, quality code, affordable rates.",
    url: "https://jpsolutions.dev",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
