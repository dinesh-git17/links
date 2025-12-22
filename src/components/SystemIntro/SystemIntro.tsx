'use client';

import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface SystemIntroProps {
  onExitComplete: () => void;
  mountTime: number;
}

const MINIMUM_DISPLAY_DURATION_MS = 600;
const EXIT_DURATION_MS = 300;

// Easing curves as const tuples for proper typing
const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const;
const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1] as const;

export function SystemIntro({ onExitComplete, mountTime }: SystemIntroProps): React.ReactElement {
  const reduceMotion = useReducedMotion();
  const [shouldExit, setShouldExit] = useState(false);
  const hasTriggeredExitRef = useRef(false);

  const triggerExit = useCallback((): void => {
    if (hasTriggeredExitRef.current) return;
    hasTriggeredExitRef.current = true;

    const elapsedTime = Date.now() - mountTime;
    const remainingTime = Math.max(0, MINIMUM_DISPLAY_DURATION_MS - elapsedTime);

    setTimeout(() => {
      setShouldExit(true);
    }, remainingTime);
  }, [mountTime]);

  // Auto-exit after minimum duration
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerExit();
    }, MINIMUM_DISPLAY_DURATION_MS);

    return (): void => clearTimeout(timer);
  }, [triggerExit]);

  // Dismissal event listeners
  useEffect(() => {
    if (shouldExit) return;

    const handleDismiss = (): void => {
      triggerExit();
    };

    window.addEventListener('click', handleDismiss);
    window.addEventListener('touchstart', handleDismiss);
    window.addEventListener('scroll', handleDismiss);
    window.addEventListener('keydown', handleDismiss);

    return (): void => {
      window.removeEventListener('click', handleDismiss);
      window.removeEventListener('touchstart', handleDismiss);
      window.removeEventListener('scroll', handleDismiss);
      window.removeEventListener('keydown', handleDismiss);
    };
  }, [shouldExit, triggerExit]);

  // Handle reduced motion: show briefly then fade
  useEffect(() => {
    if (!reduceMotion) return;

    const timer = setTimeout(() => {
      triggerExit();
    }, 100);

    return (): void => clearTimeout(timer);
  }, [reduceMotion, triggerExit]);

  const textVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      }
    : {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.2, ease: EASE_OUT_QUAD },
        },
        exit: {
          opacity: 0,
          y: -20,
          transition: { duration: EXIT_DURATION_MS / 1000, ease: EASE_IN_OUT_CUBIC },
        },
      };

  const backgroundVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
        exit: {
          opacity: 0,
          transition: { duration: EXIT_DURATION_MS / 1000, ease: EASE_IN_OUT_CUBIC },
        },
      };

  const cursorVariants: Variants = reduceMotion
    ? { visible: { opacity: 1 } }
    : {
        visible: {
          opacity: [1, 0, 1, 0, 1],
          transition: {
            duration: 0.4,
            delay: 0.2,
            times: [0, 0.25, 0.5, 0.75, 1],
          },
        },
      };

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {!shouldExit && (
        <motion.div
          key="system-intro"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backgroundVariants}
          aria-hidden="true"
        >
          <motion.div
            className="flex items-center gap-0.5 font-mono text-sm tracking-tight text-zinc-100 sm:text-base"
            variants={textVariants}
          >
            <span>DinBuilds</span>
            <motion.span className="text-emerald-500" variants={cursorVariants}>
              _
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
