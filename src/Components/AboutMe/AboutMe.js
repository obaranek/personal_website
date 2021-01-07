import React from "react";
import classes from "./AboutMe.module.css";
import Picture from "../../assets/Omar Profile Picture.jpeg";

const AboutMe = () => {
  return (
    <div id="aboutme" className={classes.AboutMe}>
      <h1>About Me</h1>
      <div className={classes.Content}>
        <div className={classes.Text}>
          <p>
            Hi! My name is Omar Baranek. I am a second year student at the
            university of Waterloo studying Computer Science.{" "}
          </p>
          <p>
            I am a self-driven developer with a constant desire to learn and improve my skills valuing team collaboration, commitment and integrity at work.
            I am passionate about software development, back-end development, open-source software and eveything Linux!
          </p>
          <p>
            In my free time, catch my at a football court, a ping-pong table or at a gym. I am also guilty of distro-hopping Linux distributions.
          </p>
          <p>
            I would love to chat about with you about anything related to the industry, my favourite linux distributions or anything else!
          </p>
        </div>
        <div className={classes.ImageDiv}>
          <img src={Picture} alt="Omar Baranek" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
