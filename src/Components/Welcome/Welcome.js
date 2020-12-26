import React from "react";

import classes from "./Welcome.module.css";
import Resume from "../../assets/Resume.pdf";

const welcome = (props) => {
  return (
    <div className={classes.Welcome}>
      <h4 className={classes.Title}>Hi, my name is</h4>
      <h1 className={classes.Name}>Omar Baranek</h1>
      <h2 className={classes.Motto}>I am a passionate developer.</h2>
      <p className={classes.Description}>
        I am currently a Computer Science major at the university of Waterloo. I
        am interested in{" "}
        <span style={{ color: "#1da1f2" }}>Backend Development</span> and{" "}
        <span style={{ color: "#1da1f2" }}>Machine Learning</span>. You can
        checkout my{" "}
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <span style={{ color: "#1da1f2" }}>resume</span>
        </a>{" "}
        here.
      </p>
    </div>
  );
};

export default welcome;
