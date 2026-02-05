/**
 * Complete Image Mapping Script
 * Maps all service images according to the 1+6 rule (1 catalogue + 6 details)
 * Also maps backgrounds, Welcome, OurStory assets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SITE_CONTENT_PATH = path.join(__dirname, 'client/src/data/siteContent.json');
const BACKUP_PATH = path.join(__dirname, 'client/src/data/siteContent.before_mapping.json');

// Image mappings based on actual folder contents
const IMAGE_MAPPINGS = {
    backgrounds: {
        hero: 'hero-background.webp',
        home: 'hero-background.webp', // Same as hero
        about: 'About-background.webp',
        story: 'Ourstory-background.webp',
        values: 'Values-background.webp',
        services: 'services-background.webp',
        gallery: 'gallery-background.webp',
        reviews: 'reviews-background.webp',
        contact: 'contact.webp'
    },

    services: {
        'Luxury Corporate Events': {
            folder: 'LuxuryCorporateEvents',
            catalogue: 'Cimg10.webp',
            details: ['cimg9.webp', 'Cimg4.webp', 'Cimg5.webp', 'Cimg6.webp', 'Cimg7.webp', 'Cimg8.webp']
        },
        'Bespoke Weddings & Engagements': {
            folder: 'BespokeWeddings&Engagements',
            catalogue: 'Wimg1.webp',
            details: ['Wimg4.webp', 'Wimg2.webp', 'Wimg3.webp', 'Wimg7.webp', 'Wimg5.webp', 'Wimg6.webp']
        },
        'DJ Night & Private Party Event Services': {
            folder: 'DJNights&PrivateParties',
            catalogue: 'DPimg1.webp',
            details: ['DPimg2.webp', 'DPimg3.webp', 'DPimg4.webp', 'DP4.webp', 'DP5.webp', 'DP6.webp']
        },
        'Traditional Bands & Brand Opening Décor': {
            folder: 'TraditionalBands&BrandOpenings',
            catalogue: 'BBimg1.webp',
            details: ['BBimg2.webp', 'BBimg3.webp', 'BBimg4.webp', 'BBimg5.webp', 'BBimg6.webp', '']
        },
        'Catering & Culinary Experiences': {
            folder: 'Catering & Culinary Experiences',
            catalogue: 'CTimg1.webp',
            details: ['CTimg2.webp', 'CTimg3.webp', 'CTimg4.webp', 'CTimg5.webp', 'CTimg6.webp', 'CTimg7.webp']
        },
        'Makeup & Hairstyle Services': {
            folder: 'Makeup&StylingServices',
            catalogue: 'MHimg1.webp',
            details: ['MHimg2.webp', 'MHimg3.webp', 'MHimg4.webp', 'MHimg5.webp', 'MHimg6.webp', 'MHimg7.webp']
        },
        'Customized Cakes & Desserts': {
            folder: 'Pastries & Celebration Cakes',
            catalogue: 'CDimg1.webp',
            details: ['CDimg2.webp', 'cd10jpg.webp', 'CDimg4.webp', 'CDimg5.webp', 'CDimg6.webp', 'CDimg7.webp']
        },
        'Birthday Events & Celebration Services': {
            folder: 'Balloon Decor & Birthday Celebrations',
            catalogue: 'BDimg1.webp',
            details: ['BDimg2.webp', 'BDimg3.webp', 'BDimg5.webp', 'BDimg6.webp', 'BDimg7.webp', 'BDimg8.webp']
        },
        'Public Events & Social Activity Services': {
            folder: 'Private & Social Celebrations',
            catalogue: 'PSEimg1.webp',
            details: ['PSEimg2.webp', 'PSEimg3.webp', 'PSEimg4.webp', 'PSEimg5.webp', 'PSEmg6.webp', '']
        },
        'School & College Event Services': {
            folder: 'Schools, Colleges & University Event Services',
            catalogue: 'SCEimg1.webp',
            details: ['SCEimg2.webp', 'SCEimg3.webp', 'SCE4.webp', 'SCE5.webp', 'SCE6.webp', 'SCE7.webp']
        }
    }
};

function applyMappings() {
    console.log('🗺️  Starting Complete Image Mapping...\n');

    // Backup
    const originalContent = fs.readFileSync(SITE_CONTENT_PATH, 'utf8');
    fs.writeFileSync(BACKUP_PATH, originalContent);
    console.log(`✅ Backup created: ${BACKUP_PATH}\n`);

    const siteContent = JSON.parse(originalContent);
    let changesCount = 0;

    // Map backgrounds
    console.log('📐 Mapping Background Images...');
    Object.entries(IMAGE_MAPPINGS.backgrounds).forEach(([key, image]) => {
        if (siteContent.backgrounds[key] !== image) {
            console.log(`  ${key}: "${siteContent.backgrounds[key]}" → "${image}"`);
            siteContent.backgrounds[key] = image;
            changesCount++;
        }
    });

    // Map services
    console.log('\n📐 Mapping Service Images...');
    siteContent.services.forEach(service => {
        const mapping = IMAGE_MAPPINGS.services[service.title];
        if (!mapping) {
            console.log(`  ⚠️  No mapping found for: ${service.title}`);
            return;
        }

        console.log(`\n  Service: ${service.title}`);

        // Map catalogue image
        const newCatalogueImg = `${mapping.folder}/${mapping.catalogue}`;
        if (service.image !== newCatalogueImg) {
            console.log(`    Catalogue: "${service.image}" → "${newCatalogueImg}"`);
            service.image = newCatalogueImg;
            changesCount++;
        }

        // Map detail images
        (service.details || []).forEach((detail, idx) => {
            if (idx < mapping.details.length) {
                const detailImg = mapping.details[idx];
                const newDetailImg = detailImg ? `${mapping.folder}/${detailImg}` : '';
                if (detail.image !== newDetailImg) {
                    console.log(`    Detail ${idx + 1} (${detail.title}): "${detail.image}" → "${newDetailImg}"`);
                    detail.image = newDetailImg;
                    changesCount++;
                }
            }
        });
    });

    // Save
    fs.writeFileSync(SITE_CONTENT_PATH, JSON.stringify(siteContent, null, 2));
    console.log(`\n✅ Updated siteContent.json`);
    console.log(`📝 Total changes: ${changesCount}\n`);

    // Summary
    console.log('='.repeat(60));
    console.log('Summary:');
    console.log(`✅ Backgrounds mapped: ${Object.keys(IMAGE_MAPPINGS.backgrounds).length}`);
    console.log(`✅ Services mapped: ${Object.keys(IMAGE_MAPPINGS.services).length}`);
    console.log(`📝 Total changes: ${changesCount}`);
    console.log('='.repeat(60));

    return changesCount;
}

try {
    const changes = applyMappings();
    process.exit(0);
} catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
}
