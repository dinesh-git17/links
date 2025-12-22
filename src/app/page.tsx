import { HeroSection } from '@/components/HeroSection';
import { PrimaryCTA } from '@/components/PrimaryCTA';
import { ProjectCard } from '@/components/ProjectCard';
import { SocialGrid } from '@/components/SocialGrid';

export default function Home(): React.ReactElement {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#050505]">
      <main className="flex min-h-dvh w-full max-w-[430px] flex-col gap-8 px-6 py-12">
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>

        <div id="main-content" className="flex flex-1 flex-col gap-8">
          {/* Hero Section - LINKS-102 */}
          <HeroSection />

          {/* Primary CTA - LINKS-103 */}
          <PrimaryCTA href="/resume" label="Resume / Contact" />

          {/* Project Cards - LINKS-103 */}
          <section className="flex flex-col gap-4" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              Featured Projects
            </h2>

            <ProjectCard
              title="PassFX"
              description="Terminal-based password manager"
              href="https://github.com/dinesh/passfx"
              icon={<span aria-hidden="true">{'>_'}</span>}
              badges={['Python', 'Textual']}
              glowColor="blue"
            />

            <ProjectCard
              title="Debate Lab"
              description="LLM-powered debate training platform"
              href="https://github.com/dinesh/debate-lab"
              icon={
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              }
              badges={['Next.js', 'GPT-4']}
              glowColor="green"
            />
          </section>
        </div>

        {/* Social Grid - LINKS-104 */}
        <footer className="mt-auto">
          <SocialGrid />
        </footer>
      </main>
    </div>
  );
}
