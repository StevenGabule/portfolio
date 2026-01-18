import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Development Tips, Tutorials & Insights",
  description:
    "Learn web development with JPSOLUTIONS blog. Tutorials on React, Next.js, Node.js, TypeScript, Laravel, and more. Tips, best practices, and industry insights from a senior full stack developer.",
  keywords: [
    "web development blog",
    "programming tutorials",
    "React tutorials",
    "Next.js guide",
    "Node.js tutorials",
    "TypeScript tips",
    "Laravel tutorials",
    "coding best practices",
    "developer blog",
    "tech articles",
    "software development",
    "learn programming",
    "web dev tips",
  ],
  alternates: {
    canonical: "https://jpsolutions.dev/blog",
  },
  openGraph: {
    title: "Blog | Web Development Tips & Tutorials",
    description:
      "Learn React, Next.js, Node.js, and more. Tutorials and insights from a senior developer.",
    url: "https://jpsolutions.dev/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
