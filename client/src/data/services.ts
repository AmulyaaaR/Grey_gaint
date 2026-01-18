// Luxury Corporate Events
import corpMain from "@assets/gallery/LuxuryCorporateEvents/E1.jpg";
import corpD1 from "@assets/gallery/LuxuryCorporateEvents/E2.jpg";
import corpD2 from "@assets/gallery/LuxuryCorporateEvents/E3.jpg";
import corpD3 from "@assets/gallery/LuxuryCorporateEvents/E4.jpg";

// Bespoke Weddings & Engagements
import wedMain from "@assets/gallery/BespokeWeddings&Engagements/W1.jpg";
import wedD1 from "@assets/gallery/BespokeWeddings&Engagements/W2.jpg";
import wedD2 from "@assets/gallery/BespokeWeddings&Engagements/W3.jpg";
import wedD3 from "@assets/gallery/BespokeWeddings&Engagements/W4.jpg";

// DJ Nights & Private Parties
import djMain from "@assets/gallery/DJNights&PrivateParties/Dj.jpg";
import djD1 from "@assets/gallery/DJNights&PrivateParties/Dj2.jpg";
import djD2 from "@assets/gallery/DJNights&PrivateParties/Dj3.jpg";
import djD3 from "@assets/gallery/DJNights&PrivateParties/Dj4.jpg";

// Traditional Bands & Brand Openings
import bandMain from "@assets/gallery/TraditionalBands&BrandOpenings/T1.jpg";
import bandD1 from "@assets/gallery/TraditionalBands&BrandOpenings/T2.jpg";
import bandD2 from "@assets/gallery/TraditionalBands&BrandOpenings/T3.jpg";
import bandD3 from "@assets/gallery/TraditionalBands&BrandOpenings/B1.jpg";
import bandD4 from "@assets/gallery/TraditionalBands&BrandOpenings/B2.jpg";

// Catering & Culinary Experiences
import catMain from "@assets/gallery/Catering & Culinary Experiences/C1.jpg";
import catD1 from "@assets/gallery/Catering & Culinary Experiences/C2.jpg";
import catD2 from "@assets/gallery/Catering & Culinary Experiences/C3.jpg";
import catD3 from "@assets/gallery/Catering & Culinary Experiences/Catering, Birthday & Wedding Cakes and Desserts.jpg";

// Makeup & Styling Services
import makeMain from "@assets/gallery/Makeup&StylingServices/makeup.jpg";
import makeD1 from "@assets/gallery/Makeup&StylingServices/makeup1.jpg";
import makeD2 from "@assets/gallery/Makeup&StylingServices/makeup2.jpg";
import makeD3 from "@assets/gallery/Makeup&StylingServices/makeup3.jpg";

// Pastries & Celebration Cakes
import pastMain from "@assets/gallery/Pastries & Celebration Cakes/C.jpg";
import pastD1 from "@assets/gallery/Pastries & Celebration Cakes/Cake.jpg";
import pastD2 from "@assets/gallery/Pastries & Celebration Cakes/cake2.jpg";
import pastD3 from "@assets/gallery/Pastries & Celebration Cakes/cake3.jpg";
import pastD4 from "@assets/gallery/Pastries & Celebration Cakes/cake4.jpg";

// Balloon Décor & Birthday Celebrations
import ballMain from "@assets/gallery/Balloon Décor & Birthday Celebrations/B1.jpg";
import ballD1 from "@assets/gallery/Balloon Décor & Birthday Celebrations/B2.jpg";
import ballD2 from "@assets/gallery/Balloon Décor & Birthday Celebrations/B3.jpg";
import ballD3 from "@assets/gallery/Balloon Décor & Birthday Celebrations/B4.jpg";
import ballD4 from "@assets/gallery/Balloon Décor & Birthday Celebrations/B5.jpg";

// Private & Social Celebrations
import socMain from "@assets/gallery/Private & Social Celebrations/p1.jpg";
import socD1 from "@assets/gallery/Private & Social Celebrations/P2.jpg";
import socD2 from "@assets/gallery/Private & Social Celebrations/p3.jpg";
import socD3 from "@assets/gallery/Private & Social Celebrations/p4.jpg";

