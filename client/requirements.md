## Packages
framer-motion | Essential for the premium "fade-in" and "slide-up" animations requested for a luxury feel
react-hook-form | For robust form handling (Inquiries, Reviews)
zod | Schema validation (already in base, but ensuring explicit dependency)
@hookform/resolvers | To connect Zod schemas to react-hook-form
embla-carousel-react | For the reviews carousel
lucide-react | For elegant icons (already in base, but emphasizing use)

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  serif: ["'Playfair Display'", "serif"],
  sans: ["'Inter'", "sans-serif"],
  display: ["'Playfair Display'", "serif"],
}
colors:
  luxury:
    black: "#0a0a0a",
    charcoal: "#1a1a1a",
    grey: "#333333",
    silver: "#C0C0C0",
    white: "#ffffff",
    offwhite: "#f5f5f5"

The app relies on `shared/routes.ts` for API types.
Unsplash images will be used for the "Catalogue" feel as requested.
