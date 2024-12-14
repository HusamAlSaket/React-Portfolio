import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
    <div class="nav-container">
      <div class="logo" data-aos="zoom-in"data-aos-duration="1500">
        <span>Husam</span>
      </div>
      <div class="links">
      <div class="link" data-aos="fade-up" data-aos-duration="1500"data-aos-delay="100"><a href="#home">Home</a></div>
      <div class="link" data-aos="fade-up" data-aos-duration="1500"data-aos-delay="200"><a href="#about">About</a></div>
      <div class="link" data-aos="fade-up" data-aos-duration="1500"data-aos-delay="300"><a href="#skills">Skills</a></div>
      <div class="link" data-aos="fade-up" data-aos-duration="1500"data-aos-delay="400"><a href="#services">Services</a></div>
      <div class="link" data-aos="fade-up" data-aos-duration="1500"data-aos-delay="500"><a href="#contact">Contact</a></div>
      <div class="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
  <a href="#GitHubRepos">Projects</a>
</div>

    </div>
    <i class="fa-solid fa-bars hamburg" onclick="hamburg()"></i>
    </div>
    <div class="dropdown">
      <div class="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
        <a href="#">Projects</a>
        <i class="fa-solid fa-xmark cancel"onclick="cancel()"></i>
      </div>
    </div>
   </nav>
  );
};

export default Navbar;
