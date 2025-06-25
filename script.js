function loadPage(page) {
  fetch(`sections/${page}.html`)
    .then(res => res.text())
    .then(html => {
      const app = document.getElementById('app');

      // Animate current content out
      gsap.to(app, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          app.innerHTML = html;

          // Animate new content in
          gsap.fromTo(app, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6 });
        }
      });
    });
}

// Load the first page
document.addEventListener('DOMContentLoaded', () => {
  loadPage('home');
});
