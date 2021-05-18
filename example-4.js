// Resize child relative to parent

document.addEventListener('DOMContentLoaded', () => {
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  child.style.width = `${parent.offsetWidth - 50}px`;

  const observer = new IntersectionObserver(childCallback, {
    root: parent,
    rootMargin: '0px',
    threshold: 1
  });

  observer.observe(child);

  const resizeObserver = new ResizeObserver(parentResize);

  resizeObserver.observe(parent);
});

// Better use resize observer
function childCallback(entries) {
  entries.forEach(entry => {
    const parent = entry.target.parentElement;
    if (parent.offsetWidth - entry.target.offsetWidth < 50) {
      entry.target.style.width = `${parent.offsetWidth - 50}px`;
    }
  });
}

function parentResize(entries) {
  entries.forEach(entry => {
    const parent = entry.target;
    const child = entry.target.children[0];

    if (parent.offsetWidth - child.offsetWidth > 50) {
        child.style.width = `${parent.offsetWidth - 50}px`;
    }
  });
}
