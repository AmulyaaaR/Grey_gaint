# Grey Giant Events - Premium Event Management Platform

A luxury event management website built with cutting-edge web technologies, featuring a stunning gold & black aesthetic and comprehensive admin panel for content management.

## ✨ Recent Updates (February 2026)

### Mobile Responsiveness Overhaul
- **Enhanced Text Readability**: Increased minimum text size from 8px to 12px across all pages
- **Improved Touch Targets**: All interactive elements now meet 44x44px minimum for easy mobile use
- **Admin Panel UX**: Redesigned for non-technical users with helpful tooltips, clear labels, and intuitive controls
- **Responsive Inputs**: Form fields adapt height based on screen size (mobile-first design)
- **Accessibility**: WCAG compliant touch targets and contrast ratios

### Key Features
- **Premium Aesthetics**: Gold gradient accents, glassmorphism effects, and elegant animations
- **Mobile-Optimized**: Fully responsive design tested on devices from 375px (iPhone SE) to 4K displays
- **Admin Panel**: Intuitive content management system with drag-and-drop image organization
- **Image Optimization**: Automatic WebP conversion for all uploaded images
- **GitHub Integration**: Direct push-to-live workflow for content updates

## 🛠 Tech Stack

### Frontend
- **React 18** with **Vite 7** (Lightning-fast HMR)
- **Tailwind CSS 4** (Utility-first styling with JIT)
- **Framer Motion 11** (Smooth, production-ready animations)
- **Lucide React** (Modern icon library)
- **Wouter** (Lightweight routing)
- **Radix UI** (Accessible component primitives)

### Admin & Content Management
- **GitHub API** (Octokit) for direct repository updates
- **@dnd-kit** for drag-and-drop asset organization
- **React Hook Form** with Zod validation
- **Image Optimization** built into upload flow

### Build & Deploy
- **TypeScript 5.6** (Type-safe development)
- **gh-pages** (Automated GitHub Pages deployment)
- **Vite Build** (Optimized production bundles)

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v20 or higher)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amulyaaar/Grey_gaint.git
   cd Grey_gaint
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   
   The site will be available at **http://localhost:5173**

### Building for Production

```bash
npm run build
```

The optimized production bundle will be in `client/dist/`.

### Deploying to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make the site live at your GitHub Pages URL

## 📁 Project Structure

```
Grey_gaint/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── pages/            # Page components (Home, About, Contact, Admin)
│   │   ├── components/       # Reusable UI components
│   │   ├── data/             # Site content (siteContent.json)
│   │   ├── lib/              # Utilities and helpers
│   │   └── assets/           # Static assets
│   └── attached_assets/      # Organized image repository
│       ├── Hero/
│       ├── About/
│       ├── Services/
│       ├── Gallery/
│       └── backgrounds/
├── server/                    # Express backend (optional)
└── shared/                    # Shared TypeScript types
```

## 🎨 Design Philosophy

### Color Palette
- **Primary**: Vibrant Gold `#D4AF37` (accents, CTAs, highlights)
- **Background**: Deep Black `#020202` (premium, luxury feel)
- **Text**: White with opacity variations for hierarchy

### Typography
- **Headings**: Cormorant Garamond (Elegant serif)
- **Body**: Inter (Clean, readable sans-serif)
- **Tracking**: Wide letter-spacing for luxury feel

### Aesthetic Principles
- Glassmorphism with backdrop blur
- Subtle grid overlays and noise textures
- Smooth micro-interactions
- Gold particle animations
- Premium gradients and shadows

## 🔐 Admin Panel

Access the admin panel at `/admin` with GitHub credentials.

### Features
- **Content Management**: Edit all site text and copy
- **Image Upload**: Drag-and-drop with automatic WebP optimization
- **Asset Organization**: Browse and manage all images by category
- **Live Preview**: See changes before publishing
- **GitHub Sync**: Push updates directly to repository

### Mobile-Friendly Admin
- Touch-optimized controls (44x44px minimum)
- Helpful tooltips for every action
- Clear visual feedback
- Responsive navigation
- Non-technical user friendly

## 📱 Mobile Responsiveness

Tested and optimized for:
- **Mobile**: iPhone SE (375px) to iPhone 16 Pro Max (430px)
- **Tablet**: iPad Mini (768px) to iPad Pro (1024px)
- **Desktop**: 1920px to 4K (3840px)

### Key Improvements
- Readable text on all devices (minimum 12px)
- Easy-to-tap buttons and controls
- Responsive form inputs
- Mobile-first navigation
- Touch-friendly admin panel

## 🌐 Live Site

**Production URL**: [https://amulyaaar.github.io/Grey_gaint/](https://amulyaaar.github.io/Grey_gaint/)

## 🤝 Contributing

This is a private project for Grey Giant Events. For any issues or feature requests, please contact the development team.

## 📄 License

MIT License - See LICENSE file for details

---

**Built with precision and elegance by the Grey Giant development team.**

*Last updated: February 2026 - Mobile Responsiveness & Admin UX Overhaul*
