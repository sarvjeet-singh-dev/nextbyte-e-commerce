import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({

  base :`/nextbyte-e-commerce/`,
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'src/pages/cartPage.html'),
        details: resolve(__dirname, 'src/pages/productDetailsPage.html'),
      },
    },
  },
})