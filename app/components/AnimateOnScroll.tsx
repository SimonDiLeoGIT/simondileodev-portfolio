'use client';
import { useEffect, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
  tduration?: number;
}

export default function AnimateOnScroll({ children, delay = 0, translateY = 0, translateX = 0, scale = 0, tduration = 700 }: AnimateOnScrollProps) {
console.log('AnimateOnScroll rendered with delay:', delay, 'translateY:', translateY, 'translateX:', translateX, 'scale:', scale);
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const entryTarget = entry.target as HTMLElement;

            entryTarget.classList.add("visible");
            obs.unobserve(entry.target)
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}ms`,
        ['--ty' as string]: `${translateY}px`,
        ['--tx' as string]: `${translateX}px`,
        ['--sc' as string]: `${scale || 1}`,
        ['--tduration' as string]: `${tduration}ms`   
      }}
    >
      {children}
    </div>
  );
}