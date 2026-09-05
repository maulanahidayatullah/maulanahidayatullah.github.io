import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, '..', 'dist');
const targetDir = path.resolve(__dirname, '..', '..');

if (!fs.existsSync(sourceDir)) {
  console.error(`[copy-dist] Error: Source directory '${sourceDir}' does not exist.`);
  process.exit(1);
}

console.log(`[copy-dist] Copying build artifacts from '${sourceDir}' to '${targetDir}'...`);

try {
  const items = fs.readdirSync(sourceDir);
  for (const item of items) {
    const srcPath = path.join(sourceDir, item);
    const destPath = path.join(targetDir, item);

    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
    console.log(`  ✓ Copied ${item} -> root/${item}`);
  }
  console.log('[copy-dist] Successfully exported dist files to root directory for GitHub Pages!');
} catch (err) {
  console.error('[copy-dist] Failed to copy build files:', err);
  process.exit(1);
}
