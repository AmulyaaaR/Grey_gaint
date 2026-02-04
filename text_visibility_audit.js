import fs from 'fs';
import path from 'path';

console.log('📱 COMPREHENSIVE TEXT VISIBILITY & FONT SIZE AUDIT\n');
console.log('═'.repeat(70));
console.log('');

const pagesDir = path.join(process.cwd(), 'client/src/pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && f !== 'not-found.tsx');
const contentPath = path.join(process.cwd(), 'client/src/data/siteContent.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

let totalIssues = 0;

// Font size categories
const fontSizeRanges = {
    tooSmall: [],      // < 14px
    acceptable: [],    // 14-15px
    good: [],          // 16-18px
    large: [],         // 19-24px
    veryLarge: []      // > 24px
};

console.log('## TEXT VISIBILITY ANALYSIS\n');

pages.forEach(page => {
    console.log(`\n### ${page}`);
    console.log('─'.repeat(70));

    const filePath = path.join(pagesDir, page);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Extract all text size classes
    const textClasses = fileContent.match(/text-(\[[\d.]+(?:px|rem|em)\]|\w+)/g) || [];

    // Check for very small text
    const smallTextPatterns = fileContent.match(/text-\[([\d.]+)px\]/g) || [];
    const tinyText = smallTextPatterns.filter(t => {
        const size = parseFloat(t.match(/[\d.]+/)?.[0] || '0');
        return size < 14 && size > 0;
    });

    if (tinyText.length > 0) {
        console.log(`⚠️  Found ${tinyText.length} instances of text < 14px (hard to read on mobile)`);
        console.log(`   Examples: ${[...new Set(tinyText)].join(', ')}`);
        totalIssues++;
    }

    // Check for uppercase tracking (can affect readability)
    const uppercase = fileContent.match(/uppercase.*?tracking-\[[\d.]+em\]/g) || [];
    if (uppercase.length > 5) {
        console.log(`ℹ️  Heavy use of uppercase with tracking (${uppercase.length} instances)`);
        console.log(`   Ensure adequate spacing for readability`);
    }

    // Check for low opacity text
    const lowOpacity = fileContent.match(/text-(?:white|black)\/(\d+)/g) || [];
    const veryLowOpacity = lowOpacity.filter(t => {
        const opacity = parseInt(t.match(/\/(\d+)/)?.[1] || '100');
        return opacity < 40;
    });

    if (veryLowOpacity.length > 3) {
        console.log(`⚠️  Found ${veryLowOpacity.length} instances of very low opacity text (<40%)`);
        console.log(`   May have poor contrast on some backgrounds`);
        totalIssues++;
    }

    // Check for italic text (can be hard to read in long paragraphs)
    const italicParagraphs = fileContent.match(/<p[^>]*className="[^"]*italic[^"]*"[^>]*>[\s\S]{100,}/g) || [];
    if (italicParagraphs.length > 0) {
        console.log(`ℹ️  ${italicParagraphs.length} long italic paragraphs (can reduce readability)`);
    }

    // Check for line height (leading)
    const hasLeading = fileContent.includes('leading-');
    if (!hasLeading && fileContent.includes('<p')) {
        console.log(`⚠️  No explicit line-height found (may affect readability)`);
        console.log(`   Recommended: leading-relaxed or leading-loose for body text`);
        totalIssues++;
    }

    // Check for font weight variations
    const hasFontWeights = fileContent.match(/font-(thin|light|normal|medium|semibold|bold|black)/g) || [];
    const weightVariety = [...new Set(hasFontWeights)].length;

    if (weightVariety > 0) {
        console.log(`✅ Uses ${weightVariety} font weight variants (good hierarchy)`);
    }

    console.log('✅ Text visibility check complete');
});

// Admin Field Coverage Analysis
console.log('\n\n## ADMIN FIELD COVERAGE ANALYSIS');
console.log('═'.repeat(70));
console.log('');

const adminPath = path.join(pagesDir, 'Admin.tsx');
const adminContent = fs.readFileSync(adminPath, 'utf-8');

// Check what fields Admin can control
const sections = [
    { name: 'Hero', fields: ['eyebrow', 'title', 'subtitle', 'cta'] },
    { name: 'About', fields: ['eyebrow', 'paragraphs', 'labels', 'image'] },
    { name: 'Distinction/Story', fields: ['eyebrow', 'title', 'shortDesc', 'image', 'dialog'] },
    { name: 'Values', fields: ['eyebrow', 'items'] },
    { name: 'Services', fields: ['title', 'desc', 'fullDescription', 'image', 'details'] },
    { name: 'Gallery', fields: ['eyebrow', 'title', 'description', 'galleryItems'] },
    { name: 'Welcome Popup', fields: ['title', 'description', 'image'] },
    { name: 'Backgrounds', fields: ['hero', 'about', 'story', 'values', 'services', 'gallery', 'reviews', 'contact'] }
];

let missingControls = 0;

sections.forEach(section => {
    console.log(`\n### ${section.name}`);

    section.fields.forEach(field => {
        const hasControl = adminContent.includes(`formData.${section.name.toLowerCase().replace(/[\/\s]/g, '')}.${field}`) ||
            adminContent.includes(`formData.${field}`) ||
            adminContent.includes(`"${field}"`);

        if (!hasControl) {
            console.log(`  ⚠️  ${field} - No admin control found`);
            missingControls++;
        } else {
            console.log(`  ✅ ${field} - Admin control present`);
        }
    });
});

// Font Consistency Check
console.log('\n\n## FONT CONSISTENCY CHECK');
console.log('═'.repeat(70));
console.log('');

let fontInconsistencies = 0;

pages.forEach(page => {
    const filePath = path.join(pagesDir, page);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const fontFamilies = fileContent.match(/font-(serif|sans|mono)/g) || [];
    const uniqueFonts = [...new Set(fontFamilies)];

    if (uniqueFonts.length > 2) {
        console.log(`⚠️  ${page}: Uses ${uniqueFonts.length} different font families`);
        console.log(`   ${uniqueFonts.join(', ')}`);
        fontInconsistencies++;
    }
});

if (fontInconsistencies === 0) {
    console.log('✅ Font families are consistent across pages');
}

// Final Summary
console.log('\n');
console.log('═'.repeat(70));
console.log('📊 AUDIT SUMMARY');
console.log('═'.repeat(70));
console.log('');

console.log(`Text Visibility Issues: ${totalIssues}`);
console.log(`Missing Admin Controls: ${missingControls}`);
console.log(`Font Inconsistencies: ${fontInconsistencies}`);
console.log('');

console.log('Recommendations:');
console.log('1. ✓ Minimum 16px for body text on mobile');
console.log('2. ✓ Use leading-relaxed for paragraphs');
console.log('3. ✓ Ensure minimum 4.5:1 contrast ratio');
console.log('4. ✓ Avoid long italic paragraphs');
console.log('5. ✓ Add missing Admin controls for completeness');
console.log('');
console.log('═'.repeat(70));
