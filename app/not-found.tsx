export default function NotFound() {
  return (
    <section className="section-container py-36 text-center">
      <h1 className="text-6xl font-serif mb-4">Page Not Found</h1>
      <div className="separator mx-auto"></div>

      <p className="text-text-secondary text-lg max-w-xl mx-auto mt-6 leading-relaxed">
        The page you’re looking for doesn’t exist or may have been moved.  
        But your journey toward an elegant, luxurious experience doesn’t end here.
      </p>

      <a
        href="/"
        className="inline-block mt-10 px-10 py-4 bg-gold text-white rounded-full text-lg hover:opacity-90 transition"
      >
        Return Home
      </a>
    </section>
  );
}
