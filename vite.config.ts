import { defineConfig } from 'vite';

export default defineConfig({
  // This tells Vite to copy the public folder to the build output
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});