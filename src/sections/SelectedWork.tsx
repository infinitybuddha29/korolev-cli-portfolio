import { SectionHeader } from '@/shared/SectionHeader';
import { projects } from '@/data/profile';
import styles from './SelectedWork.module.css';

export const SelectedWork = () => {
  return (
    <section id="work" className={styles.work}>
      <div className="container">
        <SectionHeader title="selected work" index={1} total={3} />
        <p className={styles.intro}>
          Most of my production work lives behind NDAs at Wallarm, Samsung and Uchi.ru. These are
          the ones I can show.
        </p>
        {/* Text-only cards: screenshots aren't ready, and an empty 16:10 box reads
            as a broken image. The `preview` paths stay in profile.ts — when real
            previews exist, add an <img> here and widen the container back to 960px. */}
        <div className={styles.list}>
          {projects.map((p) => (
            <article key={p.name} className={styles.card}>
              <h3 className={styles.title}>
                {p.name}
                {p.tagline && <span className={styles.tagline}> — {p.tagline}</span>}
              </h3>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.foot}>
                <p className={styles.stack}>{p.stack.map((t) => t.toLowerCase()).join(' · ')}</p>
                <div className={styles.links}>
                  {p.live && (
                    <a
                      className={styles.live}
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live →
                    </a>
                  )}
                  {p.code && (
                    <a
                      className={styles.code}
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
