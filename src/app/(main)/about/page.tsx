"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Rocket,
  Users,
  Target,
  ArrowRight,
  MapPin,
  Mail,
  Calendar,
  Coffee,
  Zap,
  Globe,
  Sparkles,
  CheckCircle2,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const skills = [
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "CI/CD", category: "devops" },
];

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices across teams.",
    achievements: [
      "Led team of 5 developers",
      "Reduced load times by 60%",
      "Implemented CI/CD pipeline",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description:
      "Built custom web applications for clients across various industries. Specialized in React and Node.js development.",
    achievements: [
      "Delivered 20+ projects",
      "99% client satisfaction",
      "Built reusable component library",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Frontend Developer",
    company: "StartUp Labs",
    period: "2019 - 2020",
    description:
      "Developed responsive user interfaces and improved website performance. Collaborated with designers to implement pixel-perfect designs.",
    achievements: [
      "Improved performance by 40%",
      "Mentored 2 interns",
      "Established coding standards",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const values = [
  {
    icon: Code2,
    title: "Quality Code",
    description:
      "I write clean, maintainable code that stands the test of time. Every line matters.",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "I genuinely love what I do. That passion translates into exceptional work for every project.",
    gradient: "from-pink-500/20 via-pink-500/10 to-transparent",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "I focus on delivering measurable outcomes that directly impact your business success.",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Technology evolves fast. I stay current to bring the best solutions to my clients.",
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
];

const stats = [
  { value: "5+", label: "Years Experience", icon: Calendar },
  { value: "50+", label: "Projects Completed", icon: Rocket },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "10k+", label: "Lines of Code", icon: Code2 },
];

const funFacts = [
  { icon: Coffee, text: "500+ cups of coffee consumed" },
  { icon: Globe, text: "Worked with clients from 10+ countries" },
  { icon: Zap, text: "Always learning something new" },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedContainer className="text-center mb-16">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="h-4 w-4" />
              Get to Know Me
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                John Paul
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate full-stack developer crafting elegant, efficient, and
              user-friendly web applications that make a difference.
            </p>
          </AnimatedContainer>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="relative group"
                whileHover={{ y: -4 }}
              >
                <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/80">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            {/* Left Column - Profile & Bio */}
            <AnimatedContainer>
              <div className="space-y-8">
                {/* Profile Card */}
                <motion.div
                  className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-white">JP</span>
                      </div>
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="text-center sm:text-left flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-1">
                        John Paul
                      </h2>
                      <p className="text-primary font-medium mb-3">
                        Full Stack Developer
                      </p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Philippines
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          Available for hire
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-6 space-y-4 text-muted-foreground">
                    <p>
                      With over 5 years of experience in web development, I&apos;ve
                      had the privilege of working with startups, agencies, and
                      enterprise companies to build solutions that make a real
                      impact.
                    </p>
                    <p>
                      My approach combines technical expertise with a deep
                      understanding of business needs. I believe that great software
                      isn&apos;t just about code—it&apos;s about solving problems
                      and creating value for users and businesses alike.
                    </p>
                  </div>

                  {/* Fun Facts */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex flex-wrap gap-4">
                      {funFacts.map((fact, index) => (
                        <motion.div
                          key={fact.text}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <fact.icon className="h-4 w-4 text-primary" />
                          {fact.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Skills Section */}
                <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Technologies I Work With
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Frontend</p>
                      <div className="flex flex-wrap gap-2">
                        {skills
                          .filter((s) => s.category === "frontend")
                          .map((skill, index) => (
                            <motion.span
                              key={skill.name}
                              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {skill.name}
                            </motion.span>
                          ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Backend</p>
                      <div className="flex flex-wrap gap-2">
                        {skills
                          .filter((s) => s.category === "backend")
                          .map((skill, index) => (
                            <motion.span
                              key={skill.name}
                              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {skill.name}
                            </motion.span>
                          ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-3">DevOps</p>
                      <div className="flex flex-wrap gap-2">
                        {skills
                          .filter((s) => s.category === "devops")
                          .map((skill, index) => (
                            <motion.span
                              key={skill.name}
                              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {skill.name}
                            </motion.span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>

            {/* Right Column - Experience Timeline */}
            <div>
              <AnimatedContainer>
                <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Professional Journey
                </h3>
              </AnimatedContainer>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative space-y-6"
              >
                {/* Timeline line */}
                <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    variants={staggerItem}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-0 top-6 w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>

                    <motion.div
                      className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-primary/30"
                      whileHover={{ y: -4, x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Gradient accent */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color} rounded-t-2xl`}
                      />

                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">
                            {exp.title}
                          </h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs border-border/50 bg-muted/50"
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achievement}
                            className="flex items-center gap-2 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + achIndex * 0.1 }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Values Section */}
          <AnimatedContainer className="mb-20">
            <div className="text-center mb-12">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Award className="h-4 w-4" />
                What Drives Me
              </motion.span>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                My Core{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide every project I take on and every line of
                code I write.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  className="group relative"
                >
                  <motion.div
                    className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 overflow-hidden transition-all duration-500 group-hover:border-primary/30"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative">
                      <motion.div
                        className={`w-14 h-14 rounded-xl ${value.iconBg} flex items-center justify-center mb-4`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <value.icon className={`h-7 w-7 ${value.iconColor}`} />
                      </motion.div>

                      <h4 className="font-semibold text-foreground text-lg mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
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
                      Let&apos;s Work Together
                    </h3>
                    <p className="text-muted-foreground max-w-lg">
                      I&apos;m always excited to take on new challenges and
                      collaborate on interesting projects. Let&apos;s build
                      something amazing together.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild size="lg" className="h-12 px-8">
                        <Link href="/contact">
                          Get in Touch
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
                        <Link href="/projects">
                          View My Work
                        </Link>
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
