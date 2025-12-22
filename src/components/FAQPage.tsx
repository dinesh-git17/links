'use client';

import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useCallback } from 'react';

import { faqData, type FAQItem } from '@/lib/faq-data';

import { ThemeToggle } from './ThemeToggle';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const dividerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  reduceMotion,
}: AccordionItemProps): React.ReactElement {
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors ${
        isOpen
          ? 'border-[color:var(--accent-cyan)]/50 bg-[color:var(--card-surface)]'
          : 'border-[color:var(--card-border)] bg-[color:var(--card-surface)]'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[color:var(--accent-cyan)]"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-[15px] font-medium text-[color:var(--text-primary)]">
          {item.question}
        </span>
        <motion.span
          className="flex-shrink-0 text-[color:var(--icon-color)]"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={
            reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 25 }
          }
        >
          <ChevronDown size={18} aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0.15 }
                : {
                    height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.2, delay: 0.05 },
                  }
            }
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
          >
            <div className="px-5 pb-4">
              <p className="text-sm leading-relaxed text-[color:var(--text-secondary)]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPage(): React.ReactElement {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [openId, setOpenId] = useState<string | null>(null);

  const activeContainerVariants = shouldReduceMotion ? reducedMotionVariants : containerVariants;
  const activeItemVariants = shouldReduceMotion ? reducedMotionVariants : itemVariants;

  const handleToggle = useCallback((id: string): void => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[color:var(--background)]">
      <ThemeToggle />
      <motion.main
        className="flex min-h-dvh w-full max-w-md flex-col px-6 pb-24 pt-12"
        variants={activeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Skip Navigation Link */}
        <a
          href="#faq-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[color:var(--btn-primary-bg)] focus:px-4 focus:py-2 focus:text-[color:var(--btn-primary-text)]"
        >
          Skip to main content
        </a>

        <div id="faq-content" className="flex flex-1 flex-col">
          {/* Back Button */}
          <motion.div variants={shouldReduceMotion ? reducedMotionVariants : headerVariants}>
            <Link
              href="/"
              className="mb-6 flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--icon-color)] transition-colors hover:text-[color:var(--icon-color-hover)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--ring-offset)]"
              aria-label="Go back to home"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header variants={shouldReduceMotion ? reducedMotionVariants : headerVariants}>
            <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text-primary)]">
              FAQ
            </h1>
            <p className="mt-2 text-base text-[color:var(--text-muted)]">
              Context, choices, and curiosity.
            </p>
          </motion.header>

          {/* Gradient Divider */}
          <motion.div
            className="my-8 h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-[color:var(--accent-cyan)]/20 to-transparent"
            variants={shouldReduceMotion ? reducedMotionVariants : dividerVariants}
          />

          {/* Accordion List */}
          <div className="flex flex-col gap-3">
            {faqData.map((item) => (
              <motion.div key={item.id} variants={activeItemVariants}>
                <AccordionItem
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                  reduceMotion={shouldReduceMotion}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.footer className="mt-auto pt-12 pb-safe text-center" variants={activeItemVariants}>
          <p className="text-[13px] text-[color:var(--text-muted)]">
            Still curious?{' '}
            <Link
              href="/contact"
              className="text-[color:var(--accent-cyan)] underline decoration-[color:var(--accent-cyan)]/30 underline-offset-2 transition-colors hover:text-[color:var(--accent-cyan-dark)] hover:decoration-[color:var(--accent-cyan)]"
            >
              Reach out
            </Link>
            .
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}
