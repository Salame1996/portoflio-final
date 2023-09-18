import React from "react";
import AboutText from "../components/aboutText/AboutText";
import Navigation from "../components/navigation/Navigation";
import Profile from "../components/Profile/Profile";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Navigation />
      <AboutText className='heading' />
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a full-stack developer originally from Ecuador and currently
            residing in Miami, United States. My journey into the world of
            technology has been fueled by a deep-seated passion for coding, with
            a particular focus on web development. At the core of my skill set
            lies a profound proficiency in key web development technologies,
            including React, JavaScript, HTML, and CSS. These tools empower me to
            create dynamic and engaging web applications, pushing the boundaries
            of user experience and functionality. On the backend, I have a strong
            command of technologies such as PostgreSQL, Express, and MySQL.
            These server-side technologies enable me to build robust and
            efficient web applications, ensuring data management and server
            interactions are seamless and secure. Beyond my technical prowess, I
            have a cherished hobby that complements my coding expertise. I am an
            avid music producer during my weekends. The world of music
            production and web development might seem disparate, but for me,
            they are two sides of the same creative coin. This harmonious
            relationship between technology and music fuels my aspirations to
            merge these passions into a meaningful career. One of my long-term
            goals is to work with a company that operates at the intersection of
            technology and the music industry. I see a world of possibilities in
            creating digital solutions that enhance the way we experience and
            interact with music. Whether it's developing innovative music
            streaming platforms or crafting immersive digital experiences for
            artists and fans, I am excited about the potential synergy between
            my coding skills and my love for music. I consider myself a rapid
            learner, always seeking to expand my knowledge and adapt to the
            ever-evolving tech landscape. Furthermore, I take great satisfaction
            in assisting others and contributing to collaborative projects.
            Being able to harness my skills to solve problems and make a
            meaningful impact is a driving force in my career. In summary, I am
            a full-stack developer with a fervor for coding and a harmonious
            passion for music. My journey in the world of technology is driven
            by a desire to merge these two passions, ultimately contributing to
            innovative solutions in the music industry. I bring a strong skill
            set, a thirst for knowledge, and a collaborative spirit to every
            project I undertake. Let's work together to turn creative visions
            into digital realities.
          </p>
        </div>
        <div className="about-image">
        </div>
      </div>
    </div>
  );
}

export default About;
