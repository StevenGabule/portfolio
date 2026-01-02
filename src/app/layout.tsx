import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jpsolutions.dev"),
  title: {
    default: "JPSOLUTIONS | Professional Web Development & Consulting",
    template: "%s | JPSOLUTIONS",
  },
  description:
    "Professional web development, consulting, and full-stack development services. Building modern, scalable web applications.",
  keywords: [
    "web development",
    "full stack developer",
    "consulting",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "JPSOLUTIONS" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JPSOLUTIONS",
    title: "JPSOLUTIONS | Professional Web Development & Consulting",
    description:
      "Professional web development, consulting, and full-stack development services.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
