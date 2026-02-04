import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'client/src/data/siteContent.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

// Service image mapping based on actual filesystem
const serviceImageMappings = {
    'LuxuryCorporateEvents/E1.jpg': 'LuxuryCorporateEvents/Cimg4.webp',
    'LuxuryCorporateEvents/E2.jpg': 'LuxuryCorporateEvents/Cimg5.webp',
    'LuxuryCorporateEvents/E3.jpg': 'LuxuryCorporateEvents/Cimg6.webp',
    'LuxuryCorporateEvents/E4.jpg': 'LuxuryCorporateEvents/Cimg7.webp',

    'BespokeWeddings&Engagements/W1.jpg': 'BespokeWeddings&Engagements/Wimg1.webp',
    'BespokeWeddings&Engagements/W2.jpg': 'BespokeWeddings&Engagements/Wimg2.webp',
    'BespokeWeddings&Engagements/W3.jpg': 'BespokeWeddings&Engagements/Wimg3.webp',
    'BespokeWeddings&Engagements/W4.jpg': 'BespokeWeddings&Engagements/Wimg4.webp',

    'DJNights&PrivateParties/dj1.jpg': 'DJNights&PrivateParties/DPimg1.webp',
    'DJNights&PrivateParties/dj2.jpg': 'DJNights&PrivateParties/DPimg2.webp',
    'DJNights&PrivateParties/dj3.jpg': 'DJNights&PrivateParties/DPimg3.webp',
    'DJNights&PrivateParties/dj4.jpg': 'DJNights&PrivateParties/DPimg4.webp',

    'TraditionalBands&BrandOpenings/B1.jpg': 'TraditionalBands&BrandOpenings/BBimg1.webp',
    'TraditionalBands&BrandOpenings/B2.jpg': 'TraditionalBands&BrandOpenings/BBimg2.webp',
    'TraditionalBands&BrandOpenings/T1.jpg': 'TraditionalBands&BrandOpenings/BBimg3.webp',
    'TraditionalBands&BrandOpenings/T2.jpg': 'TraditionalBands&BrandOpenings/BBimg4.webp',

    'Catering & Culinary Experiences/C1.jpg': 'Catering & Culinary Experiences/CTimg1.webp',
    'Catering & Culinary Experiences/C2.jpg': 'Catering & Culinary Experiences/CTimg2.webp',
    'Catering & Culinary Experiences/C3.jpg': 'Catering & Culinary Experiences/CTimg3.webp',
    'Catering & Culinary Experiences/Catering, Birthday & Wedding Cakes and Desserts.jpg': 'Catering & Culinary Experiences/CTimg4.webp',

    'Makeup&StylingServices/M1.jpg': 'Makeup&StylingServices/MHimg1.webp',
    'Makeup&StylingServices/M2.jpg': 'Makeup&StylingServices/MHimg2.webp',
    'Makeup&StylingServices/M3.jpg': 'Makeup&StylingServices/MHimg3.webp',
    'Makeup&StylingServices/M4.jpg': 'Makeup&StylingServices/MHimg4.webp',

    'Pastries & Celebration Cakes/C1.jpg': 'Pastries & Celebration Cakes/CDimg1.webp',
    'Pastries & Celebration Cakes/C2.jpg': 'Pastries & Celebration Cakes/CDimg2.webp',
    'Pastries & Celebration Cakes/C3.jpg': 'Pastries & Celebration Cakes/CDimg4.webp',

    'Balloon Decor & Birthday Celebrations/B1.jpg': 'Balloon Decor & Birthday Celebrations/BDimg1.webp',
    'Balloon Decor & Birthday Celebrations/B2.jpg': 'Balloon Decor & Birthday Celebrations/BDimg2.webp',
    'Balloon Decor & Birthday Celebrations/B3.jpg': 'Balloon Decor & Birthday Celebrations/BDimg3.webp',
    'Balloon Decor & Birthday Celebrations/B4.jpg': 'Balloon Decor & Birthday Celebrations/BDimg5.webp',

    'Private & Social Celebrations/p1.jpg': 'Private & Social Celebrations/PSEimg1.webp',
    'Private & Social Celebrations/P2.jpg': 'Private & Social Celebrations/PSEimg2.webp',
    'Private & Social Celebrations/p3.jpg': 'Private & Social Celebrations/PSEimg3.webp',
    'Private & Social Celebrations/p4.jpg': 'Private & Social Celebrations/PSEimg4.webp',
    'Private & Social Celebrations/p2.jpg': 'Private & Social Celebrations/PSEimg2.webp',

    'Schools, Colleges & University Event Services/I1.jpg': 'Schools, Colleges & University Event Services/SCEimg1.webp',
    'Schools, Colleges & University Event Services/I2.jpg': 'Schools, Colleges & University Event Services/SCEimg2.webp',
    'Schools, Colleges & University Event Services/I3.jpg': 'Schools, Colleges & University Event Services/SCEimg3.webp',
    'Schools, Colleges & University Event Services/I4.jpg': 'Schools, Colleges & University Event Services/SCE4.webp',
};

// Recursively replace image paths
function replacePaths(obj) {
    if (!obj) return obj;
    if (typeof obj === 'string') {
        return serviceImageMappings[obj] || obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => replacePaths(item));
    }
    if (typeof obj === 'object') {
        const newObj = {};
        Object.keys(obj).forEach(key => {
            newObj[key] = replacePaths(obj[key]);
        });
        return newObj;
    }
    return obj;
}

// Update content
const updatedContent = replacePaths(content);

// Write back
fs.writeFileSync(contentPath, JSON.stringify(updatedContent, null, 2), 'utf-8');
console.log('✅ Updated all service image paths to match filesystem!');
