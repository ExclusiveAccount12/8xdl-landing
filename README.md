# 8XDL Landing Page

Modern React landing page for 8XDL - Advanced Downloader & Video Player with green/black theme.

## Features

- Modern React + Vite setup
- Green & Black color scheme
- Responsive design
- All required pages:
  - Home
  - Disclaimer
  - Privacy Policy
  - Terms & Conditions
  - App Permissions
  - Bug Report Form
  - Feature Suggestion Form

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
8xdl-landing/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Disclaimer.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   ├── Permissions.jsx
│   │   ├── BugReport.jsx
│   │   ├── Features.jsx
│   │   ├── LegalPage.css
│   │   └── FormPage.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Tech Stack

- React 18
- Vite
- React Router DOM
- Lucide React (icons)

## Customization

Update colors in `src/index.css`:
```css
:root {
  --primary-green: #00ff88;
  --dark-green: #00cc6a;
  --bg-black: #0a0a0a;
  --bg-dark: #121212;
  --bg-card: #1a1a1a;
}
```

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
