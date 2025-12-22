'use client';

import { motion } from 'framer-motion';

export function AvatarGlow(): React.ReactElement {
  return (
    <motion.div
      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 blur-xl"
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  );
}
