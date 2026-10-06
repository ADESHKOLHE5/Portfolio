# Adesh Kolhe — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS, structured as
reusable, single-responsibility components.

## Stack
- React 18 + Vite
- Tailwind CSS (custom theme tokens for the dark emerald palette)
- lucide-react for icons

## Project Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    InfoCard.jsx
    Skills.jsx
    SkillBadge.jsx
    Projects.jsx
    ProjectCard.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  data/
    portfolioData.js   <- all resume content lives here, edit this to update the site
  App.jsx
  main.jsx
  index.css
tailwind.config.js
```

## Getting Started
```bash
npm install
npm run dev      # local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## Editing Content
All text (projects, skills, education, contact info) is centralized in
`src/data/portfolioData.js`. Update that file and every component re-renders
with the new content automatically — no need to touch the JSX.

## Customizing Theme
Colors, fonts, and the background glow are defined as design tokens in
`tailwind.config.js` under `theme.extend`. Adjust `colors.ink` / `colors.accent`
to change the palette globally.
