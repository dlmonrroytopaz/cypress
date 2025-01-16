const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    projectId: 'wt9vj9',
  },
  e2e: {
    
    
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    env: {
      CYPRESS_RECORD_KEY: process.env.CYPRESS_RECORD_KEY,
      CYPRESS_SSL_VERIFY: "false"
    }
  },
});