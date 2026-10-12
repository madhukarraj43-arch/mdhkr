# Madhukar Raj — Official Personal Portfolio Website

An ultra-modern, responsive, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Features an **Apple Store inspired monochromatic design**, **SF Pro calligraphy**, and **iOS 26 Liquid Glass panels**.

---

## 💎 The 4 Main Files of the Site

The entire website architecture has been consolidated into **just 4 main files**:

1. **[`index.html`](file:///c:/Users/gjhdk/Documents/antigravity/intelligent-noether/index.html)**
   - Entry HTML file configuring viewport, metadata, Google Fonts / Apple SF Pro typography, and React mounting root.

2. **[`src/App.jsx`](file:///c:/Users/gjhdk/Documents/antigravity/intelligent-noether/src/App.jsx)**
   - The master application file containing:
     - Centralized portfolio data (Personal specs, Bhagalpur roots, academic board scores, SIH 2026 project, skills, and social links).
     - All 8 sections rendered in strict order:
       1. **Home**: Apple hero headline, overview, liquid glass navigator.
       2. **About Me**: Age 18, JECRC University, Bhagalpur Bihar, Height 5'7", Weight 55 kgs.
       3. **Education**: Sant Joseph's ICSE 83%, Chauhan Public CBSE 69.2%, JECRC B.Tech CSE (Core).
       4. **Skills**: C, Python, Modern Web Dev, Communication, Public Speaking.
       5. **Projects**: Flagship SIH 2026 Manganese Reserve exploration project + interactive borehole terminal + architecture modal.
       6. **Certifications & Achievements**: SIH 2026 Certificate (`SIH2026-MR-MNG-9842`) + high-res modal.
       7. **Contact**: Academic email (`madhukar.26bcon2022@jecrcu.edu.in`), 1-click copy, Apple-style message dispatch form.
       8. **GitHub & LinkedIn Links**: Monochromatic cards with copy handles and direct navigation.
     - Top Apple minimalist navigation bar and bottom Apple footer.

3. **[`src/index.css`](file:///c:/Users/gjhdk/Documents/antigravity/intelligent-noether/src/index.css)**
   - Apple Store monochromatic color system (`#000000`, `#ffffff`, `#86868b`, `#a1a1a6`).
   - iOS 26 Liquid Glass panel styling (`liquid-glass-panel` with 32px frosted backdrop blur and specular edge highlights).
   - 60Hz hardware-accelerated fluid keyframe animations.

4. **[`src/main.jsx`](file:///c:/Users/gjhdk/Documents/antigravity/intelligent-noether/src/main.jsx)**
   - Clean React 18 client entrypoint mounting `<App />` into `#root`.

---

## 🚀 Running Locally

```bash
# Start local development server
npm run dev

# Build production bundle
npm run build
```
