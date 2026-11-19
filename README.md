# Luma. – Buzzvel Front-End Test

A responsive landing page for **luma.**, an online course platform, built from the "Buzzvel FE - Test 2026" Figma file (Desktop 1280px and Mobile frames).

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · `next/font` · `next/image`

## How to install, run and build

Requirements: Node.js 20 or newer and npm.

```bash
# install dependencies
npm install

# start the development server at http://localhost:3000
npm run dev

# lint and type-check
npm run lint
npx tsc --noEmit

# production build and local preview
npm run build
npm run start
```

## Project structure

```
src/
  app/           layout.tsx (fonts, metadata, Header and Footer), page.tsx (the page), globals.css (design tokens)
  components/    one file per section or reusable piece
  data/          all texts, lists and image paths used by the components
public/          images and the logo
```

Page order: Header → Hero → Categories → FeaturedCourse → HowItWorks → Testimonial → People → Contact → FinalCTA → Footer.

## Key decisions

- **Design tokens in `@theme`.** Colors from the Figma (background, primary blue, text, line, muted, accent, highlight…) live in `globals.css` and become classes like `bg-primary` and `border-line`. Fonts are Inter (body) and Plus Jakarta Sans (headings), loaded with `next/font` and exposed as `font-sans` and `font-heading`.
- **Reusable components with typed props.** `Button` (`variant`: primary, secondary, accent; `size`: sm, md), `Container`, `SectionHeading` (`eyebrow`, `title`, `description?`, `align`), `Tag` (`size`), `Badge`, `CategoryCard`. Variants and sizes are small lookup objects instead of long `if` chains.
- **Content separated from markup.** Texts and lists are in `src/data` (navigation, categories, steps, stats, the photo collage…). Components only render them with `.map`, so changing content does not touch the layout.
- **Server Components by default.** Only `MobileMenu` and `ContactForm` are Client Components, because they keep state (`useState`).
- **Semantic and accessible HTML.** `header`, `nav` (with `aria-label`), `main`, `section`, `footer`, ordered headings, `ol`/`ul` for lists, `figure`/`blockquote`/`figcaption` for the testimonial. The mobile menu button has `aria-expanded`, `aria-controls` and closes with Esc. Form fields have `label`s and error messages linked with `aria-describedby`; the success message uses `role="status"`. Decorative images and icons use `alt=""` or `aria-hidden`. Keyboard focus is always visible.
- **Hero on mobile.** The photo appears before the text only with CSS (`order-first`); in the HTML the `h1` stays first, so screen readers and SEO read it first.
- **Images and fonts.** All photos use `next/image` (`fill` + `sizes` for the layout images, `width`/`height` for small fixed ones). The hero photo uses `preload`. The logo is an SVG.
- **Reduced motion.** A global `prefers-reduced-motion` rule in `globals.css` shortens transitions and animations, and the hover and arrow effects use `motion-reduce` classes.
- **Metadata.** Title, description and Open Graph tags are set in `layout.tsx`.
- **Contact form (mock).** Validates name, email and message on submit, shows an error under each invalid field and a success message when everything is valid. There is no backend; nothing is sent.
- **Responsive approach.** Mobile first. Breakpoints: `sm` 640px, `md` 768px, `lg` 1024px (desktop layout). The Figma only has Desktop and Mobile, so the tablet layouts are my own decision.

## Known gaps

- **Some values are estimated.** Most measures were read from the Figma panel, but a few were estimated from screenshots (for example some paragraph spacings, the mobile title size and the position of the floating badges), so there can be small pixel differences.
- **Decorative shapes in the final call to action** (spark, cube, columns icon, "B" shape) were redrawn by hand as SVG/CSS, not exported from the Figma, so they are close but not identical.
- **Testimonial quote mark** is a simplified SVG, not the original icon.
- **Mobile menu** has no design in the Figma (only the closed state), so the open panel is my own simple version.
- **Final call to action** shows 3 avatars; the design has 4.
- **Step labels** in "How Luma works" are "Step 01/02/03"; the Figma repeats "Step 01" in all three, which looks like a design typo.
- **Links** use `#` as placeholders, and there are no other pages.
- **No automated tests.** Verification was manual plus `tsc`, ESLint and `next build`.
- **Vercel deploy and Lighthouse** were not done (optional in the brief).

## Time spent

Worked from 16 to 19 November 2026 (first commit on 16/11, last on 19/11). Approximate total: **22 hours**, roughly: setup, tokens and Header/Footer; Hero and Categories; the remaining sections; mobile and responsive review; README and final checks.

## AI tools used

I used **Claude Code (Anthropic, Claude Sonnet 5.5)** during the whole test.

- **As a tutor:** it explained React, TypeScript, Next.js and Tailwind concepts, helped me read error messages and review my code, and converted the measures I read from the Figma panels into Tailwind classes. I wrote and committed this part myself: design tokens, `Container`, `Button`, `Header`, `Hero`, `Tag`, `Badge` and the navigation, footer and hero data files.
- **As a code writer (from 19/11, because of the deadline):** it wrote the remaining sections and pieces in small parts that I reviewed and committed: metadata, focus and reduced-motion styles, `SectionHeading`, Categories, FeaturedCourse, HowItWorks, Testimonial, People, Contact (with the validated form), FinalCTA, the footer styling, the mobile menu and the responsive changes to Hero and Testimonial. The Figma is private, so it worked from my screenshots of the design panels.
- It also checked the project with `tsc`, ESLint and `next build`, and helped write this README.
