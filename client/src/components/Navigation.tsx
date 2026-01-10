import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          GREY GIANT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative group py-2">
              <span className={cn(
                "text-sm font-medium tracking-widest uppercase transition-colors duration-300",
                location === link.href ? "text-white" : "text-muted-foreground group-hover:text-white"
              )}>
                {link.label}
              </span>
              {location === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-px bg-white"
                />
              )}
            </Link>
          ))}
          <Button asChild variant="outline" className="ml-4 border-white/20 text-white hover:bg-white hover:text-black transition-all">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black border-l-white/10 p-10">
            <div className="flex flex-col gap-8 mt-10">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(
                    "text-xl font-serif font-medium transition-colors hover:text-white/70",
                    location === link.href ? "text-white" : "text-white/40"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
