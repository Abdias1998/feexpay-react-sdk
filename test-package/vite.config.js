import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    postcss: {
      config: './postcss.config.js'
    }
  }
});
