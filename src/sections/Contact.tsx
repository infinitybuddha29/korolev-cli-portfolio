import { profile } from '@/data/profile';
import styles from './Contact.module.css';

export const Contact = () => (
  <section id="contact" className={styles.contact}>
    <div className="container">
      <h2 className={styles.title}>Get in touch</h2>
      <p className={styles.lead}>
        Roles, projects or a question about something above — write in a couple of sentences and
        I&apos;ll come back within a day.
      </p>
      <div className={styles.actions}>
        <a
          className={styles.btnPrimary}
          href={profile.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Write on Telegram →
        </a>
        <a className={styles.btnGhost} href={`mailto:${profile.email}`}>
          Email
        </a>
      </div>
      <p className={styles.socials}>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <span> · </span>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </p>
      <p className={styles.copy}>© 2026 Ruslan Korolev · set in Inter &amp; JetBrains Mono</p>
    </div>
  </section>
);
