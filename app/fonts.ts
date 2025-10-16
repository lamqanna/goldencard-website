import { Inter, Montserrat } from "next/font/google";

// Inter for Vietnamese (similar to Cal Sans - modern, clean)
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Montserrat for English
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Keep for backwards compatibility
export const bodyFont = inter;
export const headingFont = montserrat;
