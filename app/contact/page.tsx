export default function ContactPage() {
  return (
    <section className="section-container py-28 text-center">
      <h1 className="text-5xl font-serif mb-4">Contact</h1>
      <div className="separator mx-auto"></div>

      <p className="text-lg text-text-secondary max-w-xl mx-auto mb-14">
        To inquire, please reach out via email:
      </p>

      <a
        href="mailto:your-email@example.com"
        className="text-2xl font-serif text-gold hover:opacity-80"
      >
        your-email@example.com
      </a>

      <p className="text-sm mt-6 text-gray-500">
        All communication is private, respectful, and discreet.
      </p>
    </section>
  );
}
