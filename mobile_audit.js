import fs from 'fs';
import path from 'path';

console.log('📱 MOBILE RESPONSIVENESS AUDIT\n');
console.log('═'.repeat(70));
console.log('');

const pagesDir = path.join(process.cwd(), 'client/src/pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

console.log(`Found ${pages.length} page files to audit:\n`);

let totalIssues = 0;
const issues = [];

pages.forEach(page => {
    console.log(`\n## Auditing: ${page}`);
    console.log('─'.repeat(70));

    const filePath = path.join(pagesDir, page);
    const content = fs.readFileSync(filePath, 'utf-8');

    let pageIssues = 0;

    // Check 1: Fixed width values (potential mobile issues)
    const fixedWidths = content.match(/w-\[\d+px\]/g) || [];
    const fixedHeights = content.match(/h-\[\d+px\]/g) || [];

    if (fixedWidths.length > 0 || fixedHeights.length > 0) {
        console.log(`⚠️  Found ${fixedWidths.length + fixedHeights.length} fixed pixel dimensions`);
        console.log(`   (May cause issues on small screens)`);
        pageIssues++;
    }

    // Check 2: Text size responsiveness
    const textSizes = content.match(/text-\[(\d+)px\]/g) || [];
    const smallText = textSizes.filter(t => {
        const size = parseInt(t.match(/\d+/)?.[0] || '0');
        return size < 14 && size > 0;
    });

    if (smallText.length > 3) {
        console.log(`⚠️  Found ${smallText.length} instances of very small text (<14px)`);
        console.log(`   (May be hard to read on mobile)`);
        pageIssues++;
    }

    // Check 3: Responsive breakpoints usage
    const hasSm = content.includes('sm:');
    const hasMd = content.includes('md:');
    const hasLg = content.includes('lg:');

    if (!hasSm && !hasMd && !hasLg) {
        console.log(`❌ No responsive breakpoints found!`);
        console.log(`   (Page may not adapt to different screen sizes)`);
        pageIssues++;
        issues.push(`${page}: No responsive breakpoints`);
    } else {
        console.log(`✅ Uses responsive breakpoints: ${[hasSm && 'sm', hasMd && 'md', hasLg && 'lg'].filter(Boolean).join(', ')}`);
    }

    // Check 4: Horizontal overflow risks
    const overflowHidden = content.includes('overflow-hidden') || content.includes('overflow-x-hidden');
    const overflowScroll = content.includes('overflow-x-scroll') || content.includes('overflow-x-auto');

    if (!overflowHidden && !overflowScroll) {
        console.log(`⚠️  No horizontal overflow control detected`);
        console.log(`   (May cause horizontal scrolling on mobile)`);
        pageIssues++;
    }

    // Check 5: Mobile-specific utilities
    const hasHiddenMobile = content.includes('hidden md:') || content.includes('hidden lg:');
    const hasBlockMobile = content.includes('block md:') || content.includes('flex md:');

    if (hasHiddenMobile || hasBlockMobile) {
        console.log(`✅ Has mobile-specific layout adjustments`);
    }

    // Check 6: Touch-friendly buttons
    const buttons = (content.match(/<button|<Button/g) || []).length;
    const smallPadding = (content.match(/p-[0-2](?!\d)/g) || []).length;

    if (buttons > 3 && smallPadding > buttons / 2) {
        console.log(`⚠️  Buttons may have insufficient padding for touch`);
        console.log(`   (Recommended: min 44x44px touch target)`);
        pageIssues++;
    }

    // Check 7: Images and aspect ratios
    const hasAspectRatio = content.includes('aspect-');
    const hasObjectCover = content.includes('object-cover') || content.includes('object-contain');

    if (content.includes('<img') && !hasAspectRatio && !hasObjectCover) {
        console.log(`⚠️  Images without aspect ratio or object-fit`);
        console.log(`   (May cause layout shifts or distortion)`);
        pageIssues++;
    }

    // Check 8: Grid/Flex responsiveness
    const hasGrid = content.includes('grid');
    const hasGridCols = content.includes('grid-cols-');
    const hasResponsiveGrid = content.match(/md:grid-cols-|lg:grid-cols-|sm:grid-cols-/);

    if (hasGrid && hasGridCols && !hasResponsiveGrid) {
        console.log(`⚠️  Grid without responsive columns`);
        console.log(`   (Same number of columns on all screen sizes)`);
        pageIssues++;
    }

    // Check 9: Container usage
    const hasContainer = content.includes('container');
    const hasMaxW = content.includes('max-w-');

    if (!hasContainer && !hasMaxW) {
        console.log(`⚠️  No container or max-width control`);
        console.log(`   (Content may stretch too wide on large screens)`);
        pageIssues++;
    }

    // Summary for this page
    if (pageIssues === 0) {
        console.log('\n✅ No major responsive issues detected!');
    } else {
        console.log(`\n⚠️  ${pageIssues} potential issue(s) found`);
        issues.push(`${page}: ${pageIssues} issues`);
    }

    totalIssues += pageIssues;
});

// Admin-specific audit
console.log('\n\n## Auditing: Admin.tsx (UX Analysis)');
console.log('─'.repeat(70));

const adminPath = path.join(pagesDir, 'Admin.tsx');
if (fs.existsSync(adminPath)) {
    const adminContent = fs.readFileSync(adminPath, 'utf-8');

    console.log('\n### Navigation Analysis:');
    const tabs = adminContent.match(/"(hero|about|story|values|services|gallery|reviews|contact|socials|welcome|brochure)"/g) || [];
    const uniqueTabs = [...new Set(tabs)].map(t => t.replace(/"/g, ''));
    console.log(`  Total tabs: ${uniqueTabs.length}`);
    console.log(`  Tabs: ${uniqueTabs.join(', ')}`);

    console.log('\n### UX Features:');
    const hasTooltip = adminContent.includes('tooltip') || adminContent.includes('title=');
    const hasPlaceholder = adminContent.includes('placeholder');
    const hasHelperText = adminContent.includes('helper') || adminContent.includes('description');
    const hasValidation = adminContent.includes('error') || adminContent.includes('validate');

    console.log(`  ${hasTooltip ? '✅' : '❌'} Tooltips/Help Text`);
    console.log(`  ${hasPlaceholder ? '✅' : '❌'} Input Placeholders`);
    console.log(`  ${hasHelperText ? '✅' : '❌'} Helper Descriptions`);
    console.log(`  ${hasValidation ? '✅' : '❌'} Validation Feedback`);

    console.log('\n### Mobile Optimization:');
    const hasMobileNav = adminContent.includes('lg:hidden') || adminContent.includes('md:hidden');
    const hasResponsiveSidebar = adminContent.includes('lg:ml-') || adminContent.includes('md:ml-');

    console.log(`  ${hasMobileNav ? '✅' : '⚠️'} Mobile navigation handling`);
    console.log(`  ${hasResponsiveSidebar ? '✅' : '⚠️'} Responsive sidebar layout`);
}

// Final Summary
console.log('\n');
console.log('═'.repeat(70));
console.log('📊 AUDIT SUMMARY');
console.log('═'.repeat(70));
console.log('');

console.log(`Total pages audited: ${pages.length}`);
console.log(`Total potential issues: ${totalIssues}`);
console.log('');

if (issues.length > 0) {
    console.log('Pages with issues:');
    issues.forEach(issue => console.log(`  - ${issue}`));
} else {
    console.log('✅ All pages look responsive!');
}

console.log('');
console.log('Recommendations:');
console.log('1. Test on actual mobile devices');
console.log('2. Use Chrome DevTools mobile emulation');
console.log('3. Check touch target sizes (min 44x44px)');
console.log('4. Verify text readability (min 16px body text)');
console.log('5. Test navigation menu on mobile');
console.log('6. Check form inputs on mobile');
console.log('');
console.log('═'.repeat(70));
