export const profile = {
  name: 'Ruslan Korolev',
  title: 'Senior Frontend Engineer',
  tagline:
    '8+ years building data-heavy dashboards, complex forms and internal tools for product teams in security, edtech and fintech.',
  location: 'Remote · UTC +3 · Open to Relocate',
  email: 'ruslan.korolev29@gmail.com',
  telegram: 'https://t.me/infinitybuddha',
  github: 'https://github.com/infinitybuddha29',
  linkedin: 'https://linkedin.com/in/ruslan-korolev-frontend',
  about: `8+ years building data-heavy dashboards, complex forms and design systems for US and international product teams`,
} as const;

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
] as const;

export const projects = [
  {
    name: 'Telegram sticker converter',
    description:
      'Convert animated WebP/GIF/MP4 to Telegram-ready VP9 WebM stickers (≤256KB, ≤3s, 512px)',
    stack: ['React', 'TypeScript', 'Node.js', 'Claude AI'],
    demo: null as string | null,
    code: 'https://github.com/infinitybuddha29/telegram-sticker-converter',
  },
  {
    name: 'This site',
    description: 'Hand-coded. No AI, no design systems. Yes, really.',
    stack: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    demo: null as string | null,
    code: 'https://github.com/infinitybuddha29/korolev-cli-portfolioo',
  },
] as const;

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
] as const;
