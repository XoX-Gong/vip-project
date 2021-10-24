import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import rowLoader from 'vite-raw-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [vue()],
  build: {
    sourcemap: true,
    outDir: '../extension/popup'
  }
})
