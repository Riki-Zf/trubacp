import React, { useEffect, useRef, useState } from "react";

export default function Rekrutmen() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isTentangVisible, setIsTentangVisible] = useState(false);
  const [isNilaiVisible, setIsNilaiVisible] = useState(false);
  const [isLowonganVisible, setIsLowonganVisible] = useState(false);

  const headerRef = useRef(null);
  const tentangRef = useRef(null);
  const nilaiRef = useRef(null);
  const lowonganRef = useRef(null);

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setIsHeaderVisible },
      { ref: tentangRef, setter: setIsTentangVisible },
      { ref: nilaiRef, setter: setIsNilaiVisible },
      { ref: lowonganRef, setter: setIsLowonganVisible },
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          } else {
            setter(false);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return { observer, ref };
    });

    return () => {
      observerInstances.forEach(({ observer, ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const nilaiData = [
    {
      title: "Profesionalisme",
      description: "Kami menghargai keahlian, dedikasi, dan komitmen untuk bekerja dengan standar tertinggi di setiap lini operasional.",
    },
    {
      title: "Keselamatan",
      description: "Keselamatan adalah prioritas utama kami. Setiap karyawan dibekali pengetahuan dan alat untuk menciptakan lingkungan kerja yang aman.",
    },
    {
      title: "Kolaborasi",
      description: "Kami membangun budaya kerja yang menghargai kerjasama tim, saling percaya, dan komunikasi terbuka.",
    },
  ];

  const lowonganData = [
    {
      title: "IT Support",
      description: "Menguasai 5 elemen",
      location: "Sorowako, Sulawesi Selatan",
    },
    {
      title: "Safety Officer",
      description: "Memastikan penerapan prosedur keselamatan kerja di area operasional dan melakukan audit keselamatan rutin.",
      location: "Sorowako, Sulawesi Selatan",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800 py-24 px-6 md:px-12 lg:px-20 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header - Fade in from top */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 transform ${isHeaderVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#e83136] mb-4 transition-colors duration-300 hover:text-[#cc262b]">Karir</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Bergabunglah bersama <span className="font-semibold text-gray-800">Truba Jaga Cita</span> dan jadilah bagian dari tim profesional yang berkomitmen membangun masa depan pertambangan berkelanjutan di Indonesia.
          </p>
        </div>

        {/* Tentang Rekrutmen - Slide in from left */}
        <div ref={tentangRef} className={`mb-20 transition-all duration-1000 transform ${isTentangVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#e83136]">Tentang Rekrutmen Kami</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Kami percaya bahwa sumber daya manusia merupakan aset terbesar perusahaan. Oleh karena itu, Truba Jaga Cita senantiasa membuka kesempatan bagi individu yang memiliki semangat, kompetensi, dan integritas tinggi untuk tumbuh
            bersama kami. Proses rekrutmen dilakukan secara transparan, objektif, dan berbasis pada kebutuhan aktual di lapangan.
          </p>
        </div>

        {/* Nilai Perusahaan - Staggered fade in from bottom */}
        <div ref={nilaiRef} className="grid md:grid-cols-3 gap-8 mb-20">
          {nilaiData.map((nilai, i) => (
            <div
              key={i}
              className={`bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:border-[#e83136]/30 ${
                isNilaiVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <h3 className="text-lg font-semibold text-[#e83136] mb-2 transition-colors duration-300 hover:text-[#cc262b]">{nilai.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{nilai.description}</p>
            </div>
          ))}
        </div>

        {/* Daftar Lowongan - Slide in from right */}
        <div ref={lowonganRef} className={`transition-all duration-1000 transform ${isLowonganVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 transition-colors duration-300 hover:text-[#e83136]">Lowongan Tersedia</h2>

          <div className="space-y-6">
            {lowonganData.map((lowongan, i) => (
              <div
                key={i}
                className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-700 transform hover:scale-102 hover:border-[#e83136]/30 ${
                  isLowonganVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                <h4 className="text-lg font-semibold text-[#e83136] mb-2 transition-colors duration-300 hover:text-[#cc262b]">{lowongan.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{lowongan.description}</p>
                <p className="text-sm text-gray-500 mb-4">Lokasi: {lowongan.location}</p>
                <a href="#" className="inline-block bg-[#e83136] hover:bg-[#c4282d] text-white text-sm font-medium px-5 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#e83136]/30">
                  Lamar Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
