import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Aquí aseguramos que `@` apunte a la carpeta `src`
    },
  },
});
