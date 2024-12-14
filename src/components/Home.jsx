import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css"; // Link the CSS for Home
import mainImage from "../assets/images/main.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [text, setText] = useState("22-year-old Computer Engineering graduate with a passion for learning and coding.");

  useEffect(() => {
    const texts = [
      "22-year-old Computer Engineering graduate with a passion for learning and coding.",
      "I thrive on creating innovative web solutions.",
      "Expanding my technical skills daily.",
      "Welcome to my portfolio, explore my journey in web development."
    ];

    let index = 0;
    const interval = setInterval(() => {
      setText(texts[index]);
      index = (index + 1) % texts.length;
    }, 3000); 

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty array ensures this effect runs once when the component mounts

  return (
    <section className="section">
    <div className="main-container">
      <motion.div
        className="image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={mainImage} alt="Husam" />
      </motion.div>
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Hey I'm <span>Husam</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {text}
        </motion.p>
        <div className="social-links">
          <motion.a
            href="https://github.com/HusamAlSaket"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <i className="fa-brands fa-github"></i>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/husam.asaket/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <i className="fa-brands fa-facebook"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/husamalsaket/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://discordapp.com/users/1183779118727319669"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <i className="fa-brands fa-discord"></i>
          </motion.a>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Hire me
        </motion.button>
      </motion.div>
    </div>
  </section>
  
  );
};

export default Home;
