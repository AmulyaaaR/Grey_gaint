import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";

export default function ServiceDetails() {
    const [, params] = useRoute("/services/:id");
    const service = services.find((s) => s.id === params?.id);

    if (!service) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
                    <Button onClick={() => window.location.href = '/'} className="bg-primary text-black rounded-none">
                        Return Home
                    </Button>
                </div>
            </div>
        );
    }

    // Handle navigation to sections on home page
    const navigateToSection = (sectionId: string) => {
        window.location.href = `/#${sectionId}`;
    };

    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        <span className="w-12 h-[1px] bg-primary/20" />
                        <span className="text-[10px] uppercase tracking-[0.7em] text-primary/60 font-bold">
                            The Offering
                        </span>
                        <span className="w-12 h-[1px] bg-primary/20" />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 tracking-tighter leading-[0.9]">
                        {service.title.split(' ').slice(0, -1).join(' ')} <br />
                        <span className="bg-gradient-to-b from-primary via-[#f8e4b1] to-primary/40 bg-clip-text text-transparent italic">
                            {service.title.split(' ').slice(-1)}
                        </span>
                    </h1>
                    <p className="text-white/40 max-w-2xl mx-auto font-light italic text-sm md:text-base leading-relaxed font-serif">
                        "{service.desc}"
                    </p>
                </motion.div>

                {/* Content Section: Image Left, Text Right */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative h-[400px] md:h-[600px] group overflow-hidden border border-white/5"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </motion.div>

                    {/* Right: Description & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="mb-10 p-5 rounded-full bg-primary/5 border border-primary/10 w-fit">
                            <Star className="w-8 h-8 text-primary animate-pulse" />
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-serif text-primary italic mb-6">Crafting Your Vision</h2>
                            <p className="text-white/70 font-light leading-relaxed text-lg whitespace-pre-line">
                                {service.fullDescription || service.desc}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mt-auto">
                            <Button
                                onClick={() => navigateToSection('contact')}
                                className="bg-gradient-to-r from-primary via-[#f8e4b1] to-primary text-black font-bold uppercase tracking-[0.3em] text-[11px] h-16 px-12 rounded-none hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-500"
                            >
                                Plan Event
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => navigateToSection('services')}
                                className="border-white/10 text-white/60 font-bold uppercase tracking-[0.3em] text-[11px] h-16 px-12 rounded-none hover:text-white hover:border-white/20 transition-all duration-500"
                            >
                                Discover More
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Optional: Gallery/Details Section */}
                {service.details && (
                    <div className="grid md:grid-cols-2 gap-8">
                        {service.details.slice(0, 2).map((detail, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-6 bg-neutral-900/50 border border-white/5 hover:border-primary/20 transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden mb-6">
                                    <img src={detail.image} alt={detail.title} className="w-full h-full object-cover transition-all duration-700" />
                                </div>
                                <h4 className="text-primary text-xs uppercase tracking-widest font-bold mb-2">{detail.title}</h4>
                                <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-wider">{detail.description}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
