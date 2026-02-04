
import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'client/src/data/siteContent.json');
const assetsRoot = path.join(process.cwd(), 'client/src/assets');

if (!fs.existsSync(contentPath)) {
  console.error("❌ siteContent.json not found!");
  process.exit(1);
}

const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
const errors = [];
const checkedPaths = new Set();

function checkAsset(assetPath, context) {
  if (!assetPath || typeof assetPath !== 'string') return;
  if (assetPath.startsWith('http') || assetPath.startsWith('data:')) return;
  
  // Normalized checking as per Admin.tsx logic usually assumes relative to assets root or gallery
  // But siteContent.json seems to have inconsistent paths (some with folder, some just filename for backgrounds)
  
  let fullPath;
  let triedPaths = [];

  // 1. Try direct under assets (e.g. "About/About_main.png")
  const p1 = path.join(assetsRoot, assetPath);
  triedPaths.push(p1);
  
  // 2. Try under assets/gallery (e.g. "BespokeWeddings&Engagements/W1.jpg")
  const p2 = path.join(assetsRoot, 'gallery', assetPath);
  triedPaths.push(p2);

  // 3. Try under assets/backgrounds (e.g. "Hero_bg.png")
  const p3 = path.join(assetsRoot, 'backgrounds', assetPath);
  triedPaths.push(p3);

  if (fs.existsSync(p1)) {
    checkedPaths.add(assetPath);
    return;
  }
  if (fs.existsSync(p2)) {
    checkedPaths.add(assetPath);
    return;
  }
  if (fs.existsSync(p3)) {
    checkedPaths.add(assetPath);
    return;
  }

  errors.push(`MISSING: "${assetPath}" (Context: ${context})`);
}

function traverse(obj, context = '') {
  if (!obj) return;
  if (typeof obj === 'string') {
    // Basic heuristic to identify image paths: extension check
    if (obj.match(/\.(jpg|jpeg|png|webp|svg|pdf)$/i)) {
      checkAsset(obj, context);
    }
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => traverse(item, `${context}[${idx}]`));
    return;
  }
  if (typeof obj === 'object') {
    Object.keys(obj).forEach(key => traverse(obj[key], `${context}.${key}`));
  }
}

console.log("🔍 Starting Asset Verification...");
traverse(content, 'root');

if (errors.length > 0) {
  console.log("\n❌ Found Missing Assets:");
  errors.forEach(e => console.log(e));
} else {
  console.log("\n✅ All mapped assets found in filesystem!");
}
