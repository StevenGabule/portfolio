"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Users,
  Layers,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  ChevronDown,
  Star,
  Target,
  Lightbulb,
  Settings,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices for optimal performance.",
    features: [
      "Responsive website design and development",
      "Single-page applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "Content Management Systems",
      "Performance optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500",
    gradientBg: "from-blue-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/50",
    popular: true,
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description:
      "Expert guidance to help your team make informed technical decisions and improve development processes.",
    features: [
      "Architecture reviews and recommendations",
      "Code quality assessments",
      "Technology stack evaluation",
      "Team training and mentoring",
      "Best practices implementation",
      "Performance audits",
    ],
    technologies: ["System Design", "Code Review", "DevOps", "Agile"],
    gradient: "from-purple-500 to-pink-500",
    gradientBg: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    borderColor: "group-hover:border-purple-500/50",
    popular: false,
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end development services from database design to frontend implementation and deployment.",
    features: [
      "Custom API development",
      "Database design and optimization",
      "Cloud infrastructure setup",
      "CI/CD pipeline implementation",
      "Third-party integrations",
      "Microservices architecture",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "AWS"],
    gradient: "from-emerald-500 to-teal-500",
    gradientBg: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    borderColor: "group-hover:border-emerald-500/50",
    popular: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your goals, requirements, and vision for the project through detailed discussions.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "I create a detailed roadmap with milestones, technical specifications, and clear deliverables.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Building your solution with regular updates, feedback loops, and iterative improvements.",
    icon: Settings,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Thorough testing, documentation, deployment, and ongoing support to ensure success.",
    icon: Send,
    color: "from-emerald-500 to-teal-500",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient development process without compromising quality",
  },
  {
    icon: Shield,
    title: "Secure Code",
    description: "Security best practices baked into every project",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Ongoing maintenance and support when you need it",
  },
  {
    icon: Star,
    title: "Quality First",
    description: "Clean, maintainable code that scales with your business",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes! I offer flexible maintenance packages to keep your application running smoothly. This includes bug fixes, security updates, performance monitoring, and feature enhancements.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. I'm always evaluating new tools to ensure I'm using the best solutions for each project.",
  },
  {
    question: "How do you handle communication during projects?",
    answer:
      "Clear communication is essential. I provide regular updates, typically through weekly calls or daily async updates. You'll always know the status of your project and can reach me easily for questions.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <AnimatedContainer className="text-center mb-16">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="h-4 w-4" />
              Professional Services
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Solutions{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tailored
              </span>{" "}
              to You
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions designed to help your
              business thrive in the digital landscape.
            </p>
          </AnimatedContainer>

          {/* Benefits Bar */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/80"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="mb-24">
            <AnimatedContainer className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What I{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Offer
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From simple websites to complex applications, I provide
                end-to-end development services.
              </p>
            </AnimatedContainer>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  className="group relative"
                >
                  <motion.div
                    className={`relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 ${service.borderColor}`}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Popular badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          <Star className="h-3 w-3 fill-current" />
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="relative p-8">
                      {/* Icon */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle2 className={`h-4 w-4 ${service.iconColor}`} />
                          What&apos;s Included
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature}
                              className="flex items-start text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + featureIndex * 0.05 }}
                            >
                              <CheckCircle2
                                className={`h-4 w-4 ${service.iconColor} mr-3 mt-0.5 flex-shrink-0`}
                              />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="pt-6 border-t border-border/50">
                        <p className="text-xs text-muted-foreground mb-3">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              className={`px-3 py-1 text-xs font-medium rounded-lg ${service.iconBg} ${service.iconColor} border border-current/20`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process Section */}
          <div className="mb-24">
            <AnimatedContainer className="text-center mb-16">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Rocket className="h-4 w-4" />
                My Process
              </motion.span>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How I{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Work
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven process that ensures successful project delivery and
                exceeds expectations every time.
              </p>
            </AnimatedContainer>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection line for desktop */}
              <div className="hidden md:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-emerald-500 rounded-full opacity-20" />

              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    variants={staggerItem}
                    className="relative"
                  >
                    <motion.div
                      className="text-center"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Step number with gradient */}
                      <div className="relative mx-auto mb-6">
                        <motion.div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <step.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                          <span className="text-xs font-bold text-foreground">
                            {step.step}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Arrow for desktop */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:flex absolute top-24 -right-4 z-10">
                        <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mb-24">
            <AnimatedContainer className="text-center mb-12">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <MessageSquare className="h-4 w-4" />
                FAQ
              </motion.span>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions? Here are answers to some common ones.
              </p>
            </AnimatedContainer>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-primary/30"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

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

              <div className="relative m-[2px] bg-background rounded-[22px] p-8 md:p-12 lg:p-16">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />

                <div className="relative text-center">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Rocket className="h-10 w-10 text-white" />
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Let&apos;s discuss your requirements and create something
                    amazing together. I&apos;m excited to hear about your ideas!
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild size="lg" className="h-14 px-8 text-base">
                        <Link href="/contact">
                          Get a Free Quote
                          <ArrowRight className="ml-2 h-5 w-5" />
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
                        <Link href="/projects">View My Work</Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Free consultation
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      No hidden fees
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      100% satisfaction guarantee
                    </div>
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
