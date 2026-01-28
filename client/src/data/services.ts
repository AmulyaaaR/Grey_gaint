// Luxury Corporate Events
import corpMain from "@assets/gallery/LuxuryCorporateEvents/E1.jpg";

// Bespoke Weddings & Engagements
import wedMain from "@assets/gallery/BespokeWeddings&Engagements/W1.jpg";

// DJ Nights & Private Parties
import djMain from "@assets/gallery/DJNights&PrivateParties/Dj.jpg";

// Traditional Bands & Brand Openings
import bandMain from "@assets/gallery/TraditionalBands&BrandOpenings/T1.jpg";

// Catering & Culinary Experiences
import catMain from "@assets/gallery/Catering & Culinary Experiences/C1.jpg";

// Makeup & Styling Services
import makeMain from "@assets/gallery/Makeup&StylingServices/makeup.jpg";

// Pastries & Celebration Cakes
import pastMain from "@assets/gallery/Pastries & Celebration Cakes/C.jpg";

// Balloon Décor & Birthday Celebrations
import ballMain from "@assets/gallery/Balloon Décor & Birthday Celebrations/B1.jpg";

// Private & Social Celebrations
import socMain from "@assets/gallery/Private & Social Celebrations/p1.jpg";

// Schools, Colleges & University Event Services
import instMain from "@assets/gallery/Schools, Colleges & University Event Services/s1.jpg";

export type ServiceDetail = {
    title: string;
    buttonText: string;
    description: string;
    image: string;
};

export type Service = {
    id: string;
    title: string;
    desc: string;
    fullDescription?: string;
    image: string;
    heroImage?: string;
    details?: ServiceDetail[];
};

