import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{css,js,svg,ico,html}'],
        swDest: 'dist/sw.js',
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.endsWith('.json'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'sw-cache-bookrec-json',
              expiration: {
                maxAgeSeconds: 60 * 60
              }
            }
          },
          {
            urlPattern: ({ url }) =>
              url.pathname.startsWith('/img/covers/') && url.pathname.endsWith('.webp'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'sw-cache-bookrec-covers',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ]
      },
      manifest: {
        name: 'Book Recommendations',
        short_name: 'BookRec',
        theme_color: '#424242',
        background_color: '#ccc',
        icons: [
          {
            src: 'img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icon.svg',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          data: [fileURLToPath(new URL('./src', import.meta.url)) + '/data.ts']
        }
      }
    }
  }
})
