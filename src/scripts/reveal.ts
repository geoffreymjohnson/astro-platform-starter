// src/scripts/reveal.ts

const targets = document.querySelectorAll<HTMLElement>('.reveal');

if (targets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  targets.forEach((el) => observer.observe(el));
}
