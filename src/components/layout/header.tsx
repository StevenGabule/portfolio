"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) {
  const isLarge = size === "large";
  const badgeSize = isLarge ? 48 : 36;

  return (
    <motion.div
      className={cn("flex items-center gap-3 group", className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Logo Badge */}
      <div
        className="relative"
        style={{ width: badgeSize + 8, height: badgeSize + 8 }}
      >
        {/* Outer glow pulse */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-primary/40 blur-xl"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbital ring 1 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute rounded-full border border-primary/30"
            style={{
              width: badgeSize + 6,
              height: badgeSize + 6,
            }}
          >
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_6px_hsl(var(--primary))]"
              style={{ top: -3, left: "50%", marginLeft: -3 }}
            />
          </div>
        </motion.div>

        {/* Orbital ring 2 - counter rotation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute rounded-full border border-accent/20"
            style={{
              width: badgeSize + 12,
              height: badgeSize + 12,
            }}
          >
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-1 h-1 bg-accent rounded-full shadow-[0_0_4px_hsl(var(--accent))]"
              style={{ bottom: -2, left: "50%", marginLeft: -2 }}
            />
          </div>
        </motion.div>

        {/* Main badge container */}
        <motion.div
          className="absolute inset-1 flex items-center justify-center"
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Badge background with morphing gradient */}
          <motion.div
            className={cn(
              "relative flex items-center justify-center rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary to-accent",
              isLarge ? "w-12 h-12" : "w-9 h-9"
            )}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3,
              }}
            />

            {/* Inner glow layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            {/* Animated letters */}
            <div className="relative z-10 flex">
              <motion.span
                className={cn(
                  "font-black text-white",
                  isLarge ? "text-xl" : "text-sm"
                )}
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                J
              </motion.span>
              <motion.span
                className={cn(
                  "font-black text-white",
                  isLarge ? "text-xl" : "text-sm"
                )}
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                P
              </motion.span>
            </div>

            {/* Corner accent */}
            <motion.div
              className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [0, (i - 1) * 20, 0],
              y: [0, -15 - i * 5, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Text with stagger animation */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline overflow-hidden">
          {/* JP with gradient */}
          <motion.span
            className={cn(
              "font-black tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent",
              isLarge ? "text-2xl" : "text-lg"
            )}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            JP
          </motion.span>
          {/* SOLUTIONS with reveal effect */}
          <span
            className={cn(
              "font-bold tracking-tight text-foreground",
              isLarge ? "text-2xl" : "text-lg"
            )}
          >
            {"SOLUTIONS".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.05,
                  duration: 0.3,
                }}
                whileHover={{
                  y: -2,
                  color: "hsl(var(--primary))",
                  transition: { duration: 0.1 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </div>
        {/* Tagline with typing effect */}
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-3 h-px bg-gradient-to-r from-primary to-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
          <span
            className={cn(
              "text-muted-foreground font-medium tracking-widest uppercase",
              isLarge ? "text-[10px]" : "text-[8px]"
            )}
          >
            Web Development
          </span>
          <motion.div
            className="w-3 h-px bg-gradient-to-r from-accent to-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      {/* Animated background gradient when scrolled */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle mesh gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(at 0% 0%, hsl(var(--primary) / 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(var(--accent) / 0.08) 0px, transparent 50%)",
            }}
          />
          {/* Breathing glow */}
          <motion.div
            className="absolute -top-10 left-1/4 w-96 h-20 bg-primary/10 rounded-full blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -top-10 right-1/4 w-64 h-16 bg-accent/10 rounded-full blur-3xl"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      )}

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-muted/30 backdrop-blur-sm rounded-full px-2 py-1 border border-border/30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  pathname === link.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Active background with glow */}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-50" />
                  </motion.div>
                )}
                {/* Hover glow effect */}
                {pathname !== link.href && (
                  <div className="absolute inset-0 rounded-full bg-primary/0 hover:bg-primary/10 transition-colors duration-300" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Theme toggle with glow */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="relative h-9 w-9 group">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Menu className="h-5 w-5 relative z-10" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/50 bg-background/95 backdrop-blur-xl">
                {/* Mobile menu background effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "radial-gradient(at 100% 0%, hsl(var(--primary) / 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, hsl(var(--accent) / 0.1) 0px, transparent 50%)",
                    }}
                  />
                  <motion.div
                    className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className="relative flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo size="large" />
                  </Link>
                  <div className="pt-6 border-t border-border/30 mt-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "group relative flex items-center text-lg font-medium py-4 transition-all duration-300 border-b border-border/30",
                            pathname === link.href
                              ? "text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {/* Active/Hover indicator */}
                          <motion.div
                            className={cn(
                              "absolute left-0 w-1 h-8 rounded-full transition-all duration-300",
                              pathname === link.href
                                ? "bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                                : "bg-transparent group-hover:bg-primary/50"
                            )}
                            layoutId={pathname === link.href ? "mobileActiveIndicator" : undefined}
                          />
                          <span className="ml-4">{link.label}</span>
                          {/* Hover glow */}
                          {pathname === link.href && (
                            <motion.div
                              className="absolute right-0 w-20 h-full bg-gradient-to-l from-primary/10 to-transparent"
                              animate={{ opacity: [0.5, 0.8, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
