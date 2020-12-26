import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";
import Resume from "../../assets/Resume.pdf";

const scrollToId = (id) => {
  const anchor = document.querySelector(id);
  anchor.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};

const NavigationItems = () => {
  return (
    <div>
      <ul className={classes.NavigationItems}>
        <NavigationItem>
          <NavLink
            to="#top"
            exact
            activeClassName={classes.Active}
            onClick={() => {
              scrollToId("#top");
            }}
          >
            Home
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink
            to="#aboutme"
            exact
            activeClassName={classes.Active}
            onClick={() => {
              scrollToId("#aboutme");
            }}
          >
            About Me
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink
            to="#work"
            exact
            activeClassName={classes.Active}
            onClick={() => {
              scrollToId("#work");
            }}
          >
            Work
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink
            to="#projects"
            exact
            activeClassName={classes.Active}
            onClick={() => {
              scrollToId("#projects");
            }}
          >
            Projects
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink
            to="#courses"
            exact
            activeClassName={classes.Active}
            onClick={() => {
              scrollToId("#courses");
            }}
          >
            Courses
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink
            to="#contact"
            exact
            activeClassName={classes.Active}
            onClick={() => {
              scrollToId("#contact");
            }}
          >
            Contact
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <a
            className={classes.Active}
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationItems;
