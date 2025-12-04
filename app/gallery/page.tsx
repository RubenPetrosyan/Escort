import Image from "next/image";

export const metadata = {
  title: "Gallery | Luxury Companion in Los Angeles",
  description:
    "Explore a refined gallery showcasing elegant, feminine, and upscale imagery from a luxury companion serving Los Angeles, Glendale, Burbank, Pasadena, and surrounding areas.",
  openGraph: {
    title: "Gallery | Luxury Companion in Los Angeles",
    description:
      "A curated showcase of elegant, feminine, and refined imagery representing a luxury companion experience in Los Angeles.",
    url: "https://escort-iota-sage.vercel.app/gallery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elegant luxury companion in Los Angeles",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <section className="section-container py-20">
      <h1 className="text-5xl font-serif text-center mb-4">Gallery</h1>
      <div className="separator mx-auto"></div>

      <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-6 mb-16 leading-relaxed">
        A curated glimpse into my world — elegant, feminine, and refined.
        <br />
        Every photograph reflects the luxury companionship experience I offer
        throughout <strong>Los Angeles, Glendale, Burbank, Pasadena</strong> and
        surrounding upscale areas.
        <br />
        Tasteful, discreet, and sophisticated imagery for discerning gentlemen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {/* IMAGE 1 */}
        <Image
          src="/gallery/gallery1.jpg"
          alt="Elegant luxury companion in evening attire"
          width={600}
          height={800}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />

        {/* IMAGE 2 */}
        <Image
          src="/gallery/gallery2.jpg"
          alt="Luxury companion with refined feminine style"
          width={600}
          height={800}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />

        {/* IMAGE 3 */}
        <Image
          src="/gallery/gallery3.jpg"
          alt="Sophisticated woman posing in upscale Los Angeles setting"
          width={600}
          height={800}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />

        {/* IMAGE 4 */}
        <Image
          src="/gallery/gallery4.jpg"
          alt="Chic and feminine luxury companion in California"
          width={600}
          height={800}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
