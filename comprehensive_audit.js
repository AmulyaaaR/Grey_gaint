import fs from 'fs';
import path from 'path';

console.log('🔍 COMPREHENSIVE ADMIN-WEBSITE SYNCHRONIZATION AUDIT\n');
console.log('═'.repeat(70));
console.log('');

const contentPath = path.join(process.cwd(), 'client/src/data/siteContent.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
const assetsRoot = path.join(process.cwd(), 'client/src/assets');

// Helper to check if file exists
function fileExists(relativePath) {
    if (!relativePath) return { exists: false, message: 'Empty path' };

    // Try multiple locations based on path structure
    const paths = [
        path.join(assetsRoot, relativePath), // Direct in assets
        path.join(assetsRoot, 'backgrounds', relativePath), // In backgrounds
        path.join(assetsRoot, 'gallery', relativePath) // In gallery
    ];

    for (const fullPath of paths) {
        if (fs.existsSync(fullPath)) {
            return { exists: true, path: fullPath };
        }
    }

    return { exists: false, message: `Not found in assets/, assets/backgrounds/, or assets/gallery/` };
}

let totalIssues = 0;

// Section audit helper
function auditSection(sectionName, data, checks) {
    console.log(`\n## ${sectionName}`);
    console.log('─'.repeat(70));

    let sectionIssues = 0;

    checks.forEach(check => {
        const value = check.getValue(data);
        const label = check.label;

        if (check.type === 'image') {
            const result = fileExists(value);
            if (!result.exists) {
                console.log(`❌ ${label}: "${value}" - ${result.message}`);
                sectionIssues++;
            } else {
                console.log(`✅ ${label}: "${value}"`);
            }
        } else if (check.type === 'exists') {
            if (value === undefined || value === null || value === '') {
                console.log(`⚠️  ${label}: Missing or empty`);
                sectionIssues++;
            } else {
                console.log(`✅ ${label}: Present`);
            }
        } else if (check.type === 'count') {
            const expected = check.expected;
            const actual = Array.isArray(value) ? value.length : 0;
            if (actual !== expected) {
                console.log(`⚠️  ${label}: Expected ${expected}, got ${actual}`);
                sectionIssues++;
            } else {
                console.log(`✅ ${label}: ${actual} items`);
            }
        }
    });

    if (sectionIssues === 0) {
        console.log('\n✅ No issues found in this section!');
    } else {
        console.log(`\n⚠️  Found ${sectionIssues} issue(s) in this section`);
    }

    totalIssues += sectionIssues;
    return sectionIssues;
}

// HERO SECTION
auditSection('Hero Section', content.hero, [
    { type: 'exists', label: 'Eyebrow', getValue: d => d.eyebrow },
    { type: 'exists', label: 'Title Main', getValue: d => d.title?.main },
    { type: 'exists', label: 'Title Accent', getValue: d => d.title?.accent },
    { type: 'exists', label: 'Subtitle', getValue: d => d.subtitle },
    { type: 'exists', label: 'CTA Text', getValue: d => d.cta },
    { type: 'image', label: 'Background', getValue: d => content.backgrounds.hero },
]);

// ABOUT SECTION
auditSection('About Section', content.about, [
    { type: 'exists', label: 'Eyebrow', getValue: d => d.eyebrow },
    { type: 'count', label: 'Paragraphs', getValue: d => d.paragraphs, expected: 2 },
    { type: 'exists', label: 'Labels', getValue: d => d.labels },
    { type: 'image', label: 'Asset Image', getValue: d => d.image },
    { type: 'image', label: 'Background', getValue: d => content.backgrounds.about },
]);

// DISTINCTION/STORY SECTION
auditSection('Distinction/Story Section', content.distinction, [
    { type: 'exists', label: 'Eyebrow', getValue: d => d.eyebrow },
    { type: 'exists', label: 'Title Main', getValue: d => d.title?.main?.[0] },
    { type: 'exists', label: 'Short Description', getValue: d => d.shortDesc },
    { type: 'image', label: 'Asset Image', getValue: d => d.image },
    { type: 'count', label: 'Dialog Paragraphs', getValue: d => d.dialog?.paragraphs, expected: 6 },
    { type: 'image', label: 'Background', getValue: d => content.backgrounds.story },
]);

// VALUES SECTION
auditSection('Values Section', content.values, [
    { type: 'exists', label: 'Eyebrow', getValue: d => d.eyebrow },
    { type: 'count', label: 'Value Items', getValue: d => d.items, expected: 5 },
    { type: 'image', label: 'Background', getValue: d => content.backgrounds.values },
]);

// SERVICES SECTION
console.log('\n## Services Section');
console.log('─'.repeat(70));
let servicesIssues = 0;

console.log(`\nTotal services: ${content.services.length}`);

content.services.forEach((service, idx) => {
    console.log(`\n### Service ${idx + 1}: ${service.title}`);

    // Check main image
    const mainResult = fileExists(service.image);
    if (!mainResult.exists) {
        console.log(`  ❌ Main Image: "${service.image}" - ${mainResult.message}`);
        servicesIssues++;
    } else {
        console.log(`  ✅ Main Image: "${service.image}"`);
    }

    // Check detail images
    if (service.details) {
        service.details.forEach((detail, dIdx) => {
            if (!detail.image) {
                console.log(`  ⚠️  Detail ${dIdx + 1}: No image set (blank slot)`);
            } else {
                const detailResult = fileExists(detail.image);
                if (!detailResult.exists) {
                    console.log(`  ❌ Detail ${dIdx + 1} Image: "${detail.image}" - ${detailResult.message}`);
                    servicesIssues++;
                } else {
                    console.log(`  ✅ Detail ${dIdx + 1} Image: "${detail.image}"`);
                }
            }
        });
    }
});

if (servicesIssues === 0) {
    console.log('\n✅ No issues found in services!');
} else {
    console.log(`\n⚠️  Found ${servicesIssues} issue(s) in services`);
}
totalIssues += servicesIssues;

// GALLERY SECTION
console.log('\n## Gallery Section');
console.log('─'.repeat(70));
let galleryIssues = 0;

console.log(`Total gallery items: ${content.galleryPage.galleryItems.length}`);
content.galleryPage.galleryItems.forEach((item, idx) => {
    const result = fileExists(item);
    if (!result.exists) {
        console.log(`❌ Gallery Item ${idx + 1}: "${item}" - ${result.message}`);
        galleryIssues++;
    } else {
        const isGeneralGallery = item.includes('GeneralGallery/');
        if (!isGeneralGallery) {
            console.log(`⚠️  Gallery Item ${idx + 1}: "${item}" - NOT in GeneralGallery folder!`);
            galleryIssues++;
        } else {
            console.log(`✅ Gallery Item ${idx + 1}: "${item}"`);
        }
    }
});

if (galleryIssues === 0) {
    console.log('\n✅ All gallery items are valid GeneralGallery images!');
} else {
    console.log(`\n⚠️  Found ${galleryIssues} issue(s) in gallery`);
}
totalIssues += galleryIssues;

// WELCOME POPUP
auditSection('Welcome Popup', content.welcomePopup, [
    { type: 'exists', label: 'Title Main', getValue: d => d.title?.main },
    { type: 'exists', label: 'Title Accent', getValue: d => d.title?.accent },
    { type: 'exists', label: 'Description', getValue: d => d.description },
    { type: 'image', label: 'Image', getValue: d => d.image },
]);

// FINAL SUMMARY
console.log('\n');
console.log('═'.repeat(70));
console.log('📊 AUDIT SUMMARY');
console.log('═'.repeat(70));
console.log('');

if (totalIssues === 0) {
    console.log('✅ ✅ ✅ ALL CHECKS PASSED! ✅ ✅ ✅');
    console.log('');
    console.log('Admin and website are perfectly synchronized!');
} else {
    console.log(`⚠️  TOTAL ISSUES FOUND: ${totalIssues}`);
    console.log('');
    console.log('Please review the issues above and make necessary corrections.');
}

console.log('');
console.log('═'.repeat(70));
