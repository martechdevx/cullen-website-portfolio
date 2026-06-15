# Cullen Benedict — Portfolio Website

A premium dark-themed personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion — built on the structure and mechanics of the "Jack — 3D Creator" template.

## Tech Stack
- React 18 + TypeScript + Vite
- Tailwind CSS
- Framer Motion (scroll-driven animations, sticky stacking cards, char-by-char text reveal)
- Google Font: Kanit

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Sections (in order)

1. **Hero** — full-screen, sticky-feel nav, massive gradient name, Magnet-wrapped visual
2. **Marquee** — dual-row scroll-driven image ticker (21 GIFs from the original template, rows move opposite directions)
3. **About** — character-by-character scroll-reveal paragraph + 4 corner decorative elements
4. **Services** — white background, 6 numbered service rows
5. **Process** — 4-step "How I Work" card grid
6. **Focus Area** — 3 sticky-stacking cards with scroll-scale effect (the signature Jack "Projects" mechanic), using placeholder visual blocks instead of fake case study screenshots
7. **Testimonials** — 3 featured cards + 8-card grid + disclaimer + CTA
8. **FAQ** — accordion, white background
9. **Contact** — 4 contact cards (Telegram, Email, X, Discord — your real links) + working form (client-side only)
10. **Footer** — nav links + social icons

## Key Mechanics Recreated from Jack Template

- `Magnet.tsx` — mouse-following magnetic hover effect (padding 150, strength 3)
- `FadeIn.tsx` — whileInView fade/slide wrapper, easing [0.25, 0.1, 0.25, 1]
- `AnimatedText.tsx` — per-character opacity scroll reveal using `useScroll`/`useTransform`
- `MarqueeSection.tsx` — passive scroll listener, `translateX` offset formula `(scrollY - sectionTop + innerHeight) * 0.3`
- `ProjectsSection.tsx` — sticky cards with `top: index * 28px` offsets and `targetScale = 1 - (total - 1 - index) * 0.03`
- `ContactButton.tsx` — exact gradient pill with inset shadow + white outline
- `GhostButton.tsx` — outline pill, hover fill

## Customization

- **Profile photo**: swap the placeholder visual in `HeroSection.tsx` (inside the `Magnet` wrapper) for an `<img>` tag
- **Marquee images**: the 21 GIF URLs are from the original Jack template (motionsites.ai). Replace with your own preview images/GIFs if desired — same array structure in `MarqueeSection.tsx`
- **Focus Area visuals**: `ProjectsSection.tsx` uses gradient placeholder blocks per the "no fake case studies" requirement — replace `VisualBlock` with real project images once available
- **Colors**: primary accent `#B600A8`, secondary `#7621B0`/`#BE4C00`, text `#D7E2EA`, background `#0C0C0C`

## Notes

- No fake stats, revenue claims, client logos, or fabricated case studies
- Testimonials carry the disclaimer: "Testimonials shown are representative examples used for portfolio design and layout purposes."
- Fully responsive — fluid typography via `clamp()` throughout
