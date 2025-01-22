import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    react(),
    visualizer({
      open: true,
    }),
    mode === 'production' &&
      imagemin({
        gifsicle: { optimizationLevel: 3 },
        mozjpeg: { quality: 50 },
        pngquant: { quality: [0.8, 0.9] },
        svgo: { plugins: [{ removeViewBox: false }] },
      }),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          largeModule: [
            './src/components/News.tsx',
            './src/components/Gallery.tsx',
            './src/pages/DetailNews.tsx',
            './src/pages/ListAlbum.tsx',
            './src/pages/ListNews.tsx',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~pages': path.resolve(__dirname, 'src/pages'),
    },
  },
}));
