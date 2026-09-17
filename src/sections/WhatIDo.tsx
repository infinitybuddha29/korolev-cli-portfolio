import { SectionHeader } from '@/shared/SectionHeader';
import styles from './WhatIDo.module.css';

/*
 * Capabilities, not a service menu. Each entry used to carry a delivery window
 * ("from 5 days") or a rate structure ("hourly / monthly"), which turned the
 * section into a price list — fine for a client, wrong for anyone reading this
 * as a CV.
 */
const services = [
  {
    title: 'Web products, end-to-end',
    desc: 'An app with auth, payments, admin panel and a database — from empty repo to production and a domain that works.',
  },
  {
    title: 'Landing pages that convert',
    desc: 'Fast, SEO-ready, mobile-first, with analytics wired up properly — GTM, Metrika, Amplitude, conversion goals.',
  },
  {
    title: 'AI integrations',
    desc: "Chat interfaces with streaming, model APIs, rate limits, usage credits and billing. I've shipped this exact stack for my own product.",
  },
  {
    title: 'Frontend on your team',
    desc: "Dropping into an existing codebase: React and TypeScript, framework migrations, design systems, tests. This is what I've done for 8+ years.",
  },
];

export const WhatIDo = () => (
  <section id="services" className={styles.services}>
    <div className="container">
      <SectionHeader title="what i do" index={2} total={3} />
      <ul className={styles.list}>
        {services.map((s) => (
          <li key={s.title} className={styles.item}>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        Not on the list? Ask anyway — if it&apos;s React and it ships to the web, I&apos;ve
        probably done it.
      </p>
    </div>
  </section>
);
