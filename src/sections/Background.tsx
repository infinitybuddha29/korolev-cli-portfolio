import { SectionHeader } from '@/shared/SectionHeader';
import styles from './Background.module.css';

// Text wordmarks for now — drop real grayscale SVGs into public/logos/ and
// swap these for <img> when available (Samsung/Wallarm/Uchi are recognisable).
const companies = ['Wallarm', 'Samsung', 'Uchi.ru', 'White Sky Digital'];

export const Background = () => (
  <section id="background" className={styles.background}>
    <div className="container">
      <SectionHeader title="where i've worked" index={3} total={3} />
      <p className={styles.lead}>
        8 years · 4 product teams · products used by hundreds of thousands of people.
      </p>
      <p className={styles.desc}>
        I don't just implement tickets — I work with product and design on what gets built, and I
        own what I ship all the way to production.
      </p>
      <ul className={styles.logos}>
        {companies.map((name) => (
          <li key={name} className={styles.wordmark}>
            {name}
          </li>
        ))}
      </ul>
      <a className={styles.link} href="/experience/">
        Full experience and CV →
      </a>
    </div>
  </section>
);
