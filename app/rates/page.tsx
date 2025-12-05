import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rates | Luxury Companion in Los Angeles, Glendale, Burbank & Pasadena",
  description:
    "Elegant and upscale companion rates for Los Angeles, Glendale, Burbank, Pasadena, and surrounding areas. Luxury social companionship only — refined, discreet, and unforgettable experiences.",

  keywords:
    "Los Angeles escort rates, Glendale companion rates, Pasadena upscale companion, luxury companion pricing LA, Burbank escort alternatives",

  openGraph: {
    title: "Luxury Companion Rates — Los Angeles & Glendale",
    description:
      "View elegant, upscale social companionship rates for Los Angeles, Glendale, Burbank, and Pasadena.",
  },

  robots: "index, follow",
};

export default function RatesPage() {
  return (
    <>
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">Rates</h1>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-6 leading-relaxed">
          These rates reflect an exclusive, elegant, and luxurious companionship experience
          available throughout <strong>Los Angeles</strong>, including 
          <strong> Glendale, Burbank, Pasadena</strong>, and surrounding upscale neighborhoods.
          <br />
          <br />
          All engagements are based solely on <strong>social time and companionship</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">

          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">1 Hour — $600</h2>
            <p className="text-text-secondary leading-relaxed">
              A warm introduction and elegant first meeting. Ideal for brief social engagements.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">90 Minutes — $800</h2>
            <p className="text-text-secondary leading-relaxed">
              Perfect for a more relaxed experience and meaningful company.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">2 Hours — $1,000</h2>
            <p className="text-text-secondary leading-relaxed">
              Ideal for private social time, outings, or starting an evening together.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">3 Hours — $1,400</h2>
            <p className="text-text-secondary leading-relaxed">
              Perfect for dinner dates, events, or extended social connections.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20 md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">Dinner Date (4 Hours) — $1,800</h2>
            <p className="text-text-secondary leading-relaxed">
              A sophisticated fine dining experience in Los Angeles or surrounding areas.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20 md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">Overnight — $4,500</h2>
            <p className="text-text-secondary leading-relaxed">
              A luxurious, relaxed, and meaningful overnight social engagement.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20 md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">Full Day (24 Hours) — $7,500</h2>
            <p className="text-text-secondary leading-relaxed">
              The ultimate luxury experience — elegant social time and personalized companionship.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 space-y-8">
          <div>
            <h2 className="font-serif text-3xl mb-3">Deposits & Booking Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              A small deposit may be required. Same-day arrangements are selective.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Travel & Extended Engagements</h2>
            <p className="text-text-secondary leading-relaxed">
              Available for domestic and international travel.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Privacy & Respect</h2>
            <p className="text-text-secondary leading-relaxed">
              Your privacy is treated with absolute discretion.
            </p>
          </div>

          <p className="text-sm italic text-text-secondary text-center mt-12">
            All engagements are strictly platonic and social in nature.
          </p>
        </div>
      </section>
    </>
  );
}
