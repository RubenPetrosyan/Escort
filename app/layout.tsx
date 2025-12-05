import type { Metadata } from "next";
import "./globals.css";

// Import your Navbar and Footer components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Escort Website",
  description: "Professional escort services website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar (Global) */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer (Global) */}
        <Footer />
      </body>
    </html>
  );
}
