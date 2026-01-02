"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ArrowRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechStart Inc.",
    content:
      "Working with JPSOLUTIONS was an absolute pleasure. They delivered our e-commerce platform on time and exceeded our expectations. The attention to detail and technical expertise is outstanding. I highly recommend their services to anyone looking for quality development work.",
    rating: 5,
    projectType: "E-Commerce Platform",
    avatar: "SJ",
    accentColor: "from-violet-500 to-purple-500",
  },
  {
    name: "Michael Chen",
    title: "Product Manager",
    company: "DataFlow",
    content:
      "The dashboard they built for us has transformed how we analyze data. Clean code, excellent documentation, and great communication throughout the project. They truly understand how to translate business requirements into technical solutions.",
    rating: 5,
    projectType: "Analytics Dashboard",
    avatar: "MC",
    accentColor: "from-cyan-500 to-blue-500",
  },
  {
    name: "Emily Rodriguez",
    title: "Founder",
    company: "CreativeHub",
    content:
      "JPSOLUTIONS helped us modernize our entire web presence. Their consulting expertise and hands-on development skills made the transition smooth and successful. They're not just developers, they're strategic partners who care about your success.",
    rating: 5,
    projectType: "Web Consulting",
    avatar: "ER",
    accentColor: "from-orange-500 to-red-500",
  },
];

const stats = [
  { value: "5.0", label: "Average Rating" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
];

export function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="h-4 w-4" />
            Testimonials
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Amazing Clients
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients say
            about working together on their projects.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonials[activeIndex].accentColor}`}
                />

                {/* Large quote icon */}
                <div className="absolute top-8 right-8 md:top-12 md:right-12">
                  <Quote className="h-16 w-16 md:h-24 md:w-24 text-primary/5" />
                </div>

                <div className="relative">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[activeIndex].rating }).map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                    &ldquo;{testimonials[activeIndex].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[activeIndex].accentColor} flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-lg font-bold text-white">
                          {testimonials[activeIndex].avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-lg">
                          {testimonials[activeIndex].name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[activeIndex].title},{" "}
                          {testimonials[activeIndex].company}
                        </div>
                      </div>
                    </div>

                    {/* Project Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {testimonials[activeIndex].projectType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <motion.button
              onClick={prevTestimonial}
              className="pointer-events-auto -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-background border border-border/50 shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="pointer-events-auto translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-background border border-border/50 shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Mini Testimonial Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className={`cursor-pointer ${
                index === activeIndex ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
              }`}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
            >
              <motion.div
                className="h-full rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 transition-all hover:border-primary/30 hover:bg-card/80"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.accentColor} flex items-center justify-center`}
                  >
                    <span className="text-sm font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedContainer className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/reviews">
                Read All Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
