import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Operations from "./components/Operations";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Operations />
      <Services />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
