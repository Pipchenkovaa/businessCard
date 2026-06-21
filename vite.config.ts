import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// base: "./" keeps asset paths relative so the build works both at the
// domain root and inside a GitHub Pages project subpath (/Portfolio-Website/).
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
