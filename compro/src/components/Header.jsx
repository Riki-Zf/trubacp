import React, { useState, useEffect } from "react";
import logo from "../assets/logotruba.png"; // ganti dengan path logo kamu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Selalu tampilkan header di bagian paling atas
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll ke bawah - sembunyikan header
        setIsVisible(false);
      } else {
        // Scroll ke atas - tampilkan header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 w-full z-50 bg-[#1a1a1a] text-white shadow-md transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img src={logo} alt="Truba Jaga Cita Logo" className="w-36 md:w-40 object-contain" />

          {/* Sorowako Site */}
          <span className="text-base md:text-lg font-medium text-gray-200 tracking-wide border-l border-gray-600 pl-4">Sorowako Site</span>
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-[#e83136] transition">
            About Us
          </a>
          <a href="#services" className="text-sm font-medium hover:text-[#e83136] transition">
            Services
          </a>
          <a href="#operations" className="text-sm font-medium hover:text-[#e83136] transition">
            Operations
          </a>

          <a href="#contact" className="text-sm font-medium hover:text-[#e83136] transition">
            Contact Us
          </a>
        </nav>

        {/* Tombol Menu Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-[#e83136] transition">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigasi Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222] py-4 px-6 space-y-3">
          <a href="#about" className="block text-sm text-gray-300 hover:text-[#e83136] transition">
            About Us
          </a>
          <a href="#services" className="block text-sm text-gray-300 hover:text-[#e83136] transition">
            Services
          </a>
          <a href="#operations" className="block text-sm text-gray-300 hover:text-[#e83136] transition">
            Operations
          </a>

          <a href="#contact" className="block text-sm text-gray-300 hover:text-[#e83136] transition">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
