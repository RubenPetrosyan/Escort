export default function Footer() {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-lg mt-20 py-8 border-t border-pink-200/40">
      <div className="section-container text-center">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Luxury Companion. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          This website offers companionship services only. No illegal services are provided.
        </p>
      </div>
    </footer>
  );
}
