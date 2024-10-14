const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://127.0.0.1:3000',
    viewportHeight: 550,
    viewportWidth: 660,
    experimentalStudio: true
  },
});
