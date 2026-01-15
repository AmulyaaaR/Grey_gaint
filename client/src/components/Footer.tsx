import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
      {/* Abstract Background Noise / Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-white tracking-tighter">
              GREY <span className="bg-gradient-to-b from-primary via-[#f8e4b1] to-primary/40 bg-clip-text text-transparent italic">GIANT</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light italic">
              "Where vision meets excellence. Creating timeless, bespoke events with precision and refined aesthetics."
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/60 font-bold uppercase tracking-[0.5em] mb-10 text-[10px]">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/30 hover:text-primary transition-colors text-sm font-light tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-bold uppercase tracking-[0.5em] mb-10 text-[10px]">Contact Info</h4>
            <ul className="space-y-6 text-sm text-white/30 font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-primary shrink-0 transition-transform hover:scale-110" />
                <span className="leading-relaxed">Post-office, Kamakshipalya,<br />Bengaluru, Karnataka 560079</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-primary shrink-0 transition-transform hover:scale-110" />
                <span>+91 7483216698</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-primary shrink-0 transition-transform hover:scale-110" />
                <span>greygiant01@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 font-bold uppercase tracking-[0.5em] mb-10 text-[10px]">Operation Hours</h4>
            <div className="text-sm text-white/30 font-light space-y-2">
              <p>Monday - Sunday</p>
              <p className="text-primary font-serif text-lg italic">Open 24 Hours</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>&copy; {new Date().getFullYear()} Grey Darshan Events & Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
