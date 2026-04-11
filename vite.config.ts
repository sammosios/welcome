import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as { version: string }

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://sammosios.com',
      dynamicRoutes: ['/philosophy', '/stack', '/consult'],
      exclude: ['/404', '/og-card'],
      readable: true,
      changefreq: 'monthly',
      priority: 1.0,
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})
