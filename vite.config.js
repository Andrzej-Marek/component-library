import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
// import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [svgr()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "component-library",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
