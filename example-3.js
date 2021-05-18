// Endless scroll

let ul = null;

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  ul = document.querySelector('ul');
  observer.observe(document.querySelector('li:last-child'));
});

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      createTenListItems();
    };

    observer.unobserve(entry.target);
    observer.observe(document.querySelector('li:last-child'));
  });
}

function createTenListItems() {
  for (let index = 0; index < 10; index++) {
    const li = document.createElement('li');
    li.innerHTML = 'Test new';
    ul.append(li);
  }
}
