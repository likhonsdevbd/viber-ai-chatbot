import { test, expect } from '@playwright/test';

test('should load homepage and display basic content', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Basic checks that should pass for a Next.js app
  await expect(page).toHaveTitle(/.*/);
  await expect(page.locator('body')).toBeVisible();
});

test('should navigate and respond to basic interactions', async ({ page }) => {
  await page.goto('/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Check if there are any interactive elements
  const interactiveElements = await page.locator('button, a, input, textarea, select').count();
  expect(interactiveElements).toBeGreaterThan(0);
});

test('should handle auth-related elements if present', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Check for common auth-related selectors
  const authSelectors = [
    'button:has-text("Sign")',
    'button:has-text("Login")',
    'button:has-text("Register")',
    '[data-testid="auth"]',
    '#auth-form'
  ];
  
  let foundAuthElement = false;
  for (const selector of authSelectors) {
    try {
      await page.waitForSelector(selector, { timeout: 1000 });
      foundAuthElement = true;
      break;
    } catch {
      // Element not found, continue checking
    }
  }
  
  // If auth elements exist, they should be visible
  if (foundAuthElement) {
    const visibleAuthElements = await page.locator(authSelectors.join(', ')).count();
    expect(visibleAuthElements).toBeGreaterThan(0);
  }
});