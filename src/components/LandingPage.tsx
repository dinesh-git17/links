'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

import { AnimatedAvatar } from './AnimatedAvatar';
import { AnimatedCTA } from './AnimatedCTA';
import { AnimatedProjectCard } from './AnimatedProjectCard';
import { AnimatedSocialGrid } from './AnimatedSocialGrid';
import { StatusIndicator } from './StatusIndicator';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const avatarVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export interface ProjectCardData {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  badges: string[];
  glowColor: 'blue' | 'green';
}

export interface LandingPageProps {
  projects: ProjectCardData[];
}

export function LandingPage({ projects }: LandingPageProps): React.ReactElement {
  const shouldReduceMotion = useReducedMotion();

  const activeContainerVariants = shouldReduceMotion ? reducedMotionVariants : containerVariants;
  const activeItemVariants = shouldReduceMotion ? reducedMotionVariants : itemVariants;
  const activeAvatarVariants = shouldReduceMotion ? reducedMotionVariants : avatarVariants;

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#050505]">
      <motion.main
        className="flex min-h-dvh w-full max-w-[430px] flex-col gap-8 px-6 py-12"
        variants={activeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>

        <div id="main-content" className="flex flex-1 flex-col gap-8">
          {/* Hero Section */}
          <motion.section
            className="flex flex-col items-center gap-4 text-center"
            variants={activeItemVariants}
          >
            {/* Avatar with Glow - Step 1 */}
            <motion.div variants={activeAvatarVariants}>
              <AnimatedAvatar reduceMotion={shouldReduceMotion ?? false} />
            </motion.div>

            {/* Identity - Step 2 */}
            <motion.div className="flex flex-col gap-1" variants={activeItemVariants}>
              <h1 className="text-2xl font-bold text-white">Dinesh</h1>
              <p className="text-sm text-gray-400">I make computers do fun and useful things.</p>
            </motion.div>

            {/* Status */}
            <motion.div variants={activeItemVariants}>
              <StatusIndicator statusText="Online • Working on PassFX" />
            </motion.div>
          </motion.section>

          {/* Primary CTA - Step 3 */}
          <motion.div variants={activeItemVariants}>
            <AnimatedCTA
              href="/contact"
              label="ping me"
              reduceMotion={shouldReduceMotion ?? false}
            />
          </motion.div>

          {/* Project Cards - Step 4 */}
          <section className="flex flex-col gap-4" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              Featured Projects
            </h2>

            {projects.map((project) => (
              <motion.div key={project.title} variants={activeItemVariants}>
                <AnimatedProjectCard {...project} reduceMotion={shouldReduceMotion ?? false} />
              </motion.div>
            ))}
          </section>
        </div>

        {/* Social Grid - Step 5 */}
        <motion.footer className="mt-auto" variants={activeItemVariants}>
          <AnimatedSocialGrid reduceMotion={shouldReduceMotion ?? false} />
        </motion.footer>
      </motion.main>
    </div>
  );
}
