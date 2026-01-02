"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  User,
  Tag,
  ChevronRight,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Sample blog posts data
const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    category: string;
    tags: string[];
    content: string;
    gradient: string;
  }
> = {
  "getting-started-with-nextjs-15": {
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the fundamentals of Next.js 15, including the new App Router, Server Components, and best practices for building modern web applications.",
    date: "2025-01-01",
    readingTime: "8 min read",
    category: "Tutorial",
    tags: ["Next.js", "React", "Web Development"],
    gradient: "from-blue-500 to-cyan-500",
    content: `
## Introduction

Next.js 15 brings exciting new features and improvements that make building web applications even more enjoyable. In this guide, we'll explore the key concepts you need to know to get started.

## The App Router

The App Router is the new routing system in Next.js that uses React Server Components by default. This allows for better performance and a more intuitive file-based routing structure.

### Key Features

- **Server Components by Default**: Components are rendered on the server, reducing the JavaScript bundle size.
- **Layouts**: Easily share UI between pages with the new layout system.
- **Loading States**: Built-in support for loading and error states.
- **Streaming**: Progressive rendering of content as it becomes available.

## Creating Your First Page

To create a page in Next.js 15, simply add a \`page.tsx\` file in the \`app\` directory:

\`\`\`tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Next.js 15!</h1>
    </main>
  );
}
\`\`\`

## Server Components vs Client Components

By default, components in the App Router are Server Components. To use client-side features like hooks, you need to add the "use client" directive:

\`\`\`tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## Conclusion

Next.js 15 provides a powerful foundation for building modern web applications. The App Router, Server Components, and improved developer experience make it an excellent choice for your next project.
    `,
  },
  "why-hire-full-stack-developer": {
    title: "Why Hire a Full Stack Developer?",
    excerpt:
      "Discover the advantages of hiring a full-stack developer for your project and how they can provide end-to-end solutions for your business needs.",
    date: "2024-12-15",
    readingTime: "5 min read",
    category: "Business",
    tags: ["Hiring", "Development", "Business"],
    gradient: "from-purple-500 to-pink-500",
    content: `
## The Value of Full Stack Development

When building a web application, you need expertise across multiple areas: frontend, backend, databases, and deployment. A full-stack developer brings all of these skills together.

## Benefits of Hiring a Full Stack Developer

### 1. End-to-End Ownership

A full-stack developer can take your project from concept to completion. They understand how all the pieces fit together and can make informed decisions at every level of the stack.

### 2. Cost Efficiency

Instead of hiring separate frontend and backend developers, a single full-stack developer can handle both. This reduces coordination overhead and can lower overall project costs.

### 3. Faster Development

With a unified vision of the entire application, full-stack developers can move quickly between different parts of the codebase, reducing development time.

### 4. Better Communication

Having one person who understands the entire system simplifies communication. You don't need to coordinate between multiple specialists for every decision.

## When to Hire a Full Stack Developer

Full-stack developers are ideal for:

- Startups and small businesses with limited budgets
- MVP development and prototyping
- Projects requiring rapid iteration
- Maintenance and ongoing development of existing applications

## Conclusion

A full-stack developer can be a valuable asset for your project, providing expertise across the entire development stack while streamlining communication and reducing costs.
    `,
  },
  "my-web-development-process": {
    title: "My Web Development Process",
    excerpt:
      "A behind-the-scenes look at how I approach web development projects, from initial discovery to final deployment and ongoing support.",
    date: "2024-12-01",
    readingTime: "6 min read",
    category: "Process",
    tags: ["Process", "Development", "Workflow"],
    gradient: "from-orange-500 to-red-500",
    content: `
## My Development Process

Over the years, I've refined my development process to ensure successful project delivery. Here's how I approach each project.

## Phase 1: Discovery

Every project starts with understanding your needs:

- **Goal Definition**: What are you trying to achieve?
- **User Research**: Who will use your application?
- **Technical Requirements**: What features and integrations are needed?
- **Timeline & Budget**: What are the constraints?

## Phase 2: Planning

With a clear understanding of the project, I create a detailed plan:

- **Technical Architecture**: Choosing the right technologies
- **Database Design**: Planning data structure and relationships
- **UI/UX Design**: Wireframes and design mockups
- **Project Timeline**: Breaking work into milestones

## Phase 3: Development

This is where the building happens:

- **Iterative Development**: Building in small, testable increments
- **Regular Updates**: Weekly progress reports and demos
- **Code Quality**: Writing clean, maintainable code
- **Testing**: Ensuring everything works as expected

## Phase 4: Deployment

Getting your application live:

- **Staging Environment**: Testing in a production-like setup
- **Performance Optimization**: Ensuring fast load times
- **Security Review**: Checking for vulnerabilities
- **Launch**: Deploying to production

## Phase 5: Support

The relationship doesn't end at launch:

- **Bug Fixes**: Addressing any issues that arise
- **Feature Updates**: Adding new functionality as needed
- **Monitoring**: Keeping an eye on performance and uptime
- **Documentation**: Ensuring you can maintain the project

## Conclusion

A structured process leads to better outcomes. By following these phases, I ensure that every project is delivered on time, within budget, and to the highest quality standards.
    `,
  },
};

