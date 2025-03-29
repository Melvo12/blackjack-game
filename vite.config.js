import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],  // No necesitas flowbite() aquí
  server: {
    port: 3000,
  },
});