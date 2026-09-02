import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 部署到 GitHub Pages 的子路径下（username.github.io/My-practice-content/），
  // 必须设 base，否则构建出的静态资源路径会指向域名根导致 404
  base: '/My-practice-content/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
})
