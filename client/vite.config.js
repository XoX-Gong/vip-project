import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import rowLoader from 'vite-raw-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../extension/popup'
  }
})
