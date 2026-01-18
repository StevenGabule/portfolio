"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const projects = [
  {
    title: "AgTrakk",
    subtitle: "Farm Management Platform",
    description:
      "Comprehensive digital farm management platform designed to modernize agricultural operations. Connecting the dots from plant to plate with employee onboarding, financial analysis, equipment maintenance, and smart farming capabilities.",
    industry: "AgriTech",
    type: "SaaS Platform",
    location: "Washington, USA",
    image: "/features/agtrakk-homepage-hero-section.PNG",
    technologies: ["Laravel", "Next.js", "TypeScript", "MySQL", "Digital Ocean"],
    highlights: ["Employee Integration", "Financial Analysis", "Smart Farming", "Payroll Management"],
    gradient: "from-emerald-500 to-teal-500",
    accentColor: "emerald",
    liveUrl: "https://agtrakk.com/",
  },
  {
    title: "Knowledge Hub",
    subtitle: "Learning Management System",
    description:
      "Digital learning platform for healthcare professionals providing online courses, CPD point tracking, workshops access, and progress monitoring for medical training and certification.",
    industry: "HealthTech",
    type: "LMS Portal",
    location: "South Africa",
    image: "/features/knowledge-homepage-hero-section.PNG",
    technologies: ["NestJS", "Next.js", "TypeScript", "MySQL", "Azure", "Prisma"],
    highlights: ["Online Courses", "CPD Tracking", "Workshop Management", "Progress Analytics"],
    gradient: "from-blue-500 to-cyan-500",
    accentColor: "blue",
    liveUrl: "https://kh.hai.co.za/",
  },
  {
    title: "Databit Solutions",
    subtitle: "AI Consulting & Services",
    description:
      "AI consulting company platform helping businesses adopt, scale, and govern AI effectively. Features AI strategy roadmapping, LLMOps optimization, and AI-enhanced UX design services.",
    industry: "AI & Technology",
    type: "Corporate Website",
    location: "Canada",
    image: "/features/databit-homepage-hero-section.PNG",
    technologies: ["Next.js", "FastAPI", "Python", "PostgreSQL", "GCP", "Docker"],
    highlights: ["AI Strategy", "Generative AI & LLMOps", "Decision Intelligence", "Responsible AI"],
    gradient: "from-violet-500 to-purple-500",
    accentColor: "violet",
    liveUrl: "https://databit.ca",
  },
  {
    title: "TidyDen",
    subtitle: "Cleaning Services Marketplace",
    description:
      "Australia's cleaning services marketplace connecting homeowners with vetted local cleaners. Features instant quoting, intelligent matching, live availability, and secure escrow payments.",
    industry: "Home Services",
    type: "Marketplace",
    location: "Australia",
    image: "/features/tidyden-homepage-hero-section.PNG",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Stripe"],
    highlights: ["Instant Quoting", "Smart Matching", "Real-time Chat", "Escrow Payments"],
    gradient: "from-orange-500 to-amber-500",
    accentColor: "orange",
    liveUrl: "https://tidyden-web-dev.up.railway.app",
  },
  {
    title: "ICSP Portal",
    subtitle: "Healthcare Placement System",
    description:
      "Official South African Department of Health portal managing placement of healthcare graduates into internship and community service positions. Processes 10,000+ applications annually.",
    industry: "Government",
    type: "Web Application",
    location: "South Africa",
    image: "/features/icsp-homepage-hero-section.PNG",
    technologies: ["Laravel", "NestJS", "Next.js", "PostgreSQL", "Azure", "Docker"],
    highlights: ["Application Processing", "Document Verification", "Automated Matching", "9K+ Placements/Cycle"],
    gradient: "from-sky-500 to-blue-600",
    accentColor: "sky",
    liveUrl: "https://icsp-doh.org.za",
  },
  {
    title: "S&R Shopping",
    subtitle: "E-Commerce Platform",
    description:
      "Philippines' premier warehouse club retailer e-commerce platform. Enables members to shop online for bulk groceries, electronics, furniture with express delivery and in-store pickup.",
    industry: "Retail",
    type: "E-Commerce",
    location: "Philippines",
    image: "/features/snr-homepage-hero-section.PNG",
    technologies: ["PHP", "Laravel", "jQuery", "MySQL", "Swift", "Java"],
    highlights: ["Express Delivery", "Membership System", "Multi-Platform", "Warehouse Locator"],
    gradient: "from-rose-500 to-pink-500",
    accentColor: "rose",
    liveUrl: "https://www.snrshopping.com",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            Featured Work
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projects That{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Make Impact
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AgriTech to HealthTech, E-Commerce to AI — delivering solutions
            that transform businesses across industries worldwide.
          </p>
        </AnimatedContainer>

        {/* Projects Grid - Bento Style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              className={`group ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <motion.div
                className="relative h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? "h-64 lg:h-72" : "h-48"}`}>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`} />

                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top gradient fade */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-10" />

                    {/* Bottom gradient fade */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent z-10" />

                    {/* Industry & Type Badges */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                        <Briefcase className="h-3 w-3 mr-1" />
                        {project.type}
                      </Badge>
                      <Badge variant="secondary" className="bg-black/50 text-white border-0 backdrop-blur-sm">
                        {project.industry}
                      </Badge>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="secondary" className="bg-black/50 text-white border-0 backdrop-blur-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {project.location}
                      </Badge>
                    </div>

                    {/* Hover Overlay with CTA */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.highlights.slice(0, index === 0 ? 4 : 3).map((highlight) => (
                        <span
                          key={highlight}
                          className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-${project.accentColor}-500/10 text-${project.accentColor}-600 dark:text-${project.accentColor}-400`}
                          style={{
                            backgroundColor: `hsl(var(--${project.accentColor === 'emerald' ? 'primary' : project.accentColor === 'blue' ? 'primary' : project.accentColor === 'violet' ? 'accent' : 'primary'}) / 0.1)`,
                            color: `hsl(var(--primary))`,
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                      {project.technologies.slice(0, index === 0 ? 5 : 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (index === 0 ? 5 : 4) && (
                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground">
                          +{project.technologies.length - (index === 0 ? 5 : 4)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedContainer className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <span className="text-muted-foreground text-sm">
              or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                start your project
              </Link>
            </span>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
