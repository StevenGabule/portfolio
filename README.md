# JPSOLUTIONS Portfolio

A modern, professional portfolio website built with Next.js 16, featuring stunning animations, dark/light mode, and a responsive design.

## Live Demo

[https://jpsolutions.dev](https://jpsolutions.dev)

## Features

- **Modern UI/UX** - Clean, professional design with smooth animations using Framer Motion
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Responsive Design** - Fully responsive across all devices
- **Contact Form** - Integrated with Formspree for email handling
- **Calendly Integration** - Schedule meetings directly from the website
- **Featured Projects** - Showcase of real-world projects with live demos
- **Professional Journey** - Interactive timeline of work experience
- **Services Section** - Bento grid layout with animated icons
- **Blog Ready** - MDX support for blog posts
- **SEO Optimized** - Meta tags, OpenGraph, and Twitter cards

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [Formspree](https://formspree.io/) + [React Hook Form](https://react-hook-form.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Featured Projects

| Project | Industry | Tech Stack |
|---------|----------|------------|
| AgTrakk | AgriTech | Laravel, Next.js, TypeScript, MySQL |
| Knowledge Hub | HealthTech | NestJS, Next.js, TypeScript, Azure |
| Databit Solutions | AI & Technology | Next.js, FastAPI, Python, GCP |
| TidyDen | Home Services | Next.js, NestJS, PostgreSQL, Stripe |
| ICSP Portal | Government | Laravel, NestJS, Next.js, Azure |
| S&R Shopping | Retail | PHP, Laravel, MySQL, Swift |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Formspree ID:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main layout group
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages
│   │   ├── contact/       # Contact page
│   │   ├── projects/      # Projects page
│   │   ├── reviews/       # Reviews page
│   │   └── services/      # Services page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer, ThemeToggle
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── shared/            # Shared components
│   └── ui/                # UI components (Button, Input, etc.)
├── lib/                   # Utilities and helpers
└── providers/             # Context providers
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Your Formspree form ID for contact form |

## Customization

### Colors

Edit the theme colors in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.2 260);
  --accent: oklch(0.6 0.18 260);
  /* ... other colors */
}

.dark {
  --primary: oklch(0.65 0.18 260);
  --accent: oklch(0.55 0.2 260);
  /* ... other colors */
}
```

### Content

- **Projects**: Edit `src/components/sections/featured-projects.tsx`
- **Services**: Edit `src/components/sections/services-overview.tsx`
- **Experience**: Edit `src/app/(main)/about/page.tsx`
- **Contact Info**: Edit `src/app/(main)/contact/page.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**John Paul Gabule**
- Website: [jpsolutions.dev](https://jpsolutions.dev)
- LinkedIn: [john-paul-gabule](https://www.linkedin.com/in/john-paul-gabule-4a4640b6/)
- GitHub: [StevenGabule](https://github.com/StevenGabule)

---

Built with Next.js and deployed on Vercel.
