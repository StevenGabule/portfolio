import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import {
  PersonJsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://jpsolutions.dev";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  // Primary Meta Tags
  title: {
    default: "JPSOLUTIONS | Hire Expert Full Stack Developer | Web Development Services",
    template: "%s | JPSOLUTIONS - Professional Web Developer",
  },
  description:
    "Hire an experienced Filipino full stack developer. JPSOLUTIONS offers affordable, professional web development using React, Next.js, Node.js, Laravel, and cloud solutions. 6+ years experience, 50+ projects delivered worldwide. Excellent English communication. Get a free consultation today!",

  // Extended Keywords for SEO
  keywords: [
    // Primary keywords
    "full stack developer",
    "web developer",
    "software developer",
    "freelance developer",
    "hire developer",
    "cheap developer",
    "affordable web developer",
    "remote developer",

    // Technology keywords
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "JavaScript developer",
    "Laravel developer",
    "PHP developer",
    "Python developer",
    "NestJS developer",

    // Service keywords
    "web development services",
    "custom web application",
    "e-commerce development",
    "SaaS development",
    "API development",
    "mobile app development",
    "website development",
    "web application development",

    // Location & Filipino keywords
    "developer Philippines",
    "Filipino developer",
    "Pilipino developer",
    "Filipino web developer",
    "Filipino software developer",
    "Filipino full stack developer",
    "hire Filipino developer",
    "Filipino programmer",
    "Filipino freelancer",
    "Philippines software engineer",
    "Filipino React developer",
    "Filipino Node.js developer",
    "outsource to Philippines",
    "remote developer worldwide",
    "offshore developer",
    "outsource web development",
    "Asian developer",
    "Southeast Asia developer",

    // Industry keywords
    "healthcare software developer",
    "fintech developer",
    "agritech developer",
    "startup developer",
    "enterprise developer",

    // Quality keywords
    "senior developer",
    "experienced developer",
    "professional web developer",
    "expert developer",
    "top developer",
    "best web developer",

    // Cloud & DevOps
    "AWS developer",
    "Azure developer",
    "cloud developer",
    "DevOps engineer",
    "Docker developer",
    "Kubernetes developer",
  ],

  authors: [
    { name: "John Paul Gabule", url: baseUrl },
    { name: "JPSOLUTIONS", url: baseUrl },
  ],
  creator: "John Paul Gabule",
  publisher: "JPSOLUTIONS",

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA"],
    url: baseUrl,
    siteName: "JPSOLUTIONS",
    title: "JPSOLUTIONS | Hire Filipino Full Stack Developer | Web Development Services",
    description:
      "Hire an experienced Filipino developer with 6+ years experience. Specializing in React, Next.js, Node.js, Laravel. Affordable rates, excellent English communication, quality code. Free consultation!",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "JPSOLUTIONS - Professional Web Development Services",
        type: "image/jpeg",
      },
      {
        url: `${baseUrl}/og-image-square.jpg`,
        width: 600,
        height: 600,
        alt: "JPSOLUTIONS Logo",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@GabuleP",
    creator: "@GabuleP",
    title: "JPSOLUTIONS | Hire Filipino Full Stack Developer",
    description:
      "Experienced Filipino developer with 6+ years experience. React, Next.js, Node.js, Laravel. Affordable rates, excellent English, quality code.",
    images: [`${baseUrl}/twitter-image.jpg`],
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Alternate languages
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-US": baseUrl,
      "x-default": baseUrl,
    },
  },

  // App Links
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JPSOLUTIONS",
  },

  // Format Detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Category
  category: "technology",

  // Classification
  classification: "Web Development Services",

  // Other
  referrer: "origin-when-cross-origin",

  // Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.png",
  },

  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Geo Tags */}
        <meta name="geo.region" content="PH" />
        <meta name="geo.placename" content="Philippines" />

        {/* Business Tags */}
        <meta name="business:contact_data:street_address" content="Remote" />
        <meta name="business:contact_data:locality" content="Philippines" />
        <meta name="business:contact_data:country_name" content="Philippines" />
        <meta name="business:contact_data:email" content="lucas.gabule@gmail.com" />
        <meta name="business:contact_data:phone_number" content="+639269422209" />
        <meta name="business:contact_data:website" content="https://jpsolutions.dev" />

        {/* Additional SEO Meta */}
        <meta name="subject" content="Web Development Services" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Structured Data */}
        <PersonJsonLd />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
