import React, { useEffect, useRef, useState } from "react";

export default function Operations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { label: "Lorem Ipsum", value: "99" },
    { label: "Lorem Ipsum", value: "99" },
    { label: "Lorem Ipsum", value: "99" },
    { label: "Lorem Ipsum", value: "99" },
  ];

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
    <section ref={sectionRef} id="operations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header - Fade in from top */}
        <div className={`mb-16 text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#e83136]">Operations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatibus eos optio. Nesciunt.</p>
        </div>

        {/* Stats - Staggered fade in */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label + i}
              className={`p-8 bg-gray-50 border border-red-100 rounded-lg text-center hover:shadow-lg transition-all duration-700 transform hover:scale-105 hover:border-[#e83136] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              <div className="text-4xl font-bold text-[#e83136] mb-2 transition-transform duration-300 hover:scale-110">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cards - Slide in from sides */}
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`p-8 bg-gray-50 border border-red-100 rounded-lg transition-all duration-1000 transform hover:shadow-lg hover:border-[#e83136] hover:-translate-y-1 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#e83136]">Safety First</h3>
            <p className="text-gray-600 leading-relaxed">Truba Jaga Cita Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem aperiam quo iste sapiente unde vero in voluptate?</p>
          </div>
          <div
            className={`p-8 bg-gray-50 border border-red-100 rounded-lg transition-all duration-1000 transform hover:shadow-lg hover:border-[#e83136] hover:-translate-y-1 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: "1150ms" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#e83136]">Sustainability</h3>
            <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, velit cumque dolorem tenetur odit deserunt voluptates modi delectus fugiat? Adipisci, eum?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
