"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  Tag,
  TrendingUp,
  User,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  { id: "All", label: "All Posts", count: 3 },
  { id: "Tutorial", label: "Tutorials", count: 1 },
  { id: "Business", label: "Business", count: 1 },
  { id: "Process", label: "Process", count: 1 },
];

const blogPosts = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the fundamentals of Next.js 15, including the new App Router, Server Components, and best practices for building modern web applications.",
    date: "2025-01-01",
    readingTime: "8 min read",
    category: "Tutorial",
    tags: ["Next.js", "React", "Web Development"],
    featured: true,
    gradient: "from-blue-500 to-cyan-500",
    views: "2.4k",
  },
  {
    slug: "why-hire-full-stack-developer",
    title: "Why Hire a Full Stack Developer?",
    excerpt:
      "Discover the advantages of hiring a full-stack developer for your project and how they can provide end-to-end solutions for your business needs.",
    date: "2024-12-15",
    readingTime: "5 min read",
    category: "Business",
    tags: ["Hiring", "Development", "Business"],
    featured: false,
    gradient: "from-purple-500 to-pink-500",
    views: "1.8k",
  },
  {
    slug: "my-web-development-process",
    title: "My Web Development Process",
    excerpt:
      "A behind-the-scenes look at how I approach web development projects, from initial discovery to final deployment and ongoing support.",
    date: "2024-12-01",
    readingTime: "6 min read",
    category: "Process",
    tags: ["Process", "Development", "Workflow"],
    featured: false,
    gradient: "from-orange-500 to-red-500",
    views: "1.2k",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
              <BookOpen className="h-4 w-4" />
              Blog & Insights
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Latest{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Articles
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, technology,
              and building great software.
            </p>
          </AnimatedContainer>

          {/* Search & Filter */}
          <AnimatedContainer className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-card/80 border-border/50"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.label}
                      <span
                        className={`ml-2 text-xs ${
                          isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        ({category.count})
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </AnimatedContainer>

          {/* Featured Post */}
          {featuredPost && activeCategory === "All" && !searchQuery && (
            <AnimatedContainer className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Featured Post</h2>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <motion.div
                  className="group relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} opacity-90`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:20px_20px]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="h-24 w-24 text-white/20" />
                      </div>
                      <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10">
                      <Badge variant="outline" className="mb-4">
                        {featuredPost.category}
                      </Badge>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(featuredPost.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readingTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {featuredPost.views} views
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedContainer>
          )}

          {/* Blog Posts Grid */}
          <div className="mb-16">
            {(activeCategory !== "All" || searchQuery) && (
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">
                  {searchQuery
                    ? `Search results for "${searchQuery}"`
                    : `${activeCategory} Posts`}
                </h2>
              </div>
            )}

            {!searchQuery && activeCategory === "All" && (
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">All Articles</h2>
              </div>
            )}

            <AnimatePresence mode="popLayout">
              {filteredPosts.length > 0 ? (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {(activeCategory === "All" && !searchQuery
                    ? regularPosts
                    : filteredPosts
                  ).map((post, index) => (
                    <motion.div
                      key={post.slug}
                      variants={staggerItem}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="group"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <motion.div
                          className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/30"
                          whileHover={{ y: -8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-90`}
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:20px_20px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <BookOpen className="h-16 w-16 text-white/20" />
                            </div>
                            <Badge className="absolute top-3 left-3 bg-background/90 text-foreground backdrop-blur-sm">
                              {post.category}
                            </Badge>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {formatDate(post.date)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readingTime}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                              {post.tags.length > 2 && (
                                <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground">
                                  +{post.tags.length - 2}
                                </span>
                              )}
                            </div>

                            {/* Read More */}
                            <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No articles found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter to find what you&apos;re
                    looking for.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Newsletter CTA */}
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
                      Stay Updated
                    </h3>
                    <p className="text-muted-foreground max-w-lg">
                      Subscribe to get notified about new articles, tutorials,
                      and insights delivered straight to your inbox.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 w-full sm:w-64 bg-card/80 border-border/50"
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button size="lg" className="h-12 px-8 w-full sm:w-auto">
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
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
