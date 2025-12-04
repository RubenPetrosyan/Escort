import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      {/* ===== META TAGS FOR SEO ===== */}
      <Head>
        <title>Contact | Luxury Companion in Los Angeles, Glendale, Burbank & Pasadena</title>

        <meta
          name="description"
          content="Contact a luxury high-end companion serving Los Angeles, Glendale, Burbank and Pasadena. Discreet booking for upscale dinner dates, events, travel companionship and personalized luxury experiences."
        />

        <meta
          name="keywords"
          content="contact luxury companion Los Angeles, book companion Glendale, upscale date companion Pasadena, Burbank luxury escort alternative, elite booking LA"
        />

        <meta property="og:title" content="Contact Luxury Companion — Los Angeles" />
        <meta
          property="og:description"
          content="Discreet and elegant booking for luxury companionship in Los Angeles, Glendale, Burbank and Pasadena."
        />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* ===== CONTACT PAGE CONTENT ===== */}
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">Contact</h1>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto leading-relaxed mt-6">
          Thank you for your interest in arranging a luxury companionship experience. 
          I proudly serve <strong>Los Angeles, Glendale, Burbank, Pasadena</strong> and nearby upscale areas.  
          Please provide a respectful, detailed introduction to ensure a smooth, elegant, and confidential booking process.
        </p>

        {/* ===== CONTACT INSTRUCTIONS ===== */}
        <div className="max-w-3xl mx-auto mt-16 bg-white p-10 rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-6 text-center">Booking Information</h2>

          <p className="text-text-secondary leading-relaxed mb-6">
            To request an engagement, kindly include the following in your message:
          </p>

          <ul className="list-disc list-inside text-text-secondary space-y-3 mb-8">
            <li>Your full name</li>
            <li>Your preferred date, time, and duration</li>
            <li>Your city or meeting location (Los Angeles, Glendale, Burbank, Pasadena, etc.)</li>
            <li>The type of experience you are seeking</li>
            <li>A brief introduction about yourself</li>
          </ul>

          <p className="text-text-secondary leading-relaxed mb-6">
            I value professionalism, discretion, and genuine connection. All communication remains 
            strictly confidential. Only respectful inquiries will receive a response.
          </p>

          {/* ===== EMAIL SECTION ===== */}
          <div className="bg-lux-pink-light p-8 rounded-xl text-center">
            <h3 className="text-2xl font-serif mb-3">Booking Email</h3>
            <p className="text-lg font-medium text-gold">
              <a href="mailto:LuxuryDubrovskayacomp@gmail.com" className="hover:opacity-80">
                LuxuryDubrovskayacomp@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="text-center mt-20">
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            I look forward to creating a beautifully refined, unforgettable, and luxurious experience with you.
          </p>
        </div>
      </section>
    </>
  );
}
