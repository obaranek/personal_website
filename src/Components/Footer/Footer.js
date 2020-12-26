import React from "react";
import classes from "./Footer.module.css";
import Typed from "react-typed";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <Typed
        strings={["Made by Omar Baranek"]}
        typeSpeed={70}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default Footer;

