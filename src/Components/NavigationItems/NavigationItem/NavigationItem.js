import React from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={classes.link}>{props.children}</a>
  </li>
);

export default navigationItem;
