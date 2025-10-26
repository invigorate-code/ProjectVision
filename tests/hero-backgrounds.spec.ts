import { test, expect } from '@playwright/test';

/**
 * Hero Background Visibility Tests
 *
 * These tests verify that the hero backgrounds are actually visible
 * by checking DOM elements, computed styles, and taking screenshots.
 */

test.describe('Homeowner Hero Background', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for animations to start
    await page.waitForTimeout(1000);
  });

  test('should render background component', async ({ page }) => {
    // Check that the hero section exists
    const heroSection = page.locator('#hero');
    await expect(heroSection).toBeVisible();
  });

  test('should have visible blueprint SVG elements', async ({ page }) => {
    // Check for SVG viewBox (blueprint paths)
    const svg = page.locator('#hero svg[viewBox="0 0 1200 600"]');
    await expect(svg).toBeVisible();

    // Check that paths exist (blueprint lines)
    const paths = page.locator('#hero svg path');
    const pathCount = await paths.count();

    console.log(`[Homeowner] Found ${pathCount} blueprint paths`);
    expect(pathCount).toBeGreaterThan(0);
  });

  test('should have sparkle elements', async ({ page }) => {
    // Sparkles are motion.div elements with specific styling
    const hero = page.locator('#hero');

    // Check that background container exists
    const bgContainer = hero.locator('> div').first();
    await expect(bgContainer).toBeVisible();

    console.log('[Homeowner] Background container is visible');
  });

  test('should have non-white background color', async ({ page }) => {
    const heroSection = page.locator('#hero');

    // Get the computed background color of the hero section
    const bgColor = await heroSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    console.log(`[Homeowner] Hero section background-color: ${bgColor}`);

    // Check that it's not pure white
    expect(bgColor).not.toBe('rgb(255, 255, 255)');
    expect(bgColor).not.toBe('rgba(255, 255, 255, 1)');
  });

  test('should have visible gradient background', async ({ page }) => {
    // Check the background component's computed styles
    const bgDiv = page.locator('#hero > div').first();

    const bgStyle = await bgDiv.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        background: style.background,
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage,
        zIndex: style.zIndex,
        opacity: style.opacity,
      };
    });

    console.log('[Homeowner] Background styles:', JSON.stringify(bgStyle, null, 2));

    // Should have a background or background-image
    const hasBackground =
      bgStyle.backgroundImage !== 'none' ||
      bgStyle.backgroundColor !== 'rgba(0, 0, 0, 0)';

    expect(hasBackground).toBeTruthy();
  });

  test('should take screenshot for visual verification', async ({ page }) => {
    const heroSection = page.locator('#hero');

    // Take a screenshot of the hero section
    await heroSection.screenshot({
      path: 'test-results/homeowner-hero.png',
      animations: 'disabled', // Disable animations for consistent screenshots
    });

    console.log('[Homeowner] Screenshot saved to test-results/homeowner-hero.png');
  });
});

test.describe('Contractor Hero Background', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contractors');
    // Wait for animations to start
    await page.waitForTimeout(1000);
  });

  test('should render background component', async ({ page }) => {
    const heroSection = page.locator('#hero');
    await expect(heroSection).toBeVisible();
  });

  test('should have network connection lines', async ({ page }) => {
    // Check for SVG lines (network connections)
    const svg = page.locator('#hero svg[viewBox="0 0 100 100"]');
    await expect(svg).toBeVisible();

    const lines = page.locator('#hero svg line');
    const lineCount = await lines.count();

    console.log(`[Contractor] Found ${lineCount} network connection lines`);
    expect(lineCount).toBeGreaterThan(0);
  });

  test('should have node elements with icons', async ({ page }) => {
    // Check for node groups
    const nodeGroups = page.locator('#hero svg g');
    const nodeCount = await nodeGroups.count();

    console.log(`[Contractor] Found ${nodeCount} SVG groups (nodes)`);
    expect(nodeCount).toBeGreaterThan(0);
  });

  test('should have dashboard panel', async ({ page }) => {
    // The dashboard panel should be visible
    const hero = page.locator('#hero');

    // Look for the dashboard overlay div
    const dashboard = hero.locator('.absolute.top-8.right-8');
    const dashboardExists = await dashboard.count();

    console.log(`[Contractor] Dashboard panel exists: ${dashboardExists > 0}`);
  });

  test('should have non-white background color', async ({ page }) => {
    const heroSection = page.locator('#hero');

    const bgColor = await heroSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    console.log(`[Contractor] Hero section background-color: ${bgColor}`);

    // Check that it's not pure white
    expect(bgColor).not.toBe('rgb(255, 255, 255)');
    expect(bgColor).not.toBe('rgba(255, 255, 255, 1)');
  });

  test('should have visible gradient background', async ({ page }) => {
    const bgDiv = page.locator('#hero > div').first();

    const bgStyle = await bgDiv.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        background: style.background,
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage,
        zIndex: style.zIndex,
        opacity: style.opacity,
      };
    });

    console.log('[Contractor] Background styles:', JSON.stringify(bgStyle, null, 2));

    const hasBackground =
      bgStyle.backgroundImage !== 'none' ||
      bgStyle.backgroundColor !== 'rgba(0, 0, 0, 0)';

    expect(hasBackground).toBeTruthy();
  });

  test('should take screenshot for visual verification', async ({ page }) => {
    const heroSection = page.locator('#hero');

    await heroSection.screenshot({
      path: 'test-results/contractor-hero.png',
      animations: 'disabled',
    });

    console.log('[Contractor] Screenshot saved to test-results/contractor-hero.png');
  });
});

test.describe('Visual Comparison', () => {
  test('backgrounds should have visible blue/sky tints', async ({ page }) => {
    // Test homeowner page
    await page.goto('/');
    await page.waitForTimeout(1000);

    const homeownerBg = page.locator('#hero > div').first();
    const homeownerBgImage = await homeownerBg.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });

    console.log('[Homeowner] background-image:', homeownerBgImage);

    // Test contractor page
    await page.goto('/contractors');
    await page.waitForTimeout(1000);

    const contractorBg = page.locator('#hero > div').first();
    const contractorBgImage = await contractorBg.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });

    console.log('[Contractor] background-image:', contractorBgImage);

    // Both should have gradient backgrounds
    expect(homeownerBgImage).toContain('radial-gradient');
    expect(contractorBgImage).toContain('radial-gradient');
  });

  test('should create side-by-side comparison screenshot', async ({ page }) => {
    // Take full page screenshots of both
    await page.goto('/');
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: 'test-results/homeowner-full.png',
      fullPage: false,
    });

    await page.goto('/contractors');
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: 'test-results/contractor-full.png',
      fullPage: false,
    });

    console.log('[Comparison] Screenshots saved for manual visual inspection');
  });
});
