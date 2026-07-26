import type { FC } from 'react';
import styles from './SectionHeader.module.css';

type Props = {
  title: string;
  index: number;
  total: number;
};

export const SectionHeader: FC<Props> = ({ title, index, total }) => {
  const idx = String(index).padStart(2, '0');
  const tot = String(total).padStart(2, '0');

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>
        <span className={styles.hash}>##</span> {title}
      </h2>
      <span className={styles.counter}>
        {idx} / {tot}
      </span>
    </div>
  );
};
