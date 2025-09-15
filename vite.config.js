import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 🔥 Import plugin React

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Đổi cổng nếu cần
  },
  resolve: {
    alias: {
      '@': '/src', // Nếu bạn có alias như CRA + CRACO
    },
  },
});
