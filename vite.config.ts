import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portifolio-React-TypeScript/",
  build: {
    outDir: "dist", // Certifique-se de que o build está indo para a pasta dist
    assetsDir: "assets", // Mantém os assets organizados
    emptyOutDir: true, // Garante que a pasta dist seja limpa antes de cada build
  }
})
