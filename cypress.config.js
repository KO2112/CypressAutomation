const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com',
    setupNodeEvents(on, config) {
      
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
