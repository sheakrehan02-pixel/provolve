# Provolve Blog

A student-led platform exploring medicine, innovation, and healthcare challenges.

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Blog Posts

The blog includes 4 medical content posts:
- Why Provolve Exists
- Medicine Today: Where Are We Now?
- The Future of Medical Innovation
- Why Students Matter in Medicine

To add more posts, create new `.md` files in `src/content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
pubDate: 2025-01-01
description: "Your post description"
---

Your content here...
```

