import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Companion Los Angeles — Elegant & Discreet",
  description:
    "Elite luxury companion available in Los Angeles, Glendale, Burbank, and Pasadena. Elegant, feminine, upscale companionship with complete discretion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