// Schools, Colleges & University Event Services
import instMain from "@assets/gallery/Schools, Colleges & University Event Services/s1.jpg";
import instD1 from "@assets/gallery/Schools, Colleges & University Event Services/S2.jpg";
import instD2 from "@assets/gallery/Schools, Colleges & University Event Services/S3.jpg";
import instD3 from "@assets/gallery/Schools, Colleges & University Event Services/s4.jpg";

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
    details?: ServiceDetail[];
};

export const services: Service[] = [
    {
        id: "corporate",
        title: "Luxury Corporate Events",
        desc: "Strategic gatherings designed with precision and brand excellence.",
        fullDescription: "At Grey Giant Events & Services, we curate high-impact corporate events that embody brand excellence, strategic intent, and refined execution. From executive meetings to large-scale corporate galas, every event is thoughtfully designed with precision—balancing elegant aesthetics, seamless coordination, and a professional ambiance that reflects your organization’s identity.\n\nOur team works closely with clients to transform concepts into bespoke corporate experiences that engage audiences and leave a lasting impression. With meticulous planning, advanced technical setups, and flawless on-ground management, we ensure every detail—from staging and lighting to guest experience and backstage coordination—is executed to perfection, delivering events that speak of credibility, class, and sophistication.",
        image: corpMain,
        details: [
            {
                title: "Explore Corporate Events",
                buttonText: "Explore Events",
                image: corpD1,
                description: "Visual of full event setup—lighting, seating, and stage setups that showcase seamless coordination."
            },
            {
                title: "View Corporate Experiences",
                buttonText: "View Experiences",
                image: corpD2,
                description: "VIP lounge areas and interactive sessions highlighting client engagement and brand impact."
            },
            {
                title: "Plan a Corporate Event",
                buttonText: "Plan Event",
                image: corpD3,
                description: "Personalized planning and client management focus, transforming ideas into flawless reality."
            }
        ]
    },
    {
        id: "weddings",
        title: "Bespoke Weddings & Engagements",
        desc: "Personalized celebrations crafted with timeless elegance.",
        fullDescription: "At Grey Giant Events & Services, we create bespoke weddings and engagements that are deeply personal, emotionally rich, and timeless in design. Every celebration is thoughtfully curated to reflect your story—blending elegant décor, refined aesthetics, and seamless flow to craft moments that feel intimate yet grand.\n\nFrom concept development to the final farewell, we work closely with couples to design celebrations that feel effortless and unforgettable. Whether it’s an engagement soirée or a wedding celebration, our team ensures every detail is handled with care, creativity, and precision—allowing you to celebrate love without compromise.",
        image: wedMain,
        details: [
            {
                title: "View Wedding Experiences",
                buttonText: "View Experiences",
                image: wedD1,
                description: "Elegant wedding reception with candlelit tables, floral décor, and happy guests showcasing curated setups."
            },
            {
                title: "Design Your Wedding",
                buttonText: "Design Your Wedding",
                image: wedD2,
                description: "Emphasizes personalized planning and client collaboration with mood boards and décor sketches."
            },
            {
                title: "Begin Your Wedding Journey",
                buttonText: "Begin Journey",
                image: wedD3,
                description: "An aspirational invite to start your bespoke wedding journey with our dedicated coordination team."
            }
        ]
    },
    {
        id: "dj-nights",
        title: "DJ Nights & Private Parties",
        desc: "High-energy music experiences designed to elevate celebrations.",
        fullDescription: "Our DJ Nights & Private Parties are designed to energize, excite, and elevate every celebration. With high-quality sound, dynamic lighting, and curated music experiences, we transform ordinary spaces into vibrant party destinations that keep the energy alive all night long.\n\nFrom intimate private gatherings to large-scale party events, we tailor every element to match your vibe and audience. With professional DJs, immersive setups, and flawless coordination, Grey Giant Events ensures every beat drops perfectly and every celebration becomes an unforgettable experience.",
        image: djMain,
        details: [
            {
                title: "Explore Party Experiences",
                buttonText: "Explore Experiences",
                image: djD1,
                description: "Showcases exciting, high-energy party setups and immersive event experiences."
            },
            {
                title: "View DJ Services",
                buttonText: "View DJ Services",
                image: djD2,
                description: "Highlights our professional DJ lineup and music expertise, creating unforgettable vibes."
            },
            {
                title: "Turn Up the Celebration",
                buttonText: "Turn Up Celebration",
                image: djD3,
                description: "Captures the fun and thrill of our private parties, showing how celebrations come alive."
            }
        ]
    },
    {
        id: "bands",
        title: "Traditional Bands & Brand Openings",
        desc: "Cultural performances and ceremonial elements for grand launches.",
        fullDescription: "We specialize in grand brand openings and ceremonial events that blend cultural richness with professional execution. From traditional performances to formal launch ceremonies, our events are designed to create powerful first impressions while honoring heritage, symbolism, and occasion.\n\nWith attention to protocol, stage aesthetics, and ceremonial flow, we deliver openings that feel authentic, dignified, and impactful. Whether it’s a corporate inauguration or a culturally rooted launch, our team ensures every moment is orchestrated with grace, precision, and visual grandeur.",
        image: bandMain,
        details: [
            {
                title: "Explore Brand Openings",
                buttonText: "Explore Openings",
                image: bandD1,
                description: "Expertise in organizing memorable brand launch events with full ceremonial flair."
            },
            {
                title: "View Traditional Performances",
                buttonText: "View Performances",
                image: bandD2,
                description: "Showcases authentic cultural elements and live performance experiences for events."
            },
            {
                title: "Create a Grand Opening",
                buttonText: "Create Grand Opening",
                image: bandD3,
                description: "Emphasizing personalized planning for impactful and prestigious brand launches."
            },
            {
                title: "Discover Ceremonial Events",
                buttonText: "Discover Ceremonies",
                image: bandD4,
                description: "Grand, culturally rich ceremonial experiences with elaborate traditional setups."
            }
        ]
    },
    {
        id: "catering",
        title: "Catering & Culinary Experiences",
        desc: "Curated menus and refined presentation for every occasion.",
        fullDescription: "Our catering services combine exceptional presentation, hygiene excellence, and operational precision to deliver premium dining experiences across corporate, wedding, and social events. From luxury buffet spreads to live service counters, every setup is managed professionally to ensure consistency, quality, and guest satisfaction.\n\nComplementing our catering are bespoke cakes and curated dessert experiences, crafted with creativity and finesse. From designer cakes to immersive dessert tables and live food stations, we transform food into an experience—enhancing the celebration with visual appeal, indulgence, and delight.",
        image: catMain,
        details: [
            {
                title: "Explore Catering Services",
                buttonText: "Explore Services",
                image: catD1,
                description: "Showcases our professional catering capabilities and attention to culinary detail."
            },
            {
                title: "View Culinary Experiences",
                buttonText: "View Experiences",
                image: catD2,
                description: "Highlights interactive, memorable culinary experiences for clients and their guests."
            },
            {
                title: "Taste the Experience",
                buttonText: "Taste Experience",
                image: catD3,
                description: "Focuses on refined presentation and the luxury of taste for food connoisseurs."
            }
        ]
    },
    {
        id: "makeup",
        title: "Makeup & Styling Services",
        desc: "Professional artistry designed for elegance and confidence.",
        fullDescription: "Our Makeup & Styling Services are designed to enhance confidence, elegance, and individuality. Whether for weddings, parties, or special events, our professional artists focus on refined finishes, flawless techniques, and looks that complement your personality and occasion.\n\nFrom bridal makeup and event styling to hair design and nail extensions, we offer complete beauty solutions under one roof. With premium products, skilled artistry, and personalized attention, we ensure you look and feel your best for every moment that matters.",
        image: makeMain,
        details: [
            {
                title: "Explore Styling Services",
                buttonText: "Explore Services",
                image: makeD1,
                description: "Comprehensive styling expertise covering bridal, party looks, and overall grooming."
            },
            {
                title: "View Makeup Artistry",
                buttonText: "View Artistry",
                image: makeD2,
                description: "Highlights professional skills, emphasizing precision across all event types."
            },
            {
                title: "Enhance Your Look",
                buttonText: "Enhance Look",
                image: makeD3,
                description: "Before-and-after transformations offering complete beauty solutions for all your events."
            }
        ]
    },
    {
        id: "pastries",
        title: "Pastries & Celebration Cakes",
        desc: "Artfully crafted desserts designed for memorable moments.",
        image: pastMain,
        details: [
            {
                title: "Explore Dessert Creations",
                buttonText: "Explore Creations",
                image: pastD1,
                description: "Assorted gourmet desserts elegantly plated on a luxury table setup."
            },
            {
                title: "View Cake Designs",
                buttonText: "View Designs",
                image: pastD2,
                description: "Highlights our creative cake artistry and ability to craft unique designs."
            },
            {
                title: "Sweeten Your Celebration",
                buttonText: "Sweeten Celebration",
                image: pastD3,
                description: "Demonstrates how our desserts enhance the overall celebration experience."
            },
            {
                title: "Discover Pastries",
                buttonText: "Discover Pastries",
                image: pastD4,
                description: "Delicate pastries, tarts, and gourmet treats displayed with elegance."
            }
        ]
    },
    {
        id: "balloon",
        title: "Balloon Décor & Birthday Celebrations",
        desc: "Creative balloon styling for joyful and vibrant occasions.",
        fullDescription: "Our Balloon Décor & Birthday Celebrations bring color, creativity, and joy to every occasion. From themed birthday setups to vibrant balloon installations, we transform spaces into lively, festive environments that delight guests of all ages.\n\nWith custom designs, coordinated color palettes, and thoughtful styling, we ensure each celebration feels unique and visually exciting. Whether it’s an intimate birthday or a grand party, our décor adds charm, energy, and a sense of celebration to every moment.",
        image: ballMain,
        details: [
            {
                title: "Explore Birthday Décor",
                buttonText: "Explore Décor",
                image: ballD1,
                description: "Vibrant themed birthday setups with balloon arches and creative party props."
            },
            {
                title: "View Balloon Designs",
                buttonText: "View Designs",
                image: ballD2,
                description: "Artistic balloon arrangements and custom styling for a memorable visual impact."
            },
            {
                title: "Celebrate in Style",
                buttonText: "Celebrate in Style",
                image: ballD3,
                description: "Festive vibes and enhanced guest experiences through our creative décor."
            },
            {
                title: "Plan a Birthday Event",
                buttonText: "Plan Event",
                image: ballD4,
                description: "Personalized birthday planning ensuring a flawless and joyful celebration."
            }
        ]
    },
    {
        id: "social",
        title: "Private & Social Celebrations",
        desc: "Intimate gatherings designed with elegance and personal touch.",
        fullDescription: "We design private and social celebrations that focus on warmth, elegance, and meaningful connections. From intimate dinners to small social gatherings, our events are curated with subtle luxury, personalized styling, and a relaxed yet refined atmosphere.\n\nEvery celebration is planned with attention to detail—balancing décor, flow, and guest experience. Whether hosted at home or a private venue, Grey Giant Events ensures your gathering feels special, effortless, and truly memorable.",
        image: socMain,
        details: [
            {
                title: "Explore Private Events",
                buttonText: "Explore Events",
                image: socD1,
                description: "Intimate and elegant home or small venue setups with curated décor."
            },
            {
                title: "View Social Gatherings",
                buttonText: "View Gatherings",
                image: socD2,
                description: "Personalized social events with a strong focus on ambiance and guest experience."
            },
            {
                title: "Create Your Celebration",
                buttonText: "Create Celebration",
                image: socD3,
                description: "Customized planning sessions for personal events and intimate gatherings."
            }
        ]
    },
    {
        id: "institutional",
        title: "Schools, Colleges & University Events",
        desc: "Professional planning and seamless execution of academic, cultural, and institutional events with precision and care.",
        fullDescription: "We provide professional, institution-friendly event solutions for schools, colleges, and universities, ensuring structured planning and smooth execution across academic and cultural events. Our approach emphasizes safety, protocol, scalability, and precision—making us a trusted partner for educational institutions.\n\nFrom annual days and cultural festivals to convocations, seminars, and sports events, our team manages staging, technical setups, crowd flow, and branding with efficiency and care. Every event is delivered with discipline, clarity, and respect for institutional standards.",
        image: instMain,
        details: [
            {
                title: "Annual Day & Cultural Fests",
                buttonText: "Explore Fests",
                image: instD1,
                description: "Showcases management of large-scale institutional celebrations with structured execution and high-quality stage production."
            },
            {
                title: "Graduation & Convocations",
                buttonText: "View Formal Events",
                image: instD2,
                description: "Demonstrates professionalism, protocol handling, and formal event execution required for academic ceremonies."
            },
            {
                title: "Seminars & Workshops",
                buttonText: "Explore Seminars",
                image: instD3,
                description: "Highlights technical expertise, audio-visual management, and smooth operational coordination for educational events."
            }
        ]
    }
];
