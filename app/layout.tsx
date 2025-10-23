import type { Metadata } from "next";
import { bodyFont, headingFont } from "./fonts";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "GoldenCard",
    template: "%s | GoldenCard",
  },
  description: "Magnetic card, IT, and solar solutions for modern enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