export const services: Service[] = [
    {
        id: "corporate",
        title: "Luxury Corporate Events",
        desc: "Strategic gatherings designed with precision and brand excellence.",
        fullDescription: "At Grey Giant Events & Services, we curate high-impact corporate events that embody brand excellence, strategic intent, and refined execution. From executive meetings to large-scale corporate galas, every event is thoughtfully designed with precision—balancing elegant aesthetics, seamless coordination, and a professional ambiance that reflects your organization’s identity.\n\nOur team works closely with clients to transform concepts into bespoke corporate experiences that engage audiences and leave a lasting impression. With meticulous planning, advanced technical setups, and flawless on-ground management, we ensure every detail—from staging and lighting to guest experience and backstage coordination—is executed to perfection, delivering events that speak of credibility, class, and sophistication.",
        image: corpMain,
        heroImage: "https://images.unsplash.com/photo-1609189123897-42db027571c9?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Executive Meetings",
                buttonText: "Explore Meetings",
                image: "https://images.unsplash.com/photo-1540760029765-138c8f6d2eac?auto=format&fit=crop&q=80&w=1600",
                description: "High-end, modern boardrooms featuring a professional ambiance for strategic decision-making."
            },
            {
                title: "Gala Dinners",
                buttonText: "View Galas",
                image: "https://images.unsplash.com/photo-1579254216656-3c0c16a3bdd6?auto=format&fit=crop&q=80&w=1600",
                description: "Elegantly set gala dinner tables with fine china, crystal glassware, and exquisite floral arrangements."
            },
            {
                title: "Award Ceremonies",
                buttonText: "View Ceremonies",
                image: "https://images.unsplash.com/photo-1609758009829-9ff5c01f3186?auto=format&fit=crop&q=80&w=1600",
                description: "Capturing the prestige of corporate recognition with professional trophy and stage setups."
            },
            {
                title: "Corporate Networking",
                buttonText: "Plan Event",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
                description: "Sophisticated networking environments designed to foster connections and brand growth."
            }
        ]
    },
    {
        id: "weddings",
        title: "Bespoke Weddings & Engagements",
        desc: "Personalized celebrations crafted with timeless elegance.",
        fullDescription: "At Grey Giant Events & Services, we create bespoke weddings and engagements that are deeply personal, emotionally rich, and timeless in design. Every celebration is thoughtfully curated to reflect your story—blending elegant décor, refined aesthetics, and seamless flow to craft moments that feel intimate yet grand.\n\nFrom concept development to the final farewell, we work closely with couples to design celebrations that feel effortless and unforgettable. Whether it’s an engagement soirée or a wedding celebration, our team ensures every detail is handled with care, creativity, and precision—allowing you to celebrate love without compromise.",
        image: wedMain,
        heroImage: "https://images.unsplash.com/photo-1700062069869-0c59ff21fa3b?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Engagement Soirées",
                buttonText: "View Engagements",
                image: "https://images.unsplash.com/photo-1630801060562-0556f23f8dd4?auto=format&fit=crop&q=80&w=1600",
                description: "Intimate and luxury settings for engagement toasts and celebratory gatherings."
            },
            {
                title: "Mandap & Rituals",
                buttonText: "Explore Rituals",
                image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&q=80&w=1600",
                description: "Grand ceremonial scenes featuring ornate floral ceilings and traditional elegance."
            },
            {
                title: "Reception Galas",
                buttonText: "View Receptions",
                image: "https://images.unsplash.com/photo-1761110787206-2cc164e4913c?auto=format&fit=crop&q=80&w=1600",
                description: "Sophisticated reception halls with grand chandeliers and premium dining setups."
            },
            {
                title: "Bridal Suites",
                buttonText: "Design Your Wedding",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600",
                description: "Luxury preparation spaces designed for comfort and elegance before the big moment."
            }
        ]
    },
    {
        id: "dj-nights",
        title: "DJ Nights & Private Parties",
        desc: "High-energy music experiences designed to elevate celebrations.",
        fullDescription: "Our DJ Nights & Private Parties are designed to energize, excite, and elevate every celebration. With high-quality sound, dynamic lighting, and curated music experiences, we transform ordinary spaces into vibrant party destinations that keep the energy alive all night long.\n\nFrom intimate private gatherings to large-scale party events, we tailor every element to match your vibe and audience. With professional DJs, immersive setups, and flawless coordination, Grey Giant Events ensures every beat drops perfectly and every celebration becomes an unforgettable experience.",
        image: djMain,
        heroImage: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Professional DJ Setups",
                buttonText: "View Setups",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600",
                description: "High-end audio equipment and atmospheric lighting for a professional performance."
            },
            {
                title: "Dance Floor Energy",
                buttonText: "Explore Vibes",
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600",
                description: "Immersive dance floor experiences with dynamic light beams and vibrant crowds."
            },
            {
                title: "Private Lounge Parties",
                buttonText: "View Lounges",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1600",
                description: "Sophisticated lounge areas with refined ambiance for exclusive social gatherings."
            },
            {
                title: "Themed Party Decor",
                buttonText: "Turn Up Celebration",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1600",
                description: "Customized party environments with premium bar service and creative lighting."
            }
        ]
    },
    {
        id: "bands",
        title: "Traditional Bands & Brand Openings",
        desc: "Cultural performances and ceremonial elements for grand launches.",
        fullDescription: "We specialize in grand brand openings and ceremonial events that blend cultural richness with professional execution. From traditional performances to formal launch ceremonies, our events are designed to create powerful first impressions while honoring heritage, symbolism, and occasion.\n\nWith attention to protocol, stage aesthetics, and ceremonial flow, we deliver openings that feel authentic, dignified, and impactful. Whether it’s a corporate inauguration or a culturally rooted launch, our team ensures every moment is orchestrated with grace, precision, and visual grandeur.",
        image: bandMain,
        heroImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Bharatanatyam",
                buttonText: "Explore Dance",
                image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=1600",
                description: "Classical dance performances capturing the elegance and tradition of Karnataka."
            },
            {
                title: "Dollu Kunitha",
                buttonText: "View Folk",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Dollu_Kunitha_-_Folk_dance_of_Karnataka.jpg/1200px-Dollu_Kunitha_-_Folk_dance_of_Karnataka.jpg",
                description: "Energetic and rhythmic drum dance, a powerful folk tradition of the region."
            },
            {
                title: "Kamsale",
                buttonText: "Discover Kamsale",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kamsale_dance.jpg/1200px-Kamsale_dance.jpg",
                description: "Traditional brass instrument dance showcasing rhythmic precision and cultural depth."
            },
            {
                title: "Huli Kunitha",
                buttonText: "View Tiger Dance",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Huli_Vesha_-_Tiger_Dance_of_Karnataka.jpg/1200px-Huli_Vesha_-_Tiger_Dance_of_Karnataka.jpg",
                description: "The iconic Tiger Dance featuring intricate body painting and powerful movements."
            },
            {
                title: "Brand Inaugurations",
                buttonText: "Plan Launch",
                image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1600",
                description: "Professional ribbon-cutting ceremonies for high-end brand launches and openings."
            },
            {
                title: "Ceremonial Flow",
                buttonText: "Discover Ceremonies",
                image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&q=80&w=1600",
                description: "Meticulously orchestrated ceremonial events that honor heritage and prestige."
            }
        ]
    },
    {
        id: "catering",
        title: "Catering & Culinary Experiences",
        desc: "Curated menus and refined presentation for every occasion.",
        fullDescription: "Our catering services combine exceptional presentation, hygiene excellence, and operational precision to deliver premium dining experiences across corporate, wedding, and social events. From luxury buffet spreads to live service counters, every setup is managed professionally to ensure consistency, quality, and guest satisfaction.\n\nComplementing our catering are bespoke cakes and curated dessert experiences, crafted with creativity and finesse. From designer cakes to immersive dessert tables and live food stations, we transform food into an experience—enhancing the celebration with visual appeal, indulgence, and delight.",
        image: catMain,
        heroImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Luxury Buffets",
                buttonText: "Explore Buffets",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1600",
                description: "Grand displays of gourmet dishes with elegant presentation and diverse flavors."
            },
            {
                title: "Fine Dining",
                buttonText: "View Service",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600",
                description: "Professional table service and curated menus for a sophisticated dining experience."
            },
            {
                title: "Live Counters",
                buttonText: "View Live Cooking",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600",
                description: "Interactive culinary experiences with professional chefs preparing gourmet dishes live."
            },
            {
                title: "Table Aesthetics",
                buttonText: "Taste Experience",
                image: "https://images.unsplash.com/photo-1550966842-2862ba990344?auto=format&fit=crop&q=80&w=1600",
                description: "Sophisticated fine-dining arrangements with premium glassware and linens."
            }
        ]
    },
    {
        id: "makeup",
        title: "Makeup & Styling Services",
        desc: "Professional artistry designed for elegance and confidence.",
        fullDescription: "Our Makeup & Styling Services are designed to enhance confidence, elegance, and individuality. Whether for weddings, parties, or special events, our professional artists focus on refined finishes, flawless techniques, and looks that complement your personality and occasion.\n\nFrom bridal makeup and event styling to hair design and nail extensions, we offer complete beauty solutions under one roof. With premium products, skilled artistry, and personalized attention, we ensure you look and feel your best for every moment that matters.",
        image: makeMain,
        heroImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Bridal Artistry",
                buttonText: "View Bridal",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1600",
                description: "Flawless, high-end bridal makeup tailored to your unique style and vision."
            },
            {
                title: "Hair Styling",
                buttonText: "Explore Styles",
                image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1600",
                description: "Professional hair design for weddings, galas, and special celebrations."
            },
            {
                title: "Professional Kits",
                buttonText: "View Artistry",
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1600",
                description: "Using only premium cosmetics and tools to ensure a long-lasting, radiant finish."
            },
            {
                title: "Nail Design",
                buttonText: "Enhance Look",
                image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1600",
                description: "Sophisticated and elegant nail art for a complete and polished look."
            }
        ]
    },
    {
        id: "pastries",
        title: "Pastries & Celebration Cakes",
        desc: "Artfully crafted desserts designed for memorable moments.",
        fullDescription: "Our pastry and cake services are a blend of culinary art and celebration. We specialize in bespoke cakes and gourmet desserts that are as visually stunning as they are delicious. From multi-tiered wedding cakes to delicate French pastries, every creation is crafted with the finest ingredients and meticulous attention to detail.\n\nWhether it's a grand celebration or an intimate gathering, our desserts add a touch of sweetness and sophistication. We work closely with you to design custom cakes that reflect your theme and taste, ensuring every bite is a memorable experience.",
        image: pastMain,
        heroImage: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Designer Cakes",
                buttonText: "View Designs",
                image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1600",
                description: "Bespoke tiered cakes with intricate details and personalized themes."
            },
            {
                title: "Gourmet Pastries",
                buttonText: "Explore Pastries",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1600",
                description: "An assortment of fine French-style pastries and delicate treats."
            },
            {
                title: "Dessert Tables",
                buttonText: "View Tables",
                image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1600",
                description: "Lavishly decorated dessert spreads featuring a variety of high-end sweets."
            },
            {
                title: "Cake Ceremonies",
                buttonText: "Sweeten Celebration",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1600",
                description: "Capturing the joy of celebration with beautiful cake cutting moments."
            }
        ]
    },
    {
        id: "balloon",
        title: "Balloon Décor & Birthday Celebrations",
        desc: "Creative balloon styling for joyful and vibrant occasions.",
        fullDescription: "Our Balloon Décor & Birthday Celebrations bring color, creativity, and joy to every occasion. From themed birthday setups to vibrant balloon installations, we transform spaces into lively, festive environments that delight guests of all ages.\n\nWith custom designs, coordinated color palettes, and thoughtful styling, we ensure each celebration feels unique and visually exciting. Whether it’s an intimate birthday or a grand party, our décor adds charm, energy, and a sense of celebration to every moment.",
        image: ballMain,
        heroImage: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Themed Setups",
                buttonText: "Explore Decor",
                image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1600",
                description: "Elaborate themed birthday environments with creative balloon installations."
            },
            {
                title: "Balloon Arches",
                buttonText: "View Designs",
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1600",
                description: "Sophisticated balloon arches designed to create a grand entrance or backdrop."
            },
            {
                title: "Kids Celebrations",
                buttonText: "Plan Event",
                image: "https://images.unsplash.com/photo-1533294160622-d5fece3e080d?auto=format&fit=crop&q=80&w=1600",
                description: "Vibrant and joyful party setups tailored for children's birthdays."
            },
            {
                title: "Accent Decor",
                buttonText: "Celebrate in Style",
                image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=1600",
                description: "Matching balloon accents and table decor for a cohesive celebration theme."
            }
        ]
    },
    {
        id: "social",
        title: "Private & Social Celebrations",
        desc: "Intimate gatherings designed with elegance and personal touch.",
        fullDescription: "We design private and social celebrations that focus on warmth, elegance, and meaningful connections. From intimate dinners to small social gatherings, our events are curated with subtle luxury, personalized styling, and a relaxed yet refined atmosphere.\n\nEvery celebration is planned with attention to detail—balancing décor, flow, and guest experience. Whether hosted at home or a private venue, Grey Giant Events ensures your gathering feels special, effortless, and truly memorable.",
        image: socMain,
        heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Intimate Dinners",
                buttonText: "Explore Dinners",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600",
                description: "Luxury candlelit dining experiences in private and serene settings."
            },
            {
                title: "Cocktail Parties",
                buttonText: "View Parties",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1600",
                description: "Sophisticated social events with premium bar service and elegant ambiance."
            },
            {
                title: "Garden Gatherings",
                buttonText: "View Garden Events",
                image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1600",
                description: "High-end outdoor celebrations with premium seating and floral decor."
            },
            {
                title: "Social Soirées",
                buttonText: "Create Celebration",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
                description: "Refined indoor social events designed for meaningful connections."
            }
        ]
    },
    {
        id: "institutional",
        title: "Schools, Colleges & University Events",
        desc: "Professional planning and seamless execution of academic, cultural, and institutional events.",
        fullDescription: "We provide professional, institution-friendly event solutions for schools, colleges, and universities, ensuring structured planning and smooth execution across academic and cultural events. Our approach emphasizes safety, protocol, scalability, and precision—making us a trusted partner for educational institutions.\n\nFrom annual days and cultural festivals to convocations, seminars, and sports events, our team manages staging, technical setups, crowd flow, and branding with efficiency and care. Every event is delivered with discipline, clarity, and respect for institutional standards.",
        image: instMain,
        heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
        details: [
            {
                title: "Cultural Festivals",
                buttonText: "Explore Fests",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
                description: "Grand stage setups and professional management for large-scale institutional festivals."
            },
            {
                title: "Convocations",
                buttonText: "View Formal Events",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600",
                description: "Prestigious graduation ceremonies handled with formal protocol and excellence."
            },
            {
                title: "Seminars",
                buttonText: "Explore Seminars",
                image: "https://images.unsplash.com/photo-1505373633560-8283207b9ee9?auto=format&fit=crop&q=80&w=1600",
                description: "Modern academic conference setups with professional AV and coordination."
            },
            {
                title: "Academic Awards",
                buttonText: "View Ceremonies",
                image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1600",
                description: "Grand award ceremonies in prestigious halls, celebrating academic achievement."
            }
        ]
    }
];
