# CLAUDE.md — Engineering Contract

**Project:** links.dineshd.dev — Personal Links Hub
**Stack:** Next.js 14+ (App Router), TypeScript 5+ (strict), Tailwind CSS 3+, React 18+
**Domain:** links.dineshd.dev

---

## 1. Non-Negotiable Rules

### 1.1 TypeScript

- `strict: true` is immutable — no silencing errors via config
- `any` is banned — use `unknown` if type genuinely unknown
- All functions: explicit return types and parameter types
- Props interfaces: exported and named `{ComponentName}Props`
- `as` assertions require inline comment justification — never use `as any`

### 1.2 Code Cleanliness

- **No console.log** — ESLint will fail
- **No inline styles** — Tailwind only (document exceptions)
- **No commented-out code** — delete it, git history exists
- **No magic numbers** — use Tailwind scale or named constants

### 1.3 Accessibility (WCAG AA)

- Keyboard accessible with visible focus indicators (never bare `outline: none`)
- Semantic HTML: proper heading hierarchy (h1→h2→h3), landmarks, button vs anchor
- ARIA: `aria-label` for icon-only buttons, no redundant ARIA
- Color contrast: 4.5:1 normal text, 3:1 large text/UI components
- Images: alt text required (empty `alt=""` for decorative)
- Skip navigation link on all pages

### 1.4 SEO

- Every page exports `metadata` object with title (50-60 chars), description (150-160 chars)
- Open Graph + Twitter Card tags required
- Canonical URLs configured via `metadata.alternates.canonical`
- JSON-LD Person schema, sitemap.xml, robots.txt
- One h1 per page

### 1.5 Performance

- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- Use `next/image` exclusively with width/height, `priority` for above-fold
- Use `next/font` with `display: 'swap'`
- Bundle limits: route < 200KB gzipped, first-load JS < 150KB
- Lazy load below-fold content, dynamic imports for heavy components
- No blocking third-party scripts — use `next/script` with appropriate strategy

### 1.6 AI Attribution (Strictly Forbidden)

- Never mention "Claude", "AI", "assistant", "generated", "Anthropic" in commits, PRs, or code
- Write commit messages as human developer — no AI attribution comments
- Pre-commit hooks enforce this

---

## 2. Git Workflow

### 2.1 Branch Flow

```bash
git checkout main && git pull origin main    # Always start fresh
# Make changes, then create branch BEFORE committing:
git checkout -b feature/descriptive-name
```

### 2.2 Commit Format (Conventional Commits)

```
<type>(<scope>): <subject>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
**Scopes:** `links`, `ui`, `header`, `footer`, `seo`, `a11y`, `perf`, `config`, `ci`, `deps`

```bash
git commit -m "feat(links): add social media link cards"
```

### 2.3 Branch Naming

| Prefix      | Purpose                   |
| ----------- | ------------------------- |
| `feature/`  | New functionality         |
| `fix/`      | Bug fixes                 |
| `perf/`     | Performance               |
| `a11y/`     | Accessibility             |
| `refactor/` | Code refactoring          |
| `hotfix/`   | Critical production fixes |

Rules: lowercase, hyphens, descriptive (not `feature/update`)

### 2.4 Branch Protection

- PR required, 1 reviewer, squash merge only
- CI must pass (lint, type-check, build, tests)
- Never commit/force-push to main

---

## 3. Code Quality

### 3.1 Automated Checks

**Pre-commit:** ESLint, Prettier, TypeScript (staged files)
**CI:** ESLint (zero warnings), type-check, build, tests, a11y audit

### 3.2 Rules

- Zero ESLint warnings in CI — no `eslint-disable` without justification
- Prettier config is immutable — run `npm run format` before commit
- No `@ts-ignore` without inline justification
- Build must pass locally before push

---

## 4. Component Standards

### 4.1 Structure

```typescript
import { type ReactNode } from 'react';

export interface LinkCardProps {
  title: string;
  url: string;
  icon?: ReactNode;
}

export function LinkCard({ title, url, icon }: LinkCardProps): JSX.Element {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
       className="flex items-center gap-4 rounded-lg border p-4 hover:border-gray-300 dark:border-gray-800">
      {icon && <div>{icon}</div>}
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
    </a>
  );
}
```

### 4.2 Rules

- Functional components only — hooks for state/lifecycle
- Named exports for components/utilities, default exports for pages only
- Use `React.memo` only after profiling proves need
- Colocate related files: `ComponentName/ComponentName.tsx`, `index.ts`

---

## 5. Styling

- **Tailwind only** — no CSS modules, styled-components, or inline styles
- Design tokens in `tailwind.config.ts`
- Mobile-first: base styles for mobile, `sm:`/`md:`/`lg:` for larger
- Dark mode required: use `dark:` variant for all colors
- Class order: layout → box model → typography → visual → misc
- Use `prettier-plugin-tailwindcss` for automatic sorting

---

## 6. Naming Conventions

| Type             | Convention           | Example         |
| ---------------- | -------------------- | --------------- |
| Components       | PascalCase           | `LinkCard.tsx`  |
| Utilities        | camelCase            | `formatDate.ts` |
| Non-components   | kebab-case           | `api-client.ts` |
| Constants        | UPPER_SNAKE          | `API_URL`       |
| Booleans         | is/has/should prefix | `isLoading`     |
| Handlers         | handle/on prefix     | `handleClick`   |
| Props interfaces | `{Name}Props`        | `LinkCardProps` |

---

## 7. Testing

**Coverage targets:** Utilities 80%, Components 70%, Overall 75%

```typescript
// Utility test
describe('formatDate', () => {
  it('formats date correctly', () => {
    expect(formatDate(new Date('2025-12-22'))).toBe('12/22/2025');
  });
});

// Component test
describe('LinkCard', () => {
  it('renders link with correct href', () => {
    render(<LinkCard title="GitHub" url="https://github.com" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://github.com');
  });
});
```

**Commands:** `npm run test`, `npm run test:e2e`, `npm run test:a11y`

---

## 8. Error Handling

```typescript
// Error boundary: app/error.tsx
'use client';
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>Something went wrong</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

- Never expose internal errors to users
- User-facing messages: actionable, professional tone

---

## 9. Comments

- Comments explain **WHY**, not **WHAT**
- JSDoc for public APIs only
- No emojis, casual language, or "I think" commentary
- TODO format: `// TODO(username): description`

---

## 10. Architecture

```
app/           # Next.js App Router (layout, page, error, sitemap, robots)
components/    # React components (colocated with tests)
lib/           # Utilities, constants, types
public/        # Static assets
e2e/           # E2E tests
```

- Use absolute imports: `@/components/LinkCard`
- Components: UI only, no business logic
- Utilities: pure functions, thoroughly tested

---

## 11. Deployment

- All CI checks must pass — no exceptions
- Vercel preview on every PR — test before merge
- Production deploys from main only
- Monitor Core Web Vitals via Vercel Analytics

---

## 12. Enforcement

- CI failures block merge — no override
- Every PR requires review
- Reviewer verifies: code quality, tests, accessibility, performance, compliance

---

**END OF DOCUMENT**

This is the engineering contract for links.dineshd.dev. When in doubt, err on the side of strictness.
