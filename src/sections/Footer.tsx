import { useEffect, useState } from 'react';
import s from './Footer.module.css';

export const Footer: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' ? (document.documentElement.dataset.theme ?? 'dark') : 'dark',
  );

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // clamp: rubber-band scrolling on iOS/macOS pushes scrollY past both ends
      const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    // storage can throw (private mode, blocked cookies) — the toggle itself
    // must keep working even when the choice can't be persisted
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* not persisted */
    }
    setTheme(next);
  };

  const file = activeSection === 'hero' ? 'index' : activeSection;

  return (
    <div className={s.footer}>
      <a className={s.file} href={`#${activeSection}`}>
        ~/{file}.md
      </a>
      <div className={s.right}>
        <span className={s.meta}>{progress}% · UTF-8 · TypeScript</span>
        <button
          type="button"
          className={s.theme}
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? '☾' : '☀'}
        </button>
      </div>
    </div>
  );
};
