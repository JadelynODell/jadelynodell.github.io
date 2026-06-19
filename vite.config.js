import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        video: resolve(__dirname, 'src/video.html'),
        audio: resolve(__dirname, 'src/audio.html'),
        photography: resolve(__dirname, 'src/photography.html'),
        social: resolve(__dirname, 'src/social.html'),
        contact: resolve(__dirname, 'src/contact.html'),
      },
    },
  },
});
