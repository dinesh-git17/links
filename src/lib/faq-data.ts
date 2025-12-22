export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'what-is-this',
    question: 'What is this site?',
    answer:
      'This is my personal links hub and portfolio entry point. It is where I share the projects I am actively building, experimenting with, and shipping.',
  },
  {
    id: 'just-links',
    question: 'Is this just a links page?',
    answer:
      'Technically yes. Practically no. It is a small, intentional product that reflects how I design, structure, and ship software.',
  },
  {
    id: 'intentional',
    question: 'Why does everything look so intentional?',
    answer:
      'Because I treat even small projects like real products. Details matter, especially when nobody is forcing you to care about them.',
  },
  {
    id: 'real-projects',
    question: 'Are these projects real or just demos?',
    answer:
      'They are real projects. Some are actively used, some are evolving, and some exist because I wanted to explore a problem deeply and properly.',
  },
  {
    id: 'source-code',
    question: 'Can I see the source code?',
    answer:
      'Yes. Most projects here are open source and linked directly to their repositories. If something is not public, it is either private by design or not ready yet.',
  },
  {
    id: 'first-project',
    question: 'Which project should I look at first?',
    answer:
      'If you like developer tools, start with PassFX. If you like modern web and AI systems, start with Debate Lab.',
  },
  {
    id: 'tech-stack',
    question: 'What tech stack do you usually work with?',
    answer:
      'I choose tools based on the problem, not trends. Most commonly TypeScript, Python, Next.js, databases, CI pipelines, and systems that scale without drama.',
  },
  {
    id: 'frontend-backend',
    question: 'Frontend or backend?',
    answer:
      'Both. I care about systems that make sense end to end, from data models to user experience.',
  },
  {
    id: 'performance-security',
    question: 'Do you care about performance and security?',
    answer:
      'Very much. I prefer boring, proven approaches that work reliably over clever shortcuts.',
  },
  {
    id: 'open-to-work',
    question: 'Are you open to full time roles or freelance work?',
    answer:
      'Yes, selectively. I am interested in meaningful problems, good teams, and clear expectations.',
  },
  {
    id: 'contact',
    question: 'What is the best way to reach you?',
    answer: 'Email is best. If it is interesting, I will read it.',
  },
  {
    id: 'dark-mode',
    question: 'Why dark mode by default?',
    answer:
      'It is easier on the eyes and easier to focus. Light mode exists for people who prefer it.',
  },
  {
    id: 'over-engineered',
    question: 'Is this site over engineered?',
    answer:
      'Possibly. But it is well documented, intentional, and enjoyable to build, which is kind of the point.',
  },
  {
    id: 'read-emails',
    question: 'Do you actually read the emails you get?',
    answer: 'Yes. I may not reply instantly, but I read everything.',
  },
];
