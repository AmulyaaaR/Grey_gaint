/**
 * Image Mapping Uniqueness Fix Script
 * 
 * Ensures every image across the entire site is unique.
 * - Detects images used in multiple places
 * - Auto-assigns unique images from available folders
 * - Sets duplicate/missing images to empty string
 * - Identifies extra images to remove
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_CONTENT_PATH = path.join(__dirname, 'client/src/data/siteContent.json');
const ASSETS_BASE = path.join(__dirname, 'client/src/assets');
const GALLERY_BASE = path.join(ASSETS_BASE, 'gallery');
const BACKUP_PATH = path.join(__dirname, 'client/src/data/siteContent.backup.json');

// Get all image files in a directory
function getImagesInDir(dirPath) {
    try {
        if (!fs.existsSync(dirPath)) return [];
        return fs.readdirSync(dirPath).filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext);
        });
    } catch (error) {
        return [];
    }
}

// Build map of all available images per folder
function buildAvailableImagesMap() {
    const available = {};

    // Background images
    const backgrounds = getImagesInDir(path.join(ASSETS_BASE, 'backgrounds'));
    available['backgrounds'] = backgrounds.map(f => `backgrounds/${f}`);

    // Service folders
    const serviceFolders = [
        'LuxuryCorporateEvents',
        'BespokeWeddings&Engagements',
        'DJNights&PrivateParties',
        'TraditionalBands&BrandOpeningDecor',
        'Catering&CulinaryExperiences',
        'Makeup&HairstyleServices',
        'Pastries & Celebration Cakes',
        'BirthdayEvents&CelebrationServices',
        'PublicEvents&SocialActivityServices',
        'School&CollegeEventServices'
    ];

    serviceFolders.forEach(folder => {
        const folderPath = path.join(GALLERY_BASE, folder);
        const images = getImagesInDir(folderPath);
        available[folder] = images.map(f => `${folder}/${f}`);
    });

    // Special folders
    ['About', 'OurStory', 'Welcome', 'Brochure'].forEach(folder => {
        const folderPath = path.join(ASSETS_BASE, folder);
        const images = getImagesInDir(folderPath);
        available[folder] = images.map(f => `${folder}/${f}`);
    });

    // General Gallery
    const generalGallery = getImagesInDir(path.join(GALLERY_BASE, 'GeneralGallery'));
    available['GeneralGallery'] = generalGallery.map(f => `GeneralGallery/${f}`);

    return available;
}

// Extract all current image usages
function extractAllImageUsages(siteContent) {
    const usages = [];

    // Backgrounds
    Object.entries(siteContent.backgrounds || {}).forEach(([key, value]) => {
        if (value && value.trim()) {
            usages.push({
                location: 'backgrounds',
                key,
                path: value,
                type: 'background'
            });
        }
    });

    // Services
    (siteContent.services || []).forEach((service, serviceIdx) => {
        if (service.image && service.image.trim()) {
            usages.push({
                location: 'service',
                serviceIdx,
                serviceName: service.title,
                path: service.image,
                type: 'service-catalogue'
            });
        }

        // Service details
        (service.details || []).forEach((detail, detailIdx) => {
            if (detail.image && detail.image.trim()) {
                usages.push({
                    location: 'service-detail',
                    serviceIdx,
                    serviceName: service.title,
                    detailIdx,
                    detailTitle: detail.title,
                    path: detail.image,
                    type: 'service-detail'
                });
            }
        });
    });

    // Gallery
    (siteContent.galleryPage?.galleryItems || []).forEach((item, idx) => {
        if (item && item.trim()) {
            usages.push({
                location: 'gallery',
                index: idx,
                path: item,
                type: 'gallery-item'
            });
        }
    });

    // Welcome popup
    if (siteContent.welcomePopup?.image) {
        usages.push({
            location: 'welcome',
            path: siteContent.welcomePopup.image,
            type: 'welcome-popup'
        });
    }

    // About
    if (siteContent.about?.image) {
        usages.push({
            location: 'about',
            path: siteContent.about.image,
            type: 'about-image'
        });
    }

    // Story (distinction)
    if (siteContent.distinction?.image) {
        usages.push({
            location: 'story',
            path: siteContent.distinction.image,
            type: 'story-image'
        });
    }

    return usages;
}

// Normalize path (remove GitHub URLs, keep only relative path)
function normalizePath(imagePath) {
    if (!imagePath) return '';

    // Remove GitHub raw URL prefix
    const githubPrefix = 'https://raw.githubusercontent.com/AmulyaaaR/Grey_gaint/main/client/src/assets/';
    if (imagePath.startsWith(githubPrefix)) {
        const relative = imagePath.substring(githubPrefix.length);
        // Convert gallery/ prefix to just the folder name
        return relative.replace('gallery/', '');
    }

    return imagePath;
}

// Find duplicates
function findDuplicates(usages) {
    const pathCounts = {};

    usages.forEach(usage => {
        const normalized = normalizePath(usage.path);
        if (!normalized) return;

        if (!pathCounts[normalized]) {
            pathCounts[normalized] = [];
        }
        pathCounts[normalized].push(usage);
    });

    const duplicates = {};
    Object.entries(pathCounts).forEach(([path, locations]) => {
        if (locations.length > 1) {
            duplicates[path] = locations;
        }
    });

    return duplicates;
}

// Main fix function
function fixImageMappings() {
    console.log('🔧 Starting Image Mapping Fix...\n');

    // Backup original file
    const originalContent = fs.readFileSync(SITE_CONTENT_PATH, 'utf8');
    fs.writeFileSync(BACKUP_PATH, originalContent);
    console.log(`✅ Backup created: ${BACKUP_PATH}\n`);

    const siteContent = JSON.parse(originalContent);
    const availableImages = buildAvailableImagesMap();
    const usages = extractAllImageUsages(siteContent);

    console.log(`📊 Current Statistics:`);
    console.log(`   Total image references: ${usages.length}`);
    console.log(`   Available images: ${Object.values(availableImages).flat().length}\n`);

    // Find duplicates
    const duplicates = findDuplicates(usages);
    console.log(`🔍 Found ${Object.keys(duplicates).length} images used in multiple places:\n`);

    if (Object.keys(duplicates).length > 0) {
        Object.entries(duplicates).forEach(([path, locations]) => {
            console.log(`   "${path}" used in ${locations.length} places:`);
            locations.forEach(loc => {
                console.log(`     - ${loc.type}: ${loc.serviceName || loc.key || loc.location}`);
            });
        });
        console.log();
    }

    // Track which images are already assigned
    const assignedImages = new Set();
    const changesLog = [];

    // Fix backgrounds - ensure unique
    Object.keys(siteContent.backgrounds || {}).forEach(key => {
        const currentPath = normalizePath(siteContent.backgrounds[key]);

        if (!currentPath || assignedImages.has(currentPath)) {
            siteContent.backgrounds[key] = '';
            changesLog.push({
                section: 'backgrounds',
                key,
                action: 'set to empty',
                reason: !currentPath ? 'empty/null' : 'duplicate'
            });
        } else {
            // Normalize the path
            siteContent.backgrounds[key] = currentPath;
            assignedImages.add(currentPath);
        }
    });

    // Fix services
    (siteContent.services || []).forEach((service, serviceIdx) => {
        const folderName = service.title.replace(/\s+/g, '');
        const serviceImages = availableImages[folderName] || [];

        // Fix service catalogue image
        const currentServiceImg = normalizePath(service.image);
        if (!currentServiceImg || assignedImages.has(currentServiceImg)) {
            // Try to find an unused image
            const unusedImg = serviceImages.find(img => !assignedImages.has(img));
            if (unusedImg) {
                service.image = unusedImg;
                assignedImages.add(unusedImg);
                changesLog.push({
                    section: 'service',
                    service: service.title,
                    action: 'assigned new image',
                    from: currentServiceImg || 'empty',
                    to: unusedImg
                });
            } else {
                service.image = '';
                changesLog.push({
                    section: 'service',
                    service: service.title,
                    action: 'set to empty',
                    reason: 'no available images'
                });
            }
        } else {
            service.image = currentServiceImg;
            assignedImages.add(currentServiceImg);
        }

        // Fix service details
        (service.details || []).forEach((detail, detailIdx) => {
            const currentDetailImg = normalizePath(detail.image);

            if (!currentDetailImg || assignedImages.has(currentDetailImg)) {
                // Try to find an unused image from same folder
                const unusedImg = serviceImages.find(img => !assignedImages.has(img));
                if (unusedImg) {
                    detail.image = unusedImg;
                    assignedImages.add(unusedImg);
                    changesLog.push({
                        section: 'service-detail',
                        service: service.title,
                        detail: detail.title,
                        action: 'assigned new image',
                        from: currentDetailImg || 'empty',
                        to: unusedImg
                    });
                } else {
                    detail.image = '';
                    changesLog.push({
                        section: 'service-detail',
                        service: service.title,
                        detail: detail.title,
                        action: 'set to empty',
                        reason: 'duplicate or no available images'
                    });
                }
            } else {
                detail.image = currentDetailImg;
                assignedImages.add(currentDetailImg);
            }
        });
    });

    // Fix gallery items - ensure unique
    const newGalleryItems = [];
    (siteContent.galleryPage?.galleryItems || []).forEach((item, idx) => {
        const normalized = normalizePath(item);
        if (normalized && !assignedImages.has(normalized)) {
            newGalleryItems.push(normalized);
            assignedImages.add(normalized);
        } else {
            changesLog.push({
                section: 'gallery',
                index: idx,
                action: 'removed',
                reason: normalized ? 'duplicate' : 'empty'
            });
        }
    });
    siteContent.galleryPage.galleryItems = newGalleryItems;

    // Fix special images
    ['welcomePopup', 'about', 'distinction'].forEach(section => {
        if (siteContent[section]?.image) {
            const normalized = normalizePath(siteContent[section].image);
            if (!normalized || assignedImages.has(normalized)) {
                siteContent[section].image = '';
                changesLog.push({
                    section,
                    action: 'set to empty',
                    reason: normalized ? 'duplicate' : 'empty'
                });
            } else {
                siteContent[section].image = normalized;
                assignedImages.add(normalized);
            }
        }
    });

    // Save fixed content
    fs.writeFileSync(SITE_CONTENT_PATH, JSON.stringify(siteContent, null, 2));
    console.log(`\n✅ Fixed siteContent.json saved`);
    console.log(`📝 Total changes made: ${changesLog.length}\n`);

    // Show changes
    if (changesLog.length > 0) {
        console.log('📋 Changes Summary:\n');
        changesLog.forEach((change, idx) => {
            console.log(`${idx + 1}. ${change.section}${change.service ? ` - ${change.service}` : ''}${change.detail ? ` - ${change.detail}` : ''}`);
            console.log(`   Action: ${change.action}`);
            if (change.from) console.log(`   From: ${change.from}`);
            if (change.to) console.log(`   To: ${change.to}`);
            if (change.reason) console.log(`   Reason: ${change.reason}`);
            console.log();
        });
    }

    // Identify unused images
    console.log('\n🗑️  Identifying Unused Images:\n');
    const unusedImages = [];
    Object.entries(availableImages).forEach(([folder, images]) => {
        images.forEach(imgPath => {
            if (!assignedImages.has(imgPath)) {
                unusedImages.push({ folder, path: imgPath });
            }
        });
    });

    if (unusedImages.length > 0) {
        console.log(`Found ${unusedImages.length} unused images:`);
        unusedImages.forEach(img => {
            console.log(`   - ${img.path}`);
        });
        console.log('\n⚠️  Consider removing these files to clean up the repository.');
    } else {
        console.log('✅ All images are being used.');
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('Summary:');
    console.log(`✅ All images are now unique across the site`);
    console.log(`📝 Total changes: ${changesLog.length}`);
    console.log(`🗑️  Unused images: ${unusedImages.length}`);
    console.log(`💾 Backup saved to: siteContent.backup.json`);
    console.log('='.repeat(60));

    return { changesLog, unusedImages, assignedImages };
}

// Run
try {
    const result = fixImageMappings();

    // Write unused images list to file
    if (result.unusedImages.length > 0) {
        const unusedList = result.unusedImages.map(img => img.path).join('\n');
        fs.writeFileSync('unused_images.txt', unusedList);
        console.log('\n📄 Unused images list saved to: unused_images.txt');
    }

    process.exit(0);
} catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
}
