import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Default options are shown
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // This is important for SPA routing
    }),
    // Other configurations
  },
  preprocess: vitePreprocess(),

  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  }
};

export default config;
