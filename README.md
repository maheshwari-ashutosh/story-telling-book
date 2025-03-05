# Storytelling Book Reader

A beautiful, minimalistic web-based book reader for markdown content. This reader features:

- Clean, elegant typography optimized for reading
- Chapter navigation panel on the left
- Heading navigation panel on the right (like GitBook)
- Light and dark theme support with automatic system preference detection
- Responsive design that works on all devices
- Built with TypeScript and Lit components for a modern, maintainable codebase

## Features

- **Beautiful Typography**: Uses Literata for body text and Source Sans 3 for headings
- **Light and Dark Themes**: Toggle between light and dark modes with automatic system preference detection
- **Chapter Navigation**: Easy access to all chapters from the left sidebar
- **In-Chapter Navigation**: Quick access to sections within the current chapter from the right sidebar
- **Responsive Design**: Adapts to different screen sizes, with a mobile-friendly menu
- **URL Hash Navigation**: Chapters can be directly accessed via URL hash
- **Smooth Scrolling**: Smooth scrolling to headings when navigating within a chapter
- **Component-Based Architecture**: Built with Lit components for better maintainability
- **TypeScript**: Fully typed codebase for better developer experience
- **Theme Persistence**: User theme preference is saved in localStorage

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm start
```

This will open the book reader in your default browser at http://localhost:9000.

### Building for Production

To build the production version:

```bash
npm run build
```

This will create a production-ready build in the `docs` directory, which can be deployed to any static hosting service like GitHub Pages.

## Project Structure

```
├── chapters/           # Markdown chapter files
├── src/                # Source code
│   ├── components/     # Lit components
│   │   ├── App.ts      # Main application component
│   │   ├── AppHeader.ts # Header component
│   │   ├── ChapterNav.ts # Chapter navigation component
│   │   ├── ChapterContent.ts # Chapter content component
│   │   ├── HeadingNav.ts # Heading navigation component
│   │   └── ThemeToggle.ts # Theme toggle component
│   ├── services/       # Services
│   │   └── ChapterService.ts # Service for handling chapter data
│   ├── types/          # TypeScript types
│   │   └── index.ts    # Type definitions
│   ├── index.html      # HTML template
│   ├── index.ts        # Main entry point
│   └── styles.css      # Global CSS styles
├── docs/               # Production build output
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── webpack.config.js   # Webpack configuration
```

## Customization

### Changing Colors

The color scheme can be customized by modifying the CSS variables in `src/styles.css`:

```css
:root {
  /* Light theme variables */
  --primary-color-light: #2a5885;
  --secondary-color-light: #4a90e2;
  /* ... other light theme variables ... */
  
  /* Dark theme variables */
  --primary-color-dark: #4a90e2;
  --secondary-color-dark: #64b5f6;
  /* ... other dark theme variables ... */
}
```

### Changing Fonts

To change the fonts, update the Google Fonts link in `src/index.html` and the font-family properties in `src/styles.css`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Lit](https://lit.dev/) for web components
- [marked](https://marked.js.org/) for Markdown parsing
- [webpack](https://webpack.js.org/) for bundling
- [TypeScript](https://www.typescriptlang.org/) for type safety 