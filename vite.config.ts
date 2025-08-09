<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
>>>>>>> 7a81470ebec5344ba90ae057b26647ba1da23a09

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
<<<<<<< HEAD
    exclude: ["lucide-react"],
  },
  base: "./", // ✅ Relative paths for Surge
=======
    exclude: ['lucide-react'],
  },
>>>>>>> 7a81470ebec5344ba90ae057b26647ba1da23a09
});
