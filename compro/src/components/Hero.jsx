import React, { useEffect, useState } from "react";
import logo from "../assets/img1.jpg";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animasi setelah component mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Image - Zoom in effect */}
      <div className="absolute inset-0">
        <img src={logo} className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isLoaded ? "scale-100" : "scale-110"}`} />
        {/* Overlay gradient untuk efek gelap di sisi kiri */}
        <div className={`absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}></div>
      </div>

      {/* Content - Slide in from left */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-lg">
          <h1 className={`text-2xl md:text-4xl font-semibold leading-snug tracking-tight transition-all duration-1000 transform ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`} style={{ transitionDelay: "300ms" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt ut sequi recusandae minima adipisci.
          </h1>

          <h2 className={`mt-3 text-2xl md:text-4xl font-bold text-[#e83136] transition-all duration-1000 transform ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`} style={{ transitionDelay: "500ms" }}>
            Lorem
          </h2>

          <p className={`mt-5 text-gray-300 text-sm md:text-base leading-relaxed transition-all duration-1000 transform ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`} style={{ transitionDelay: "700ms" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestias aperiam, voluptas hic cumque dolorem praesentium quae sed maxime veniam.
          </p>

          <div className={`mt-8 transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: "900ms" }}>
            <button className="px-6 py-2.5 bg-[#e83136] hover:bg-[#cc262b] text-white rounded-md font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#e83136]/50">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bounce animation */}
      <div className={`absolute bottom-6 right-6 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: "1100ms" }}>
        <a href="#about" className="w-9 h-9 border border-[#e83136] rounded-full flex items-center justify-center hover:bg-[#e83136]/20 transition-all duration-300 hover:scale-110 animate-bounce">
          <svg className="w-4 h-4 text-[#e83136]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
