import Head from "next/head";

export const revalidate = 0;

export default function RatesPage() {
  return (
    <>
      {/* META TAGS */}
      <Head>
        <title>
          Rates | Luxury Companion in Los Angeles, Glendale, Burbank & Pasadena
        </title>

        <meta
          name="description"
          content="Elegant and upscale companion rates for Los Angeles, Glendale, Burbank, Pasadena, and surrounding areas. Luxury social companionship only — refined, discreet, and unforgettable experiences."
        />

        <meta
          name="keywords"
          content="Los Angeles escort rates, Glendale companion rates, Pasadena upscale companion, luxury companion pricing LA, Burbank escort alternatives"
        />

        <meta
          property="og:title"
          content="Luxury Companion Rates — Los Angeles & Glendale"
        />
        <meta
          property="og:description"
          content="View elegant, upscale social companionship rates for Los Angeles, Glendale, Burbank, and Pasadena."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* PAGE CONTENT */}
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">Rates</h1>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-6 leading-relaxed">
          These rates reflect an exclusive, elegant, and luxurious companionship experience
          available throughout <strong>Los Angeles</strong>, including
          <strong> Glendale, Burbank, Pasadena</strong>, and surrounding upscale neighborhoods.
          <br /><br />
          All engagements are based solely on <strong>social time and companionship</strong>.
        </p>

        {/* RATE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-2">1 Hour — $600</h2>
            <p className="text-text-secondary leading-relaxed">
              A warm introduction and elegant first meeting.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-2">90 Minutes — $800</h2>
            <p className="text-text-secondary leading-relaxed">
              A more relaxed and comfortable experience.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-2">2 Hours — $1,000</h2>
            <p className="text-text-secondary leading-relaxed">
              Perfect for a casual outing or private social time.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-2">3 Hours — $1,400</h2>
            <p className="text-text-secondary leading-relaxed">
              Ideal for refined dinner dates or events.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">
              Dinner Date (Up to 4 Hours) — $1,800
            </h2>
            <p className="text-text-secondary leading-relaxed">
              A sophisticated evening together.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">Overnight — $4,500</h2>
            <p className="text-text-secondary leading-relaxed">
              A luxurious extended engagement.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md md:col-span-2">
            <h2 className="font-serif text-3xl mb-2">
              Full Day (24 Hours) — $7,500
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The ultimate elevated experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
