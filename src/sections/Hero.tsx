import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';
import styles from './Hero.module.css';

export function Hero() {
  const glitchRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = glitchRef.current;
    const hero = heroRef.current;
    if (!el || !hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let onTimer = 0;
    let offTimer = 0;
    let running = false;

    /*
     * The ghost copies are position:absolute inside a display:inline .glitch.
     * Once the title wraps, `width: 100%` resolves against the last line
     * fragment only, so the copies render as a narrow column of text spilling
     * over the paragraphs below. Single-line titles are the only case the
     * effect is built for — skip it entirely otherwise.
     */
    const fitsOneLine = () => el.getClientRects().length === 1;

    const schedule = () => {
      const delay = 8000 + Math.random() * 7000; // rare: 8–15s between bursts
      onTimer = window.setTimeout(() => {
        // re-checked per burst, so resizing across the wrap point is handled
        if (!fitsOneLine()) {
          schedule();
          return;
        }
        el.setAttribute('data-on', '1');
        offTimer = window.setTimeout(() => {
          el.removeAttribute('data-on');
          schedule();
        }, 600); // must outlast the 0.55s animation so the snap-back frame plays
      }, delay);
    };

    const stop = () => {
      window.clearTimeout(onTimer);
      window.clearTimeout(offTimer);
      el.removeAttribute('data-on');
    };

    // only glitch while the hero is actually on screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          schedule();
        } else if (!entry.isIntersecting && running) {
          running = false;
          stop();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(hero);

    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  const heroTitle = 'Ruslan Korolev — Frontend Engineer';

  return (
    <section id="hero" ref={heroRef} className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          <span ref={glitchRef} className={styles.glitch} data-text={heroTitle}>
            {heroTitle}
          </span>
          <span className={styles.cursor} aria-hidden="true">
            ▍
          </span>
        </h1>

        <p className={styles.pitch}>
          I build web products end-to-end — from landing pages to full apps with auth, payments
          and AI.
        </p>
        <p className={styles.pitch}>
          8 years in product teams — Wallarm, Samsung, Uchi.ru. Now taking on freelance work —
          one-off builds or ongoing.
        </p>

        <div className={styles.links}>
          <a
            href={profile.telegramProject}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Start a project →
          </a>
          <a href="/experience/" className={styles.btnGhost}>
            See my experience
          </a>
        </div>

        <p className={styles.location}>Remote · UTC+3 · English / Russian</p>
      </div>
    </section>
  );
}
