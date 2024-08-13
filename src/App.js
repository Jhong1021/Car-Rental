import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Vehicles />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default App;
