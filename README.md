# links.dineshd.dev

My personal links hub. A mobile-first home for everything I build.

---

## What This Is

A custom links page that serves as my central hub on the internet. Think Linktree, but with opinions about performance budgets and an unreasonable attachment to 60fps animations.

This repository is public because I believe in building in the open. It showcases how I approach frontend work: type safety, accessibility, performance, and restraint.

## What This Isn't

- **Not a product.** You cannot npm install this.
- **Not a template.** There's no "Deploy Your Own" button.
- **Not a framework.** It's literally one person's links page.

If you're looking for a Linktree alternative to clone and deploy, there are excellent open-source options built for that purpose. This isn't one of them.

---

## Why Build This

**Control.** Third-party link services are fine until they aren't. Rate limits, feature paywalls, analytics you don't own, designs that scream "I used a template." A custom site means I own the pixels, the performance, and the data.

**Mobile-first.** Most visitors arrive from social media on phones. This was designed thumb-first, desktop second.

**Craft.** A links page is small enough to polish properly. Every transition, every interaction, every loading state. It's a forcing function for doing frontend well.

**Signal.** The best portfolio is working code. This repository demonstrates how I think about architecture, accessibility, and user experience in a codebase small enough to read in one sitting.

---

## Tech Stack

| Layer      | Choice                     |
| ---------- | -------------------------- |
| Framework  | Next.js 16 (App Router)    |
| Language   | TypeScript 5 (strict mode) |
| Styling    | Tailwind CSS 4             |
| Animation  | Framer Motion              |
| Deployment | Vercel                     |

No state management libraries. No CSS-in-JS. No component library. The simplest tools that could possibly work.

---

## Design Philosophy

**Mobile-first, always.** Base styles target phones. Breakpoints add desktop enhancements, not mobile accommodations.

**Performance is a feature.** Core Web Vitals aren't suggestions. LCP under 2.5s, zero layout shift, bundle under 150KB. If it's slow on a mid-range Android, it's too slow.

**Subtle motion.** Animation serves communication, not decoration. Staggered reveals guide attention. Hover states provide feedback. Nothing bounces, nothing spins, nothing calls attention to itself.

**Dark by default.** This is a developer's site. Light mode exists but knows its place.

**Accessibility is non-negotiable.** WCAG AA compliance, keyboard navigation, semantic HTML, proper focus states. The web is for everyone.

---

## Local Development

If you're curious about implementation details:

```bash
git clone https://github.com/dinesh-git17/links.git
cd links
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

This section exists for fellow developers who want to see how something works. It's not an invitation to fork and deploy.

---

## On Inspiration and Reuse

You're welcome to read this code. You're welcome to learn from it. If you see a pattern you like, feel free to implement your own version.

What I'd ask:

1. **Build your own thing.** The value of a personal site is that it's personal. Copying defeats the purpose.
2. **Credit ideas, not code.** If something here influences your work, a mention is appreciated but not required.
3. **Consider a star first.** Stars are free. Forks are a commitment.

---

## Status

This is a living project. It evolves when I have something to add or improve. There's no roadmap, no release schedule, no issues tab waiting for feature requests.

It's done when it does what I need. It's improved when I feel like improving it.

---

## Ownership

Built and maintained by [Dinesh](https://links.dineshd.dev).

This codebase exists to serve one user. If it happens to be useful to others, that's a pleasant side effect.

---

_If you've read this far, you're either a recruiter doing due diligence or a developer who enjoys reading READMEs. Either way: hello._
