// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { ENV } = require('./config/env');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: { timeout: 10 * 1000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
  ],
  use: {
    baseURL: ENV.BASE_URL,
    ignoreHTTPSErrors: true, // internal server (192.168.10.227) uses a non-public certificate
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    outputDir: './reports/artifacts',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
