import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1500,
    viewportHeight: 660,
    video: false,
    baseUrl: 'http://localhost:5173',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
