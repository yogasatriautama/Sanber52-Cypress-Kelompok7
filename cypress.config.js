const { defineConfig } = require("cypress");
const baseUrl = process.env.baseUrl || 'https://magento.softwaretestingboard.com/'

module.exports = defineConfig({
  e2e: {
    baseUrl: baseUrl,
		defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
