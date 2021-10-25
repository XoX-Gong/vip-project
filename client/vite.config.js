import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(dirname(import.meta.url))
const _resolve = dir => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  emptyOutDir: true,
  plugins: [vue()],
  build: {
    outDir: "../extension/popup",
    target: "esnext",
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@utils': _resolve('src/utils'),
      '@api': _resolve('src/api')
    }
  }
});
