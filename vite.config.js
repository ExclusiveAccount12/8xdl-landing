import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Ensures public folder files are copied to dist
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
