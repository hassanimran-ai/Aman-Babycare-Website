// Usage: node scripts/screenshot.mjs <url> <label>
// Saves full-page screenshots at 375px (mobile) and 1440px (desktop) to screenshots/.
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const [url, label] = process.argv.slice(2);
if (!url || !label) {
  console.error('Usage: node scripts/screenshot.mjs <url> <label>');
  process.exit(1);
}

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'desktop', width: 1440, height: 900 },
];

await mkdir('screenshots', { recursive: true });
const browser = await chromium.launch();
try {
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto(url, { waitUntil: 'networkidle' });
    const file = `screenshots/${label}-${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
    await page.close();
  }
} finally {
  await browser.close();
}
