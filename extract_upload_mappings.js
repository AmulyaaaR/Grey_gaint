import fs from 'fs';
import path from 'path';

console.log('🔍 Extracting Upload Button Mappings from Admin.tsx...\n');

const adminPath = path.join(process.cwd(), 'client/src/pages/Admin.tsx');
const adminContent = fs.readFileSync(adminPath, 'utf-8');

// Extract bgDirMap configuration
const bgDirMapMatch = adminContent.match(/const bgDirMap[^{]*{([^}]+)}/s);
if (bgDirMapMatch) {
    console.log('📁 Background Directory Mapping (bgDirMap):');
    const mappings = bgDirMapMatch[1].match(/(\w+):\s*"([^"]+)"/g);
    mappings?.forEach(m => {
        const [key, value] = m.split(':').map(s => s.trim().replace(/"/g, ''));
        console.log(`  ${key.padEnd(12)} → ${value}`);
    });
    console.log('');
}

// Extract assetDirectories list
const assetDirsMatch = adminContent.match(/const assetDirectories = \[([\s\S]*?)\];/);
if (assetDirsMatch) {
    console.log('📂 Asset Directories List:');
    const dirs = assetDirsMatch[1].match(/"([^"]+)"/g);
    dirs?.forEach((d, i) => {
        const dir = d.replace(/"/g, '');
        console.log(`  ${i + 1}. ${dir}`);
    });
    console.log('');
}

// Search for VisualImageField usage patterns
console.log('🖼️  Image Upload Buttons Found:');
console.log('');

const visualImageFieldMatches = adminContent.matchAll(/<VisualImageField\s+label="([^"]+)"[\s\S]*?onBrowse=\{[\s\S]*?\}/g);

let count = 1;
for (const match of visualImageFieldMatches) {
    const label = match[1];
    const fullMatch = match[0];

    // Try to extract preferredDir from the context
    const preferredDirMatch = fullMatch.match(/preferredDir[:\s]*['"]([^'"]+)['"]/);
    const preferredDir = preferredDirMatch ? preferredDirMatch[1] : 'UNKNOWN';

    console.log(`${count}. "${label}"`);
    console.log(`   Preferred Directory: ${preferredDir}`);
    console.log('');
    count++;
}

// Patterns to verify
console.log('\n🔍 Expected Folder Routing:');
console.log('');
console.log('Section Type               → Target Folder');
console.log('═══════════════════════════════════════════════════════════');
console.log('Hero/About/Story BG        → client/src/assets/backgrounds/');
console.log('About Asset                → client/src/assets/About/');
console.log('OurStory Asset             → client/src/assets/OurStory/');
console.log('Welcome Asset              → client/src/assets/Welcome/ (or gallery/Welcome/)');
console.log('Brochure                   → client/src/assets/Brochure/');
console.log('Service Images             → client/src/assets/gallery/{ServiceFolder}/');
console.log('GeneralGallery             → client/src/assets/gallery/GeneralGallery/');
console.log('');

console.log('\n⚠️  Potential Issues to Check:');
console.log('');
console.log('1. Is bgDirMap correctly mapping to background folders?');
console.log('   - services/gallery/reviews/contact seem to map to service folders');
console.log('   - Should these be "backgrounds" instead?');
console.log('');
console.log('2. Verify Welcome folder location:');
console.log('   - Is it client/src/assets/Welcome/ or client/src/assets/gallery/Welcome/?');
console.log('');
console.log('3  Check if all upload buttons use correct preferredDir parameter');
console.log('');

// Check actual folder structure
const assetsPath = path.join(process.cwd(), 'client/src/assets');
console.log('📦 Actual Assets Folder Structure:');
console.log('');
if (fs.existsSync(assetsPath)) {
    const items = fs.readdirSync(assetsPath);
    items.forEach(item => {
        const fullPath = path.join(assetsPath, item);
        if (fs.statSync(fullPath).isDirectory()) {
            console.log(`  ✓ ${item}/`);
        }
    });
}

console.log('\n✅ Extraction Complete!');
console.log('Review the output above to identify any mapping mismatches.');
