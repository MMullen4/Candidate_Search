import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  // server: {
  //   port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  // },
});
