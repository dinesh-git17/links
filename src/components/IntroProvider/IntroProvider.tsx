'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { SystemIntro } from '@/components/SystemIntro';

export interface IntroContextValue {
  isIntroComplete: boolean;
}

const IntroContext = createContext<IntroContextValue>({ isIntroComplete: false });

export function useIntro(): IntroContextValue {
  return useContext(IntroContext);
}

export interface IntroProviderProps {
  children: React.ReactNode;
}

const SESSION_STORAGE_KEY = 'has_seen_intro';
const CONTENT_WAKE_DURATION_MS = 300;
const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1] as const;

interface IntroState {
  checked: boolean;
  shouldShowIntro: boolean;
  mountTime: number;
}

export function IntroProvider({ children }: IntroProviderProps): React.ReactElement {
  const reduceMotion = useReducedMotion();

  // Start unchecked - same on server and client
  const [introState, setIntroState] = useState<IntroState>({
    checked: false,
    shouldShowIntro: false,
    mountTime: 0,
  });
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  // Check session storage after hydration - runs only on client
  // Using queueMicrotask to satisfy the eslint rule about setState in effects
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';

    queueMicrotask(() => {
      if (hasSeenIntro) {
        setIntroState({ checked: true, shouldShowIntro: false, mountTime: 0 });
        setIsIntroComplete(true);
      } else {
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        setIntroState({ checked: true, shouldShowIntro: true, mountTime: Date.now() });
      }
    });
  }, []);

  const handleExitComplete = useCallback((): void => {
    setIsIntroComplete(true);
  }, []);

  const contentVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, scale: 0.98 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: CONTENT_WAKE_DURATION_MS / 1000,
            ease: EASE_IN_OUT_CUBIC,
          },
        },
      };

  // Before check completes, render with opacity 0 to prevent flash
  // This matches on server and client, avoiding hydration mismatch
  if (!introState.checked) {
    return (
      <IntroContext.Provider value={{ isIntroComplete: false }}>
        <div className="relative z-0 opacity-0" aria-busy="true">
          {children}
        </div>
      </IntroContext.Provider>
    );
  }

  return (
    <IntroContext.Provider value={{ isIntroComplete }}>
      {introState.shouldShowIntro && (
        <SystemIntro onExitComplete={handleExitComplete} mountTime={introState.mountTime} />
      )}
      <motion.div
        className="relative z-0"
        initial={introState.shouldShowIntro ? 'hidden' : 'visible'}
        animate={isIntroComplete ? 'visible' : 'hidden'}
        variants={contentVariants}
      >
        {children}
      </motion.div>
    </IntroContext.Provider>
  );
}
