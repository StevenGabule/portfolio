"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ChevronDown,
  Zap,
  Users,
  Trophy,
  Clock,
  Layers,
  Settings,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  SiNestjs,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGo,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiGraphql,
  SiPython,
  SiFastapi,
  SiPrisma,
  SiKotlin,
  SiPhp,
  SiLaravel,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

type TechIcon = IconType | LucideIcon;

interface TechItem {
  name: string;
  icon: TechIcon;
  category: "backend" | "frontend" | "database" | "devops" | "mobile";
}

const techStack: TechItem[] = [
  // Backend
  { name: "NestJS", icon: SiNestjs, category: "backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "backend" },
  { name: "Golang", icon: SiGo, category: "backend" },
  { name: "Python", icon: SiPython, category: "backend" },
  { name: "FastAPI", icon: SiFastapi, category: "backend" },
  { name: "PHP", icon: SiPhp, category: "backend" },
  { name: "Laravel", icon: SiLaravel, category: "backend" },
  { name: "Java", icon: FaJava, category: "backend" },
  { name: "GraphQL", icon: SiGraphql, category: "backend" },
  { name: "Microservices", icon: Layers, category: "backend" },
  // Frontend
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "React", icon: SiReact, category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend" },
  { name: "Angular", icon: SiAngular, category: "frontend" },
  { name: "TailwindCSS", icon: SiTailwindcss, category: "frontend" },
  { name: "Shadcn", icon: Code2, category: "frontend" },
  { name: "HTML", icon: SiHtml5, category: "frontend" },
  { name: "CSS", icon: SiCss3, category: "frontend" },
  // Database
  { name: "PostgreSQL", icon: SiPostgresql, category: "database" },
  { name: "MongoDB", icon: SiMongodb, category: "database" },
  { name: "MySQL", icon: SiMysql, category: "database" },
  { name: "MS SQL Server", icon: FaMicrosoft, category: "database" },
  { name: "ORM (Prisma/Drizzle/TypeORM)", icon: SiPrisma, category: "database" },
  // DevOps
  { name: "Docker", icon: SiDocker, category: "devops" },
  { name: "Kubernetes", icon: SiKubernetes, category: "devops" },
  { name: "AWS", icon: SiAmazon, category: "devops" },
  { name: "Azure", icon: VscAzure, category: "devops" },
  { name: "Google Cloud", icon: SiGooglecloud, category: "devops" },
  { name: "Git", icon: SiGit, category: "devops" },
  { name: "DevOps", icon: Settings, category: "devops" },
  { name: "CI/CD", icon: GitBranch, category: "devops" },
  // Mobile
  { name: "React Native", icon: SiReact, category: "mobile" },
  { name: "Kotlin", icon: SiKotlin, category: "mobile" },
];

const stats = [
  { value: "7+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Projects Delivered", icon: Trophy },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "99%", label: "Client Satisfaction", icon: Zap },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Animated mesh gradient - breathing effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(at 40% 20%, hsla(228, 80%, 60%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(260, 80%, 50%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(228, 80%, 60%, 0.2) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(280, 70%, 50%, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(228, 80%, 60%, 0.2) 0px, transparent 50%)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Aurora / Northern lights effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, hsla(228, 80%, 60%, 0.15) 60deg, transparent 120deg, hsla(260, 70%, 50%, 0.1) 180deg, transparent 240deg, hsla(228, 80%, 60%, 0.15) 300deg, transparent 360deg)",
            filter: "blur(60px)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, transparent 0deg, hsla(260, 70%, 50%, 0.12) 90deg, transparent 180deg, hsla(228, 80%, 60%, 0.1) 270deg, transparent 360deg)",
            filter: "blur(50px)",
          }}
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Animated Grid with pulse */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-size-[60px_60px]"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Finer grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Breathing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary orb - top right */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: ["25%", "30%", "25%"],
            y: ["-50%", "-45%", "-50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-[100px]" />
        </motion.div>

        {/* Secondary orb - bottom left */}
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] translate-y-1/3 -translate-x-1/4"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: ["-25%", "-20%", "-25%"],
            y: ["33%", "28%", "33%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent/25 via-accent/15 to-transparent blur-[80px]" />
        </motion.div>

        {/* Center pulse orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-[120px]" />
        </motion.div>

        {/* Accent orb - mid right */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-primary/20 to-transparent blur-[60px]" />
        </motion.div>
      </div>

      {/* Floating particles with glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${5 + (i * 4.5) % 90}%`,
              top: `${10 + (i * 7) % 80}%`,
            }}
            animate={{
              y: [0, -40 - (i % 3) * 20, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            <div
              className={`rounded-full ${
                i % 3 === 0
                  ? "w-2 h-2 bg-primary/40"
                  : i % 3 === 1
                  ? "w-1.5 h-1.5 bg-accent/50"
                  : "w-1 h-1 bg-primary/60"
              }`}
              style={{
                boxShadow:
                  i % 2 === 0
                    ? "0 0 10px 2px hsl(var(--primary) / 0.3)"
                    : "0 0 8px 2px hsl(var(--accent) / 0.3)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient lines / rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/50 via-transparent to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-1/3 w-px h-2/3 bg-gradient-to-b from-primary/30 via-transparent to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-1/2 bg-gradient-to-b from-accent/30 via-transparent to-transparent"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)] opacity-40 pointer-events-none" />

      {/* Main Content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Status Badge */}
            <motion.div variants={staggerItem} className="mb-8">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new projects
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={staggerItem} className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="block text-foreground">
                  Crafting{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Premium</span>
                    <motion.span
                      className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </span>
                <span className="block mt-2 bg-linear-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Full-stack developer specializing in building exceptional web
              applications. I transform complex ideas into elegant, scalable
              solutions that drive business growth.
            </motion.p>

            {/* Tech Stack Marquee */}
            <motion.div
              variants={staggerItem}
              className="mt-8 w-full max-w-5xl mx-auto"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Technologies I&apos;ve worked with for 7+ years:
              </p>

              {/* Marquee Container */}
              <div className="relative overflow-hidden py-2">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* First Row - Slides Left */}
                <div className="flex mb-3 animate-marquee hover:[animation-play-state:paused]">
                  {[...techStack.slice(0, 17), ...techStack.slice(0, 17)].map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <span
                        key={`row1-${index}`}
                        className="inline-flex items-center gap-2 px-4 py-2 mx-1.5 text-sm font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50 backdrop-blur-sm whitespace-nowrap hover:bg-primary/10 hover:border-primary/30 hover:text-foreground transition-colors flex-shrink-0"
                      >
                        <IconComponent className="h-4 w-4 flex-shrink-0" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>

                {/* Second Row - Slides Right */}
                <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
                  {[...techStack.slice(17), ...techStack.slice(17)].map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <span
                        key={`row2-${index}`}
                        className="inline-flex items-center gap-2 px-4 py-2 mx-1.5 text-sm font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50 backdrop-blur-sm whitespace-nowrap hover:bg-primary/10 hover:border-primary/30 hover:text-foreground transition-colors flex-shrink-0"
                      >
                        <IconComponent className="h-4 w-4 flex-shrink-0" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild size="lg" className="group h-12 px-8 text-base">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  className="group h-12 px-8 text-base border-border/50 bg-background/50 backdrop-blur-sm"
                >
                  <Link href="/projects">
                    <Code2 className="mr-2 h-4 w-4" />
                    View My Work
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/50">
                    <stat.icon className="h-5 w-5 text-primary mb-3 mx-auto" />
                    <div className="text-3xl sm:text-4xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
