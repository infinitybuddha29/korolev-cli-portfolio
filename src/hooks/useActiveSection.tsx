import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently crossing the middle of the viewport.
 * Uses geometry rather than IntersectionObserver thresholds so it works for
 * sections both taller and shorter than the screen. Queries `section[id]`
 * live, so it keeps working as sections are added/reordered.
 */
export const useActiveSection = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const pick = () => {
      const middle = window.scrollY + window.innerHeight / 2;
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
      if (sections.length === 0) return;

      let current = sections[0].id;
      for (const section of sections) {
        if (section.offsetTop <= middle) current = section.id;
        else break;
      }
      setActive(current);
    };

    pick();
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    return () => {
      window.removeEventListener('scroll', pick);
      window.removeEventListener('resize', pick);
    };
  }, []);

  return active;
};
