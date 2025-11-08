import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // ✅ tambahkan ini

export default function Info() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ✅ Data info cards
  const infoCards = [
    {
      title: "Peluang Karir",
      description: "Truba Jaga Cita membuka kesempatan berkarir untuk bergabung bersama tim profesional kami. Kami mencari individu yang siap tumbuh dan berkontribusi dalam industri pertambangan nasional.",
      linkText: "Lihat lowongan →",
      to: "/rekrutmen", // arahkan ke halaman rekrutmen
    },
    {
      title: "Program Sosial (CSR)",
      description: "Kami berkomitmen menjalankan tanggung jawab sosial perusahaan melalui berbagai program pemberdayaan masyarakat, pendidikan, dan kelestarian lingkungan di wilayah Sorowako dan sekitarnya.",
      linkText: "Pelajari lebih lanjut →",
      to: "#", // bisa diarahkan ke halaman CSR nanti
    },
    {
      title: "Keselamatan & Lingkungan",
      description: "Keselamatan kerja adalah prioritas utama kami. Semua kegiatan operasional Truba Jaga Cita dijalankan dengan standar tinggi demi melindungi karyawan, aset, dan lingkungan sekitar.",
      linkText: "Baca lebih lanjut →",
      to: "#",
    },
  ];

  return (
    <section ref={sectionRef} id="info" className="bg-gray-50 text-gray-800 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-14 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e83136] mb-4 transition-colors duration-300 hover:text-[#cc262b]">Company Information</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Informasi terbaru seputar kegiatan perusahaan, perekrutan, dan komitmen kami terhadap masyarakat serta lingkungan.</p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:border-[#e83136]/30 p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + i * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-[#e83136] mb-3 transition-colors duration-300 hover:text-[#cc262b]">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>

              {/* ✅ Ganti <a> dengan <Link> agar bisa akses langsung */}
              <Link to={card.to} className="text-[#e83136] font-medium hover:underline text-sm inline-flex items-center gap-1 transition-all duration-300 hover:gap-2 hover:text-[#cc262b]">
                {card.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
