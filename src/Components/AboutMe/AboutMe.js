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
            I'm a self-driven developer who values team collaboration, commitment and integrity at work. With a constant desire to learn, I
            am seeking challenging opportunities to broaden my knowledge about back-end development, Linux and other areas.
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
