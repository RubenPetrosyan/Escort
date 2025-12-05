export const revalidate = 0;

import Head from "next/head";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* ===== META TAGS ===== */}
      <Head>
        <title>About Me | Luxury Companion in Los Angeles, Glendale & Pasadena</title>

        <meta
          name="description"
          content="Discover the elegance, warmth, and sophistication behind your luxury companion in Los Angeles, Glendale, Burbank, and Pasadena. A refined presence for upscale social experiences."
        />

        <meta
          name="keywords"
          content="Los Angeles luxury companion, Glendale upscale companion, Pasadena elite companion, Burbank luxury companion, LA social companion"
        />

        <meta property="og:title" content="About Your Luxury Companion — Los Angeles" />
        <meta
          property="og:description"
          content="Learn more about the woman behind the luxury companion experience — elegance, femininity, and refined companionship in Los Angeles."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* ===== PAGE CONTENT ===== */}
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">About Me</h1>
        <div className="separator mx-auto"></div>

        {/* ===== INTRO WITH IMAGE ===== */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/gallery/gallery2.jpg"
              alt="Luxury companion portrait in Los Angeles"
              width={600}
              height={800}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="text-lg text-text-secondary leading-relaxed">
              Welcome to a world of <strong>luxury companionship</strong>—where feminine elegance, 
              warmth, and authentic presence come together to create unforgettable experiences.
              Based in <strong>Los Angeles</strong>, with regular availability in 
              <strong> Glendale, Burbank, Pasadena</strong>, and nearby prestigious areas, 
              I offer an elevated companionship experience for refined, respectful gentlemen.
            </p>
          </div>
        </div>

        {/* ===== BIO SECTION ===== */}
        <div className="max-w-4xl mx-auto mt-20 space-y-14">

          <div>
            <h2 className="font-serif text-3xl mb-3">A Graceful & Feminine Presence</h2>
            <p className="text-text-secondary leading-relaxed">
              I take pride in offering a beautifully polished, feminine, and elegant presence.  
              Whether joining you for an upscale dinner, attending a social event, enjoying a quiet 
              evening in, or travelling together, I bring sophistication, ease, and warmth to every moment.
              <br /><br />
              My appearance is always refined with attention to detail — curated for those who appreciate 
              beauty, poise, and timeless femininity.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Authentic Connection & Intelligent Conversation</h2>
            <p className="text-text-secondary leading-relaxed">
              True companionship is built on chemistry, genuine conversation, and emotional presence.  
              I naturally connect with polished, successful, and mature individuals who value sincerity, 
              lighthearted laughter, and meaningful interaction.
              <br /><br />
              Whether you desire elegant company for an event, thoughtful conversation over dinner, or 
              serene companionship during your travels, I create experiences that feel effortless, engaging, 
              and unforgettable.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Discretion, Safety & Professionalism</h2>
            <p className="text-text-secondary leading-relaxed">
              Discretion is the foundation of my lifestyle.  
              I offer complete privacy and expect the same level of respect in every arrangement.
              <br /><br />
              All experiences are conducted with kindness, boundaries, and mutual respect.  
              Every engagement is exclusively for <strong>social and companionship purposes only</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-3">Serving Los Angeles & Beyond</h2>
            <p className="text-text-secondary leading-relaxed">
              I am based in the <strong>Los Angeles metropolitan area</strong> and frequently visit:
            </p>

            <ul className="list-disc ml-8 mt-3 text-text-secondary leading-relaxed">
              <li>Glendale</li>
              <li>Burbank</li>
              <li>Pasadena</li>
              <li>Hollywood & West Hollywood</li>
              <li>Beverly Hills</li>
              <li>Downtown Los Angeles</li>
            </ul>

            <p className="text-text-secondary leading-relaxed mt-4">
              Travel arrangements may be available upon request.
            </p>
          </div>

        </div>

        {/* ===== CLOSING ===== */}
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-20 leading-relaxed italic">
          I look forward to creating beautiful, meaningful, and memorable moments together.
        </p>
      </section>
    </>
  );
}
