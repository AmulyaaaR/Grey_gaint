import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020202] p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg bg-white/[0.01] border border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 md:p-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="w-20 h-20 bg-primary/5 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 text-primary"
        >
          <AlertCircle size={32} />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight italic">
          Lost in <span className="text-primary not-italic">Refinement</span>
        </h1>
        
        <p className="text-white/40 font-serif italic text-base md:text-lg mb-12 leading-relaxed">
          "The path you seek is currently unavailable. Allow us to guide you back to the sanctuary of excellence."
        </p>

        <Button asChild className="group relative px-12 h-16 bg-primary text-black font-bold uppercase tracking-[0.3em] text-[11px] rounded-none hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-500 overflow-hidden">
          <Link href={import.meta.env.BASE_URL}>
            <span className="relative z-10 flex items-center gap-3">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Return Home
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
