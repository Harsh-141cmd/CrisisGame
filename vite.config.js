import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Harsh-141cmd/CrisisGame.git', // Replace with your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
