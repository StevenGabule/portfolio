"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
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

  return (
    <motion.div
      className={cn("flex items-center gap-2", className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon Badge */}
      <motion.div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg",
          isLarge ? "w-12 h-12" : "w-9 h-9"
        )}
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
        <span className={cn(
          "font-black text-white tracking-tighter relative z-10",
          isLarge ? "text-xl" : "text-sm"
        )}>
          JP
        </span>
        {/* Decorative corner */}
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full border-2 border-background" />
      </motion.div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span className={cn(
            "font-black tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
            isLarge ? "text-2xl" : "text-lg"
          )}>
            JP
          </span>
          <span className={cn(
            "font-bold tracking-tight text-foreground",
            isLarge ? "text-2xl" : "text-lg"
          )}>
            SOLUTIONS
          </span>
        </div>
        <span className={cn(
          "text-muted-foreground font-medium tracking-widest uppercase",
          isLarge ? "text-[10px]" : "text-[8px]"
        )}>
          Web Development
        </span>
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo size="large" />
                  </Link>
                  <div className="pt-6 border-t border-border mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center text-lg font-medium py-3 transition-colors hover:text-primary border-b border-border/50",
                          pathname === link.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
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
