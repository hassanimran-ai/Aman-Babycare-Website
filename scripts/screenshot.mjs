// Usage: node scripts/screenshot.mjs <url> <label> [mobile|tablet|desktop ...]
// Saves full-page screenshots at 375px (mobile), 768px (tablet) and 1440px (desktop) to screenshots/.
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const [url, label, ...only] = process.argv.slice(2);
if (!url || !label) {
  console.error('Usage: node scripts/screenshot.mjs <url> <label> [mobile|tablet|desktop ...]');
  process.exit(1);
}

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
].filter((vp) => only.length === 0 || only.includes(vp.name));

await mkdir('screenshots', { recursive: true });
const browser = await chromium.launch();
try {
  for (const vp of viewports) {
    // Reduced motion: scroll-reveal content would otherwise be caught mid-fade in a full-page capture.
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, reducedMotion: 'reduce' });
    await page.goto(url, { waitUntil: 'networkidle' });
    // Scroll through so lazy images load, then return to the top.
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += vp.height) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(150);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);
    const file = `screenshots/${label}-${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
    await page.close();
  }
} finally {
  await browser.close();
}
