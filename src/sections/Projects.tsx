import { SectionHeader } from '@/shared/SectionHeader';
import styles from './Projects.module.css';
import { projects } from '@/data/profile';

export const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeader title="projects" index={2} total={3} />
        <div className={styles.list}>
          {projects.map((item, index) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.heading}>
                <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
                <h3 id={index === 0 ? 'projects-heading' : undefined} className={styles.title}>
                  {item.name}
                </h3>
              </div>
              <p className={styles.desc}>{item.description}</p>
              <p className={styles.stack}>
                {item.stack.map((tech) => tech.toLowerCase()).join(' · ')}
              </p>
              <div className={styles.links}>
                {item.demo && (
                  <a href={item.demo} target="_blank" rel="noreferrer" className={styles.link}>
                    Demo →
                  </a>
                )}
                <a href={item.code} target="_blank" rel="noreferrer" className={styles.link}>
                  Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
