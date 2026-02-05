/**
 * Image Validation and Mismatch Detection Script
 * 
 * This script validates all image references in siteContent.json against
 * actual files in the asset folders. It detects:
 * - Missing images (referenced but don't exist)
 * - Duplicate images within services
 * - Incorrect image counts per service
 * - Unused images in folders
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_CONTENT_PATH = path.join(__dirname, 'client/src/data/siteContent.json');
const ASSETS_BASE = path.join(__dirname, 'client/src/assets');
const GALLERY_BASE = path.join(ASSETS_BASE, 'gallery');

// Load siteContent.json
function loadSiteContent() {
    const content = fs.readFileSync(SITE_CONTENT_PATH, 'utf8');
    return JSON.parse(content);
}

// Get all files in a directory
function getFilesInDir(dirPath) {
    try {
        if (!fs.existsSync(dirPath)) {
            return [];
        }
        return fs.readdirSync(dirPath).filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext);
        });
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
        return [];
    }
}

// Extract all image paths from siteContent
function extractImagePaths(siteContent) {
    const images = {
        backgrounds: [],
        services: [],
        serviceDetails: {},
        gallery: [],
        other: []
    };

    // Backgrounds
    Object.entries(siteContent.backgrounds || {}).forEach(([key, value]) => {
        if (value) images.backgrounds.push({ key, path: value });
    });

    // Services
    (siteContent.services || []).forEach(service => {
        if (service.image) {
            images.services.push({
                service: service.title,
                path: service.image
            });
        }

        // Service details
        const detailImages = [];
        (service.details || []).forEach((detail, idx) => {
            if (detail.image) {
                detailImages.push({
                    index: idx,
                    title: detail.title,
                    path: detail.image
                });
            }
        });

        if (detailImages.length > 0) {
            images.serviceDetails[service.title] = detailImages;
        }
    });

    // Gallery
    (siteContent.galleryPage?.galleryItems || []).forEach(path => {
        if (path) images.gallery.push(path);
    });

    // Other images (welcome, about, story)
    if (siteContent.welcomePopup?.image) {
        images.other.push({ key: 'welcome', path: siteContent.welcomePopup.image });
    }
    if (siteContent.about?.image) {
        images.other.push({ key: 'about', path: siteContent.about.image });
    }
    if (siteContent.distinction?.image) {
        images.other.push({ key: 'story', path: siteContent.distinction.image });
    }

    return images;
}

// Check if image file exists
function imageExists(imagePath) {
    let fullPath;

    // Determine full path based on image path format
    if (imagePath.includes('/')) {
        // Has folder in path
        if (imagePath.startsWith('About/') || imagePath.startsWith('OurStory/') ||
            imagePath.startsWith('Welcome/') || imagePath.startsWith('Brochure/')) {
            fullPath = path.join(ASSETS_BASE, imagePath);
        } else {
            fullPath = path.join(GALLERY_BASE, imagePath);
        }
    } else {
        // No folder, assume backgrounds
        fullPath = path.join(ASSETS_BASE, 'backgrounds', imagePath);
    }

    return fs.existsSync(fullPath);
}

// Find duplicate images within a service
function findDuplicatesInService(serviceDetails) {
    const duplicates = [];
    const seen = new Set();

    serviceDetails.forEach(detail => {
        if (seen.has(detail.path)) {
            duplicates.push(detail);
        } else {
            seen.add(detail.path);
        }
    });

    return duplicates;
}

// Validate image counts per service
function validateServiceImageCounts(siteContent) {
    const issues = [];
    const serviceFolderMap = {
        'Luxury Corporate Events': 'LuxuryCorporateEvents',
        'Bespoke Weddings & Engagements': 'BespokeWeddings&Engagements',
        'DJ Night & Private Party Event Services': 'DJNights&PrivateParties',
        'Traditional Bands & Brand Opening Décor': 'TraditionalBands&BrandOpenings',
        'Catering & Culinary Experiences': 'Catering & Culinary Experiences',
        'Makeup & Hairstyle Services': 'Makeup&StylingServices',
        'Customized Cakes & Desserts': 'Pastries & Celebration Cakes',
        'Birthday Events & Celebration Services': 'Balloon Decor & Birthday Celebrations',
        'Public Events & Social Activity Services': 'Private & Social Celebrations',
        'School & College Event Services': 'Schools, Colleges & University Event Services'
    };

    (siteContent.services || []).forEach(service => {
        const folderName = serviceFolderMap[service.title] || service.title.replace(/\s+/g, '');
        const folderPath = path.join(GALLERY_BASE, folderName);

        if (!fs.existsSync(folderPath)) {
            issues.push({
                service: service.title,
                issue: 'Folder does not exist',
                expected: 'N/A',
                actual: 0
            });
            return;
        }

        const filesInFolder = getFilesInDir(folderPath);
        const detailCount = (service.details || []).length;
        const expectedCount = detailCount + 1; // +1 for catalogue image

        if (filesInFolder.length !== expectedCount) {
            issues.push({
                service: service.title,
                issue: `Image count mismatch`,
                expected: expectedCount,
                actual: filesInFolder.length,
                difference: filesInFolder.length - expectedCount
            });
        }
    });

    return issues;
}

// Main validation function
function validateImages() {
    console.log('🔍 Starting Image Validation...\n');

    const siteContent = loadSiteContent();
    const images = extractImagePaths(siteContent);

    let totalIssues = 0;

    // 1. Check for missing images
    console.log('📋 Checking for missing images...');
    const missingImages = [];

    images.backgrounds.forEach(({ key, path: imgPath }) => {
        if (!imageExists(imgPath)) {
            missingImages.push({ type: 'background', key, path: imgPath });
        }
    });

    images.services.forEach(({ service, path: imgPath }) => {
        if (!imageExists(imgPath)) {
            missingImages.push({ type: 'service', service, path: imgPath });
        }
    });

    Object.entries(images.serviceDetails).forEach(([serviceName, details]) => {
        details.forEach(({ title, path: imgPath }) => {
            if (!imageExists(imgPath)) {
                missingImages.push({
                    type: 'service-detail',
                    service: serviceName,
                    detail: title,
                    path: imgPath
                });
            }
        });
    });

    if (missingImages.length > 0) {
        console.log(`❌ Found ${missingImages.length} missing images:`);
        missingImages.forEach(img => {
            console.log(`   - ${img.type}: ${img.path}`);
            if (img.service) console.log(`     Service: ${img.service}`);
            if (img.detail) console.log(`     Detail: ${img.detail}`);
        });
        totalIssues += missingImages.length;
    } else {
        console.log('✅ All referenced images exist');
    }

    // 2. Check for duplicates within services
    console.log('\n📋 Checking for duplicate images within services...');
    const duplicates = [];

    Object.entries(images.serviceDetails).forEach(([serviceName, details]) => {
        const dups = findDuplicatesInService(details);
        if (dups.length > 0) {
            duplicates.push({ service: serviceName, duplicates: dups });
        }
    });

    if (duplicates.length > 0) {
        console.log(`❌ Found duplicates in ${duplicates.length} services:`);
        duplicates.forEach(({ service, duplicates: dups }) => {
            console.log(`   Service: ${service}`);
            dups.forEach(dup => {
                console.log(`     - Detail "${dup.title}" uses: ${dup.path}`);
            });
        });
        totalIssues += duplicates.reduce((sum, d) => sum + d.duplicates.length, 0);
    } else {
        console.log('✅ No duplicate images found within services');
    }

    // 3. Validate image counts
    console.log('\n📋 Validating image counts per service...');
    const countIssues = validateServiceImageCounts(siteContent);

    if (countIssues.length > 0) {
        console.log(`⚠️  Found ${countIssues.length} services with incorrect image counts:`);
        countIssues.forEach(issue => {
            console.log(`   Service: ${issue.service}`);
            console.log(`     Expected: ${issue.expected}, Actual: ${issue.actual}`);
            if (issue.difference > 0) {
                console.log(`     ${issue.difference} extra image(s) in folder`);
            } else if (issue.difference < 0) {
                console.log(`     ${Math.abs(issue.difference)} missing image(s) in folder`);
            }
        });
        totalIssues += countIssues.length;
    } else {
        console.log('✅ All services have correct image counts');
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    if (totalIssues === 0) {
        console.log('✅ All validation checks passed! No issues found.');
    } else {
        console.log(`❌ Validation complete. Found ${totalIssues} total issues.`);
        console.log('\nRecommended actions:');
        if (missingImages.length > 0) {
            console.log('  1. Add missing images to asset folders');
            console.log('  2. Or update siteContent.json to remove invalid references');
        }
        if (duplicates.length > 0) {
            console.log('  3. Use Admin panel - it will auto-fix duplicates on login');
            console.log('  4. Or manually update service detail image paths');
        }
        if (countIssues.length > 0) {
            console.log('  5. Review service folders and remove unused images');
            console.log('  6. Or add missing images for service details');
        }
    }
    console.log('='.repeat(60));

    return totalIssues === 0;
}

// Run validation
try {
    const success = validateImages();
    process.exit(success ? 0 : 1);
} catch (error) {
    console.error('❌ Validation failed with error:', error);
    process.exit(1);
}
