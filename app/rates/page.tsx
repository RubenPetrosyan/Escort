export default function RatesPage() {
  return (
    <section className="section-container py-28 text-center">
      <h1 className="text-5xl font-serif mb-4">Rates</h1>
      <div className="separator mx-auto"></div>

      <p className="text-lg text-text-secondary max-w-xl mx-auto mb-14">
        Rates reflect time, companionship, elegance, and exclusivity.
      </p>

      <div className="max-w-xl mx-auto space-y-8">

        <div className="p-8 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">1 Hour</h2>
          <p className="text-gray-700">$XXX</p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">2 Hours</h2>
          <p className="text-gray-700">$XXX</p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">Dinner Date</h2>
          <p className="text-gray-700">$XXX</p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md">
          <h2 className="font-serif text-3xl mb-3">Overnight</h2>
          <p className="text-gray-700">$XXX</p>
        </div>

      </div>
    </section>
  );
}
