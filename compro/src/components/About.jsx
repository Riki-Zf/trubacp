import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animasi muncul saat masuk viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Animasi hilang saat keluar viewport, siap muncul lagi
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image - Slide in from left */}
        <div className={`relative h-96 lg:h-full transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#e83136]/15 to-[#e83136]/5 rounded-lg overflow-hidden group">
            <img src="/mining-safety-workers-operations.jpg" alt="Mining team at work" className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#e83136]/0 group-hover:bg-[#e83136]/10 transition-colors duration-500"></div>
          </div>
          <div className="absolute inset-0 border border-[#e83136]/25 rounded-lg group-hover:border-[#e83136]/50 transition-colors duration-500"></div>
        </div>

        {/* Content - Slide in from right */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
          <h2 className="text-4xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#e83136]">Lorem ipsum dolor sit.</h2>
          <div className={`h-1 bg-[#e83136] rounded transition-all duration-1000 delay-500 ${isVisible ? "w-16" : "w-0"}`}></div>

          <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi asperiores consectetur fugiat facere tempore eum, ipsa reiciendis perferendis voluptatem obcaecati aspernatur quia!
          </p>

          <ul className="space-y-4">
            {["Advanced safety protocols and certifications", "Environmental sustainability and ESG commitment", "Skilled workforce with decades of experience"].map((text, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 transition-all duration-700 transform hover:translate-x-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${900 + i * 150}ms` }}
              >
                <div className="w-6 h-6 bg-[#e83136] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-800 transition-colors duration-300 hover:text-[#e83136]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
