'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  badges: string[];
  glowColor: 'blue' | 'green';
}

const glowStyles = {
  blue: 'before:bg-gradient-to-t before:from-blue-500/20 before:to-transparent',
  green: 'before:bg-gradient-to-t before:from-emerald-500/20 before:to-transparent',
} as const;

export function ProjectCard({
  title,
  description,
  href,
  icon,
  badges,
  glowColor,
}: ProjectCardProps): React.ReactElement {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] p-4 before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:h-24 ${glowStyles[glowColor]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg">
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-md border border-white/10 px-2 py-1 font-mono text-xs text-gray-400"
          >
            {badge}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
