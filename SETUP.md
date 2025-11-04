# Quick Setup Guide

## Installation Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Set up EmailJS (for contact form):**
   - Create account at https://www.emailjs.com/
   - Create an email service
   - Create a template with these variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Copy `.env.example` to `.env` and add your credentials:
   ```bash
   cp .env.example .env
   ```

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser:**
   - Navigate to http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Don't forget to add your EmailJS environment variables in Vercel dashboard!

## Customize Content

- **Personal info**: Edit files in `src/pages/`
- **Projects**: Edit `src/data/projects.json`
- **Social links**: Edit `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- **Colors**: Edit `tailwind.config.js`

## Need Help?

Check the full README.md for detailed documentation!
