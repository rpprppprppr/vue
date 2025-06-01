import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const paths = {
  src: path.resolve(path.dirname(""), "src"),
  html: path.resolve(path.dirname(""), "src", "assets", "html"),
  build: path.resolve(path.dirname(""), "build"),
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": paths.src,
    },
  },
  server : {
    host: true,
    port: "5173",
    proxy: {
      '/api/': {
        target: 'https://fakestoreapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
