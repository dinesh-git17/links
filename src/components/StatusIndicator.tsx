'use client';

import { motion } from 'framer-motion';

export interface StatusIndicatorProps {
  statusText: string;
}

export function StatusIndicator({ statusText }: StatusIndicatorProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="h-2 w-2 rounded-full bg-[color:var(--status-green)]"
        animate={{
          opacity: [1, 0.4, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />
      <span className="text-sm text-[color:var(--text-secondary)]">{statusText}</span>
    </div>
  );
}
