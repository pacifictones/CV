import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["chunk-4YP5LC2O.js?v=f2c79341"],
  },
  plugins: [react()],
});
