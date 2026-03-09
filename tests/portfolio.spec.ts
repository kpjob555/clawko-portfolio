import { test, expect } from '@playwright/test';

test.describe('Clawko Portfolio', () => {
  test('should load without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('http://localhost:4173/clawko-portfolio/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check title
    await expect(page).toHaveTitle(/Clawko/);
    
    // Check main elements exist
    await expect(page.locator('.hero')).toBeVisible();
    await expect(page.locator('.nav')).toBeVisible();
    
    // Check SVG loaded (cat-paw)
    const logoIcon = page.locator('.logo-icon');
    await expect(logoIcon).toBeVisible();
    
    // Check avatar SVG
    const avatarEmoji = page.locator('.avatar-emoji');
    await expect(avatarEmoji).toBeVisible();
    
    // Check no critical errors
    const criticalErrors = errors.filter(e => !e.includes('warning'));
    console.log('Console errors:', criticalErrors);
    expect(criticalErrors.length).toBe(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    // iPhone 14 Pro: 393x844
    await page.setViewportSize({ width: 393, height: 844 });
    
    await page.goto('http://localhost:4173/clawko-portfolio/');
    await page.waitForLoadState('networkidle');
    
    // Check navigation works
    const nav = page.locator('.nav');
    await expect(nav).toBeVisible();
    
    // Check hero section is visible
    const hero = page.locator('.hero');
    await expect(hero).toBeVisible();
  });
});
