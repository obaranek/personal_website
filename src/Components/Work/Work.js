import React from "react";

import classes from "./Work.module.css";
import Avidbots from "../../assets/Avidbots.png";
import spsCommerce from "../../assets/SPS_Commerce.png"

const work = () => {
  const experiences = {
    "SPS": {
      name: "SPS Commerce",
      img: spsCommerce,
      imageAlt: "SPS Commerce Logo",
      title: "Software Enginner Intern",
      location: "Brampton, Canada",
      tasks: [
        "Converted legacy pipelines to use YAML Azure templates, decreasing deployment errors by 10%",
        "Created services and data models for highly customizable reporting solutions used by retailers",
        "Authored high-performing SQL stored procedures to execute on an SQL server RDBMS consisting of billion point of sale records increasing performance by over 15%",
        "Designed SSIS packages to consume and transform big data feeds into an SQL Server RDBMS"
      ]
    },
    "Avidbots": {
      name: "Avidbots Corp",
      img: Avidbots,
      imgAlt: "Avidbots Logo",
      title: "Perception Software Developer",
      location: "Kitchener, Canada",
      tasks: [
        "Developed a benchmark to systematically characterize the performance of depth sensors",
        "Performed a comprehensive analysis of the sensors and distilling that in a set of atomic tests",
        "Built an SQL database to reflect the parameters and results of the atomic tests",
        "Developed a ROS node using C++ to develop an automated interface for evaluating sensors with the PCL and OpenCV libraries"
      ]
    }
  }

  const works = Object.values(experiences).map(o => (
    <div className={classes.Work}>
      <div className={classes.Logo}>
        <div className={classes.Image}>
          <img src={o.img} alt={o.imgAlt} />
        </div>
        {o.name.split(" ").map(x => (<h1>{x}</h1>))}
      </div>
      <div className={classes.Desc}>
        <div className={classes.Header}>
          <h2>{o.title}</h2>
          <h4>{o.location}</h4>
        </div>
        <div className={classes.Parag}>
          {o.tasks.map(y => (<p><span>➤</span> {y}</p>))}
        </div>
      </div>
    </div>
  ));

  return (
    <div id="work" className={classes.Container}>
      <h1>Work Experiences</h1>
      {works}
    </div>
  );
}

export default work;
