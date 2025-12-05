export const revalidate = 0;

import Head from "next/head";

export default function RatesPage() {
  return (
    <>
      {/* ===== META TAGS ===== */}
      <Head>
        <title>Rates | Luxury Companion in Los Angeles, Glendale, Burbank & Pasadena</title>

        <meta
          name="description"
          content="Elegant and upscale companion rates for Los Angeles, Glendale, Burbank, Pasadena, and surrounding areas. Luxury social companionship only — refined, discreet, and unforgettable experiences."
        />

        <meta
          name="keywords"
          content="Los Angeles escort rates, Glendale companion rates, Pasadena upscale companion, luxury companion pricing LA, Burbank escort alternatives"
        />

        <meta property="og:title" content="Luxury Companion Rates — Los Angeles & Glendale" />
        <meta
          property="og:description"
          content="View elegant, upscale social companionship rates for Los Angeles, Glendale, Burbank, and Pasadena."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* ===== PAGE CONTENT ===== */}
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

        {/* ===== RATE CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">

          {/* 1 Hour */}
          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">1 Hour — $600</h2>
            <p className="text-text-secondary leading-relaxed">
              A warm introduction and elegant first meeting. Ideal for brief social engagements or
              a quick but memorable connection.
            </p>
          </div>

          {/* 90 Minutes */}
          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">90 Minutes — $800</h2>
            <p className="text-text-secondary leading-relaxed">
              A more relaxed and comfortable experience for those wanting a bit more time to enjoy
              meaningful company.
            </p>
          </div>

          {/* 2 Hours */}
          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">2 Hours — $1,000</h2>
            <p className="text-text-secondary leading-relaxed">
              Perfect for a casual outing, private social time, or starting an evening together at
              an upscale restaurant or lounge.
            </p>
          </div>

          {/* 3 Hours */}
          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20">
            <h2 className="font-serif text-3xl mb-2">3 Hours — $1,400</h2>
            <p className="text-text-secondary leading-relaxed">
              Ideal for dinner dates, events, or an extended social connection filled with ease and
              comfort.
            </p>
          </div>

          {/* Dinner Date */}
          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20 md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">Dinner Date (Up to 4 Hours) — $1,800</h2>
            <p className="text-text-secondary leading-relaxed">
              A sophisticated, elegant evening together — perfect for fine dining in Los Angeles or
              glamorous outings in <strong>Glendale, Burbank, Pasadena</strong>, or Beverly Hills.
            </p>
          </div>

          {/* Overnight */}
          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20 md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">Overnight — $4,500</h2>
            <p className="text-text-secondary leading-relaxed">
              A luxurious, extended engagement designed for meaningful, relaxed companionship.
              Discretion, comfort, and a refined experience throughout the night.
            </p>
          </div>

          {/* Full Day */}
          <div className="p-10 bg-white rounded-xl shadow-md border border-gold/20 md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">Full Day (24 Hours) — $7,500</h2>
            <p className="text-text-secondary leading-relaxed">
              The ultimate luxury experience — private social time, travel companionship, events,
              or a day filled with elegance and personalized presence.
            </p>
          </div>

        </div>

        {/* ===== NOTES SECTION ===== */}
        <div className="max-w-3xl mx-auto mt-20 space-y-8">
          <div>
            <h2 className="font-serif text-3xl mb-3">Deposits & Booking Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              A small deposit may be required to secure your time.  
              Same-day arrangements are available selectively and must be confirmed through email.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Travel & Extended Engagements</h2>
            <p className="text-text-secondary leading-relaxed">
              Available for domestic and international travel.  
              Travel fees, accommodations, and arrangements may be required depending on the
              destination.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Privacy & Respect</h2>
            <p className="text-text-secondary leading-relaxed">
              Your privacy is treated with utmost discretion.  
              Mutual respect, safety, and professionalism are essential for every booking.
            </p>
          </div>

          <p className="text-sm italic text-text-secondary text-center mt-12">
            All engagements are strictly platonic and social in nature. Nothing illegal is offered,
            requested, or implied.
          </p>
        </div>
      </section>
    </>
  );
}
