import Hero from "../components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Introduction Section */}
      <section className="section-container py-20 text-center">
        <h2 className="text-4xl font-serif mb-4">A Luxury Companion Experience</h2>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Discover an elegant, feminine, and exclusive companion who brings grace, 
          beauty, sophistication, and unforgettable presence to every moment. 
          A personalized experience designed for quality, comfort, and connection.
        </p>
      </section>

      {/* Services Preview */}
      <section className="section-container py-24">
        <h2 className="text-4xl font-serif text-center mb-4">What I Offer</h2>
        <div className="separator mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="font-serif text-2xl mb-3">Elegant Dinner Dates</h3>
            <p className="text-text-secondary">
              Perfectly poised for refined events, upscale dinners, 
              and sophisticated evenings out.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="font-serif text-2xl mb-3">Social Events & Functions</h3>
            <p className="text-text-secondary">
              A stunning and graceful presence for parties, galas,  
              corporate events, or private gatherings.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="font-serif text-2xl mb-3">Travel Companion</h3>
            <p className="text-text-secondary">
              Available for refined trips, weekends away, and unforgettable luxury escapes.
            </p>
          </div>

        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="px-8 py-3 bg-gold text-white rounded-full text-lg hover:opacity-90"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Small CTA */}
      <section className="w-full py-20 bg-lux-pink-light text-center">
        <h2 className="text-4xl font-serif mb-4">Your Luxury Experience Awaits</h2>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary max-w-xl mx-auto">
          Step into a world of elegance, warmth, and connection.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 px-10 py-4 bg-gold text-white rounded-full text-lg hover:opacity-90"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
