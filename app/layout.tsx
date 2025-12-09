import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Elegant. Feminine. Exclusive.",
  description: "Luxury companion in Los Angeles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Global Navbar */}
        <Navbar />

        {/* Main Content — padded so it's not hidden behind fixed navbar */}
        <main className="pt-20">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
