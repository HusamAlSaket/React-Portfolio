import React, { useRef } from "react";
import useInView from "../hooks/useInView";
import styles from "./Services.module.css"; // Importing the CSS Module

const Services = () => {
  const sections = [
    {
      icon: "fas fa-desktop",
      title: "Web Development",
      description:
        "I have the ability to build professional, polished websites that showcase my skills and creativity, making my portfolio a standout representation of my work. Each site reflects my attention to detail and technical expertise.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Graphic Design",
      description:
        "I specialize in graphic design, creating unique and visually striking pieces that showcase my abilities and creative approach. Each design highlights my skills and serves as a powerful example of my artistic expertise.",
    },
    {
      icon: "fas fa-camera-retro",
      title: "Digital Marketing",
      description:
        "Skilled in digital marketing, with the ability to create and execute effective online campaigns, leveraging SEO, social media, and content marketing strategies to drive engagement and growth.",
    },
    {
      icon: "fas fa-video",
      title: "Video Production",
      description:
        "I specialize in video production, bringing concepts to life with high-quality visuals and sound. Whether for promotional content or creative storytelling, my videos captivate and engage the audience.",
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      description:
        "Skilled in SEO, I help businesses increase their online visibility and drive organic traffic through search engine optimization techniques and strategies.",
    },
    {
      icon: "fas fa-tablet-alt",
      title: "App Development",
      description:
        "Driven by a passion for app development, I create intuitive and innovative applications that reflect my technical skills and creativity. Each project showcases my dedication to building seamless user experiences.",
    },
  ];

  const sectionRefs = sections.map(() => useRef(null));
  const inViewStates = sectionRefs.map((ref) => useInView(ref));

  return (
    <section className="services" id="services">
      <div className="content">
        <div className="title" data-aos="fade-up" data-aos-duration="1200">
          <span>My Services</span>
        </div>
        <div className="boxes">
          {sections.map((service, index) => (
            <div
              key={index}
              ref={sectionRefs[index]}
              className={`${styles.box} ${inViewStates[index] ? styles.animate : ""}`}
            >
              <div className="icon">
                <i className={service.icon}></i>
              </div>
              <div className="topic">{service.title}</div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
