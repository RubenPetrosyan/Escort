import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      {/* ===== META TAGS ===== */}
      <Head>
        <title>About Me | Luxury Companion in Los Angeles, Glendale & Pasadena</title>

        <meta
          name="description"
          content="Learn more about your elegant luxury companion serving Los Angeles, Glendale, Burbank, Pasadena, and surrounding areas. Experience warmth, sophistication, and genuine connection."
        />

        <meta
          name="keywords"
          content="Los Angeles luxury escort, Glendale upscale companion, Pasadena elite companion, Burbank social companion, LA companionship"
        />

        <meta property="og:title" content="About Your Luxury Companion — Los Angeles" />
        <meta
          property="og:description"
          content="Discover the elegance, warmth, and sophistication behind your luxury companion experience in Los Angeles."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* ===== PAGE CONTENT ===== */}
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">About Me</h1>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mt-8 leading-relaxed">
          Welcome to an elevated world of <strong>luxury companionship</strong>, where elegance,
          warmth, and authenticity come together to create unforgettable experiences.
          <br /><br />
          Based in <strong>Los Angeles</strong>, with frequent availability in
          <strong> Glendale, Burbank, Pasadena</strong>, and nearby prestigious neighborhoods,
          I provide a truly refined presence for those who appreciate beauty, class,
          intelligence, and genuine human connection.
        </p>

        {/* ===== BIO SECTION ===== */}
        <div className="max-w-4xl mx-auto mt-20 space-y-14">

          <div>
            <h2 className="font-serif text-3xl mb-3">A Graceful & Feminine Presence</h2>
            <p className="text-text-secondary leading-relaxed">
              I take pride in offering a warm, feminine, and elegantly polished companionship
              experience. Whether joining you for dinner, a social event, a quiet evening, or a
              weekend getaway, I bring sophistication, poise, and effortless charm to every moment.
              <br /><br />
              My appearance is always refined and stylish, with attention to detail and a genuine
              passion for creating comfortable, uplifting moments.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Authentic Conversation & Connection</h2>
            <p className="text-text-secondary leading-relaxed">
              Beyond beauty, I value meaningful conversation and natural chemistry.  
              I enjoy connecting with respectful, successful, and mature individuals who appreciate
              depth, sincerity, and lighthearted laughter.
              <br /><br />
              Whether you seek engaging conversation, companionship for a public event, or a serene
              presence during your travels, I aim to create a personalized and memorable experience.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Discretion, Safety & Professionalism</h2>
            <p className="text-text-secondary leading-relaxed">
              Your privacy is of the utmost importance.  
              I maintain a discreet, sophisticated lifestyle and expect the same level of respect in return.
              <br /><br />
              All interactions are conducted with professionalism, kindness, and respect for boundaries.
              Every arrangement is exclusively for <strong>social and companionship purposes only</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Serving Los Angeles & Beyond</h2>
            <p className="text-text-secondary leading-relaxed">
              I am available throughout the <strong>Los Angeles metropolitan area</strong>, with
              frequent bookings in:
            </p>

            <ul className="list-disc ml-8 mt-3 text-text-secondary leading-relaxed">
              <li>Glendale</li>
              <li>Burbank</li>
              <li>Pasadena</li>
              <li>Hollywood & West Hollywood</li>
              <li>Downtown Los Angeles</li>
              <li>Beverly Hills</li>
            </ul>

            <p className="text-text-secondary leading-relaxed mt-4">
              Travel engagements are also welcomed with proper arrangements.
            </p>
          </div>

        </div>

        {/* ===== CLOSING SECTION ===== */}
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-20 leading-relaxed italic">
          I look forward to meeting you and creating a beautiful, memorable, and refined experience together.
        </p>
      </section>
    </>
  );
}
