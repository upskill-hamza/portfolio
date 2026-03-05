# Alex Chen — Portfolio

A clean, production-ready React + Tailwind CSS developer portfolio with scroll-triggered animations.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/         # One file per UI component
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Counter.jsx
│   │   ├── Cursor.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Nav.jsx
│   │   ├── Projects.jsx
│   │   ├── Reveal.jsx
│   │   ├── SectionLabel.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js   # All content: skills, projects, timeline, etc.
│   ├── hooks/
│   │   ├── useCounter.js      # Animated number counter (scroll-triggered)
│   │   ├── useReveal.js       # IntersectionObserver scroll reveal
│   │   └── useScrolled.js     # Nav background on scroll
│   ├── styles/
│   │   └── index.css          # Global styles, keyframes, Tailwind base
│   ├── App.jsx                # Root — assembles all sections
│   └── index.js               # React DOM entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start dev server
npm start
```

## ✨ Features

- **Custom cursor** — dot + lagging ring with hover scale effect
- **Scroll triggers** — `useReveal` hook uses `IntersectionObserver` for buttery fade-up animations
- **Counter animation** — stats count up from 0 when scrolled into view
- **Animated marquee** — skills strip between hero and about sections
- **Floating orbs** — CSS-animated background glows in the hero
- **Responsive** — mobile-friendly with hidden sidebar elements on small screens

## 🛠 Customization

Edit **`src/data/portfolioData.js`** to update:
- Your name, skills, and marquee items
- Project cards (title, description, stack, links)
- Experience / education timeline
- Social links and email

All content is centralized — no hunting through component files.
