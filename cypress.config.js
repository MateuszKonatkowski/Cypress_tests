const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    excludeSpecPattern: ['**//cypress/e2e/1-getting-started','**//cypress/e2e/2-advanced-examples'],
    //baseUrl: 'https://automationexercise.com'
  },
});
