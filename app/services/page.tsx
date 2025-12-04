export default function ServicesPage() {
  return (
    <section className="section-container py-28">
      <h1 className="text-5xl font-serif text-center mb-4">Services</h1>
      <div className="separator mx-auto"></div>

      <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-16">
        All services are strictly companionship and social engagement only.
        No illegal services are offered or implied.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="p-10 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">Dinner & Fine Dining</h2>
          <p className="text-text-secondary">
            A graceful and sophisticated companion for upscale dining experiences.
          </p>
        </div>

        <div className="p-10 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">Event Companion</h2>
          <p className="text-text-secondary">
            Perfect for galas, parties, corporate events, and social occasions.
          </p>
        </div>

        <div className="p-10 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">Travel Companion</h2>
          <p className="text-text-secondary">
            Available for elegant and unforgettable travel experiences.
          </p>
        </div>

        <div className="p-10 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">Private Social Companionship</h2>
          <p className="text-text-secondary">
            Relaxed, meaningful, and quality time in a private social setting.
          </p>
        </div>

      </div>
    </section>
  );
}
