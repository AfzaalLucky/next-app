# Movein - Professional Movers & Packers

A modern, fully-featured Next.js 15 application with TypeScript and the App Router, converted from a static HTML template.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Server Components** by default with Client Components only where needed
- **Tailwind CSS** for styling with custom CSS variables
- **SEO Optimized** with `generateMetadata()` for all pages
- **Responsive Design** - Mobile-first approach
- **Modern Animations** - Using Framer Motion and Intersection Observer
- **Form Validation** - React Hook Form with Zod schemas
- **Optimized Images** - Using next/image for automatic optimization
- **Performance Focused** - Lazy loading, code splitting, and optimized bundles

## 📁 Project Structure

```
next-app/
├── app/                      # App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog listing
│   ├── contact/             # Contact page with form
│   ├── faqs/                # FAQs with interactive accordion
│   ├── gallery/             # Image and video galleries
│   ├── projects/            # Projects showcase
│   ├── services/            # Services listing
│   ├── team/                # Team members
│   ├── testimonials/        # Customer reviews
│   └── layout.tsx           # Root layout with header/footer
├── components/              # Reusable React components
├── public/                  # Static assets (images, icons, fonts)
├── types/                   # TypeScript type definitions
└── lib/                     # Utility functions and helpers
```

## 🛠️ Technologies Used

- **Next.js 15.5.6** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📄 Available Pages

- **/** - Homepage
- **/about** - About us
- **/services** - Services listing
- **/contact** - Contact form
- **/blog** - Blog posts
- **/projects** - Portfolio
- **/team** - Team members
- **/testimonials** - Reviews
- **/faqs** - FAQ accordion
- **/gallery/images** - Image gallery
- **/gallery/videos** - Video gallery

## 🎨 Customization

Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary-color: #062E39;
  --secondary-color: #F4F5F9;
}
```

## ♿ Accessibility & SEO

- Semantic HTML structure
- Dynamic meta tags with `generateMetadata()`
- Optimized images with next/image
- Mobile-friendly responsive design

---

Built with ❤️ using Next.js 15 and TypeScript
