import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | What Clients Say",
  description:
    "Read what clients say about working with JPSOLUTIONS. Authentic reviews and testimonials from satisfied clients worldwide. 99% client satisfaction rate, 30+ happy clients, quality work delivered on time.",
  keywords: [
    "developer reviews",
    "client testimonials",
    "web developer feedback",
    "freelancer reviews",
    "JPSOLUTIONS reviews",
    "developer ratings",
    "client satisfaction",
    "quality web development",
    "trusted developer",
    "recommended developer",
  ],
  alternates: {
    canonical: "https://jpsolutions.art/reviews",
  },
  openGraph: {
    title: "Client Reviews & Testimonials | JPSOLUTIONS",
    description:
      "99% client satisfaction rate. Read authentic reviews from clients worldwide.",
    url: "https://jpsolutions.art/reviews",
    type: "website",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
