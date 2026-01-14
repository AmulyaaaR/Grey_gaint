import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import corporateImg from "@assets/gallery/luxury_corporate_eve_632147c4.jpg";
import weddingImg from "@assets/gallery/elegant_wedding_rece_fa4a2b09.jpg";
import djImg from "@assets/gallery/social_gathering_new.jpg";
import bandImg from "@assets/gallery/corporate_event_new.png";
import cateringImg from "@assets/gallery/image_1768032128663.png";
import makeupImg from "@assets/gallery/wedding_event_new.jpg";
import pastriesImg from "@assets/gallery/image_1768032161591.png";
import balloonImg from "@assets/gallery/birthday_celebration_05d1cd5e.jpg";
import socialImg from "@assets/gallery/corporate_social_gat_3217eb15.jpg";

const services = [
  {
    id: "corporate",
    title: "Luxury Corporate Events",
    desc: "Strategic gatherings designed with precision and brand excellence.",
    image: corporateImg
  },
  {
    id: "weddings",
    title: "Bespoke Weddings & Engagements",
    desc: "Personalized celebrations crafted with timeless elegance.",
    image: weddingImg
  },
  {
    id: "dj-nights",
    title: "DJ Nights & Private Parties",
    desc: "High-energy music experiences designed to elevate celebrations.",
    image: djImg
  },
  {
    id: "bands",
    title: "Traditional Bands & Brand Openings",
    desc: "Cultural performances and ceremonial elements for grand launches.",
    image: bandImg
  },
  {
    id: "catering",
    title: "Catering & Culinary Experiences",
    desc: "Curated menus and refined presentation for every occasion.",
    image: cateringImg
  },
  {
    id: "makeup",
    title: "Makeup & Styling Services",
    desc: "Professional artistry designed for elegance and confidence.",
    image: makeupImg
  },
  {
    id: "pastries",
    title: "Pastries & Celebration Cakes",
    desc: "Artfully crafted desserts designed for memorable moments.",
    image: pastriesImg
  },
  {
    id: "balloon",
    title: "Balloon Décor & Birthday Celebrations",
    desc: "Creative balloon styling for joyful and vibrant occasions.",
    image: balloonImg
  },
  {
    id: "social",
    title: "Private & Social Celebrations",
    desc: "Intimate gatherings designed with elegance and personal touch.",
    image: socialImg
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">Our <span className="text-primary">Catalogue</span></h1>
          <p className="text-gray-400 font-light leading-relaxed">
            Every event is a unique masterpiece. Browse our core service categories designed for those who value distinction and professional excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.slice(0, showAll ? services.length : 4).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative h-[350px] md:h-[400px] overflow-hidden border border-white/5"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-3xl font-serif text-white mb-4 tracking-wide group-hover:text-primary transition-colors flex items-baseline gap-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-light mb-8 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-none px-8 h-12 text-base tracking-wide font-bold cursor-pointer"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
