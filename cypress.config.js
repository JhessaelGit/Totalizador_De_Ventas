// cypress.config.mjs
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // configurar eventos de Cypress aquí
    },
    baseUrl: "http://localhost:1234",
  },
});
