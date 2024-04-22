import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import removeAttr from 'react-remove-attr';
import path from 'path';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    removeAttr({
      extensions: ['jsx', 'tsx'],
      attributes: ['data-testid'],
    }),
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
