# Browser Stack Automation Test Suite

A comprehensive end-to-end test automation framework for testing the BStackDemo e-commerce application using Cucumber BDD, Playwright, and TypeScript.

## Overview

This test automation suite implements behavior-driven development (BDD) practices to test critical user journeys on the BStackDemo platform. The framework leverages Cucumber for readable test scenarios and Playwright for robust browser automation.

## Technology Stack

- **Test Framework**: Cucumber.js v11.3.0 (BDD framework)
- **Browser Automation**: Playwright v1.56.1
- **Language**: TypeScript (compiled to CommonJS)
- **Runtime**: Node.js with ts-node
- **Reporting**: Cucumber HTML Reporter
- **CI/CD**: GitHub Actions

## Project Structure

```
browser-stack-automation/
├── src/
│   ├── test/
│   │   ├── features/          # Gherkin feature files
│   │   │   ├── login.feature
│   │   │   ├── orders.feature
│   │   │   ├── favorites.feature
│   │   │   └── offers.feature
│   │   └── steps/             # Step definition files
│   │       ├── loginSteps.ts
│   │       ├── ordersSteps.ts
│   │       ├── favoritesSteps.ts
│   │       └── offersSteps.ts
│   ├── pages/                 # Page Object Models
│   │   └── loginPage.ts
│   ├── hooks/                 # Test lifecycle hooks
│   │   ├── hooks.ts
│   │   └── pageFixture.ts
│   └── helper/                # Utility scripts
│       └── init.ts
├── test-results/              # Test execution reports and screenshots
├── cucumber.json              # Cucumber configuration
├── playwright.config.ts       # Playwright configuration
└── tsconfig.json              # TypeScript configuration
```

## Test Coverage

The test suite covers the following functionality:

### 1. User Authentication (`login.feature`)
- Successful login with valid credentials
- Failed login with invalid credentials
- Login validation and error handling

### 2. Order Management (`orders.feature`)
- End-to-end order placement workflow
- Product selection and cart management
- Shipping address form completion
- Order confirmation verification
- Order history validation
- Data-driven testing with multiple user scenarios

### 3. Favorites Management (`favorites.feature`)
- Adding products to favorites
- Viewing favorites page
- Favorites list validation

### 4. Offers Page (`offers.feature`)
- Accessing promotional offers
- Offers page content verification

## Key Features

### Page Object Model (POM)
The framework implements the Page Object Model design pattern to:
- Promote code reusability and maintainability
- Separate test logic from page interactions
- Reduce code duplication

### BDD with Cucumber
- Human-readable Gherkin syntax for test scenarios
- Clear separation between test scenarios and implementation
- Easy collaboration between technical and non-technical stakeholders
- Background steps for common setup procedures

### Robust Browser Automation
- Chromium browser execution in headless mode
- 1-second slow-motion between actions for stability
- Proper wait mechanisms (`waitUntil: 'domcontentloaded'`)
- Screenshot capture on test failures
- Geolocation permissions pre-configured

### Parallel Execution
- Configured to run 2 scenarios in parallel
- Improved test execution speed
- Isolated browser contexts for each scenario

### Comprehensive Reporting
- HTML test reports generated in `test-results/`
- Progress bar output during test execution
- Screenshot attachments for failed scenarios
- Timestamped screenshot naming convention

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/logunlaja26/browser-stack-automation.git

# Navigate to project directory
cd browser-stack-automation

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps
```

## Configuration

### Cucumber Configuration (`cucumber.json`)
- **Test Path**: `src/test/features/*.feature`
- **Step Definitions**: `src/test/steps/*.ts` and `src/hooks/*.ts`
- **Parallel Workers**: 2
- **Report Format**: HTML report at `test-results/cucumber-report.html`
- **Tags**: Excludes tests tagged with `@skip`

### Browser Configuration (`hooks.ts`)
- **Browser**: Chromium
- **Mode**: Headless
- **Slow Motion**: 1000ms (1 second between actions)
- **Permissions**: Geolocation enabled

## Running Tests

```bash
# Run all tests
npm test

# This command will:
# 1. Clean and create test-results directory (pretest)
# 2. Execute Cucumber scenarios in parallel
# 3. Generate HTML report
```

### Test Execution Flow
1. **Pretest Hook**: Cleans and initializes `test-results/` directory
2. **Before All**: Launches Chromium browser instance
3. **Before Each**: Creates new browser context and page
4. **Test Execution**: Runs Cucumber scenarios
5. **After Each**: Captures screenshot on failure, closes page and context
6. **After All**: Closes browser instance

## CI/CD Integration

The project includes GitHub Actions workflow (`.github/workflows/playwright.yml`) that:
- Triggers on push/PR to main/master branches
- Runs on Ubuntu latest
- Installs dependencies and Playwright browsers
- Executes test suite
- Uploads test results as artifacts (30-day retention)

## Test Application

**Application Under Test**: https://www.bstackdemo.com/

**Test Credentials**:
- Username: `demouser`
- Password: `testingisfun99`

## Reporting

After test execution, reports are available at:
- **HTML Report**: `test-results/cucumber-report.html`
- **Screenshots**: `test-results/screenshot-{scenario-name}-{timestamp}.png` (for failed tests only)

## TypeScript Configuration

- **Target**: ES2020
- **Module System**: CommonJS
- **Module Resolution**: Node
- **Strict Mode**: Disabled (allows gradual TypeScript adoption)
- **Output Directory**: `./dist`

## Best Practices Implemented

1. **Separation of Concerns**: Step definitions, page objects, and hooks are properly separated
2. **Async/Await**: All asynchronous operations use async/await pattern
3. **Explicit Waits**: Proper wait strategies for DOM content loading
4. **Screenshot on Failure**: Automatic failure evidence capture
5. **Clean Test Environment**: Test results directory cleaned before each run
6. **Data-Driven Testing**: Using Cucumber Examples tables for parameterized tests
7. **Isolated Contexts**: Each test gets fresh browser context

## Common Issues & Troubleshooting

### Browser Launch Fails
```bash
# Reinstall Playwright browsers
npx playwright install --with-deps
```

### TypeScript Compilation Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Test Timeout Issues
- Increase timeout in `loginPage.ts` (currently 60000ms)
- Adjust slow motion delay in `hooks.ts` if tests are too slow


## Repository

- **GitHub**: https://github.com/logunlaja26/browser-stack-automation
- **Issues**: https://github.com/logunlaja26/browser-stack-automation/issues