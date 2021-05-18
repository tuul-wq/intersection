// Change color on scroll

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: thresholdArray()
  });

  document.querySelectorAll('li').forEach(li => {
    observer.observe(li);
  });
});

function callback(entries, observer) {
  entries.forEach(entry => {
    const li = entry.target;

    if (!entry.isIntersecting) {
      li.style.backgroundColor = 'hsl(20, 95%, 65%)';
    } else {
      const newHue = (255 - 20) * entry.intersectionRatio;

      li.style.backgroundColor = `hsl(${20 + newHue}, 95%, 65%)`;
    }
  });
}

function thresholdArray() {
  let thresholds = [];
  for (let index = 1; index <= 30; index++) {
    thresholds.push(index / 30);
  }
  return thresholds;
}
