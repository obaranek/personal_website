import React from "react";

import classes from "./Work.module.css";
import Avidbots from "../../assets/Avidbots.png";

const work = () => {
  return (
    <div id="work" className={classes.Container}>
      <h1>Work Experiences</h1>
      <div className={classes.Work}>
        <div className={classes.Logo}>
          <div className={classes.Image}>
            <img src={Avidbots} alt="Avidbots Logo" />
          </div>
          <h1>Avidbots</h1>
          <h1>Corp.</h1>
        </div>
        <div className={classes.Desc}>
          <div className={classes.Header}>
            <h2>Perception Software Developer</h2>
            <h4>Kitchener, Canada</h4>
          </div>
          <div className={classes.Parag}>
            <p>
              <span>➤</span> Developed a benchmark to systematically
              characterize the performance of depth sensors
            </p>
            <p>
              <span>➤</span> Performed a comprehensive analysis of the sensors
              and distilling that in a set of atomic tests
            </p>
            <p>
              <span>➤ </span>
              Built an SQL database to reflect the parameters and results of the
              atomic tests
            </p>
            <p>
              <span>➤ </span>
              Developed a ROS node using C++ to develop an automated interface
              for evaluating sensors with the PCL and OpenCV libraries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
