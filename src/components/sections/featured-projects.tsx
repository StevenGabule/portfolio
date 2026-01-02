"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ArrowUpRight,
  Folder,
  Star,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, secure payment processing, and admin dashboard.",
    category: "Full Stack",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    gradient: "from-violet-500 to-purple-500",
    stats: { stars: 128, views: "2.4k" },
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, kanban boards, and progress tracking.",
    category: "Web App",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    gradient: "from-cyan-500 to-blue-500",
    stats: { stars: 89, views: "1.8k" },
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with interactive data visualization, custom reports, and real-time metrics monitoring.",
    category: "Dashboard",
    technologies: ["Next.js", "D3.js", "Python", "Redis"],
    gradient: "from-orange-500 to-red-500",
    stats: { stars: 156, views: "3.1k" },
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Folder className="h-4 w-4" />
            My Work
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on. Each one represents
            unique challenges solved with modern technologies.
          </p>
        </AnimatedContainer>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              className="group"
            >
              <motion.div
                className="relative h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
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

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <Link
                      href="/projects"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link"
                    >
                      View details
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
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
                discuss your project
              </Link>
            </span>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
