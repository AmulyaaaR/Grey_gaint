import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import corporateImg from "@assets/stock_images/luxury_corporate_eve_632147c4.jpg";
import weddingImg from "@assets/stock_images/elegant_wedding_rece_fa4a2b09.jpg";
import birthdayImg from "@assets/stock_images/birthday_celebration_05d1cd5e.jpg";
import socialImg from "@assets/stock_images/corporate_social_gat_3217eb15.jpg";

// Mix of our premium stock images and some unsplash for variety
const photos = [
  corporateImg,
  weddingImg,
  birthdayImg,
  socialImg,
  // cocktail
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=60",
  // formal dinner
  "https://images.unsplash.com/photo-1519225448526-0cb85873dde1?w=800&auto=format&fit=crop&q=60"
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-12 text-center">Portfolio</h1>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => setSelectedPhoto(src)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
              <img 
                src={src} 
                alt="Event" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl bg-black/90 border-white/10 p-0 overflow-hidden">
          <div className="relative">
            <button 
              onClick={() => setSelectedPhoto(null)} 
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedPhoto && (
              <img 
                src={selectedPhoto} 
                alt="Enlarged view" 
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
