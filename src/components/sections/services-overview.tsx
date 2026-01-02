"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Users,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies. From responsive landing pages to complex web platforms that scale.",
    features: [
      "React & Next.js Applications",
      "TypeScript Development",
      "Responsive & Mobile-First",
      "SEO & Performance Optimized",
    ],
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/50",
    number: "01",
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description:
      "Expert guidance to help your team make informed decisions. Architecture reviews, code audits, and strategic technical planning.",
    features: [
      "Architecture Reviews",
      "Code Quality Audits",
      "Team Training & Mentoring",
      "Best Practices Implementation",
    ],
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    borderColor: "group-hover:border-purple-500/50",
    number: "02",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end development from database design to frontend implementation. Complete, production-ready solutions for your business.",
    features: [
      "Custom API Development",
      "Database Architecture",
      "Cloud Infrastructure",
      "CI/CD & DevOps",
    ],
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    borderColor: "group-hover:border-emerald-500/50",
    number: "03",
  },
];

const benefits = [
  { icon: Zap, text: "Fast Delivery" },
  { icon: Shield, text: "Secure Code" },
  { icon: Sparkles, text: "Modern Stack" },
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

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
            What I Do
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tailored
            </span>{" "}
            to Your Needs
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I provide comprehensive solutions that
            help businesses thrive in the digital landscape.
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                className={`relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 ${service.borderColor}`}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Number badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-6xl font-bold text-muted/20 group-hover:text-primary/10 transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                <div className="relative p-8">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + featureIndex * 0.1 }}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 ${service.iconColor} mr-3 flex-shrink-0`}
                        />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedContainer className="mt-16">
          <div className="relative rounded-2xl border border-border/50 bg-gradient-to-r from-primary/5 via-background to-accent/5 p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ready to bring your project to life?
                </h3>
                <p className="text-muted-foreground">
                  Let&apos;s discuss how I can help you achieve your goals.
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
                    <Link href="/services">View All Services</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
