import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'p-utils',
      fileName: 'p-utils'
    }
  }
})
