import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      deploymentTarget: 'vercel',
    }),
    viteReact(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group heavy iconography
            if (id.includes('lucide-react')) {
              return 'lucide-vendor'
            }

            // Isolate Sanity dependencies
            if (id.includes('sanity') || id.includes('@sanity/')) {
              return 'sanity-vendor'
            }

            // Isolate carousel logic
            if (id.includes('react-slick') || id.includes('slick-carousel')) {
              return 'carousel-vendor'
            }
          }
        },
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
})

export default config
