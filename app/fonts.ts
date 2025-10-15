import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";

export const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const headingFont = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
