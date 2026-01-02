import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ],
};

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:hello@jpsolutions.dev", icon: Mail, label: "Email" },
];

function FooterLogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Icon Badge */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
        <span className="font-black text-white tracking-tighter relative z-10 text-base">
          JP
        </span>
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full border-2 border-background" />
      </div>
      {/* Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span className="font-black tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-xl">
            JP
          </span>
          <span className="font-bold tracking-tight text-foreground text-xl">
            SOLUTIONS
          </span>
        </div>
        <span className="text-muted-foreground font-medium tracking-widest uppercase text-[9px]">
          Web Development
        </span>
      </div>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <FooterLogo />
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Professional web development, consulting, and full-stack
              development services. Building modern, scalable web applications
              that drive results.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} <span className="font-semibold">JPSOLUTIONS</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
