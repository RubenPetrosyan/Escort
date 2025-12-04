import Head from "next/head";

export default function ServicesPage() {
  return (
    <>
      {/* ===== META TAGS FOR SEO ===== */}
      <Head>
        <title>Luxury Companion Services in Los Angeles | Glendale • Burbank • Pasadena</title>

        <meta
          name="description"
          content="Explore upscale luxury companion services available in Los Angeles, Glendale, Burbank and Pasadena. Elegant dinner dates, refined event companionship, travel partner experiences and exclusive private social time."
        />

        <meta
          name="keywords"
          content="Los Angeles luxury companion services, Glendale dinner date companion, Burbank upscale companion, Pasadena high-end social companion, elite travel companion LA"
        />

        <meta property="og:title" content="Luxury Companion Services — Los Angeles & Glendale" />
        <meta
          property="og:description"
          content="Elegant, refined and upscale companionship services including fine dining, events, travel and personalized luxury experiences."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ===== MAIN PAGE CONTENT ===== */}
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">Luxury Companion Services</h1>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          I offer an exclusive range of refined, elegant, and high-end companionship services 
          throughout <strong>Los Angeles, Glendale, Burbank, Pasadena</strong> and surrounding 
          upscale areas. Each engagement is crafted with sophistication, warmth, and complete discretion. 
          All services are strictly social and companionship-based. No illegal activities are ever offered or implied.
        </p>

        {/* ===== SERVICES GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ===== DINNER DATES ===== */}
          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-3">Elegant Dinner & Fine Dining Experiences</h2>
            <p className="text-text-secondary leading-relaxed">
              Ideal for upscale restaurants, intimate evenings, and Michelin-star dining. 
              Whether in <strong>Los Angeles</strong>, <strong>Pasadena</strong>, 
              <strong>Glendale</strong> or <strong>Burbank</strong>, I offer a feminine, 
              sophisticated presence that enhances any dining experience. Expect warm 
              conversation, genuine connection, and an unforgettable evening with a high-end 
              private model companion.
            </p>
          </div>

          {/* ===== EVENT COMPANION ===== */}
          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-3">Exclusive Social & Event Companionship</h2>
            <p className="text-text-secondary leading-relaxed">
              Perfect for galas, private celebrations, corporate events, red carpet experiences, 
              industry parties, and elegant social gatherings. I bring poise, grace, and a polished 
              appearance—ideal for creating a strong social impression. Available throughout Los Angeles, 
              Beverly Hills, Pasadena, Glendale and surrounding areas.
            </p>
          </div>

          {/* ===== TRAVEL COMPANION ===== */}
          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-3">Luxury Travel Companion</h2>
            <p className="text-text-secondary leading-relaxed">
              Designed for business trips, weekend retreats, and extended luxury escapes. Whether 
              exploring California or a selected travel destination, I offer a calming, supportive, 
              and engaging presence. Enjoy seamless companionship, unforgettable moments, and 
              beautifully curated experiences during your travels.
            </p>
          </div>

          {/* ===== PRIVATE SOCIAL TIME ===== */}
          <div className="p-10 bg-white rounded-xl shadow-md">
            <h2 className="font-serif text-3xl mb-3">Private Social Companionship</h2>
            <p className="text-text-secondary leading-relaxed">
              Perfect for clients seeking meaningful, relaxed, and quality time in a comfortable, 
              private setting. This is a premium companionship experience centered on presence, 
              warmth, authentic connection, and emotional intimacy—without anything explicit. 
              Available in Los Angeles, Glendale, Burbank, Pasadena and surrounding upscale neighborhoods.
            </p>
          </div>

          {/* ===== EXTENDED ENGAGEMENTS ===== */}
          <div className="p-10 bg-white rounded-xl shadow-md md:col-span-2">
            <h2 className="font-serif text-3xl mb-3">Overnight & Extended Luxury Engagements</h2>
            <p className="text-text-secondary leading-relaxed">
              For those seeking a deeper, more immersive level of connection, extended arrangements—
              including overnights and multi-day luxury companionship—are available upon request. 
              These experiences offer a beautifully relaxed, intimate, and elevated environment 
              tailored to your personal pace and desires (companionship only).
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
