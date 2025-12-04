import Head from "next/head";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      {/* ===== META TAGS FOR SEO ===== */}
      <Head>
        <title>Gallery | Luxury Companion in Los Angeles, Glendale, Burbank & Pasadena</title>

        <meta
          name="description"
          content="Elegant and tasteful gallery of a luxury companion serving Los Angeles, Glendale, Burbank & Pasadena. A refined visual experience showcasing sophistication, beauty, and femininity."
        />

        <meta
          name="keywords"
          content="luxury companion gallery Los Angeles, Glendale companion photos, upscale escort alternative images Pasadena, Burbank high-end companion gallery"
        />

        <meta property="og:title" content="Luxury Companion Gallery — Los Angeles" />
        <meta
          property="og:description"
          content="A refined visual collection showcasing poise, elegance, and timeless feminine beauty."
        />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* ===== PAGE CONTENT ===== */}
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">Gallery</h1>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-6 leading-relaxed">
          A curated glimpse into my world — elegant, feminine, and refined.  
          Each photograph reflects the luxury companionship experience I provide 
          throughout <strong>Los Angeles, Glendale, Burbank, Pasadena</strong> and surrounding upscale areas.
          <br />
          Tasteful, discreet, and sophisticated imagery for discerning gentlemen.
        </p>

        {/* ===== GALLERY GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          
          {/* Replace these sample images with your actual photos */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/sample1.jpg"
              alt="Elegant luxury companion in evening attire"
              width={600}
              height={800}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/sample2.jpg"
              alt="Luxury companion with refined feminine style"
              width={600}
              height={800}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/sample3.jpg"
              alt="Sophisticated woman posing in upscale Los Angeles setting"
              width={600}
              height={800}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/sample4.jpg"
              alt="High-end companion in glamorous attire"
              width={600}
              height={800}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/sample5.jpg"
              alt="Luxury model-inspired portrait"
              width={600}
              height={800}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/sample6.jpg"
              alt="Elegant portrait suited for upscale companionship"
              width={600}
              height={800}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>

        {/* ===== DISCRETION MESSAGE ===== */}
        <p className="text-center text-text-secondary max-w-xl mx-auto mt-16 leading-relaxed">
          For privacy and discretion, the gallery remains tasteful and refined.  
          Additional photos may be available upon verified request.
        </p>
      </section>
    </>
  );
}
