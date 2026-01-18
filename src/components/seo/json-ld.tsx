export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://jpsolutions.dev/#person",
    name: "John Paul Gabule",
    alternateName: ["JP Gabule", "JPSOLUTIONS", "Filipino Developer"],
    description:
      "Experienced Filipino Full Stack Developer with 6+ years of experience in web development. Specializing in React, Next.js, Node.js, Laravel, and cloud technologies. Known for excellent English communication and quality work.",
    nationality: {
      "@type": "Country",
      name: "Philippines",
    },
    url: "https://jpsolutions.dev",
    image: "https://jpsolutions.dev/images/profile.jpg",
    email: "lucas.gabule@gmail.com",
    telephone: "+639269422209",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH",
      addressRegion: "Philippines",
    },
    sameAs: [
      "https://github.com/StevenGabule",
      "https://www.linkedin.com/in/john-paul-gabule-4a4640b6/",
      "https://x.com/GabuleP",
    ],
    jobTitle: "Senior Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "JPSOLUTIONS",
      url: "https://jpsolutions.dev",
    },
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "Laravel",
      "NestJS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "REST API",
      "GraphQL",
      "Microservices",
      "E-commerce Development",
      "SaaS Development",
      "Mobile App Development",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Bachelor of Science in Information Technology",
        credentialCategory: "degree",
        educationalLevel: "Bachelor's Degree",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://jpsolutions.dev/#organization",
    name: "JPSOLUTIONS",
    alternateName: ["JP Solutions", "Filipino Web Developer", "Philippines Developer"],
    description:
      "Filipino-owned professional web development and consulting services. We build modern, scalable web applications for businesses worldwide. Known for excellent English communication, strategic thinking, and quality deliverables.",
    url: "https://jpsolutions.dev",
    logo: "https://jpsolutions.dev/logo.png",
    image: "https://jpsolutions.dev/og-image.jpg",
    email: "lucas.gabule@gmail.com",
    telephone: "+639269422209",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH",
      addressRegion: "Philippines",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "8.4542",
      longitude: "124.6319",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "0",
        longitude: "0",
      },
      geoRadius: "40075000",
    },
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
    priceRange: "$$",
    currenciesAccepted: "USD, PHP, EUR, GBP, AUD, CAD",
    paymentAccepted: "Bank Transfer, PayPal, Wise, Credit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    founder: {
      "@type": "Person",
      "@id": "https://jpsolutions.dev/#person",
    },
    sameAs: [
      "https://github.com/StevenGabule",
      "https://www.linkedin.com/in/john-paul-gabule-4a4640b6/",
      "https://x.com/GabuleP",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Development",
            description:
              "End-to-end web application development using modern technologies like React, Next.js, Node.js, and cloud platforms.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development",
            description:
              "Modern, responsive user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Development",
            description:
              "Scalable server-side solutions using Node.js, NestJS, Laravel, Python, and FastAPI.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Development",
            description:
              "Custom e-commerce platforms with payment integration, inventory management, and analytics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Development",
            description:
              "RESTful and GraphQL API design and implementation with proper documentation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud & DevOps",
            description:
              "Cloud infrastructure setup, CI/CD pipelines, and deployment automation on AWS, Azure, and GCP.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://jpsolutions.dev/#website",
    url: "https://jpsolutions.dev",
    name: "JPSOLUTIONS - Professional Web Development & Consulting",
    description:
      "Professional web development, consulting, and full-stack development services. Hire an experienced developer for your next project.",
    publisher: {
      "@type": "Organization",
      "@id": "https://jpsolutions.dev/#organization",
    },
    author: {
      "@type": "Person",
      "@id": "https://jpsolutions.dev/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://jpsolutions.dev/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://jpsolutions.dev/#organization",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Web Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Web Application Development",
                description: "Build scalable, modern web applications tailored to your business needs",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce Solutions",
                description: "Full-featured online stores with payment processing and inventory management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SaaS Development",
                description: "Software as a Service platforms with subscription management and multi-tenancy",
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
