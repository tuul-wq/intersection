// Change color while in viewport

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  document.querySelectorAll('li').forEach(li => {
    observer.observe(li);
  });
});

function callback(entries) {
  entries.forEach(entry => {
    const li = entry.target;

    if (entry.isIntersecting) {
      li.style.backgroundColor = 'salmon';
    } else {
      li.style.backgroundColor = 'white';
    }
  });
}
