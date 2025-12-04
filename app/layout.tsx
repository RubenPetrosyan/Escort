import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Luxury Companion | Elegant & Exclusive",
  description:
    "A luxury, feminine, elegant companion experience. High-end, discreet, and exclusive.",
  icons: {
    icon: "/logo.png", // make sure your logo file is named logo.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
