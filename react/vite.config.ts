import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080', // Spring Boot API
    },
},
  build: {
    outDir: '../src/main/resources/static', // Path to Spring Boot's static directory
},
})
