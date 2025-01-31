const  {playwrightTestConfig} = require('@playwright/test');
const { truncateSync } = require('fs');
const { devices } = require('playwright-extra');

const config = {
  
  fullyParallel:false,
  retries: 0,
  timeout: 120000,
  workers: 1,
  //reporter: './Reporter.js',
  use: {
    headless: false,
    video:'on',
    viewpoint:{ width: 1400, height: 740 },
    launchOptions: {
      args: ['--start-fullscreen'], // Start the browser in maximized mode
    },
    screenshot: 'true',
    trace:'on'
  },

  projects: [
    {
      name: 'chrome',
      use: {browserName:'chromium'},
    },
  
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: {browserName: 'webkit'},
    },
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
}

module.exports = config;
module.exports = {
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]
};

