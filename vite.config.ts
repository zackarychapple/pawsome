import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { withZephyr } from 'vite-plugin-zephyr';
export default defineConfig({
  plugins: [
    react(),
    withZephyr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
