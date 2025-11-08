import React, { useEffect, useRef, useState } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      number: "01",
      title: "Inspection",
      description: "We provide inspection of the physical condition of equipment, machinery, and infrastructure to identify potential hazards, detect early damage, identify , and ensure compliance with safety standards.",
    },
    {
      number: "02",
      title: "Modification",
      description: "We provide installation change to the design or configuration of equipment or systems to improve performance, capacity, or meet client standards.",
    },
    {
      number: "03",
      title: "Corrective Maintenance",
      description: "We Provide repair activities carried out after damage to equipment or machinery to restore the function of the equipment or machine to its original condition so that the production process can continue",
    },
    {
      number: "04",
      title: "Overhaul",
      description:
        "We provide extensive repairs to equipment or machinery that involve disassembly, thorough inspection, replacement of damaged components, and reassembly in order to restore equipment to like-new condition and extend its service life.",
    },
    {
      number: "05",
      title: "Calibration",
      description: "We provide adjustment measuring instruments and instruments to provide accurate measurement results to ensure that the measurement data obtained is accurate and reliable.",
    },
    {
      number: "06",
      title: "Preventive Maintenance",
      description: "We provide services that are carried out regularly to prevent damage prevent unexpected breakdowns, extend equipment life, and improve production efficiency.",
    },
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
    <section ref={sectionRef} id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header - Fade in from left */}
        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#e83136]">Our Services</h2>
          <div className={`h-1 bg-[#e83136] rounded transition-all duration-1000 delay-300 ${isVisible ? "w-16" : "w-0"}`}></div>
        </div>

        {/* Service Cards - Staggered fade in from bottom */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`group p-8 bg-white border border-red-100 rounded-lg hover:border-[#e83136]/60 hover:shadow-lg transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + i * 200}ms` }}
            >
              <div className="text-5xl font-bold text-[#e83136]/20 mb-6 group-hover:text-[#e83136]/50 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">{service.number}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#e83136]">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
