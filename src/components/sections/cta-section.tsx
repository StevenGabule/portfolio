"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Zap,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";

const benefits = [
  "Free initial consultation",
  "Transparent pricing",
  "Ongoing support included",
];

const quickStats = [
  { icon: Clock, text: "24h response time" },
  { icon: Calendar, text: "Flexible scheduling" },
  { icon: Zap, text: "Fast turnaround" },
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main CTA Card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] rounded-3xl" />

            {/* Card content */}
            <div className="relative m-[2px] bg-background rounded-[22px] p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div className="text-center lg:text-left">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Sparkles className="h-4 w-4" />
                    Let&apos;s Work Together
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Ready to Build
                    <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Something Amazing?
                    </span>
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                    Whether you need a new website, web application, or
                    technical consultation, I&apos;m here to help turn your
                    vision into reality.
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="h-14 px-8 text-base group"
                      >
                        <Link href="/contact">
                          <Mail className="mr-2 h-5 w-5" />
                          Start a Project
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
                        className="h-14 px-8 text-base"
                      >
                        <Link href="/services">
                          <MessageSquare className="mr-2 h-5 w-5" />
                          View Services
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:block relative">
                  <div className="relative">
                    {/* Decorative card stack */}
                    <motion.div
                      className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-primary/10 border border-primary/20"
                      animate={{ rotate: [-3, -2, -3] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -top-2 -left-2 w-full h-full rounded-2xl bg-accent/10 border border-accent/20"
                      animate={{ rotate: [2, 3, 2] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Main visual card */}
                    <div className="relative rounded-2xl bg-card border border-border/50 p-8 shadow-2xl">
                      {/* Fake form preview */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">
                              New Project Inquiry
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Let&apos;s discuss your idea
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="h-10 rounded-lg bg-muted/50 border border-border/50" />
                          <div className="h-10 rounded-lg bg-muted/50 border border-border/50" />
                          <div className="h-24 rounded-lg bg-muted/50 border border-border/50" />
                        </div>

                        <div className="flex gap-3 pt-2">
                          <div className="flex-1 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-medium">
                            Send Message
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <motion.div
                        className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-green-500 border-4 border-background flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  {quickStats.map((stat, index) => (
                    <motion.div
                      key={stat.text}
                      className="flex items-center gap-2 text-muted-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <stat.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{stat.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add shimmer animation to globals.css or inline */}
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
    </section>
  );
}
