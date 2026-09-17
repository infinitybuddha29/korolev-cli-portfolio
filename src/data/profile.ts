export const profile = {
  name: 'Ruslan Korolev',
  title: 'Senior Frontend Engineer',
  tagline:
    '8+ years building data-heavy dashboards, complex forms and internal tools for product teams in security, edtech and fintech.',
  location: 'Remote · UTC +3 · Open to Relocate',
  email: 'ruslan.korolev29@gmail.com',
  telegram: 'https://t.me/infinitybuddha',
  // Telegram deep-link pre-filled with a project intro — primary freelance CTA
  telegramProject: 'https://t.me/infinitybuddha?text=Hi%20Ruslan%2C%20I%20have%20a%20project%3A%20',
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
      'Built a multi-page product section from scratch and owned the registration landing page end-to-end — primary acquisition channel for new users',
      'Led React 18 → 19 migration across UI components, forms and charts; shipped to production with zero regressions',
      'Built and maintained an embeddable registration widget (Wallarm AASM) independently, including all production releases',
      'Set up end-to-end analytics pipeline: UTM → GTM → HubSpot → Amplitude — gave marketing full traffic source visibility',
      'Redesigned the documentation portal; built data-heavy dashboards and complex configuration forms with Zod validation and interdependent state',
      'Worked through user scenarios, proposed simplifications and influenced product decisions',
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
      'Extracted the user dashboard from a Rails monolith into a standalone React SPA — unlocked daily independent releases',
      "Developed and scaled the user dashboard for one of Russia's largest edtech platforms (tens of thousands of concurrent users at peak)",
      'Built a shared internal React UI library that accelerated feature development across teams',
      'Optimised frontend performance — improved load times and interface responsiveness for end users',
      'Introduced Sentry — cut time-to-detect frontend errors from user reports to real-time monitoring',
      'Took part in REST API design with backend engineers and ran regular code reviews',
      'Mentored a junior engineer from zero React knowledge to shipping features independently',
    ],
  },
  {
    company: 'White Sky Digital',
    location: 'Fintech',
    role: 'Frontend Engineer',
    period: '2017–2019',
    bullets: [
      'Built a dynamic form engine for bank client onboarding with the team — form structure assembled from JSON schema based on client type',
      "Implemented a multi-step wizard with validation and autosave that moved the bank's client onboarding process online",
      'Developed a landing page constructor on React + Node.js that let the marketing team build pages without engineering involvement',
      'Developed and documented reusable components for a shared UI library used across several products',
      'Set up and maintained the Webpack build pipeline, keeping releases predictable',
      'Worked through implementation details with designers and backend engineers at the design stage',
    ],
  },
  {
    company: 'Zebra Group',
    location: 'Digital agency',
    role: 'JavaScript Engineer',
    period: '2017',
    bullets: [
      "Built a website constructor for producing companies' annual financial reports",
      'Developed SVG charts and graphics animation',
      'Delivered cross-browser markup and component styling in HTML5 and CSS',
      'Wrote component documentation and tests; improved interface accessibility and semantics',
    ],
  },
] as const;

export const projects = [
  {
    name: 'gpt-56.ru',
    tagline: 'AI chat product' as string | null,
    description:
      'A Russian-language AI chat: free limited chat, Telegram login, credit balance and card payments. Built, shipped and operated solo — including 100+ programmatic SEO pages and the VPS it runs on.',
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Postgres', 'YooKassa', 'PM2'],
    live: 'https://gpt-56.ru' as string | null,
    code: null as string | null,
    preview: '/work/gpt56.webp',
  },
  {
    name: 'Telegram sticker converter',
    tagline: null as string | null,
    description:
      "Turns animated WebP, GIF and MP4 into Telegram-ready VP9 WebM stickers that fit the platform's limits: under 256 KB, under 3 seconds, 512 px.",
    stack: [
      'Next.js 16',
      'TypeScript',
      'Node.js (worker)',
      'BullMQ + Redis',
      'ffmpeg / VP9',
      'sharp',
    ],
    live: 'https://stickerbake.com' as string | null,
    code: 'https://github.com/infinitybuddha29/telegram-sticker-converter' as string | null,
    preview: '/work/telegram-stickers.webp',
  },
  {
    name: 'This site',
    tagline: null as string | null,
    description:
      "The site you're reading — a fast, accessible portfolio built with React, TypeScript and Vite. Two themes, full keyboard navigation, Lighthouse 100.",
    stack: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    live: null as string | null,
    code: 'https://github.com/infinitybuddha29/korolev-cli-portfolio' as string | null,
    preview: '/work/this-site.webp',
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
  'Node.js',
  'CSS Modules',
  'Jest',
  'Playwright',
  'Storybook',
  'Webpack',
  'Rsbuild',
  'Sentry',
  'Google Tag Manager',
  'Amplitude',
  'Figma',
] as const;
