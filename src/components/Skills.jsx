import React, { useState, useEffect } from "react";
import "./Skills.css";

// Custom Hook to animate skill percentage
const useSkillProgress = (isVisible, initialValue, finalValue, duration) => {
  const [progress, setProgress] = useState(initialValue);

  useEffect(() => {
    if (!isVisible) return; // Do not animate if not visible
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const progressValue = Math.min(
        (elapsedTime / duration) * finalValue,
        finalValue
      );
      setProgress(progressValue);

      if (progressValue < finalValue) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [isVisible, finalValue, duration]);

  return progress;
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const skillsSection = document.getElementById("skills");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Check if the section is in view
        console.log(entry.isIntersecting); // Log the intersection status
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Using the custom hook to animate the skill percentages
  const htmlProgress = useSkillProgress(isVisible, 0, 100, 3000);
  const cssProgress = useSkillProgress(isVisible, 0, 90, 3000);
  const jsProgress = useSkillProgress(isVisible, 0, 80, 3000);
  const phpProgress = useSkillProgress(isVisible, 0, 70, 3000);
  const reactProgress = useSkillProgress(isVisible, 0, 60, 3000);
  const laravelProgress = useSkillProgress(isVisible, 0, 50, 3000);

  return (
    <section className="skills" id="skills">
      <div className="content">
        <div className="title">
          <span>My Skills</span>
        </div>
        <div className="skills-details">
          <div className="text">
            <div className="topic">
              Skills Reflect Our Knowledge
            </div>
            <p>
              As a passionate student, my skills in HTML, CSS, JavaScript, React,
              and PHP reflect a strong understanding of both front-end and back-end
              development. I excel in building full-stack web applications, with a
              focus on modern frameworks and efficient database management. My abilities
              demonstrate the practical application of my technical knowledge to real-world solutions.
            </p>
            <div className="experience">
              <div className="num">2</div>
              <div className="exp">
                Years Of <br />
                Experience
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="topic">HTML</div>
              <div className="per">{htmlProgress.toFixed(0)}%</div>
            </div>
            <div className="box">
              <div className="topic">CSS</div>
              <div className="per">{cssProgress.toFixed(0)}%</div>
            </div>
            <div className="box">
              <div className="topic">JavaScript</div>
              <div className="per">{jsProgress.toFixed(0)}%</div>
            </div>
            <div className="box">
              <div className="topic">PHP</div>
              <div className="per">{phpProgress.toFixed(0)}%</div>
            </div>
            <div className="box">
              <div className="topic">React</div>
              <div className="per">{reactProgress.toFixed(0)}%</div>
            </div>
            <div className="box">
              <div className="topic">Laravel</div>
              <div className="per">{laravelProgress.toFixed(0)}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
