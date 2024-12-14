import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "font-awesome/css/font-awesome.min.css";

// Import AOS styles
import "aos/dist/aos.css";

// Import your custom styles (if any)
import "./App.css";

// Import AOS library
import AOS from "aos";
import GitHubRepos from "./components/GitHubRepos";


const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      offset: 0, 
      duration: 1000, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Services />
      <GitHubRepos/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
