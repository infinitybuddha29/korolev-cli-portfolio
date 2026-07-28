import { useEffect, useRef } from 'react';
import styles from './KanjiSparks.module.css';

const KANJI = ['語', '火', '水', '木', '金', '土', '日', '月', '風', '空', '夢', '光', '年'];

export const KanjiSparks = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const margin = (canvas.width - 720) / 2;
        const randomX = () =>
          Math.random() < 0.5
            ? Math.floor(Math.random() * margin)
            : Math.floor(canvas.width - Math.random() * margin);
        const randomY = () => Math.floor(canvas.height * Math.random() + 24);
        const randomChar = () => KANJI[Math.floor(Math.random() * KANJI.length)];
        function makeSpark(initialDelay = true) {
          return {
            x: randomX(),
            y: randomY(),
            char: randomChar(),
            ttl: Math.floor(30 + Math.random() * 60),
            life: 0,
            delay: initialDelay ? Math.floor(Math.random() * 180) : Math.floor(Math.random() * 120),
          };
        }
        const sparks = Array.from({ length: 3 }, () => makeSpark());
        function draw() {
          if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = '24px JetBrains MonoVariable';
            for (const spark of sparks) {
              if (spark.delay > 0) {
                spark.delay--;
                continue;
              }

              const p = spark.life / spark.ttl;
              const alpha = (p < 0.5 ? p * 2 : (1 - p) * 2) * 0.6;
              ctx.globalAlpha = alpha;

              if (p < 0.15 || p > 0.85) {
                ctx.fillStyle = 'rgba(255, 0, 80, 0.8)';
                ctx.fillText(spark.char, spark.x - 3, spark.y);
                ctx.fillStyle = 'rgba(0, 180, 255, 0.8)';
                ctx.fillText(spark.char, spark.x + 3, spark.y);
                ctx.fillStyle = '#00c896';
              } else {
                ctx.fillStyle = '#00c896';
              }
              ctx.fillText(spark.char, spark.x, spark.y);
              spark.life++;
              if (spark.life > spark.ttl) {
                Object.assign(spark, makeSpark(false));
              }
            }
          }
          requestAnimationFrame(draw);
        }
        const id = requestAnimationFrame(draw);
        return () => {
          cancelAnimationFrame(id);
        };
      }
    }
  }, []);

  return <canvas id="kanji_sparks" className={styles.kanji} ref={ref}></canvas>;
};
