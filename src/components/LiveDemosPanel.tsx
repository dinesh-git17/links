'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Code2, FlaskConical, Globe } from 'lucide-react';
import { type ReactElement } from 'react';

export interface DemoLink {
  label: string;
  href: string;
  icon: ReactElement;
  meta?: string;
  ariaLabel: string;
}

export interface LiveDemosPanelProps {
  reduceMotion: boolean;
}

const demoLinks: DemoLink[] = [
  {
    label: 'PassFX Live',
    href: 'https://passfx.dineshd.dev',
    icon: <Globe size={20} aria-hidden="true" />,
    ariaLabel: 'Open PassFX live website in new tab',
  },
  {
    label: 'Debate Lab Live',
    href: 'https://debatelab.dineshd.dev',
    icon: <FlaskConical size={20} aria-hidden="true" />,
    ariaLabel: 'Open Debate Lab live website in new tab',
  },
  {
    label: 'View Source',
    href: 'https://github.com/dinesh-git17/links',
    icon: <Code2 size={20} aria-hidden="true" />,
    meta: 'This Site',
    ariaLabel: 'View source code for this site on GitHub in new tab',
  },
];

export function LiveDemosPanel({ reduceMotion }: LiveDemosPanelProps): ReactElement {
  return (
    <section aria-labelledby="live-demos-heading">
      <h2 id="live-demos-heading" className="sr-only">
        Live Demos
      </h2>
      <nav
        aria-label="Live demo links"
        className="overflow-hidden rounded-xl border border-[color:var(--card-border)] bg-[color:var(--card-surface)]"
      >
        <ul className="divide-y divide-[color:var(--divider)]">
          {demoLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center gap-3 px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[color:var(--ring-color)]"
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        backgroundColor: 'var(--skeleton-base)',
                      }
                }
                transition={{ duration: 0.1 }}
                aria-label={link.ariaLabel}
              >
                <span className="text-[color:var(--icon-color)]">{link.icon}</span>
                <span className="flex-1 text-sm font-medium text-[color:var(--text-primary)]">
                  {link.label}
                </span>
                {link.meta && (
                  <span className="text-xs text-[color:var(--text-muted)]">{link.meta}</span>
                )}
                <ChevronRight
                  size={16}
                  className="text-[color:var(--icon-color)] opacity-50"
                  aria-hidden="true"
                />
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
