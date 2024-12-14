import React, { useState, useEffect } from "react";
import "./About.css";
import mainImage from "../assets/images/main.jpg"; // Import image 1
import secondImage from "../assets/images/2.jpg";  // Import image 2
import Swal from "sweetalert2"; // Import SweetAlert2

const About = () => {
  const [imageSrc, setImageSrc] = useState(mainImage);  // Use imported main image
  const [cvDownloaded, setCvDownloaded] = useState(false);

  const handleButtonClick = () => {
    setCvDownloaded(true);

    // Trigger download by clicking the link
    const cvLink = document.getElementById("cv-link");
    cvLink.click(); // Programmatically click the hidden download link

    setTimeout(() => {
      // Use SweetAlert2 for the download success message
      Swal.fire({
        title: "Success!",
        text: "Your CV has been downloaded.",
        icon: "success",
        confirmButtonText: "Awesome!",
        timer: 3000,  // Optional: Auto close after 3 seconds
      });
      setCvDownloaded(false); // Reset the button text
    }, 2000);
  };

  useEffect(() => {
    // Change image every 4 seconds
    const interval = setInterval(() => {
      setImageSrc((prevImage) => (prevImage === mainImage ? secondImage : mainImage));
    }, 4000); // 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run only once when the component mounts

  const cvLink = "/assets/cv/Husam AlSaket- Full Stack Web Developer.pdf"; // Correct relative path to your CV

  return (
    <section className="about" id="about">
      <div className="content">
        <div className="title" data-aos="fade-up" data-aos-duration="1500">
          <span>About Me</span>
        </div>
        <div className="about-details">
          <div className="left" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <img src={imageSrc} alt="about me" />
          </div>
          <div className="right">
            <div className="topic" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
              Designing Is My Passion
            </div>
            <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="400">
              As a Computer Engineering graduate, I find immense joy in crafting visually appealing and user-friendly web designs.
              My journey in web development is driven by creativity and a desire to bring innovative ideas to life.
              Explore my portfolio to see my dedication to design and development.
            </p>
            <div className="button" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="400">
              <button onClick={handleButtonClick}>
                {cvDownloaded ? "Downloading..." : "Download CV"}
              </button>
            </div>
            {/* Hidden download link */}
            <a id="cv-link" href={cvLink} download style={{ display: 'none' }}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
