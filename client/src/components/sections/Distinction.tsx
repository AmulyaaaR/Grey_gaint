import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import introductionImg from "@assets/gallery/introduction_decor_new.jpg";

export default function Distinction() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-50" />
                        <img
                            src={introductionImg}
                            alt="Architecture"
                            className="relative z-10 w-full max-h-[600px] object-cover mx-auto brightness-75 contrast-125 rounded-sm shadow-2xl"
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto"
                    >
                        <div className="space-y-4">
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-[10px] uppercase tracking-[0.6em] text-primary/60 font-bold block mb-6"
                            >
                                The Heritage
                            </motion.span>
                            <h2 className="text-5xl md:text-7xl lg:text-7xl font-serif text-white tracking-tighter leading-[0.85] flex flex-col items-center">
                                <span>Crafting Moments</span>
                                <span className="text-sm md:text-base lg:text-lg text-white/20 uppercase tracking-[0.5em] my-4 font-sans font-bold">of</span>
                                <span className="bg-gradient-to-b from-primary via-[#f8e4b1] to-primary/40 bg-clip-text text-transparent italic">Distinction</span>
                            </h2>
                        </div>

                        <p className="text-white/40 leading-relaxed font-light text-sm md:text-base max-w-2xl mx-auto italic font-serif">
                            Grey Giant Events & Services is a premier event management firm in Bengaluru.
                            We provide end-to-end planning, ensuring every event is seamless, elegant, and stress-free.
                            From concept creation to flawless on-site management, every detail is thoughtfully curated
                            with precision and refined aesthetics.
                        </p>

                        <div className="pt-4 flex justify-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <motion.button 
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative px-12 py-5 bg-white/[0.02] backdrop-blur-3xl border border-white/10 text-white/50 font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 hover:text-white hover:border-primary/30 group overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-4">
                                            Read Our Story <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-500" />
                                        </span>
                                        <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </motion.button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar bg-[#0a0a0a]/98 backdrop-blur-3xl border border-white/5 p-12 md:p-16 rounded-[3rem] selection:bg-primary/30 outline-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                                    <DialogHeader className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8 justify-center">
                                            <div className="w-10 h-[1px] bg-primary/20" />
                                            <DialogDescription className="text-[10px] uppercase tracking-[0.6em] text-primary/60 font-bold">
                                                Our Heritage
                                            </DialogDescription>
                                            <div className="w-10 h-[1px] bg-primary/20" />
                                        </div>
                                        <DialogTitle className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tight italic text-center font-light">"A Legacy of <span className="text-primary not-italic">Excellence</span>"</DialogTitle>
                                    </DialogHeader>
                                <div className="relative z-10 text-white/50 text-sm md:text-base leading-relaxed font-light space-y-8 text-justify italic font-serif">
                                    <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                                        At Grey Giant Events, our story began with a simple yet ambitious vision: to transform standard event planning into an art form. We believe that every gathering, whether a grand wedding or a strategic corporate summit, is a unique canvas waiting for a masterstroke of design and precision.
                                    </p>
                                    <p>
                                        Over years of orchestrating high-profile events in the heart of Bengaluru, we have refined a philosophy of "Silent Excellence." This means our planning is invisible yet omni-present, allowing our clients to be guests at their own milestones while we manage every intricate detail with military precision and artistic flair.
                                    </p>
                                    <p>
                                        Our commitment to the "Global Standard" is reflected in our selection of vendors, our use of cutting-edge event technology, and our unwavering dedication to aesthetics. We don't just plan events; we architect experiences that linger in the memory long after the final toast.
                                    </p>
                                    <p className="border-l-2 border-primary/20 pl-8 italic text-white/40 py-2">
                                        Whether orchestrating a prestigious corporate engagement or an intimate personal celebration, we design tailor-made experiences that embody class, professionalism, and timeless style. At Grey Giant, where vision is elevated through excellence and every occasion leaves a lasting impression.
                                    </p>
                                </div>
                            </DialogContent>
                            </Dialog>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
