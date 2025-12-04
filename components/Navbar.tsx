"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">
      <div className="section-container flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"     // Make sure this matches your file name
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/rates">Rates</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl p-2"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
          <div className="flex flex-col text-lg p-5 gap-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/rates" onClick={() => setOpen(false)}>Rates</Link>
            <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
