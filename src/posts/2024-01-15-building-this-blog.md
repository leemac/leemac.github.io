---
title: Building a Modern Blog with Eleventy and TailwindCSS
description: How I rebuilt my personal blog using Eleventy, TailwindCSS, and modern web development practices for a clean, fast, and maintainable site.
date: 2024-01-15
tags:
  - post
  - web development
  - eleventy
  - tailwindcss
  - jamstack
layout: layouts/post.njk
---

After years of tinkering with different blog platforms and frameworks, I finally settled on a tech stack that feels just right: **Eleventy** for static site generation and **TailwindCSS** for styling. Here's why this combination works so well and how I built this site.

## Why Eleventy?

Coming from various CMS platforms and complex frameworks, Eleventy's simplicity is refreshing:

- **Zero JavaScript by default**: The build output is pure HTML, CSS, and only the JavaScript you choose to add
- **Flexible templating**: Support for multiple template engines (I chose Nunjucks)
- **Fast builds**: Even with hundreds of posts, builds are lightning fast
- **Markdown-first**: Write in Markdown, get beautiful HTML output

## The TailwindCSS Decision

TailwindCSS might seem like overkill for a personal blog, but it offers several advantages:

```css
/* Instead of writing custom CSS like this */
.post-title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #1f2937;
}

/* I can use utility classes */
<h2 class="text-2xl font-light mb-4 text-gray-800">
```

The benefits:

- **Consistency**: Predefined spacing, colors, and typography scales
- **Dark mode**: Built-in dark mode support with `dark:` variants
- **Responsive design**: Responsive utilities make mobile-first design natural
- **No unused CSS**: PurgeCSS removes unused styles in production

## Site Architecture

The site structure is straightforward:

```
src/
├── _includes/layouts/     # Layout templates
├── _data/                 # Site configuration
├── posts/                 # Blog posts in Markdown
├── styles/                # TailwindCSS input file
├── about.njk              # About page
├── blog/index.njk         # Blog listing
└── index.njk              # Homepage
```

## Key Features

### Dark Mode Toggle
The dark mode implementation uses Tailwind's built-in dark mode with localStorage persistence:

```javascript
// Check for saved theme or system preference
if (localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
}
```

### RSS Feed
Using Eleventy's RSS plugin to generate a standards-compliant feed:

```yaml
# In feed.njk
---
permalink: /feed.xml
---
```

### Tag-based Organization
Posts are automatically organized by tags, creating individual tag pages and a browsable tag index.

## Performance Considerations

The resulting site is incredibly fast:

- **Static HTML**: No server-side processing required
- **Optimized CSS**: TailwindCSS purges unused styles
- **Image optimization**: Can be added with Eleventy Image plugin
- **Lighthouse scores**: Near-perfect scores across all metrics

## Deployment to GitHub Pages

The site deploys to GitHub Pages from the `/docs` folder:

```json
{
  "scripts": {
    "build": "npm run build:css && npx @11ty/eleventy",
    "build:css": "npx tailwindcss -i ./src/styles/input.css -o ./docs/css/style.css --minify"
  }
}
```

## What's Next?

Future improvements I'm considering:

- **Search functionality**: Client-side search with Lunr.js
- **Image gallery**: For showcasing art and projects
- **Newsletter integration**: For regular updates
- **Comments**: Perhaps using a service like Netlify Forms

## Conclusion

This setup gives me exactly what I want: a fast, maintainable blog that I can easily customize and extend. The development experience is smooth, the build process is simple, and the result is a clean, accessible site that works well for readers.

If you're considering a similar setup, I highly recommend this combination. The learning curve is gentle, and the results speak for themselves.

---

*The source code for this blog is available on [GitHub](https://github.com/leemac/leemac.github.io) if you'd like to see how it's all put together.* 