'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { type ReactNode } from 'react';

export interface AnimatedCTAProps {
  href: string;
  label: string;
  reduceMotion: boolean;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  ariaLabel?: string;
}

const primaryStyles =
  'bg-[color:var(--btn-primary-bg)] text-[color:var(--btn-primary-text)] focus:ring-[color:var(--ring-color)]';

const secondaryStyles =
  'bg-[color:var(--btn-secondary-bg)] text-[color:var(--btn-secondary-text)] border border-[color:var(--btn-secondary-border)] focus:ring-[color:var(--ring-color)]';

export function AnimatedCTA({
  href,
  label,
  reduceMotion,
  variant = 'primary',
  icon,
  ariaLabel,
}: AnimatedCTAProps): React.ReactElement {
  const isPrimary = variant === 'primary';
  const variantStyles = isPrimary ? primaryStyles : secondaryStyles;

  const hoverAnimation = isPrimary
    ? { y: -2, boxShadow: '0 10px 40px rgba(128, 128, 128, 0.15)' }
    : { scale: 1.02 };

  return (
    <Link href={href} className="block flex-1">
      <motion.span
        className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[color:var(--ring-offset)] ${variantStyles}`}
        whileHover={reduceMotion ? undefined : hoverAnimation}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        aria-label={ariaLabel ?? label}
      >
        {icon}
        {label}
      </motion.span>
    </Link>
  );
}
