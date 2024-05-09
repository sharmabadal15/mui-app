import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Product from "./components/Product";
import Benefits from "./components/Benefits";
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Product/>
      <Benefits/>
      <Thanks/>
      <Footer/>
    </div>
  );
}

export default App;
