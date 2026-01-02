"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
  MessageSquare,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Zap,
  Shield,
  ArrowRight,
  User,
  AtSign,
  FileText,
  PenLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@jpsolutions.dev",
    href: "mailto:hello@jpsolutions.dev",
    description: "Send me an email anytime",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    description: "Mon-Fri from 9am to 6pm",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: null,
    description: "Working remotely worldwide",
    gradient: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const benefits = [
  { icon: Clock, text: "24-hour response time" },
  { icon: Calendar, text: "Flexible scheduling" },
  { icon: Shield, text: "Free consultation" },
  { icon: Zap, text: "Quick turnaround" },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

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
              <MessageSquare className="h-4 w-4" />
              Let&apos;s Talk
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how I can help bring
              your ideas to life. I&apos;m always open to new opportunities.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={staggerItem}
                    className="group"
                  >
                    <motion.div
                      className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 overflow-hidden transition-all duration-500 group-hover:border-primary/30"
                      whileHover={{ y: -4, x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Gradient accent */}
                      <div
                        className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient}`}
                      />

                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-semibold text-foreground hover:text-primary transition-colors text-lg"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-semibold text-foreground text-lg">
                              {item.value}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Office Hours Card */}
              <motion.div
                className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-muted-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Usually respond within 24 hours
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Right Column */}
            <div className="lg:col-span-3">
              <motion.div
                className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        Send a Message
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form and I&apos;ll get back to you soon
                      </p>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <CheckCircle2 className="h-10 w-10 text-green-500" />
                          </motion.div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. I&apos;ll get back to you
                          as soon as possible.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                            >
                              <User className="h-4 w-4 text-muted-foreground" />
                              Name
                            </label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              {...register("name")}
                              className={`h-12 bg-background/50 border-border/50 focus:border-primary ${
                                errors.name ? "border-red-500" : ""
                              }`}
                            />
                            {errors.name && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                            >
                              <AtSign className="h-4 w-4 text-muted-foreground" />
                              Email
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              {...register("email")}
                              className={`h-12 bg-background/50 border-border/50 focus:border-primary ${
                                errors.email ? "border-red-500" : ""
                              }`}
                            />
                            {errors.email && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                          >
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            Subject
                          </label>
                          <Input
                            id="subject"
                            placeholder="What's this about?"
                            {...register("subject")}
                            className={`h-12 bg-background/50 border-border/50 focus:border-primary ${
                              errors.subject ? "border-red-500" : ""
                            }`}
                          />
                          {errors.subject && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.subject.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                          >
                            <PenLine className="h-4 w-4 text-muted-foreground" />
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Tell me about your project, goals, and timeline..."
                            rows={6}
                            {...register("message")}
                            className={`bg-background/50 border-border/50 focus:border-primary resize-none ${
                              errors.message ? "border-red-500" : ""
                            }`}
                          />
                          {errors.message && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.message.message}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                          <p className="text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-500 inline mr-1" />
                            Your information is secure and never shared
                          </p>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              size="lg"
                              className="h-12 px-8"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  Send Message
                                  <Send className="ml-2 h-5 w-5" />
                                </>
                              )}
                            </Button>
                          </motion.div>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
          <AnimatedContainer className="mt-20">
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
                      Prefer a Quick Chat?
                    </h3>
                    <p className="text-muted-foreground max-w-lg">
                      Schedule a free 30-minute consultation to discuss your
                      project requirements and how I can help.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild size="lg" className="h-12 px-8">
                        <a href="mailto:hello@jpsolutions.dev">
                          <Calendar className="mr-2 h-5 w-5" />
                          Schedule a Call
                        </a>
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
