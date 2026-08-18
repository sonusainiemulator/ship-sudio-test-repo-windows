# Astro Static Marketing Site Starter

A minimal Astro starter with Tailwind CSS for building static marketing sites with Ship Studio.

## Features

- **Astro 5** - Static site generation with island architecture
- **Tailwind CSS 4** - Modern utility-first CSS with CSS variables
- **Dark Mode** - Automatic dark/light theme based on system preferences
- **Google Fonts** - Space Grotesk (display) + DM Sans (body)
- **Responsive** - Mobile-first design patterns

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view your site.

## Project Structure

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with fonts and styles
│   ├── pages/
│   │   └── index.astro     # Homepage
│   └── styles/
│       └── global.css      # Tailwind + CSS variables
├── public/                  # Static assets
└── astro.config.mjs        # Astro configuration
```

## Commands

| Command         | Action                                       |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start dev server at `localhost:4321`         |
| `npm run build` | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally           |

## Customization

### Colors

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --background: #fafaf9;
  --foreground: #1c1917;
  --muted: #78716c;
  --accent: #dc2626;
}
```

### Fonts

Fonts are loaded via Google Fonts in `src/layouts/Layout.astro`. Update the import URL and CSS variables to change fonts.

## License

MIT