const relatedPosts = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15",
    category: "Tutorial",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    slug: "why-hire-full-stack-developer",
    title: "Why Hire a Full Stack Developer?",
    category: "Business",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    slug: "my-web-development-process",
    title: "My Web Development Process",
    category: "Process",
    gradient: "from-orange-500 to-red-500",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="relative py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const otherPosts = relatedPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

      <div className="relative py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <AnimatedContainer>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>
          </AnimatedContainer>

          {/* Header */}
          <AnimatedContainer>
            <div className="mb-8">
              <Badge
                className={`bg-gradient-to-r ${post.gradient} text-white border-0 mb-4`}
              >
                {post.category}
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-white">JP</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">John Paul</p>
                    <p className="text-xs">Full Stack Developer</p>
                  </div>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </AnimatedContainer>

          {/* Featured Image */}
          <AnimatedContainer className="mb-12">
            <div
              className={`relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${post.gradient}`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-white/20" />
              </div>
            </div>
          </AnimatedContainer>

          {/* Content */}
          <AnimatedContainer>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split("\n").map((line, index) => {
                if (line.startsWith("## ")) {
                  return (
                    <motion.h2
                      key={index}
                      className="text-2xl font-bold text-foreground mt-12 mb-4 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                      {line.replace("## ", "")}
                    </motion.h2>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-foreground mt-8 mb-3"
                    >
                      {line.replace("### ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  const content = line
                    .replace("- ", "")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground ml-0 list-none mb-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: content }} />
                    </li>
                  );
                }
                if (line.startsWith("```")) {
                  return null;
                }
                if (line.trim() === "") {
                  return <div key={index} className="h-4" />;
                }
                return (
                  <p
                    key={index}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </AnimatedContainer>

          {/* Tags */}
          <AnimatedContainer className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-wrap items-center gap-3">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-3 py-1 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </AnimatedContainer>

          {/* Share */}
          <AnimatedContainer className="mt-8 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium text-foreground mb-1">
                  Share this article
                </p>
                <p className="text-sm text-muted-foreground">
                  Help others discover this content
                </p>
              </div>
              <div className="flex gap-2">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Link2, label: "Copy Link" },
                ].map((social) => (
                  <motion.button
                    key={social.label}
                    className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedContainer>

          {/* Author Card */}
          <AnimatedContainer className="mt-12">
            <motion.div
              className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 md:p-8"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-2xl font-bold text-white">JP</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    John Paul
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Full Stack Developer
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    I&apos;m a passionate developer specializing in building
                    modern web applications. I write about web development,
                    best practices, and my experience in the industry.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/about">
                      Learn More About Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>

          {/* Related Posts */}
          <AnimatedContainer className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Related Articles
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {otherPosts.map((relatedPost) => (
                <motion.div key={relatedPost.slug} variants={staggerItem}>
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <motion.div
                      className="group relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/30"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-center gap-4 p-4">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${relatedPost.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <BookOpen className="h-6 w-6 text-white/50" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Badge
                            variant="outline"
                            className="text-xs mb-2 border-border/50"
                          >
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedContainer>

          {/* Back to Blog */}
          <AnimatedContainer className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedContainer>
        </article>
      </div>
    </div>
  );
}
