'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function AvatarGlow(): React.ReactElement {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Required for SSR hydration mismatch prevention with next-themes
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;
  const baseOpacity = isDark ? 0.5 : 0.2;
  const peakOpacity = isDark ? 0.8 : 0.35;

  return (
    <motion.div
      className="absolute inset-0 rounded-full bg-gradient-to-r from-[color:var(--accent-cyan)] to-[color:var(--accent-emerald)] blur-xl"
      animate={{
        opacity: [baseOpacity, peakOpacity, baseOpacity],
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
