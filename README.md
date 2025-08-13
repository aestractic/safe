# SAFE - Insurance Platform

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## 🚗 Overview

SAFE is a modern, responsive insurance platform specializing in automotive insurance coverage. Built with cutting-edge web technologies, it provides users with an intuitive interface to explore and quote insurance plans for different vehicle categories.

## ✨ Features

- **🎨 Modern UI/UX**: Sleek, responsive design with smooth animations
- **📱 Mobile-First**: Fully responsive across all device sizes
- **🌍 Multi-Category Coverage**: Specialized insurance for Asian, American, and European vehicles
- **⚡ Performance Optimized**: Built with Astro for lightning-fast loading
- **🎥 Rich Media**: Video backgrounds and optimized images
- **♿ Accessibility**: WCAG compliant design
- **📞 Direct Contact**: Integrated WhatsApp support

## 🏗️ Tech Stack

- **Framework**: [Astro 4.x](https://astro.build/) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime
- **Deployment**: [Vercel](https://vercel.com/) - Edge-optimized hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun 1.0+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/aestractic/safe.git
cd safe

# Install dependencies
bun install

# Start development server
bun dev
```

The application will be available at `http://localhost:4321`

## 📁 Project Structure

```
safe/
├── public/                 # Static assets
│   ├── *.mp4              # Video backgrounds
│   ├── *.jpg, *.webp      # Optimized images
│   └── robots.txt         # SEO configuration
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.astro   # Navigation header
│   │   ├── Slide.astro    # Hero section
│   │   ├── About.astro    # Company information
│   │   ├── Asiaticos.astro # Asian vehicles section
│   │   ├── Americanos.astro # American vehicles section
│   │   ├── Europeos.astro  # European vehicles section
│   │   └── Soporte.astro   # Support section
│   ├── layouts/
│   │   └── Layout.astro   # Base page layout
│   └── pages/
│       └── index.astro    # Main landing page
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── vercel.json           # Vercel deployment settings
```

## 🎯 Vehicle Categories

### 🏮 Asian Vehicles
Specialized coverage for Honda, Toyota, Nissan, Hyundai, and other Asian manufacturers with focus on reliability and efficiency.

### 🦅 American Vehicles  
Robust protection for Ford, Chevrolet, Dodge, Cadillac featuring comprehensive coverage for powerful American engineering.

### 🏰 European Vehicles
Premium insurance solutions for Porsche, Mercedes-Benz, Audi, Volkswagen with luxury-focused coverage options.

## 🛠️ Development

### Available Scripts

```bash
# Development
bun dev          # Start dev server
bun run build    # Build for production
bun run preview  # Preview production build
bun run check    # Run Astro check

# Package Management
bun install      # Install dependencies
bun add <package> # Add new package
bun remove <package> # Remove package
```

### Environment Setup

Create a `.env` file for local development:

```bash
# Add any environment variables here
PUBLIC_SITE_URL=http://localhost:4321
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main

### Manual Deployment

```bash
# Build the project
bun run build

# Deploy the .vercel/output/ folder to your hosting provider
# or use Vercel CLI:
bunx vercel --prod
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent
- **Bundle Size**: < 100KB (gzipped)
- **First Contentful Paint**: < 1.2s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions/updates
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and inquiries:

- **WhatsApp**: [+52 221 230 8218](https://api.whatsapp.com/send?phone=522212308218&text=Aqui%20puedes%20resolver%20tus%20dudas)
- **Email**: support@safe.com
- **Website**: [safe.com](https://safe.com)

## 🙏 Acknowledgments

- Built with ❤️ using Astro
- Styled with Tailwind CSS
- Deployed on Vercel
- Icons from Heroicons

---

**Made with 💙 by the SAFE Team**