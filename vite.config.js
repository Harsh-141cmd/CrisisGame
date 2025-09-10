import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CrisisGame/', // Replace with your actual GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
