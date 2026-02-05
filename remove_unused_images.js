/**
 * Remove Unused Images Script
 * 
 * Deletes all unused images identified by fix_image_mappings.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_BASE = path.join(__dirname, 'client/src/assets');
const GALLERY_BASE = path.join(ASSETS_BASE, 'gallery');
const UNUSED_LIST_PATH = path.join(__dirname, 'unused_images.txt');

function removeUnusedImages() {
    console.log('🗑️  Starting Unused Image Removal...\n');

    if (!fs.existsSync(UNUSED_LIST_PATH)) {
        console.log('❌ unused_images.txt not found. Run fix_image_mappings.js first.');
        return;
    }

    const unusedList = fs.readFileSync(UNUSED_LIST_PATH, 'utf8')
        .split('\n')
        .filter(line => line.trim());

    console.log(`Found ${unusedList.length} images to remove:\n`);

    const removed = [];
    const failed = [];

    unusedList.forEach(imagePath => {
        let fullPath;

        if (imagePath.includes('/')) {
            if (imagePath.startsWith('backgrounds/') || imagePath.startsWith('About/') ||
                imagePath.startsWith('OurStory/') || imagePath.startsWith('Welcome/')) {
                fullPath = path.join(ASSETS_BASE, imagePath);
            } else {
                fullPath = path.join(GALLERY_BASE, imagePath);
            }
        } else {
            fullPath = path.join(ASSETS_BASE, 'backgrounds', imagePath);
        }

        try {
            if (fs.existsSync(fullPath)) {
                fs.unlinkSync(fullPath);
                removed.push(imagePath);
                console.log(`✅ Removed: ${imagePath}`);
            } else {
                console.log(`⚠️  Not found: ${imagePath}`);
                failed.push({ path: imagePath, reason: 'file not found' });
            }
        } catch (error) {
            console.log(`❌ Failed to remove: ${imagePath} - ${error.message}`);
            failed.push({ path: imagePath, reason: error.message });
        }
    });

    console.log('\n' + '='.repeat(60));
    console.log(`Summary:`);
    console.log(`✅ Successfully removed: ${removed.length} files`);
    console.log(`❌ Failed: ${failed.length} files`);
    console.log('='.repeat(60));

    if (failed.length > 0) {
        console.log('\nFailed files:');
        failed.forEach(f => console.log(`  - ${f.path}: ${f.reason}`));
    }
}

try {
    removeUnusedImages();
} catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
}
