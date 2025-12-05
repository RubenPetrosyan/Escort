import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Companion Los Angeles — Elegant & Discreet",
  description:
    "Elite luxury companion available in Los Angeles, Glendale, Burbank, and Pasadena. Elegant, feminine, upscale companionship with complete discretion.",
  metadataBase: new URL("https://escort-iota-sage.vercel.app"),

  openGraph: {
    title: "Luxury Escort Companion — Los Angeles & Glendale Area",
    description:
      "Exclusive luxury companionship in Los Angeles, Glendale, Burbank, and Pasadena. Feminine, elegant, discreet, and unforgettable.",
    url: "https://escort-iota-sage.vercel.app",
    siteName: "Luxury Companion",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Companion — Elegant & Discreet Upscale Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Companion Los Angeles",
    description:
      "Elegant upscale companionship in Los Angeles and Glendale area.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
