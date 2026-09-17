import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';
import styles from './Hero.module.css';

/* Both the hero and /experience render this heading, and both used to hardcode
   it — they were written in separate commits and drifted apart ("Frontend
   Engineer" here, "Senior Frontend Engineer" there). profile is the one source
   of truth; the structured data and the CV already agreed with it. */
const HERO_NAME = profile.name;
const HERO_ROLE = profile.title;

export function Hero() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lines = [nameRef.current, roleRef.current].filter(
      (el): el is HTMLSpanElement => el !== null,
    );
    const hero = heroRef.current;
    if (lines.length === 0 || !hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let onTimer = 0;
    let offTimer = 0;
    let running = false;
    let introPending = true;

    /*
     * The ghost copies are position:absolute inside the .glitch span, so
     * `width: 100%` only resolves correctly while that span occupies a single
     * line fragment. The title is split into two short lines that fit at every
     * width we support, but a stray wrap would spill the copies over the
     * paragraphs below — so each line is still checked before it fires.
     */
    const fitsOneLine = (line: HTMLSpanElement) => {
      const glitch = line.querySelector('[data-text]');
      if (!glitch) return false;
      /*
       * Measured by height, not by getClientRects().length: .glitch is
       * inline-block, and an inline-block always reports exactly one rect no
       * matter how many lines the text inside it wraps to. The rect count only
       * worked back when the span was display:inline.
       */
      const lineHeight = parseFloat(getComputedStyle(glitch).lineHeight);
      return glitch.getBoundingClientRect().height < lineHeight * 1.5;
    };

    const burst = () => {
      // re-checked per burst, so resizing across the wrap point is handled
      const ready = lines.filter(fitsOneLine);
      if (ready.length === 0) {
        schedule();
        return;
      }
      // both lines burst on the same frame — one signal fault, not two
      ready.forEach((line) => line.setAttribute('data-on', '1'));
      offTimer = window.setTimeout(() => {
        ready.forEach((line) => line.removeAttribute('data-on'));
        schedule();
      }, 500); // must outlast the 0.45s animation so the final frame holds
    };

    /*
     * 4–8s apart, and the first one lands ~1.2s after the hero appears. At the
     * old 8–15s a visitor who stayed ten seconds could easily never see the
     * effect at all — the burst itself is only 0.45s long.
     */
    const schedule = (delay = 4000 + Math.random() * 4000) => {
      onTimer = window.setTimeout(burst, delay);
    };

    const stop = () => {
      window.clearTimeout(onTimer);
      window.clearTimeout(offTimer);
      lines.forEach((line) => line.removeAttribute('data-on'));
    };

    // only glitch while the hero is actually on screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          // long enough for the fonts to settle, short enough to still read as
          // part of the page arriving rather than a random later twitch
          schedule(introPending ? 1200 : undefined);
          introPending = false;
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

  return (
    <section id="hero" ref={heroRef} className={styles.hero}>
      <div className="container">
        {/* aria-label, not aria-hidden: the ghost copies are ::before/::after
            pseudo-elements carrying `content: attr(data-text)`, which aria-hidden
            cannot target. An explicit label overrides name-from-content, so the
            title is announced once instead of three times. */}
        <h1 className={styles.title} aria-label={`${HERO_NAME} — ${HERO_ROLE}`}>
          <span ref={nameRef} className={styles.line}>
            <span className={styles.glitch} data-text={HERO_NAME}>
              {HERO_NAME}
            </span>
          </span>
          <span ref={roleRef} className={styles.line}>
            <span className={styles.glitch} data-text={HERO_ROLE}>
              {HERO_ROLE}
            </span>
            <span className={styles.cursor} aria-hidden="true">
              ▍
            </span>
          </span>
        </h1>

        <p className={styles.pitch}>
          I build web products end-to-end — from landing pages to full apps with auth, payments
          and AI.
        </p>
        <p className={styles.pitch}>
          8+ years in product teams — Wallarm, Samsung, Uchi.ru. Now taking on freelance work —
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
