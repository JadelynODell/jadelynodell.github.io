// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// Set active nav link based on current page
const currentPath = window.location.pathname;
document.querySelectorAll('.nav__links a').forEach(link => {
  const href = link.getAttribute('href');
  const page = currentPath.split('/').pop() || 'index.html';
  const linkPage = href === './' ? 'index.html' : href.replace('./', '');
  if (page === linkPage || (page === '' && linkPage === 'index.html')) {
    link.classList.add('active');
  }
});

// Lightbox for photography gallery
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox__close');

  document.querySelectorAll('.gallery__item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}
