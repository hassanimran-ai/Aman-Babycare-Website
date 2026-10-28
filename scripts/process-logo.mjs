// Usage: node scripts/process-logo.mjs
// Cleans brand_assets/Logo.png (stray caption, red dot, grey right edge), makes the outer
// white background transparent, and writes the logo files the site uses.
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const SRC = 'brand_assets/Logo.png';
const CREAM = { r: 251, g: 247, b: 240 };

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const at = (x, y) => (y * w + x) * 4;

// Paint the stray red dot (x 449–454, y 346–351) white.
for (let y = 345; y <= 352; y++)
  for (let x = 448; x <= 455; x++) data.fill(255, at(x, y), at(x, y) + 3);

// Flood-fill near-white pixels connected to the border, so interior whites (the swaddle) stay opaque.
const light = (i) => Math.min(data[i], data[i + 1], data[i + 2]);
const outside = new Uint8Array(w * h);
const stack = [];
for (let x = 0; x < w; x++) stack.push([x, 0], [x, h - 1]);
for (let y = 0; y < h; y++) stack.push([0, y], [w - 1, y]);
while (stack.length) {
  const [x, y] = stack.pop();
  if (x < 0 || y < 0 || x >= w || y >= h || outside[y * w + x]) continue;
  if (light(at(x, y)) < 215) continue;
  outside[y * w + x] = 1;
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}
// Outer pixels fade out by how white they are, which keeps anti-aliased edges soft.
for (let p = 0; p < w * h; p++) {
  if (!outside[p]) continue;
  const i = p * 4;
  const m = light(i);
  data[i + 3] = m >= 248 ? 0 : Math.round(((248 - m) / 33) * 255);
}

const clean = () => sharp(data, { raw: { width: w, height: h, channels: 4 } });

await mkdir('src/assets', { recursive: true });
// Mark only (mother, baby, house, heart).
await clean().extract({ left: 36, top: 42, width: 412, height: 362 }).png().toFile('src/assets/logo-mark.png');
// Full lockup with wordmark and tagline, without the "Website Logo" caption.
await clean().extract({ left: 24, top: 42, width: 436, height: 594 }).png().toFile('src/assets/logo-full.png');

// Open Graph image: lockup centred on cream.
const lockup = await clean().extract({ left: 24, top: 42, width: 436, height: 594 }).resize({ height: 560 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: CREAM } })
  .composite([{ input: lockup, gravity: 'center' }])
  .png()
  .toFile('src/assets/og-image.png');

// Favicons from the mark, on cream so they read on dark browser tabs.
const mark = await clean().extract({ left: 36, top: 42, width: 412, height: 362 }).png().toBuffer();
for (const [file, size] of [['public/favicon-32.png', 32], ['public/apple-touch-icon.png', 180], ['public/icon-512.png', 512]]) {
  const inner = await sharp(mark).resize({ width: Math.round(size * 0.86), height: Math.round(size * 0.86), fit: 'contain', background: { ...CREAM, alpha: 1 } }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: CREAM } })
    .composite([{ input: inner, gravity: 'center' }])
    .png()
    .toFile(file);
}
console.log('Logo files written.');
