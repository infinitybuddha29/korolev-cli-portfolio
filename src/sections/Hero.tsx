import { profile } from '@/data/profile';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <p className={styles.location}>
          {profile.name} / {profile.location}
        </p>

        <p className={styles.title}>
          {profile.title}
          <span className={styles.cursor} aria-hidden="true">
            ▍
          </span>
        </p>

        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.links}>
          <a href="/cv.pdf" download className={styles.btnPrimary}>
            Download CV
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGhost}
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGhost}
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className={styles.btnGhost}>
            Email
          </a>
          <a
            href={profile.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGhost}
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
