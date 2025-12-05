export const revalidate = 0;

import Image from "next/image";

export default function GalleryPage() {
  return (
    <section className="section-container py-28">
      <h1 className="text-5xl font-serif text-center mb-4">Gallery</h1>
      <div className="separator mx-auto"></div>

      <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-16">
        A curated glimpse into my world — elegant, feminine, and refined. Each photograph
        reflects the luxury companionship experience I provide throughout
        <strong> Los Angeles, Glendale, Burbank, Pasadena</strong> and nearby upscale areas.
        Tasteful, discreet, and sophisticated imagery for discerning gentlemen.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div>
          <Image
            src="/gallery/gallery1.jpg"
            alt="Elegant luxury companion in evening attire"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <Image
            src="/gallery/gallery2.jpg"
            alt="Luxury companion with refined feminine style"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <Image
            src="/gallery/gallery3.jpg"
            alt="Sophisticated woman posing in upscale Los Angeles setting"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <Image
            src="/gallery/gallery4.jpg"
            alt="Elegant feminine portrait of a luxury companion"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
