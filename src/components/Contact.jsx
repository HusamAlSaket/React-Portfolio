import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="content">
        <div class="title"data-aos="fade-up" data-aos-duration="1500">
          <span>Contact Me</span>
        </div>
        <div class="text">
          <div class="topic"data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">Have Any Project?</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi iusto ipsa incidunt fugiat quam possimus. Corrupti eaque quod aspernatur?</p>
          <div class="button"data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            <button>Let's Chat</button>
          </div>
        </div>
      </div>
     </section>
  );
};

export default Contact;
