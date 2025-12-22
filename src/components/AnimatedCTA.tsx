'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface AnimatedCTAProps {
  href: string;
  label: string;
  reduceMotion: boolean;
}

export function AnimatedCTA({ href, label, reduceMotion }: AnimatedCTAProps): React.ReactElement {
  return (
    <Link href={href} className="block">
      <motion.span
        className="flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-semibold text-black transition-shadow focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050505]"
        whileHover={
          reduceMotion ? undefined : { y: -2, boxShadow: '0 10px 40px rgba(255, 255, 255, 0.15)' }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        aria-label={label}
      >
        {label}
      </motion.span>
    </Link>
  );
}
