// Reveal-on-scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
);

document.querySelectorAll('.section, .hero-image, .principle, .row:not(.head), .card').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});
