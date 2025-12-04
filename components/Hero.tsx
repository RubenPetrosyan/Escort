import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-40 pb-28 bg-lux-pink-light text-center">
      <div className="section-container">
        
        <Image
          src="/logo.png"            // your selected logo
          alt="Logo"
          width={120}
          height={120}
          className="mx-auto mb-6 drop-shadow-lg"
        />

        <h1 className="text-5xl font-serif text-text-primary mb-4">
          Elegant. Feminine. Exclusive.
        </h1>

        <p className="text-lg text-text-secondary max-w-xl mx-auto">
          A refined luxury companion offering graceful presence, sophisticated elegance, 
          and unforgettable moments.
        </p>

        <div className="separator mx-auto mt-6"></div>
      </div>
    </section>
  );
}
