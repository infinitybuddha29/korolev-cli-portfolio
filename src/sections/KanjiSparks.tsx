import { useEffect, useRef } from 'react';
import styles from './KanjiSparks.module.css';

const KANJI = ['語', '火', '水', '木', '金', '土', '日', '月', '風', '空', '夢', '光', '年'];

export const KanjiSparks = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // logical (CSS-pixel) viewport size — coordinates live in this space,
    // the ctx transform handles the device-pixel scaling underneath.
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // The accent differs per theme (dark #00c896 / light #007d5e). Cache it and
    // refresh on toggle — reading the computed style per frame would force a
    // style recalc on every animation frame.
    const root = document.documentElement;
    let accent = getComputedStyle(root).getPropertyValue('--color-accent').trim();
    const themeObserver = new MutationObserver(() => {
      accent = getComputedStyle(root).getPropertyValue('--color-accent').trim();
    });
    themeObserver.observe(root, { attributeFilter: ['data-theme'] });

    const CONTENT_W = 720; // matches --max-width: the centred content column
    // On desktop keep sparks in the side gutters only (never over content); on
    // narrow viewports the gutters vanish, so spawn full width behind the text.
    const randomX = () => {
      const margin = (w - CONTENT_W) / 2;
      if (margin < 100) return Math.random() * w;
      const gutter = margin - 60; // buffer so glyph width + sway stay clear
      return Math.random() < 0.5 ? Math.random() * gutter : w - Math.random() * gutter;
    };
    // document-space y (current scroll + a spot in the visible band) so sparks
    // stay anchored to the page, not the viewport, as it scrolls
    const randomY = () => Math.floor(window.scrollY + Math.random() * (h - 48) + 24);
    const randomChar = () => KANJI[Math.floor(Math.random() * KANJI.length)];

    // Each spark glitches quietly into view and fades out — dim, varied size
    // for depth, RGB-split fringe on the birth/death edges. Static; subtle.
    const makeSpark = (initialDelay = true) => ({
      x: randomX(),
      y: randomY(),
      char: randomChar(),
      size: 15 + Math.floor(Math.random() * 13), // 15–27px
      ttl: Math.floor(120 + Math.random() * 140), // ~2–4s: appear, hold, fade
      life: 0,
      delay: initialDelay ? Math.floor(Math.random() * 220) : Math.floor(Math.random() * 180),
    });

    const sparks = Array.from({ length: 4 }, () => makeSpark());

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const scrollY = window.scrollY; // anchor sparks to the page, not the viewport
      for (const spark of sparks) {
        if (spark.delay > 0) {
          spark.delay--;
          continue;
        }

        const screenY = spark.y - scrollY;
        // scrolled out of view → respawn into the current viewport band
        if (screenY < -40 || screenY > h + 40) {
          Object.assign(spark, makeSpark(false));
          continue;
        }

        const p = spark.life / spark.ttl;
        // triangle fade in/out; dim, and fainter when small (far)
        const fade = p < 0.5 ? p * 2 : (1 - p) * 2;
        ctx.globalAlpha = fade * 0.15 * (spark.size / 27); // very quiet, barely-there
        ctx.font = `${spark.size}px JetBrains MonoVariable`;

        // RGB-split glitch fringe on the birth/death edges
        if (p < 0.15 || p > 0.85) {
          ctx.fillStyle = 'rgba(255, 0, 80, 0.8)';
          ctx.fillText(spark.char, spark.x - 3, screenY);
          ctx.fillStyle = 'rgba(0, 180, 255, 0.8)';
          ctx.fillText(spark.char, spark.x + 3, screenY);
        }

        ctx.fillStyle = accent;
        ctx.fillText(spark.char, spark.x, screenY);

        spark.life++;
        if (spark.life > spark.ttl) {
          Object.assign(spark, makeSpark(false));
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas id="kanji_sparks" className={styles.kanji} ref={ref} aria-hidden="true"></canvas>;
};
