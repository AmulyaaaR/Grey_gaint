import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'client/src/data/siteContent.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
const assetsRoot = path.join(process.cwd(), 'client/src/assets/gallery');

// Helper to get all images from a directory
function getImages(dir) {
    const fullPath = path.join(assetsRoot, dir);
    if (!fs.existsSync(fullPath)) return [];
    return fs.readdirSync(fullPath)
        .filter(f => !f.startsWith('.') && f.match(/\.(jpg|jpeg|png|webp)$/i))
        .sort();
}

// Get actual images for each service
const serviceImages = {
    'LuxuryCorporateEvents': getImages('LuxuryCorporateEvents'),
    'BespokeWeddings&Engagements': getImages('BespokeWeddings&Engagements'),
    'DJNights&PrivateParties': getImages('DJNights&PrivateParties'),
    'TraditionalBands&BrandOpenings': getImages('TraditionalBands&BrandOpenings'),
    'Catering & Culinary Experiences': getImages('Catering & Culinary Experiences'),
    'Makeup&StylingServices': getImages('Makeup&StylingServices'),
    'Pastries & Celebration Cakes': getImages('Pastries & Celebration Cakes'),
    'Balloon Decor & Birthday Celebrations': getImages('Balloon Decor & Birthday Celebrations'),
    'Private & Social Celebrations': getImages('Private & Social Celebrations'),
    'Schools, Colleges & University Event Services': getImages('Schools, Colleges & University Event Services'),
    'GeneralGallery': getImages('GeneralGallery')
};

console.log('📊 Service Image Counts:');
Object.keys(serviceImages).forEach(key => {
    console.log(`  ${key}: ${serviceImages[key].length} images`);
    if (serviceImages[key].length > 0) {
        console.log(`    Files: ${serviceImages[key].join(', ')}`);
    }
});

// Update services with actual images
content.services.forEach(service => {
    const serviceId = service.id;
    let folderName;

    // Map service ID to folder name
    switch (serviceId) {
        case 'corporate': folderName = 'LuxuryCorporateEvents'; break;
        case 'weddings': folderName = 'BespokeWeddings&Engagements'; break;
        case 'dj-nights': folderName = 'DJNights&PrivateParties'; break;
        case 'bands': folderName = 'TraditionalBands&BrandOpenings'; break;
        case 'catering': folderName = 'Catering & Culinary Experiences'; break;
        case 'makeup': folderName = 'Makeup&StylingServices'; break;
        case 'pastries': folderName = 'Pastries & Celebration Cakes'; break;
        case 'balloon': folderName = 'Balloon Decor & Birthday Celebrations'; break;
        case 'social': folderName = 'Private & Social Celebrations'; break;
        case 'institutional': folderName = 'Schools, Colleges & University Event Services'; break;
        default: return;
    }

    const images = serviceImages[folderName] || [];

    // Set main service image (first image or empty)
    service.image = images.length > 0 ? `${folderName}/${images[0]}` : '';

    // Update details images - use available images or leave empty
    if (service.details) {
        service.details.forEach((detail, idx) => {
            // Distribute images across details, reuse if needed
            if (images.length > 0) {
                const imageIdx = idx % images.length;
                detail.image = `${folderName}/${images[imageIdx]}`;
            } else {
                detail.image = '';
            }
        });
    }
});

// Update gallery to show ONLY GeneralGallery images
const generalGalleryImages = serviceImages['GeneralGallery'] || [];
content.galleryPage.galleryItems = generalGalleryImages.map(img => `GeneralGallery/${img}`);

console.log('\n✅ Updated gallery to show only GeneralGallery images:');
console.log(`   Total images: ${generalGalleryImages.length}`);

// Write back
fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf-8');
console.log('\n✅ siteContent.json updated successfully!');
console.log('   - Service images mapped to actual files');
console.log('   - Empty strings set for missing image slots');
console.log('   - Gallery section shows only GeneralGallery images');
