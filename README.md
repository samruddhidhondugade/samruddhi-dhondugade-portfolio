# 🚀 Modern Portfolio Website - Product Designer Style

A beautiful, responsive React portfolio website inspired by modern product designer layouts. Built with React (Vite), Tailwind CSS, and Framer Motion animations. Designed to showcase a Full Stack Developer's work to recruiters and hiring managers.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Website)

## ✨ Features

- 🎨 **Modern Design**: Product designer-inspired layout with premium colors
- 🎯 **Brand Colors**: Mustard Yellow (#F4B400), Deep Green (#1E3A34), Leaf Green (#496949)
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🎭 **Smooth Animations**: Framer Motion powered animations throughout
- 🎯 **Sections**: Hero, Skills (horizontal scroll), Services, Projects, Experience, Contact
- 📧 **Contact Form**: Integrated with EmailJS for form submissions
- ⚡ **Fast Performance**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Rounded shapes, soft shadows, gradient backgrounds

## 🎨 Brand Colors

- **Mustard Yellow**: `#F4B400` - Primary accent color
- **Deep Green**: `#1E3A34` - Secondary color
- **Leaf Green**: `#496949` - Tertiary color
- **White**: `#FFFFFF` - Background
- **Light Gray**: `#F8F8F8` - Light background
- **Black**: `#000000` - Text

## 📁 Folder Structure

```
portfolio-website/
├── public/
│   └── resume.pdf          # Your resume PDF (add here)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── SectionTitle.jsx
│   ├── data/               # Data files
│   │   ├── skills.js
│   │   └── services.js
│   ├── config/
│   │   └── portfolio.js    # Configuration file (UPDATE THIS!)
│   ├── sections/           # Page sections
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Your Portfolio

Edit `src/config/portfolio.js` and update:

- **Personal Information**: Name, role, tagline, email, bio
- **Social Links**: GitHub, LinkedIn, Twitter URLs
- **Projects**: Update project details, images, links
- **Experience**: Add your work experience
- **EmailJS**: Configure for contact form (see below)

### Step 3: Add Your Resume

1. Place your resume PDF in the `public/` folder
2. Update the `resumeUrl` in `src/config/portfolio.js`:

```javascript
resumeUrl: "/resume.pdf"
```

### Step 4: Configure EmailJS (Optional)

For the contact form to work:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Update `src/config/portfolio.js`:

```javascript
emailjs: {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
}
```

### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Step 6: Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Or use Vercel Dashboard**:
   - Push your code to GitHub
   - Import your repository on [Vercel](https://vercel.com)
   - Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  brand: {
    mustard: '#F4B400',
    deepGreen: '#1E3A34',
    leafGreen: '#496949',
    // ... your custom colors
  },
}
```

### Adding New Skills

Edit `src/data/skills.js` and add your skills with appropriate icons from react-icons.

### Adding New Services

Edit `src/data/services.js` and add your services with icons.

### Modifying Projects

Edit `src/config/portfolio.js` → `projects` array

### Updating Fonts

Change fonts in `tailwind.config.js` and `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 📝 Configuration File Details

The `src/config/portfolio.js` file contains all customizable content:

- **personal**: Your name, role, tagline, email, bio, location
- **social**: Social media profile URLs
- **projects**: Project cards with images, descriptions, tech stack, links
- **experience**: Work experience timeline entries
- **emailjs**: EmailJS configuration for contact form

## 🎯 Key Components

### Button Component
Reusable button with multiple variants (primary, secondary, outline, ghost)

### Card Component
Modern card with rounded corners and hover effects

### SectionTitle Component
Consistent section titles with subtitle support

### Navbar Component
Sticky navigation with active section highlighting and yellow "Contact Me" button

## 🐛 Troubleshooting

### Contact Form Not Working
- Verify EmailJS configuration in `portfolio.js`
- Check browser console for errors
- Ensure EmailJS service and template are properly set up

### Images Not Loading
- Ensure image URLs are correct in `portfolio.js`
- For local images, place them in `public/` folder and use `/image-name.jpg`

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (v16+ required)

### Icons Not Showing
- Ensure `react-icons` is installed: `npm install react-icons`
- Check that icon names match react-icons library

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## 📧 Contact

For questions or support, reach out via:
- Email: samruddhidhondugade@gmail.com

---

**Made with ❤️ by Samruddhi Dhondugade**
