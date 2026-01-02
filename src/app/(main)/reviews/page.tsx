"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  TrendingUp,
  Heart,
  ThumbsUp,
  Building2,
  Sparkles,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechStart Inc.",
    content:
      "Working with JPSOLUTIONS was an absolute pleasure. They delivered our e-commerce platform on time and exceeded our expectations. The attention to detail and technical expertise is outstanding. I would highly recommend their services to anyone looking for a professional developer.",
    rating: 5,
    projectType: "E-Commerce",
    avatar: "SJ",
    gradient: "from-violet-500 to-purple-500",
    date: "2 weeks ago",
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Product Manager",
    company: "DataFlow",
    content:
      "The dashboard they built for us has transformed how we analyze data. Clean code, excellent documentation, and great communication throughout the project. They really understood our needs and delivered exactly what we asked for.",
    rating: 5,
    projectType: "Dashboard",
    avatar: "MC",
    gradient: "from-cyan-500 to-blue-500",
    date: "1 month ago",
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Founder",
    company: "CreativeHub",
    content:
      "JPSOLUTIONS helped us modernize our entire web presence. Their consulting expertise and hands-on development skills made the transition smooth and successful. They were patient with our questions and always available when we needed them.",
    rating: 5,
    projectType: "Consulting",
    avatar: "ER",
    gradient: "from-orange-500 to-red-500",
    date: "1 month ago",
    verified: true,
    featured: false,
  },
  {
    id: 4,
    name: "David Kim",
    title: "CTO",
    company: "InnovateTech",
    content:
      "Exceptional work on our API infrastructure. The code quality and architecture decisions have made our system much more maintainable and scalable. A true professional who understands both business and technical aspects.",
    rating: 5,
    projectType: "API Development",
    avatar: "DK",
    gradient: "from-emerald-500 to-teal-500",
    date: "2 months ago",
    verified: true,
    featured: false,
  },
  {
    id: 5,
    name: "Amanda Foster",
    title: "Marketing Director",
    company: "GrowthLabs",
    content:
      "Our new website has significantly improved our conversion rates. The design is beautiful, the site is fast, and the SEO improvements have been noticeable. Great work!",
    rating: 5,
    projectType: "Web Development",
    avatar: "AF",
    gradient: "from-pink-500 to-rose-500",
    date: "2 months ago",
    verified: true,
    featured: false,
  },
  {
    id: 6,
    name: "Robert Martinez",
    title: "Operations Manager",
    company: "LogiFlow",
    content:
      "The inventory management system they developed has streamlined our operations significantly. The attention to user experience made training our team a breeze.",
    rating: 5,
    projectType: "Full Stack",
    avatar: "RM",
    gradient: "from-amber-500 to-orange-500",
    date: "3 months ago",
    verified: true,
    featured: false,
  },
];

const stats = [
  { value: "50+", label: "Projects Completed", icon: TrendingUp },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "5.0", label: "Average Rating", icon: Star },
  { value: "100%", label: "Satisfaction Rate", icon: Heart },
];

const trustBadges = [
  { icon: Shield, text: "Verified Reviews" },
  { icon: Award, text: "Top Rated" },
  { icon: ThumbsUp, text: "Recommended" },
];

export default function ReviewsPage() {
  const featuredReviews = reviews.filter((r) => r.featured);
  const otherReviews = reviews.filter((r) => !r.featured);

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2" />

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
              <MessageSquare className="h-4 w-4" />
              Client Testimonials
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              What Clients{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Say About Me
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take my word for it. Here&apos;s what my clients
              have to say about working together.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
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
                className="group"
              >
                <motion.div
                  className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/80"
                  whileHover={{ y: -4 }}
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Reviews */}
          <div className="mb-16">
            <AnimatedContainer className="mb-8">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Featured Reviews
              </h2>
            </AnimatedContainer>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/30"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${review.gradient}`}
                    />

                    <div className="p-8">
                      {/* Quote icon */}
                      <Quote className="h-12 w-12 text-primary/10 mb-4" />

                      {/* Rating & Verified */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                            </motion.div>
                          ))}
                        </div>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-green-500">
                            <CheckCircle2 className="h-3 w-3" />
                            Verified
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                        &ldquo;{review.content}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <span className="text-sm font-bold text-white">
                              {review.avatar}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">
                              {review.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {review.title}, {review.company}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant="outline"
                            className="text-xs border-border/50 mb-1"
                          >
                            <Building2 className="h-3 w-3 mr-1" />
                            {review.projectType}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            {review.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Reviews */}
          <div className="mb-16">
            <AnimatedContainer className="mb-8">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                All Reviews
              </h2>
            </AnimatedContainer>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  variants={staggerItem}
                  className="group"
                >
                  <motion.div
                    className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/30"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${review.gradient}`}
                    />

                    <div className="p-6">
                      {/* Quote icon */}
                      <Quote className="h-8 w-8 text-primary/10 mb-3" />

                      {/* Rating & Verified */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-500 text-yellow-500"
                            />
                          ))}
                        </div>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-green-500">
                            <CheckCircle2 className="h-3 w-3" />
                            Verified
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                        &ldquo;{review.content}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center`}
                        >
                          <span className="text-xs font-bold text-white">
                            {review.avatar}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground text-sm truncate">
                            {review.name}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {review.title}, {review.company}
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs border-border/50 flex-shrink-0"
                        >
                          {review.projectType}
                        </Badge>
                      </div>

                      {/* Date */}
                      <div className="text-xs text-muted-foreground mt-3">
                        {review.date}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Overall Rating Section */}
          <AnimatedContainer className="mb-16">
            <motion.div
              className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: star * 0.1, type: "spring" }}
                    >
                      <Star className="h-10 w-10 fill-yellow-500 text-yellow-500" />
                    </motion.div>
                  ))}
                </div>

                <div className="text-5xl font-bold text-foreground mb-2">5.0</div>
                <p className="text-muted-foreground mb-6">
                  Based on {reviews.length} reviews from verified clients
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    100% would recommend
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    100% on-time delivery
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    100% satisfaction rate
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>

          {/* CTA Section */}
          <AnimatedContainer>
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
                      Ready to Join Happy Clients?
                    </h3>
                    <p className="text-muted-foreground max-w-lg">
                      Let&apos;s work together and create something amazing. Your
                      project could be my next success story.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild size="lg" className="h-12 px-8">
                        <Link href="/contact">
                          Start Your Project
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
                        <Link href="/projects">View My Work</Link>
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
