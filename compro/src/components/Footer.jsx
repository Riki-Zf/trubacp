import React from "react";
import logo from "../assets/logotruba.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            {/* Logo */}
            <img src={logo} alt="Truba Jaga Cita Logo" className="w-36 md:w-40 object-contain" />
            {/* Sorowako Site */}
            <span className="text-base md:text-lg font-medium text-gray-200 tracking-wide border-l border-gray-600 pl-4">Sorowako Site</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">Leading the mining industry with sustainable solutions and operational excellence across Indonesia.</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-[#e83136] transition">
                Ore Extraction
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e83136] transition">
                Processing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e83136] transition">
                Exploration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e83136] transition">
                Consulting
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:text-[#e83136] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e83136] transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e83136] transition">
                News
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#e83136] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>+62 812 3456 7890</li>
            <li>info@trubajagacita.co.id</li>
            <li>Jl. Hasanuddin F.53, Sorowako, Luwu Timur Regency, Sulawesi Selatan</li>
            <li>Indonesia</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-gray-500">© {new Date().getFullYear()} Truba Jaga Cita. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#e83136] transition">
            Privacy
          </a>
          <a href="#" className="hover:text-[#e83136] transition">
            Terms
          </a>
          <a href="#" className="hover:text-[#e83136] transition">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
