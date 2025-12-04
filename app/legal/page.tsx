import Head from "next/head";

export default function LegalPage() {
  return (
    <>
      {/* ===== META TAGS FOR SEO ===== */}
      <Head>
        <title>Legal Disclaimer | Luxury Companion in Los Angeles & Glendale Area</title>

        <meta
          name="description"
          content="Legal disclaimer and terms for a luxury companion serving Los Angeles, Glendale, Burbank, Pasadena, and nearby areas. Companionship-only services with full compliance to California law."
        />

        <meta
          name="keywords"
          content="Los Angeles escort legal disclaimer, Glendale companion terms, Pasadena upscale companionship policies, California escort law compliant"
        />

        <meta property="og:title" content="Legal Disclaimer — Luxury Companion Los Angeles" />
        <meta
          property="og:description"
          content="Review the legal terms and policies for companionship-only services in Los Angeles and surrounding upscale cities."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* ===== PAGE CONTENT ===== */}
      <section className="section-container py-28">
        <h1 className="text-5xl font-serif text-center mb-4">Legal Disclaimer</h1>
        <div className="separator mx-auto"></div>

        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mt-6 leading-relaxed">
          The following terms ensure clarity, professionalism, and complete legal compliance for
          all companionship arrangements in <strong>Los Angeles</strong>, including 
          <strong> Glendale</strong>, <strong>Burbank</strong>, <strong>Pasadena</strong>, and
          surrounding upscale areas.
        </p>

        {/* SECTION 1 */}
        <div className="mt-16 space-y-10">
          <div>
            <h2 className="font-serif text-3xl mb-3">Companionship-Only Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              All services offered are strictly for <strong>social companionship, personal time,
              and professional presence</strong>. Nothing within this website, in communication,
              or during any meeting should ever be interpreted as an exchange for, or an agreement
              to engage in, any form of illegal activity.
              <br /> <br />
              This includes, but is not limited to, anything that would violate local, state, or
              federal laws of California or the United States.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="font-serif text-3xl mb-3">Respect, Safety & Boundaries</h2>
            <p className="text-text-secondary leading-relaxed">
              Mutual respect is the foundation of every engagement.  
              The companion reserves the right to decline or end any appointment if
              boundaries are disrespected, safety is compromised, or any illegal
              expectations are communicated.
              <br /> <br />
              All time spent together is based solely on <strong>companionship and personal
              presence</strong>, not physical interaction of any kind.
            </p>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="font-serif text-3xl mb-3">Age & Verification Requirements</h2>
            <p className="text-text-secondary leading-relaxed">
              By using this website, you confirm that you are at least <strong>18 years of age</strong>
              (or the legal age of majority in your jurisdiction).  
              For safety and verification, identification may be requested prior to scheduling.
            </p>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="font-serif text-3xl mb-3">Privacy & Discretion</h2>
            <p className="text-text-secondary leading-relaxed">
              Your privacy is treated with the utmost respect.  
              All personal information and communication are kept 
              <strong>strictly confidential</strong>.  
              Discretion is a core element of the luxury companionship experience.
            </p>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="font-serif text-3xl mb-3">Photography & Content Rights</h2>
            <p className="text-text-secondary leading-relaxed">
              All images, text, branding, and website content are fully protected by copyright.  
              Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </div>

          {/* SECTION 6 */}
          <div>
            <h2 className="font-serif text-3xl mb-3">Website Purpose</h2>
            <p className="text-text-secondary leading-relaxed">
              This website is intended for <strong>informational and promotional purposes only</strong>.
              Nothing contained herein should be construed as an offer or advertisement for any services
              that would be considered illegal under California law.
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-sm text-text-secondary max-w-xl mx-auto mt-16 italic">
          By accessing or using this website, you acknowledge and agree to these terms.  
          If you do not agree, you must exit this website immediately.
        </p>
      </section>
    </>
  );
}
