import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  base: '/o/advanced-custom-element-techniques',
  build: {
    outDir: './vite-build',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/chunk-[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) return 'assets/style.css'
          return 'assets/[name][extname]'
        },
      },
      external: [
        'react',
        'react-dom',
        'liferay-routing',
        /^(?!@clayui\/css)@clayui.*$/,
      ],
    }
  },
  plugins: [react(), cssInjectedByJsPlugin()],
})
