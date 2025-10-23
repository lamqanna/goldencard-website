import type { Metadata } from "next";
import { bodyFont, headingFont } from "./fonts";
import "./globals.css";
// import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Golden Energy Vietnam - Giải Pháp Điện Mặt Trời Hàng Đầu",
    template: "%s | Golden Energy Vietnam",
  },
  description: "Giải pháp điện mặt trời chuyên nghiệp với hơn 500+ dự án thành công. Tiết kiệm chi phí, bảo vệ môi trường, đầu tư bền vững. Đối tác Huawei & Growatt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
