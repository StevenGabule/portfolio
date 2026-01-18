"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Folder,
  Star,
  Eye,
  ArrowRight,
  Sparkles,
  Code2,
  Layers,
  ShoppingCart,
  BarChart3,
  Server,
  Globe,
  CheckCircle2,
  MapPin,
  Briefcase,
  Building2,
  Cpu,
  Heart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  { id: "All", label: "All Projects", icon: Folder },
  { id: "SaaS Platform", label: "SaaS", icon: Layers },
  { id: "Web Application", label: "Web Apps", icon: Globe },
  { id: "E-Commerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "Marketplace", label: "Marketplace", icon: Users },
  { id: "Corporate Website", label: "Corporate", icon: Building2 },
];

const projects = [
  {
    id: 1,
    title: "AgTrakk",
    subtitle: "Farm Management Platform",
    description:
      "Comprehensive digital farm management platform designed to modernize agricultural operations. Connecting the dots from plant to plate with employee onboarding, financial analysis, equipment maintenance, and smart farming capabilities.",
    industry: "AgriTech",
    category: "SaaS Platform",
    location: "Washington, USA",
    image: "/features/agtrakk-homepage-hero-section.PNG",
    technologies: ["Laravel", "Next.js", "TypeScript", "MySQL", "Digital Ocean"],
    liveUrl: "https://agtrakk.com/",
    featured: true,
    gradient: "from-emerald-500 to-teal-500",
    highlights: ["Employee Integration", "Financial Analysis", "Smart Farming", "Payroll Management"],
  },
  {
    id: 2,
    title: "Knowledge Hub",
    subtitle: "Learning Management System",
    description:
      "Digital learning platform for healthcare professionals providing online courses, CPD point tracking, workshops access, and progress monitoring for medical training and certification.",
    industry: "HealthTech",
    category: "Web Application",
    location: "South Africa",
    image: "/features/knowledge-homepage-hero-section.PNG",
    technologies: ["NestJS", "Next.js", "TypeScript", "MySQL", "Azure", "Prisma"],
    liveUrl: "https://kh.hai.co.za/",
    featured: true,
    gradient: "from-blue-500 to-cyan-500",
    highlights: ["Online Courses", "CPD Tracking", "Workshop Management", "Progress Analytics"],
  },
  {
    id: 3,
    title: "Databit Solutions",
    subtitle: "AI Consulting & Services",
    description:
      "AI consulting company platform helping businesses adopt, scale, and govern AI effectively. Features AI strategy roadmapping, LLMOps optimization, and AI-enhanced UX design services.",
    industry: "AI & Technology",
    category: "Corporate Website",
    location: "Canada",
    image: "/features/databit-homepage-hero-section.PNG",
    technologies: ["Next.js", "FastAPI", "Python", "PostgreSQL", "GCP", "Docker"],
    liveUrl: "https://databit.ca",
    featured: true,
    gradient: "from-violet-500 to-purple-500",
    highlights: ["AI Strategy", "Generative AI & LLMOps", "Decision Intelligence", "Responsible AI"],
  },
  {
    id: 4,
    title: "TidyDen",
    subtitle: "Cleaning Services Marketplace",
    description:
      "Australia's cleaning services marketplace connecting homeowners with vetted local cleaners. Features instant quoting, intelligent matching, live availability, and secure escrow payments.",
    industry: "Home Services",
    category: "Marketplace",
    location: "Australia",
    image: "/features/tidyden-homepage-hero-section.PNG",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "https://tidyden-web-dev.up.railway.app",
    featured: true,
    gradient: "from-orange-500 to-amber-500",
    highlights: ["Instant Quoting", "Smart Matching", "Real-time Chat", "Escrow Payments"],
  },
  {
    id: 5,
    title: "ICSP Portal",
    subtitle: "Healthcare Placement System",
    description:
      "Official South African Department of Health portal managing placement of healthcare graduates into internship and community service positions. Processes 10,000+ applications annually.",
    industry: "Government",
    category: "Web Application",
    location: "South Africa",
    image: "/features/icsp-homepage-hero-section.PNG",
    technologies: ["Laravel", "NestJS", "Next.js", "PostgreSQL", "Azure", "Docker"],
    liveUrl: "https://icsp-doh.org.za",
    featured: true,
    gradient: "from-sky-500 to-blue-600",
    highlights: ["Application Processing", "Document Verification", "Automated Matching", "9K+ Placements/Cycle"],
  },
  {
    id: 6,
    title: "S&R Shopping",
    subtitle: "E-Commerce Platform",
    description:
      "Philippines' premier warehouse club retailer e-commerce platform. Enables members to shop online for bulk groceries, electronics, furniture with express delivery and in-store pickup.",
    industry: "Retail",
    category: "E-Commerce",
    location: "Philippines",
    image: "/features/snr-homepage-hero-section.PNG",
    technologies: ["PHP", "Laravel", "jQuery", "MySQL", "Swift", "Java"],
    liveUrl: "https://www.snrshopping.com",
    featured: true,
    gradient: "from-rose-500 to-pink-500",
    highlights: ["Express Delivery", "Membership System", "Multi-Platform", "Warehouse Locator"],
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Countries Served" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedContainer className="text-center mb-12">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Folder className="h-4 w-4" />
              My Work
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              From AgriTech to HealthTech, E-Commerce to AI — delivering solutions
              that transform businesses across industries worldwide.
            </p>
          </AnimatedContainer>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filter */}
          <AnimatedContainer className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon className="h-4 w-4" />
                    {category.label}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary -z-10"
                        layoutId="activeCategory"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </AnimatedContainer>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <motion.div
                    className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/30"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Project Preview with Real Image */}
                    <div className="relative h-56 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`} />

                      {/* Project Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Top gradient fade */}
                      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10" />

                      {/* Bottom gradient fade */}
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent z-10" />

                      {/* Industry & Type Badges */}
                      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                        <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                          <Briefcase className="h-3 w-3 mr-1" />
                          {project.category}
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

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                        initial={false}
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
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: `hsl(var(--primary) / 0.1)`,
                              color: `hsl(var(--primary))`,
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Folder className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground">
                No projects match the selected category.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <AnimatedContainer className="mt-20">
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] rounded-3xl" />

              <div className="relative m-[2px] bg-background rounded-[22px] p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      Have a Project in Mind?
                    </h3>
                    <p className="text-muted-foreground max-w-lg">
                      I&apos;m always open to discussing new projects and
                      creative ideas. Let&apos;s bring your vision to life.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild size="lg" className="h-12 px-8">
                        <Link href="/contact">
                          Start a Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 px-8"
                      >
                        <Link href="/services">View Services</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>
        </div>
      </div>

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
}
