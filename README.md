# Mohamed Bashry - DevOps Engineer Portfolio

A modern, responsive portfolio website showcasing DevOps engineering expertise, built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-38bdf8)

## Features

- **Modern UI/UX**: Clean, professional design with dark/light mode toggle
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewports
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Complete meta tags for better search engine visibility
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Functional Contact Form**: EmailJS integration for direct communication
- **Project Showcase**: Dynamic project cards with filtering capabilities
- **Type-Safe**: Built with TypeScript for enhanced code quality

## Project Structure

```bash
src/
├── components/
│   ├── Navbar.tsx           # Sticky navigation bar with mobile menu
│   ├── Footer.tsx           # Footer with social links
│   ├── ThemeToggle.tsx      # Dark/light mode switcher
│   ├── ProjectCard.tsx      # Project display card component
│   ├── SkillBadge.tsx       # Skill icon badge component
│   ├── ContactForm.tsx      # Contact form with EmailJS
│   └── ScrollToTop.tsx      # Scroll to top button
├── pages/
│   ├── Home.tsx             # Landing page with hero section
│   ├── About.tsx            # About page with bio and skills
│   ├── Projects.tsx         # Projects showcase with filtering
│   ├── Contact.tsx          # Contact page with form
│   └── NotFound.tsx         # Custom 404 page
├── data/
│   └── projects.json        # Project data structure
├── App.tsx                  # Main app with routing
├── main.tsx                 # Entry point
└── index.css                # Global styles with Tailwind
```

## Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Routing**: React Router DOM 6.20
- **Icons**: React Icons 4.12
- **Contact Form**: EmailJS 3.11
- **Deployment**: Vercel

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bashry/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your EmailJS credentials:

```bash
cp .env.example .env
```

Edit `.env` with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**How to get EmailJS credentials:**

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### 6. Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Update Personal Information

1. **Home Page**: Edit `src/pages/Home.tsx` to update name, title, and tagline
2. **About Page**: Edit `src/pages/About.tsx` to update bio and skills
3. **Contact Links**: Update social media links in `src/components/Footer.tsx` and `src/pages/Contact.tsx`
4. **Projects**: Edit `src/data/projects.json` to add/modify DevOps projects

### Add New Projects

Edit `src/data/projects.json`:

```json
{
  "id": 7,
  "title": "Your Project Title",
  "description": "Project description...",
  "techStack": ["Tool1", "Tool2", "Tool3"],
  "category": "Cloud",
  "githubLink": "https://github.com/username/repo",
  "liveLink": "https://demo-link.com",
  "imageUrl": "/project-image.jpg"
}
```

### Customize Colors

Edit `tailwind.config.js` to change the primary color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be live!

**Environment Variables on Vercel:**
- Go to your project settings on Vercel dashboard
- Add your EmailJS environment variables under "Environment Variables"
- Redeploy for changes to take effect

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

**Alternative:** Connect your GitHub repository to Netlify for automatic deployments.

## Pages Overview

### Home
- Hero section with animated introduction
- Call-to-action buttons (View Projects, Download Resume)
- Animated background effects

### About
- Professional biography
- Skills grid with technology icons
- Responsive layout with photo placeholder

### Projects
- Grid of DevOps project cards
- Category filtering (All, Cloud, Automation, Monitoring)
- Hover animations and smooth transitions
- Links to GitHub repositories and live demos

### Contact
- Functional contact form with EmailJS
- Social media links
- Professional contact information
- Success/error feedback messages

## Features in Detail

### Dark/Light Mode
- Automatic detection of system preference
- Persistent theme selection (localStorage)
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)
- Hamburger menu for mobile navigation

### Performance Optimizations
- Lazy loading for images
- Code splitting with React Router
- Optimized animations with Framer Motion
- Minimal bundle size with tree-shaking

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: bashry.dev@gmail.com
- **GitHub**: [@bashry](https://github.com/bashry)
- **LinkedIn**: [in/bashry](https://linkedin.com/in/bashry)

## Acknowledgments

- React Icons for the comprehensive icon library
- Tailwind CSS for the utility-first styling approach
- Framer Motion for smooth animations
- EmailJS for contact form functionality
- Vercel for seamless deployment

---

**Built with ❤️ by Mohamed Bashry**

*Bridging Development and Operations — automating everything from code to cloud.*
