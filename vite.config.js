import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    // Add this line if you want a custom base URL
    base: '/your-app-name/', // Replace with your desired subdirectory
  },
});