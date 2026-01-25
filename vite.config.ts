import { defineConfig } from 'vite';

export default defineConfig({
  // This tells Vite that your photos are in the root folder
  // and should be copied over to the final website folder.
  publicDir: false, 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});