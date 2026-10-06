# playwright-framework

Playwright test framework scaffold (structure first — content to be added).

## Structure

```
playwright-framework/
├── tests/              # Test files (specs)
├── pages/              # Page Object Model classes
├── fixtures/           # Reusable test setup (baseTest.js)
├── utils/              # Utilities, constants, helpers
├── locators/           # Centralized element locators
├── config/             # Environment configuration (env.js)
├── test-data/          # External test data (users.json)
├── reports/            # Generated test reports
├── screenshots/        # Screenshots on test failures
├── playwright.config.js
├── package.json
└── README.md
```

## Setup

```bash
npm install
npx playwright install chromium
```

## Run

```bash
npm test              # headless
npm run test:headed   # with browser window
npm run report        # open HTML report
```
