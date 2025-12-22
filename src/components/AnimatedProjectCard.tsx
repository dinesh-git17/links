'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export interface AnimatedProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  badges: string[];
  glowColor: 'blue' | 'green';
  reduceMotion: boolean;
}

const glowStyles = {
  blue: 'before:bg-gradient-to-t before:from-blue-500/[var(--glow-opacity)] before:to-transparent',
  green:
    'before:bg-gradient-to-t before:from-emerald-500/[var(--glow-opacity)] before:to-transparent',
} as const;

export function AnimatedProjectCard({
  title,
  description,
  href,
  icon,
  badges,
  glowColor,
  reduceMotion,
}: AnimatedProjectCardProps): React.ReactElement {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col gap-3 overflow-hidden rounded-xl border border-[color:var(--card-border)] bg-[color:var(--card-surface)] p-4 shadow-sm transition-colors before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:h-24 hover:border-[color:var(--card-border-hover)] hover:shadow-md ${glowStyles[glowColor]}`}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--card-border)] bg-[color:var(--skeleton-base)] text-lg">
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[color:var(--text-primary)]">{title}</h3>
          <p className="text-sm text-[color:var(--text-secondary)]">{description}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-md border border-[color:var(--badge-border)] bg-[color:var(--badge-bg)] px-2 py-1 font-mono text-xs text-[color:var(--badge-text)]"
          >
            {badge}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
