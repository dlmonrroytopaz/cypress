const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    
    
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      config.projectId = 'wt9vj9',
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    env: {
      CYPRESS_RECORD_KEY: '8f461d36-95f5-477b-bc24-255909b2998b',
      CYPRESS_SSL_VERIFY: "false"
    }
  },
});