import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "MyExtension",
      formats: ["iife"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [],
    },
  },
});
