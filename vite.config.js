import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, "src/"),
      styles: resolve(__dirname, "src/styles"),
      plugins: resolve(__dirname, "src/plugins"),
    }
  },
  plugins: [vue(), vueJsx(), viteMockServe({ supportTs: false })]
})
