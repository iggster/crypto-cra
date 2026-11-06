import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { ENV } from "@workspace/types/env-schema/url-port"

//api prt
const port = Number(ENV.PORT)
//react url
const baseurl = ENV.BASE_URL
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: port,
    proxy: {
      "/api": {
        target: baseurl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
