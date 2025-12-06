# 🚀 Quick Setup Guide

## Step-by-Step Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- EmailJS (contact form)

### 2. Update Your Information

Open `src/config/portfolio.js` and update:

#### Personal Information
```javascript
personal: {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline",
  email: "your.email@example.com",
  location: "Your Location",
  bio: "Your bio here...",
  resumeUrl: "/resume.pdf",
}
```

#### Social Links
```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your.email@example.com",
}
```

#### Skills
Update the skills arrays with your actual skills and proficiency levels (0-100).

#### Projects
Replace the placeholder projects with your actual projects:
- Update titles, descriptions
- Add real project images (or use Unsplash URLs)
- Update GitHub and live demo links
- Modify tech stack badges

#### Experience
Add your work experience entries with:
- Job title
- Company name
- Location
- Period
- Description points

### 3. Add Your Resume

1. Place your resume PDF in the `public/` folder
2. Name it `resume.pdf` (or update the `resumeUrl` in config)

### 4. Configure EmailJS (Optional)

If you want the contact form to work:

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Update `src/config/portfolio.js`:
```javascript
emailjs: {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
}
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 6. Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### 7. Deploy

#### Option A: Vercel (Easiest)
1. Push to GitHub
2. Import on [Vercel.com](https://vercel.com)
3. Deploy automatically!

#### Option B: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

#### Option C: GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` → `colors.primary`

### Change Fonts
1. Update Google Fonts link in `index.html`
2. Update font families in `tailwind.config.js`

### Add Sections
1. Create component in `src/sections/`
2. Import in `src/App.jsx`
3. Add nav link in `src/components/Navbar.jsx`

### Modify Animations
Edit Framer Motion variants in individual components.

## 📝 Checklist

- [ ] Updated personal information
- [ ] Added social media links
- [ ] Updated skills list
- [ ] Added 6+ projects
- [ ] Added work experience
- [ ] Added resume PDF
- [ ] Configured EmailJS (optional)
- [ ] Tested on mobile/tablet/desktop
- [ ] Deployed to hosting platform

## 🐛 Troubleshooting

**Port not available?**
- Change port in `vite.config.js` or use `npm run dev -- --port 3000`

**Styles not loading?**
- Ensure Tailwind is configured correctly
- Check `postcss.config.js` exists

**Build errors?**
- Delete `node_modules` and `.vite` folder
- Run `npm install` again

**Contact form not working?**
- Verify EmailJS configuration
- Check browser console for errors
- Ensure EmailJS service is active

## 📚 Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review component files for code examples
- Check [Vite Docs](https://vitejs.dev/)
- Check [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

Happy coding! 🎉

