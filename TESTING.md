# Playwright Testing Setup

This project now includes Playwright for end-to-end testing as part of the CI/CD pipeline.

## Local Development

### Install Dependencies
First, install the Playwright browsers:
```bash
npx playwright install
```

### Run Tests
- Run all tests: `pnpm test`
- Run tests in headed mode: `pnpm test:headed`
- Run tests with UI: `pnpm test:ui`
- Run tests for specific browser: `npx playwright test --project=chromium`

### Test Structure
- Tests are located in the `tests/` directory
- Configuration is in `playwright.config.ts`
- Test reports are generated in `playwright-report/`

### CI/CD Integration
The GitHub Actions workflow automatically:
1. Runs ESLint on all code
2. Builds the Next.js project
3. Runs Playwright tests across multiple browsers (Chromium, Firefox, Safari)
4. Uploads test reports as artifacts

### Adding New Tests
Create new test files in the `tests/` directory with the `.spec.ts` extension. Use the existing `example.spec.ts` as a reference.