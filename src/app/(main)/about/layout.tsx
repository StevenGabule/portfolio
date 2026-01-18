import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About John Paul Gabule | Senior Filipino Full Stack Developer",
  description:
    "Meet John Paul Gabule - Senior Filipino Full Stack Developer with 6+ years of experience. Expertise in React, Next.js, Node.js, Laravel, Python. Excellent English communication, strategic thinker. Based in Philippines, working with clients worldwide.",
  keywords: [
    "John Paul Gabule",
    "JP Gabule",
    "Filipino developer",
    "Pilipino developer",
    "Filipino full stack developer",
    "Filipino web developer",
    "senior developer Philippines",
    "full stack developer profile",
    "experienced web developer",
    "React expert",
    "Next.js specialist",
    "Node.js developer",
    "Laravel developer",
    "remote developer Asia",
    "software engineer portfolio",
    "hire Filipino programmer",
    "Philippines software engineer",
  ],
  alternates: {
    canonical: "https://jpsolutions.art/about",
  },
  openGraph: {
    title: "About John Paul Gabule | Senior Full Stack Developer",
    description:
      "6+ years of experience building web applications. React, Next.js, Node.js, Laravel expert. View my professional journey.",
    url: "https://jpsolutions.art/about",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
