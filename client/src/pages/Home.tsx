import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/stock_images/luxury_corporate_eve_632147c4.jpg";
import corporateImg from "@assets/image_1768032170619.png";
import weddingImg from "@assets/image_1768032128663.png";
import thematicImg from "@assets/image_1768032149552.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Luxury Event Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm md:text-base font-sans tracking-[0.3em] uppercase text-primary/80 mb-6">
              Premium Event Management
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-8 leading-tight">
              GREY <span className="text-primary">GIANT</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10">
              Specializing in luxury corporate events, bespoke weddings, and exclusive gatherings.
              <br className="hidden md:block" />
              Vision meets excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90 rounded-none px-8 h-14 text-base tracking-wide border-primary">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-none px-8 h-14 text-base tracking-wide">
                <Link href="/services">View Catalogue</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-50" />
              {/* minimalist black architecture abstract - Keeping unsplash for variety */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
                alt="Architecture"
                className="relative z-10 w-full aspect-[4/5] object-cover brightness-75 contrast-125"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Crafting Moments of <span className="italic text-primary">Distinction</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                Grey Giant Events & Services is a premium event management company in Bengaluru.
                We provide end-to-end planning, ensuring every event is seamless, elegant, and stress-free.
                From concept creation to flawless on-site management, every detail is thoughtfully curated
                with precision and refined aesthetics.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center text-white text-sm tracking-widest uppercase hover:text-white/70 transition-colors group">
                  Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMMERSIVE SERVICES OVERVIEW */}
      <section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              title: "CORPORATE EVENTS",
              desc: "High-profile gatherings executed with precision.",
              image: corporateImg
            },
            {
              title: "BESPOKE WEDDINGS",
              desc: "Timeless elegance for your special day.",
              image: weddingImg
            },
            {
              title: "SOCIAL GATHERINGS",
              desc: "Exclusive parties and milestone celebrations.",
              image: thematicImg
            }
          ].map((item, i) => (
            <Link key={i} href="/contact">
              <div className="relative h-[600px] md:h-[700px] overflow-hidden group cursor-pointer border-r border-white/5 last:border-r-0">
                {/* Live Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <h3 className="text-3xl md:text-5xl font-sans font-light tracking-[0.15em] text-white transition-all duration-500 group-hover:tracking-[0.2em]">
                      {item.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-primary mx-auto my-6 transition-all duration-500 group-hover:w-24" />
                    <p className="text-white/70 text-sm md:text-base font-light max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
