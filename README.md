# ✨ Aperture Alchemist

<div align="center">

![Aperture Alchemist](https://img.shields.io/badge/Aperture-Alchemist-FFD700?style=for-the-badge&logo=camera&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

**Transforming Vision Into Cinematic Reality**

A premium videography and photography portfolio showcasing stunning visual storytelling through elegant design and smooth animations.

[View Live Demo](https://aperture-alchemist-tau.vercel.app) · [Report Bug](https://github.com/SATISH-JALAN/Aperture-Alchemist/issues) · [Request Feature](https://github.com/SATISH-JALAN/Aperture-Alchemist/issues)

</div>

---

## 🎬 Features

<table>
<tr>
<td width="50%">

### ✨ **Stunning Hero Animations**

- Parallax card animations
- Smooth scroll-triggered effects
- GPU-accelerated transitions

</td>
<td width="50%">

### 🎨 **Premium Design**

- Dark theme with gold accents
- Custom typography (Montserrat & Cinzel)
- Glassmorphism effects

</td>
</tr>
<tr>
<td width="50%">

### 📱 **Fully Responsive**

- Mobile-first approach
- Touch-optimized interactions
- Adaptive layouts

</td>
<td width="50%">

### ⚡ **Performance Optimized**

- Next.js 16 with Turbopack
- Image optimization
- Lazy loading

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SATISH-JALAN/Aperture-Alchemist.git
   cd Aperture-Alchemist
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   _Or if using npm:_

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   ```

   _Or with npm:_

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the site running locally! 🎉

---

## 📦 Available Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `pnpm run dev`   | Start development server with hot reload |
| `pnpm run build` | Build production-ready application       |
| `pnpm run start` | Start production server                  |
| `pnpm run lint`  | Run ESLint to check code quality         |

---

## 🏗️ Tech Stack

<div align="center">

|                                              Technology                                              |     Purpose     |
| :--------------------------------------------------------------------------------------------------: | :-------------: |
|                  ![Next.js](https://img.shields.io/badge/-Next.js-000?logo=next.js)                  | React Framework |
|    ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)    |   Type Safety   |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) |     Styling     |
|   ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white)   |   Animations    |
|       ![Lucide React](https://img.shields.io/badge/-Lucide-F56565?logo=lucide&logoColor=white)       |      Icons      |

</div>

---

## 📁 Project Structure

```
aperture-alchemist/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page with hero animation
│   ├── projects/            # Projects showcase
│   ├── photo-albums/        # Photo gallery
│   ├── services/            # Services page
│   ├── about/               # About page
│   ├── blogs/               # Blog section
│   └── contact/             # Contact page
├── components/              # Reusable components
│   ├── ui/                  # UI components
│   ├── floating-dock.tsx    # Navigation dock
│   ├── portfolio-grid.tsx   # Project grid
│   └── ...                  # Other components
├── lib/                     # Utility functions & data
│   ├── projects.ts          # Project data
│   ├── albums.ts            # Album data
│   └── utils.ts             # Helper functions
└── public/                  # Static assets
    └── images/              # Image files
```

---

## 🎨 Key Features Breakdown

### 🌟 Hero Section

- **Animated card carousel** with 18 portfolio pieces
- **Smooth parallax scrolling** triggered by viewport
- **Optimized for mobile** with reduced scroll distance
- **GPU-accelerated** animations using `will-change` and `transform`

### 🎯 Projects Page

- **Masonry grid layout** with dynamic filtering
- **Category navigation** with arrow controls
- **Hover effects** with play button overlay
- **Responsive columns** adapting to screen size

### 📸 Photo Albums

- **Parallax gallery** with staggered columns
- **Lightbox viewer** with keyboard navigation
- **Category filters** with smooth transitions
- **Touch-optimized** for mobile devices

### 🎭 Design System

- **Color Palette:** Deep blacks with golden accents (#FFD700)
- **Typography:** Montserrat (sans-serif) & Cinzel (serif)
- **Animations:** Smooth cubic-bezier easing curves
- **Effects:** Backdrop blur, glassmorphism, subtle noise textures

---

## 🛠️ Customization

### Adding New Projects

Edit `lib/projects.ts`:

```typescript
export const allProjects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    slug: "your-project-slug",
    client: "Client Name",
    category: "Category",
    image: "/images/your-image.png",
    aspectRatio: "16:9",
    featured: true,
    year: 2024,
    description: "Project description...",
    credits: [{ role: "Director", name: "Your Name" }],
  },
];
```

### Changing Theme Colors

Modify `app/globals.css`:

```css
:root {
  --primary: oklch(0.85 0.15 85); /* Gold */
  /* Adjust other color values */
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Manual Build

```bash
pnpm run build
pnpm run start
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For seamless deployment
- **Framer Motion** - For beautiful animations
- **Shadcn/ui** - For elegant UI components

---

<div align="center">

### 💫 Made with passion by [SATISH-JALAN & MRINMOY](https://github.com/SATISH-JALAN) (https://github.com/Mrinmoy-programmer07)

**If you found this project helpful, please consider giving it a ⭐**

[![GitHub Stars](https://img.shields.io/github/stars/SATISH-JALAN/Aperture-Alchemist?style=social)](https://github.com/SATISH-JALAN/Aperture-Alchemist/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/SATISH-JALAN/Aperture-Alchemist?style=social)](https://github.com/SATISH-JALAN/Aperture-Alchemist/network/members)

</div>
