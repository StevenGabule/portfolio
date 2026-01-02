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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

const stats = [
  { value: "5+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Projects Delivered", icon: Trophy },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "99%", label: "Client Satisfaction", icon: Zap },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

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
                      className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </span>
                <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
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

            {/* Tech Stack */}
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <span className="text-sm text-muted-foreground mr-2">
                Tech I work with:
              </span>
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    borderColor: "hsl(var(--primary) / 0.3)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
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
