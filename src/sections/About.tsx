import { SectionHeader } from '@/shared/SectionHeader';
import { profile, skills } from '@/data/profile';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.about}>
      <div className="container">
        <SectionHeader title="about" index={1} total={4} />
        <p className={styles.text}>{profile.about}</p>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill} className={styles.tag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
