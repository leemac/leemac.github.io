# Lee McKinnon's Personal Blog

A minimal personal blog built with **Eleventy (11ty)** and **TailwindCSS**. Clean, minimalist design inspired by simonsarris.com with generous spacing, tasteful typography, and space for art or hand-crafted visuals.

## 🛠 Tech Stack

- **Eleventy** for static site generation
- **TailwindCSS** for styling
- **Markdown** for content (stored in `/src/posts`)
- **GitHub Pages** compatible (output to `/docs`)

## ✨ Features

- **Dark mode toggle** with system preference detection
- **Responsive design** (mobile-first)
- **RSS feed** at `/feed.xml`
- **Tag-based organization** with individual tag pages
- **Social sharing** buttons on posts
- **Syntax highlighting** for code blocks
- **Typography optimized** for readability
- **Fast builds** and excellent performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/leemac/leemac.github.io.git
cd leemac.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
```

This will:
1. Compile TailwindCSS and minify the output
2. Generate the static site in the `/docs` folder
3. Create all necessary pages, feeds, and assets

## 📝 Writing Posts

Create new blog posts in the `/src/posts` directory using Markdown:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: 2024-01-15
tags:
  - post
  - your-tag
  - another-tag
layout: layouts/post.njk
---

Your post content goes here...
```

## 📁 Project Structure

```
src/
├── _includes/layouts/     # Layout templates
├── _data/                 # Site configuration
├── posts/                 # Blog posts in Markdown
├── styles/                # TailwindCSS input file
├── assets/                # Static assets
├── art/                   # Art and images
├── about.njk              # About page
├── blog/index.njk         # Blog listing
└── index.njk              # Homepage
```

## 🎨 Customization

### Site Configuration

Edit `/src/_data/site.json` to update:
- Site title and description
- Author information
- Navigation menu
- Social media links

### Styling

The design uses TailwindCSS with custom components defined in `/src/styles/input.css`. The color scheme and typography can be customized in `tailwind.config.js`.

### Dark Mode

Dark mode is implemented using Tailwind's built-in dark mode with class strategy. The toggle respects system preferences and persists user choice in localStorage.

## 📦 Deployment

The site is configured for GitHub Pages deployment:

1. Push changes to the `master` branch
2. GitHub Pages will serve from the `/docs` folder
3. The site will be available at your GitHub Pages URL

## 🔧 Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run dev` - Development with CSS watching
- `npm run build:css` - Build CSS only
- `npm run watch:css` - Watch CSS changes

## 📄 License

MIT License - feel free to use this as a starting point for your own blog!

---

Built with ❤️ using Eleventy and TailwindCSS