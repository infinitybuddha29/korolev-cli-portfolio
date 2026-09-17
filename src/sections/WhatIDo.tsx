import { SectionHeader } from '@/shared/SectionHeader';
import styles from './WhatIDo.module.css';

const services = [
  {
    title: 'Web products, end-to-end',
    desc: 'An app with auth, payments, admin panel and a database — from empty repo to production and a domain that works.',
    meta: 'from 2 weeks',
  },
  {
    title: 'Landing pages that convert',
    desc: 'Fast, SEO-ready, mobile-first, with analytics wired up properly — GTM, Metrika, Amplitude, conversion goals.',
    meta: 'from 5 days',
  },
  {
    title: 'AI integrations',
    desc: "Chat interfaces with streaming, model APIs, rate limits, usage credits and billing. I've shipped this exact stack for my own product.",
    meta: 'from 1 week',
  },
  {
    title: 'Frontend on your team',
    desc: "Dropping into an existing codebase: React and TypeScript, framework migrations, design systems, tests. This is what I've done for 8 years.",
    meta: 'hourly / monthly',
  },
];

export const WhatIDo = () => (
  <section id="services" className={styles.services}>
    <div className="container">
      <SectionHeader title="what i do" index={2} total={3} />
      <ul className={styles.list}>
        {services.map((s) => (
          <li key={s.title} className={styles.item}>
            <div className={styles.head}>
              <h3 className={styles.title}>{s.title}</h3>
              <span className={styles.meta}>{s.meta}</span>
            </div>
            <p className={styles.desc}>{s.desc}</p>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        Not on the list? Ask anyway — if it's React and it ships to the web, it's in scope.
      </p>
    </div>
  </section>
);
