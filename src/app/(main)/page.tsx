import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { CTASection } from "@/components/sections/cta-section";

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
