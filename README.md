# Personal Website - Ekin Yurekli

A modern, responsive personal portfolio website built with React and Vite, showcasing projects, extracurricular activities, and professional information.

## 🚀 Project Status

**Status:** Production Ready  
**Last Updated:** January 2025  
**Deployment:** Vercel

## ✨ Features

- **Responsive Design:** Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX:** Clean, professional design with smooth animations and transitions
- **Accessibility:** WCAG 2.1 Level AA compliant with full keyboard navigation and screen reader support
- **Performance Optimized:** Lazy loading images, optimized assets, and efficient code splitting
- **Interactive Elements:** 
  - Smooth scroll navigation
  - Carousel for extracurricular activities
  - Emerald Game (Sonic-themed interactive game)
  - Animated scroll-triggered content

## 🛠️ Tech Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.5
- **Styling:** CSS with Design System Variables
- **Smooth Scrolling:** react-scroll
- **Deployment:** Vercel

## 📁 Project Structure

```
personal-site/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   ├── About.jsx        # About section with profile
│   │   ├── Projects.jsx    # Projects section container
│   │   ├── Project.jsx     # Individual project card
│   │   ├── ExtracurricularActivities.jsx  # Activities carousel/grid
│   │   ├── Contact.jsx     # Contact information
│   │   ├── Footer.jsx      # Site footer
│   │   ├── EmeraldGame.jsx # Interactive game component
│   │   ├── ChaosEmerald.jsx # Game emerald component
│   │   └── Button.jsx      # Reusable button component
│   ├── styles/              # CSS stylesheets
│   │   ├── variables.css   # Design system variables
│   │   ├── App.css         # Global styles
│   │   └── [Component].css # Component-specific styles
│   ├── hooks/              # Custom React hooks
│   │   └── useScrollAnimation.js  # Scroll-triggered animations
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Application entry point
├── public/                 # Static assets
│   ├── emeralds/          # Game emerald images
│   └── sounds/            # Audio files
├── docs/                   # Documentation
│   ├── architecture/      # Architecture documentation
│   └── stories/           # User stories and requirements
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

The project uses a comprehensive design system with CSS custom properties (variables) for:

- **Colors:** Primary, accent, text, background, and semantic colors
- **Typography:** Font families, sizes, weights, and line heights
- **Spacing:** Consistent spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
- **Shadows:** Elevation system for cards and buttons
- **Transitions:** Standardized animation durations and easing
- **Focus Indicators:** Accessible focus states for keyboard navigation

All design tokens are defined in `src/styles/variables.css` and used consistently throughout the application.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-site
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in terminal).

### Build

Create a production build:
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 🌐 Browser Support

The website is tested and supported in:

- **Desktop:**
  - Chrome (latest 2 versions)
  - Firefox (latest 2 versions)
  - Safari (latest 2 versions)
  - Edge (latest 2 versions)

- **Mobile:**
  - iOS Safari (latest version)
  - Android Chrome (latest version)

### CSS Features Used

- CSS Custom Properties (Variables) - Excellent support
- CSS Grid - Excellent support
- Flexbox - Excellent support
- CSS Transitions & Animations - Excellent support
- Intersection Observer API - Good support (polyfill available if needed)

## ♿ Accessibility

The website is designed to be accessible to all users:

- **WCAG 2.1 Level AA Compliant**
- **Keyboard Navigation:** All interactive elements are keyboard accessible
- **Screen Reader Support:** Proper ARIA labels, semantic HTML, and landmarks
- **Focus Indicators:** Visible focus states on all interactive elements
- **Color Contrast:** All text meets WCAG contrast requirements
- **Reduced Motion:** Respects `prefers-reduced-motion` media query

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px

## 🎮 Components

### Header
- Responsive navigation with mobile hamburger menu
- Smooth scroll navigation to sections
- Social media links (GitHub, LinkedIn)

### About
- Hero section with introduction
- Profile image and bio
- Animated content on scroll

### Projects
- Grid layout (2 columns on desktop, 1 on mobile)
- Project cards with images, descriptions, and links
- Source code and demo links

### Extracurricular Activities
- Responsive carousel (tablet/mobile) or grid (desktop)
- Auto-rotation with pause control
- Touch/swipe support for mobile
- Keyboard navigation support

### Contact
- Contact information
- Email link
- Social media links

### Emerald Game
- Interactive game component
- Audio controls (mute, volume)
- Keyboard accessible

## 📦 Deployment

The site is deployed on Vercel. The deployment process:

1. Push changes to the main branch
2. Vercel automatically builds and deploys
3. Preview deployments are created for pull requests

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and optimized builds. Configuration is in `vite.config.js`.

### Environment Variables

No environment variables are currently required. All configuration is in the codebase.

## 📝 Documentation

- **Architecture:** See `docs/architecture/front-end-spec.md`
- **User Stories:** See `docs/stories/` directory
- **Design System:** See `src/styles/variables.css` for all design tokens

## 🐛 Known Issues

None currently. If you find any issues, please report them.

## 📄 License

This is a personal portfolio website. All rights reserved.

## 👤 Author

**Ekin Yurekli**
- Email: ekin.y@dal.ca
- GitHub: [@eyurekli](https://github.com/eyurekli)
- LinkedIn: [ekiny](https://www.linkedin.com/in/ekiny/)

---

Built with ❤️ using React and Vite
