import { SectionHeader } from '@/shared/SectionHeader';
import { profile } from '@/data/profile';
import styles from './Contact.module.css';

const links = [
  { label: 'email', href: `mailto:${profile.email}`, display: profile.email },
  { label: 'telegram', href: profile.telegram, display: '@infinitybuddha' },
  { label: 'github', href: profile.github, display: 'github.com/ruslankorolev' },
  { label: 'linkedin', href: profile.linkedin, display: 'in/ruslan-korolev' },
];

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <SectionHeader title="contact" index={3} total={3} />
        <dl className={styles.list}>
          {links.map(({ label, href, display }) => (
            <div key={label} className={styles.row}>
              <dt className={styles.label}>{label}</dt>
              <dd className={styles.value}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {display}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <p className={styles.copy}>© 2026 Ruslan Korolev · set in Inter & JetBrains Mono</p>
      </div>
    </section>
  );
}
