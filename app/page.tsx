import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata = {
  title:
    "Luxury Companion Los Angeles | High-End Private Model in Glendale, Burbank & Pasadena",
  description:
    "Elite luxury companion and high-end private model serving Los Angeles, Glendale, Burbank, Pasadena and surrounding areas. Elegant, discreet, upscale companionship for dinners, social events, travel and exclusive experiences.",
  keywords:
    "luxury companion Los Angeles, Glendale private companion, Burbank upscale companion, Pasadena elite companion, LA high-end companion, luxury model companion, elite dinner date Los Angeles",
  openGraph: {
    title: "Luxury Companion in Los Angeles",
    description:
      "Experience refined, elegant and exclusive luxury companionship in Los Angeles, Glendale, Burbank and Pasadena.",
    url: "https://your-domain.com",
    type: "website",
  },
  robots: "index, follow",
};

export default function HomePage() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <Hero />

      {/* ===== INTRODUCTION SECTION ===== */}
      <section className="section-container py-20 text-center">
        <h2 className="text-4xl font-serif mb-4">
          Luxury Companion in Los Angeles
        </h2>

        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mt-6">
          Indulge in a refined and elegant high-end companion experience in{" "}
          <strong>Los Angeles</strong>, with exclusive availability in{" "}
          <strong>Glendale, Burbank, Pasadena</strong> and surrounding upscale
          areas. I offer a beautifully curated, feminine and sophisticated
          presence for gentlemen who value discretion, class and meaningful
          connection.
        </p>

        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mt-6">
          As a luxury private model companion, I bring confidence, charm and
          warmth to every engagement—whether it’s an intimate dinner, a glamorous
          evening out, a private event, or a personalized one-on-one experience.
          Every moment is elevated with elegance and authenticity.
        </p>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section-container py-24">
        <h2 className="text-4xl font-serif text-center mb-4">What I Offer</h2>

        <div className="separator mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="font-serif text-2xl mb-3">Elegant Dinner Dates</h3>
            <p className="text-text-secondary">
              A graceful and polished companion for fine dining experiences
              across Los Angeles, Glendale, Burbank and Pasadena. Perfect for
              upscale restaurants and intimate evenings.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="font-serif text-2xl mb-3">
              Social Events & Functions
            </h3>
            <p className="text-text-secondary">
              An elegant presence for galas, private gatherings, corporate
              events, birthdays and premium social occasions. Sophistication in
              every step.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="font-serif text-2xl mb-3">Travel Companion</h3>
            <p className="text-text-secondary">
              A warm, feminine and supportive companion for weekend escapes,
              business trips and luxury retreats. Available for California and
              select destinations.
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

      {/* ===== CALL TO ACTION SECTION ===== */}
      <section className="w-full py-20 bg-lux-pink-light text-center">
        <h2 className="text-4xl font-serif mb-4">
          Your Luxury Experience Awaits
        </h2>

        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary max-w-xl mx-auto mt-4">
          Step into a world of elegance, comfort and exclusive companionship.
          Designed for gentlemen who appreciate beauty, warmth and authentic
          connection.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 px-10 py-4 bg-gold text-white rounded-full text-lg hover:opacity-90"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
