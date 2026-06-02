import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          animation: ["gsap"],
          particles: ["react-tsparticles", "tsparticles"],
          slider: ["react-slick", "slick-carousel"],
          seo: ["react-helmet-async"],
        },
      },
    },
  },
  server: {
    open: true,
    host: true
  }
})
