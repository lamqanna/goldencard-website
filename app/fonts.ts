import { Playfair_Display, Montserrat } from "next/font/google";

// Playfair Display for Vietnamese (elegant serif)
export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Montserrat for English (clean sans-serif)
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Keep for backwards compatibility
export const bodyFont = playfairDisplay;
export const headingFont = montserrat;
