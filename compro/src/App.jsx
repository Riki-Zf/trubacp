import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Operations from "./components/Operations";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Operations />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
