// Social page: render curated Instagram posts from data/posts.json
import posts from '../data/posts.json';

const grid = document.querySelector('.social-grid');

if (grid) {
  // Build an Instagram embed blockquote for each post.
  grid.innerHTML = posts
    .map(
      (post) => `
      <div class="social-grid__item">
        <blockquote
          class="instagram-media"
          data-instgrm-permalink="${post.url}"
          data-instgrm-version="14">
          <a href="${post.url}">View this post on Instagram</a>
        </blockquote>
      </div>`
    )
    .join('');

  // Load Instagram's embed script, then process the blockquotes.
  const renderEmbeds = () => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  };

  const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
  if (existing) {
    renderEmbeds();
  } else {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.onload = renderEmbeds;
    document.body.appendChild(script);
  }
}
