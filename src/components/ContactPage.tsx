'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useState, useCallback } from 'react';

const EMAIL = 'info@dineshd.dev';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const socialVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const toastVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.95 },
};

interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  icon: React.ReactElement;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dineshsdawonauth/',
    ariaLabel: 'Visit my LinkedIn profile',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dinesh-git17',
    ariaLabel: 'Visit my GitHub profile',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/dinbuilds',
    ariaLabel: 'Visit my X profile',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function ContactPage(): React.ReactElement {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Copied to clipboard');

  const handleCopy = useCallback(async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setToastMessage('Copied to clipboard');
      setShowToast(true);

      // Haptic feedback if available
      if ('vibrate' in navigator) {
        navigator.vibrate(10);
      }

      setTimeout(() => {
        setCopied(false);
      }, 2000);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch {
      // Fallback: select the email text for manual copy
      setToastMessage('Could not copy - please copy manually');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, []);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#050505]">
      <motion.main
        className="flex min-h-dvh w-full max-w-[430px] flex-col px-6 pb-24 pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Skip Navigation Link */}
        <a
          href="#contact-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>

        <div id="contact-content" className="flex flex-1 flex-col">
          {/* Back Button */}
          <motion.a
            href="/"
            className="mb-6 flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            variants={headerVariants}
            whileTap={{ scale: 0.9 }}
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
          </motion.a>

          {/* Section 1: Header */}
          <motion.header variants={headerVariants}>
            <h1 className="text-4xl font-bold text-[#EDEDED]">Contact</h1>
            <p className="mt-2 text-base text-zinc-400">Let&apos;s build something useful.</p>
          </motion.header>

          {/* Gradient Divider */}
          <motion.div
            className="my-8 h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
            variants={dividerVariants}
          />

          {/* Section 2: Primary Contact Card */}
          <motion.section
            className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 shadow-[0_0_30px_rgba(6,182,212,0.05)]"
            variants={cardVariants}
            aria-labelledby="contact-card-heading"
          >
            <h2 id="contact-card-heading" className="sr-only">
              Contact Information
            </h2>

            <div className="flex flex-col gap-4">
              {/* Label */}
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Direct Email
              </span>

              {/* Email Value */}
              <span className="select-all font-mono text-xl text-white">{EMAIL}</span>

              {/* Action Row */}
              <div className="mt-2 grid grid-cols-[1fr_auto] gap-3">
                {/* Primary Button: Email Me */}
                <motion.a
                  href={`mailto:${EMAIL}`}
                  className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Email Me
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </motion.a>

                {/* Secondary Button: Copy */}
                <motion.button
                  type="button"
                  onClick={handleCopy}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-white/5 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <svg
                      className="h-5 w-5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Connect (Socials) */}
          <motion.nav
            className="mt-8 flex justify-center gap-4"
            variants={socialVariants}
            aria-label="Social media links"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full text-zinc-500 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                whileTap={{ scale: 0.9 }}
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Section 4: Footer */}
        <motion.footer className="mt-auto pb-safe text-center" variants={socialVariants}>
          <p className="text-[13px] text-zinc-600">I read everything.</p>
        </motion.footer>

        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-sm text-white backdrop-blur-sm"
              variants={toastVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              role="status"
              aria-live="polite"
            >
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}
