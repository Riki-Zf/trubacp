import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Operations from "./components/Operations";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Rekrutmen from "./pages/Rekrutmen";

// Komponen untuk halaman utama
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Operations />
      <Services />
      <Info />
    </>
  );
}

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rekrutmen" element={<Rekrutmen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
