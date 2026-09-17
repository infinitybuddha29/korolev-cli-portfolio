import { experience, skills, profile } from '@/data/profile';
import { SectionHeader } from '@/shared/SectionHeader';
import { Footer } from '@/sections/Footer';
import { useActiveSection } from '@/hooks/useActiveSection';
import styles from './Experience.module.css';

export const Experience = () => {
  const section = useActiveSection();

  return (
    <>
      <main className="main">
        <div className="container">
          <a className={styles.back} href="/">
            ← back
          </a>

          {/* Two explicit lines, same as the hero. As one flat string it wrapped
              wherever it ran out of room — currently mid-role, "— Senior /
              Frontend Engineer". aria-label keeps the announced name matching
              the <title> tag. */}
          <h1 className={styles.title} aria-label={`${profile.name} — ${profile.title}`}>
            <span className={styles.titleLine}>{profile.name}</span>
            <span className={styles.titleLine}>{profile.title}</span>
          </h1>
          <p className={styles.lead}>
            8+ years building data-heavy dashboards, complex forms and design systems for product
            teams in security, foodtech, edtech and fintech.
          </p>
          <div className={styles.cvRow}>
            <a className={styles.cv} href="/cv-en.pdf" download>
              Download CV — English
            </a>
            <a className={styles.cv} href="/cv-ru.pdf" download>
              Резюме — Русский
            </a>
          </div>

          <section id="experience" className={styles.section}>
            <SectionHeader title="experience" index={1} total={2} />
            <ol className={styles.timeline}>
              {experience.map((job) => (
                <li key={job.company} className={styles.job}>
                  <div className={styles.jobHead}>
                    <h2 className={styles.company}>{job.company}</h2>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                  <p className={styles.role}>
                    {job.role} · {job.location}
                  </p>
                  <ul className={styles.bullets}>
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section id="stack" className={styles.section}>
            <SectionHeader title="stack" index={2} total={2} />
            <p className={styles.stack}>{skills.map((s) => s.toLowerCase()).join(' · ')}</p>
          </section>

          <section id="contact" className={styles.section}>
            <h2 className={styles.contactTitle}>Contact</h2>
            <div className={styles.actions}>
              <a
                className={styles.btnPrimary}
                href={profile.telegramProject}
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
          </section>
        </div>
      </main>
      <Footer activeSection={section} />
    </>
  );
};
