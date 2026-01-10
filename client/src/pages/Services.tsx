import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

import corporateImg from "@assets/stock_images/luxury_corporate_eve_632147c4.jpg";
import weddingImg from "@assets/stock_images/elegant_wedding_rece_fa4a2b09.jpg";
import birthdayImg from "@assets/stock_images/birthday_celebration_05d1cd5e.jpg";
import socialImg from "@assets/stock_images/corporate_social_gat_3217eb15.jpg";

const services = [
  {
    id: "corporate",
    title: "Luxury Corporate Events",
    desc: "Product launches, galas, and conferences executed with absolute professionalism.",
    image: corporateImg
  },
  {
    id: "weddings",
    title: "Bespoke Weddings",
    desc: "Fairytale settings tailored to your unique love story.",
    image: weddingImg
  },
  {
    id: "birthdays",
    title: "Birthday Celebrations",
    desc: "Milestone parties that will be remembered for a lifetime.",
    image: birthdayImg
  },
  {
    id: "social",
    title: "Exclusive Social Gatherings",
    desc: "Private dinners and elite meetups curated with privacy and class.",
    image: socialImg
  }
];

export default function Services() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Catalogue</h1>
          <p className="text-white/60 font-light">
            We curate experiences. Browse our specialized service offerings designed for those who seek perfection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[500px] overflow-hidden border border-white/10"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-3xl font-serif text-white mb-3">{service.title}</h3>
                <p className="text-white/70 font-light mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.desc}
                </p>
                <Link href="/contact" className="inline-flex items-center text-sm uppercase tracking-widest text-white border-b border-white pb-1 hover:text-white/80 transition-colors">
                  Inquire Now <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
