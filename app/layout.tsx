import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "John Lewis & Partners | Product Landing Page",
  description:
    "Discover the latest season collections, exclusive discounts, and premium quality products from John Lewis & Partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-[#FFFFFF] text-gray-900`}
      >
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
