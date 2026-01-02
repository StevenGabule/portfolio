"use client";

import { useState } from "react";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  { id: "All", label: "All Projects", icon: Folder },
  { id: "Web App", label: "Web Apps", icon: Globe },
  { id: "E-Commerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "Dashboard", label: "Dashboards", icon: BarChart3 },
  { id: "API", label: "APIs", icon: Server },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, secure payment processing, and order management.",
    category: "E-Commerce",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-violet-500 to-purple-500",
    stats: { stars: 128, views: "2.4k" },
    highlights: ["Payment Integration", "Admin Dashboard", "Real-time Updates"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, kanban boards, and progress tracking.",
    category: "Web App",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-cyan-500 to-blue-500",
    stats: { stars: 89, views: "1.8k" },
    highlights: ["Real-time Sync", "Team Collaboration", "Kanban Boards"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with data visualization, custom reports, real-time metrics, and export functionality.",
    category: "Dashboard",
    technologies: ["Next.js", "D3.js", "Python", "Redis", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-orange-500 to-red-500",
    stats: { stars: 156, views: "3.1k" },
    highlights: ["Custom Reports", "Data Visualization", "Real-time Metrics"],
  },
  {
    id: 4,
    title: "RESTful API Service",
    description:
      "A scalable RESTful API with authentication, rate limiting, caching, and comprehensive documentation using OpenAPI.",
    category: "API",
    technologies: ["Node.js", "Express", "JWT", "Redis", "Swagger"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-emerald-500 to-teal-500",
    stats: { stars: 67, views: "1.2k" },
    highlights: ["Rate Limiting", "JWT Auth", "OpenAPI Docs"],
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern portfolio website with dark mode, animations, blog functionality, and contact form integration.",
    category: "Web App",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-pink-500 to-rose-500",
    stats: { stars: 45, views: "980" },
    highlights: ["Dark Mode", "Blog System", "Animations"],
  },
  {
    id: 6,
    title: "Inventory Management",
    description:
      "An inventory management system with barcode scanning, stock tracking, low-stock alerts, and reporting.",
    category: "Dashboard",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-amber-500 to-orange-500",
    stats: { stars: 34, views: "756" },
    highlights: ["Barcode Scanning", "Stock Alerts", "Reports"],
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Success Rate" },
  { value: "5+", label: "Years Experience" },
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
              A collection of my work showcasing unique challenges and creative
              solutions tailored to specific needs.
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
                    {/* Project Preview */}
                    <div className="relative h-52 overflow-hidden">
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                      />

                      {/* Grid Pattern Overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:20px_20px]" />

                      {/* Browser Mockup */}
                      <div className="absolute inset-4 rounded-lg bg-background/95 shadow-2xl overflow-hidden">
                        {/* Browser Header */}
                        <div className="h-8 bg-muted/80 border-b border-border/50 flex items-center px-3 gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          </div>
                          <div className="flex-1 mx-2">
                            <div className="h-4 bg-background rounded-md" />
                          </div>
                        </div>
                        {/* Browser Content */}
                        <div className="p-4 space-y-3">
                          <div className="h-3 bg-muted rounded w-3/4" />
                          <div className="h-3 bg-muted rounded w-1/2" />
                          <div className="h-12 bg-muted/50 rounded mt-4" />
                          <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="h-8 bg-muted/50 rounded" />
                            <div className="h-8 bg-muted/50 rounded" />
                            <div className="h-8 bg-muted/50 rounded" />
                          </div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-3 right-3 z-10">
                          <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0 shadow-lg">
                            <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-background/95 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground font-medium text-sm hover:bg-muted/80 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4" />
                          Source
                        </motion.a>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category & Stats */}
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="outline"
                          className="text-xs font-medium border-border/50"
                        >
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {project.stats.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {project.stats.views}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        {project.highlights.map((highlight, index) => (
                          <motion.div
                            key={highlight}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            {highlight}
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground">
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
