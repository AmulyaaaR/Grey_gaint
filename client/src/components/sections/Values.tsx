import { motion } from "framer-motion";

export default function Values() {
    const values = [
        { title: "Precision", desc: "Attention to detail is our hallmark. Nothing is left to chance." },
        { title: "Elegance", desc: "We believe in refined aesthetics that speak volumes." },
        { title: "Excellence", desc: "Delivering beyond expectations is our standard." },
        { title: "Artistry", desc: "Every detail is thoughtfully composed to create visually striking experiences." },
        { title: "Integrity", desc: "We operate with honesty, transparency, and respect in every collaboration." },
        { title: "Innovation", desc: "We constantly evolve, bringing fresh ideas and modern approaches to every event." },
        { title: "Commitment", desc: "Your vision becomes our responsibility, from concept to final moment." },
        { title: "Sophistication", desc: "Refined taste guides every decision, ensuring timeless appeal." },
        { title: "Passion", desc: "We pour heart and soul into crafting moments that truly matter." }
    ];

    return (
        <section className="py-24 bg-neutral-900 border-t border-white/5">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-serif text-center mb-16 text-white">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 border border-white/5 bg-black hover:border-white/20 transition-colors"
                        >
                            <h3 className="text-xl font-serif text-primary mb-4">{item.title}</h3>
                            <p className="text-white/50 font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
