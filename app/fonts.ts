import { Inter, Inter_Tight } from "next/font/google";

export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const headingFont = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});
