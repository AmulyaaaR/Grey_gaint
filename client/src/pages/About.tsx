import { motion } from "framer-motion";

const About_img = "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&auto=format&fit=crop&q=60";

export default function About() {
  return (
    <div className="min-h-fit bg-[#020202] text-white py-24 selection:bg-primary/30 relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <section className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* LEFT COLUMN: Header & Text */}
          <div className="flex-1 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start mb-16"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-10"
              >
                <span className="w-10 h-[1px] bg-primary/20" />
                <span className="text-[10px] uppercase tracking-[0.7em] text-primary/60 font-bold">
                  The Organization
                </span>
                <span className="w-10 h-[1px] bg-primary/20 lg:hidden" />
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 tracking-tighter leading-[0.9] whitespace-nowrap">
                About <span className="bg-gradient-to-b from-primary via-[#f8e4b1] to-primary/40 bg-clip-text text-transparent italic">Giants</span>
              </h1>
            </motion.div>

            {/* Descriptive Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none text-white/70 font-light leading-relaxed text-justify space-y-8"
            >
              <p className="first-letter:text-6xl first-letter:text-primary first-letter:font-serif first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                "Grey Giant Events & Services is a premium event management company specializing in luxury corporate events, bespoke weddings, birthday celebrations, and exclusive social gatherings."
              </p>
              <p>
                We provide end-to-end planning, coordination, and execution, ensuring every event is seamless, elegant, and stress-free. From concept creation to flawless on-site management, every detail is thoughtfully curated with precision and refined aesthetics.
              </p>
              <p>
                Whether it is a high-profile corporate gathering or a personal milestone celebration, we deliver customized experiences that reflect class, professionalism, and timeless elegance. At Grey Giant, we craft moments of distinction where vision meets excellence and every event leaves a lasting impression.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image with Popping Elements & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative mt-4 lg:mt-0"
          >
            {/* Main Image Container */}
            <div className="relative h-full min-h-[600px] overflow-visible rounded-sm group">
              {/* The Image Itself */}
              <div className="absolute inset-0 overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                <img
                  src={About_img}
                  alt="Grey Giant Event Setup"
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
              </div>

              {/* Popping 24/7 Box - Breaks boundary */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 md:-left-12 p-8 md:p-10 backdrop-blur-3xl bg-black/60 border border-primary/20 shadow-[0_20px_50px_rgba(212,175,55,0.15)] group/box z-30"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <p className="font-serif text-5xl text-white mb-2 group-hover:text-primary transition-colors duration-500">24/7</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white/70 transition-colors">Support & Perfection</p>
                {/* Internal Glow */}
                <div className="absolute -inset-1 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Stats Overlaid on Image */}
              <div className="absolute top-12 right-12 space-y-8 z-20">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-xl hover:bg-primary/5 transition-colors cursor-default"
                >
                  <p className="font-serif text-3xl text-primary/90 mb-1">Elite</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-medium">Curation Service</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-xl hover:bg-primary/5 transition-colors cursor-default"
                >
                  <p className="font-serif text-3xl text-primary/90 mb-1">Tailored</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-medium">Global Execution</p>
                </motion.div>
              </div>

              {/* Hardware Micro-Accents */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-primary/30 z-0" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-primary/30 z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Elegant Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 w-full border-b border-white/5" />
    </div>
  );
}
