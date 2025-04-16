// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  },
  integrations: [react()],
  // Enable content collections
  content: {
    collections: []
  },
  // Enable TypeScript path aliases
  build: {
    format: 'directory'
  }
});