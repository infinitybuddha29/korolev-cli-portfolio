import { useEffect, useState } from 'react';

export const useActiveSection = () => {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); // 'hero' | 'about' | ...
          }
        });
      },
      { threshold: 0.9 },
    );

    ['hero', 'about', 'projects', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
};
