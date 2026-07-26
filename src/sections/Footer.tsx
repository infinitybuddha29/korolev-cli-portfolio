import s from './Footer.module.css';

export const Footer: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  return (
    <div className={s.footer}>
      <span>~/{activeSection}.md</span> <span>Ln 42, Col 8 · UTF-8 · TypeScript</span>
    </div>
  );
};
