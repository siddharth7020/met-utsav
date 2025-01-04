import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates the service worker
      injectRegister: 'auto', // Automatically registers the service worker
      manifest: {
        name: 'MET USTAV',
        short_name: 'UTSAV',
        description: 'MET UTSAV 2025',
        theme_color: '#ffffff',
        background_color: '#E31E25',
        display: 'standalone',
        icons: [
          {
            src: '/metlogo.jpg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: '/metlogo.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true, // Clean up old caches
        skipWaiting: true, // Skip waiting for new service worker
      },
    }),
  ],
});