# 🌟 Zahira's Portfolio - Frontend Developer

<div align="center">

**Professional portfolio showcasing responsive websites built with HTML, CSS, JavaScript & Bootstrap**  
[Live Demo](https://zahira-elmahjour.netlify.app) • [Report Bug](https://github.com/ZahirawDW/Portfolio/issues) • [Request Feature](https://github.com/ZahirawDW/Portfolio/issues)  

</div>

## 🚀 About The Project
A clean, modern personal portfolio designed for freelance frontend developers and junior roles. Features dark/light mode toggle, smooth animations, interactive projects showcase, and a secure contact form integrated with Netlify. Built to demonstrate real-world skills.

### 🎯 Key Features
- **🌙 Dark/Light Mode** - Toggle with localStorage persistence & smooth transitions
- **📱 Fully Responsive** - Mobile-first Bootstrap grid (320px to desktop)
- **✨ Scroll Animations** - Fade-in sections with Intersection Observer logic
- **🛡️ Secure Contact Form** - Client-side validation, XSS sanitization, honeypot spam protection
- **📂 Project Showcase** - 3 live demos with GitHub links & tech badges
- **⚡ Back-to-Top** - Smooth scroll button in footer
- **🔗 Success Page** - User-friendly redirect after form submission

## 🛠️ Built With

**Core:** HTML5, CSS3 (Custom Properties, Animations), Vanilla JavaScript (ES6+)
**Framework:** Bootstrap 5.3.8 (Grid, Forms, Cards, Navbar)
**Icons:** Font Awesome 6.4 + Emoji toggler
**Forms:** Netlify Forms (serverless backend, Netlify spam protection)
**Fonts:** Google Fonts – Inter (400, 600, 700)
**Storage:** localStorage (theme + potential form state)
**Tools:** Git/GitHub, Netlify (deployment/hosting)

## 🔍 Code Quality

Analyzed for junior freelancer standards:

✅ **Responsive Tested** - Chrome DevTools (mobile/tablet/desktop)
✅ **Accessibility** - Semantic HTML, ARIA labels, focus styles
✅ **Performance** - minified CDNs
✅ **Security** - Form sanitization (HTML escaping), honeypot, no inline JS
✅ **Cross-Browser** - Chrome, Firefox, Edge, Safari

## 📦 Installation & Run Locally

Clone the repository
```bash
git clone https://github.com/ZahirawDW/portfolio.git
cd Portfolio
```

Open `index.html` in your browser.


## 📱 Project Structure

PORTFOLIO/
├── index.html          # Main portfolio page
├── success.html        # Post-form success page
├── styles.css          # Theme variables, animations, responsive
├── script.js           # Theme toggle, validation, animations, footer utils
├── assets/             # Images (hero, projects, favicon)
│   ├── hero-section.png
│   ├── floriva-project.png
│   ├── mindnest-project.png
│   ├── icon.png
│   └── terravita-project.png
└── README.md          # Project overview & instructions

## 💡 Features Overview

### Theme System

Toggle button with sliding emoji icon (moon/sun)
CSS custom properties switch colors instantly
Persists user preference across sessions

### Form Validation & Security

Real-time checks (blur/input): name (min 4 chars), email regex, message (10-2000 chars)
Dynamic error divs + Bootstrap .is-invalid red borders/icons
XSS-safe sanitization: escapes & < > " ' to entities
Submit: disables button ("Sending..."), focuses first error

## Projects Highlighted

- **Floriva** - E-commerce flower shop (cart, filter, 24+ products)
- **MindNest** - Dynamic bookstore (JS switching, order form)
- **TerraVita** - Travel site (seasonal categories, trip planning)
- Each project includes live demo and GitHub repository links

## 🌟 Technical Highlights

**No Dependencies** - Pure vanilla JS 
**Theme-Aware** - All elements adapt (navbar, cards, forms, footer)
**Performance** - Fixed navbar, optimized animations (no RAF loop)
**SEO-Friendly** - Meta tags, semantic sections, alt texts
**Mobile Optimized** - Custom media queries + Bootstrap breakpoints
**Form Security** -  Honeypot + Netlify spam protection

## 🎯 Browser Support

✅ Chrome 100+ (recommended)
✅ Firefox 90+
✅ Safari 15+
✅ Edge 100+
✅ Mobile: iOS Safari, Chrome Android

## 🚀 Deployment

This portfolio is deployed on Netlify:
1. Push to GitHub repository
2. Connect to Netlify
3. Enable form handling in Netlify dashboard

Form submissions are managed automatically by Netlify Forms.

## 📱 Responsive Design

- **Mobile**: Optimized for 320px+ screens
- **Tablet**: Adaptive layout for 768px+ screens
- **Desktop**: Full experience for 1024px+ screens

## 🔧 Customization Guide

### Theme Colors
Edit :root in styles.css:
```css
:root {
    --bg-primary: #0a192f;
    --bg-secondary: #112240;
    --text-primary: #ccd6f6;
    --text-secondary: #8892b0;
    --accent: #5fe6c7;
    --accent-hover: #228b71;
}
body.light-mode {
    --bg-primary: #f8f9fa;
    --bg-secondary: #ffffff;
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --accent: #3182ce;
    --accent-hover: #2c5aa0;
}
```

## 👩‍💻 Developer

**EL-MAHJOUR Zahira**

## 📞 Contact

- 📧 Email: [zahirael-mahjour](zahiraelmahjour06@gmail.com)
- 👨‍💻 GitHub: [@ZahirawDW](https://github.com/ZahirawDW)
- 🔗 LinkedIn: [Zahira El-Mahjour](https://www.linkedin.com/in/zahira-el-mahjour)

## 📄 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Bootstrap team
- Netlify Forms (zero-backend magic)
- Font Awesome icons
- Inter font (perfect readability)

---

<div align="center">

### ⭐ If this portfolio inspires you, consider giving it a star!

**"Clean code always looks like it was written by someone who cares."** — Robert C. Martin

</div>

*Last updated: January 2026*