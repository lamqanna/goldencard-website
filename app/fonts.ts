import { Playfair_Display, Montserrat, Inter } from "next/font/google";

// Inter for Vietnamese body text (clean, readable sans-serif)
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Playfair Display for headings (elegant serif)
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

// Main fonts
export const bodyFont = inter;
export const headingFont = playfairDisplay;
