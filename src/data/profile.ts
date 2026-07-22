export const profile = {
  name: 'Ruslan Korolev',
  title: 'Senior Frontend Engineer — React / TypeScript',
  tagline:
    '8+ years building data-heavy dashboards, complex forms and internal tools for product teams in security, edtech and fintech.',
  location: 'Remote · Open to Relocate',
  email: 'ruslan.korolev29@gmail.com',
  telegram: 'https://t.me/infinitybuddha',
  github: 'https://github.com/ruslankorolev',
  linkedin: 'https://linkedin.com/in/ruslan-korolev',
  about: `Senior Frontend Engineer with 8+ years shipping product web apps end-to-end — from UX design sessions with PMs and designers through release, testing and support. I've worked on CRMs, dashboards and internal tools in cybersecurity, edtech and fintech, including products with tens of thousands of concurrent users. I own features fully: not just implementing specs but shaping solutions, designing APIs and setting quality standards. I write structured, readable, maintainable code and turn shifting requirements into working product decisions.`,
} as const

export const experience = [
  {
    company: 'Wallarm',
    location: 'US · Cybersecurity',
    role: 'Senior Frontend Engineer',
    period: '2023–2026',
    bullets: [
      'Owned the registration landing page end-to-end — primary acquisition channel for new users',
      'Led React 18 → 19 migration across UI components, forms and charts; shipped to production with zero regressions',
      'Built and maintained an embeddable registration widget (Wallarm AASM) independently, including all production releases',
      'Set up end-to-end analytics pipeline: UTM → GTM → HubSpot → Amplitude — gave marketing full traffic source visibility',
      'Built data-heavy dashboards and complex configuration forms with Zod validation and interdependent state',
      'Migrated build tooling from Webpack to Rsbuild — local build time dropped from 12s to 4s',
      'Wrote and maintained Jest + Playwright tests for critical user flows, reducing regression bugs in releases',
    ],
  },
  {
    company: 'Whisk (Samsung)',
    location: 'Foodtech',
    role: 'Senior Frontend Engineer',
    period: '2022–2023',
    bullets: [
      'Built CRM features for end users in React, TypeScript and RxJS; co-designed REST API contracts with backend',
      'Migrated components from a legacy Angular codebase to React + TypeScript with no disruption to ongoing feature work',
      'Shaped UX flows collaboratively with the product team and reduced production bug count through systematic code review',
    ],
  },
  {
    company: 'Uchi.ru',
    location: 'Edtech',
    role: 'Frontend Engineer',
    period: '2019–2022',
    bullets: [
      'Extracted the user account from a Rails monolith into a standalone React SPA — unlocked daily independent releases',
      "Developed and scaled the personal account for one of Russia's largest edtech platforms (tens of thousands of concurrent users at peak)",
      'Built a shared internal React UI library that accelerated feature development across teams',
      'Introduced Sentry — cut time-to-detect frontend errors from user reports to real-time monitoring',
      'Mentored a junior engineer from zero React knowledge to shipping features independently',
    ],
  },
  {
    company: 'White Sky Digital',
    location: 'Fintech',
    role: 'Frontend Engineer',
    period: '2017–2019',
    bullets: [
      'Built a dynamic form engine for bank client onboarding — form structure assembled from JSON schema based on client type',
      'Developed a landing page constructor on React + Node.js that let the marketing team build pages without engineering involvement',
      'Contributed to a shared UI library used across multiple products; set up and maintained Webpack build pipeline',
    ],
  },
] as const

export const projects = [
  {
    name: 'Dashboard showcase',
    description:
      'Data-heavy dashboard with advanced filtering, Recharts visualizations and Zod-validated forms. E2E covered with Playwright.',
    stack: ['React', 'TypeScript', 'Recharts', 'Zod', 'Playwright'],
    demo: null as string | null,
    code: 'https://github.com/ruslankorolev',
  },
  {
    name: 'This site',
    description: 'Hand-coded. No AI, no design systems. Yes, really.',
    stack: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    demo: null as string | null,
    code: 'https://github.com/ruslankorolev/korolev-cli-portfolio',
  },
] as const

export const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Redux',
  'RxJS',
  'Zod',
  'Recharts',
  'CSS Modules',
  'Jest',
  'Playwright',
  'Storybook',
  'Webpack',
  'Rsbuild',
  'Sentry',
  'Figma',
] as const
