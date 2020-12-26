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
            I love learning about Backend development, Machine Learning, and all
            things related to tech. My mission is to build projects that inspire
            change in people's lives.
          </p>
          <p>
            Besides computer science, I enjoy playing football and ping pong, as
            well as listening to hip-hop music!
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
