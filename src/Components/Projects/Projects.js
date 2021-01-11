import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classes from "./Projects.module.css";
import UWSheduler from "../../assets/UWScheduler.jpg";
import LandingSubleteer from "../../assets/subleteer/landing.jpg";
import LoginSubleteer from "../../assets/subleteer/login.png";
import ListingsSubleteer from "../../assets/subleteer/listings.jpg";
import LandingUWScheduler from "../../assets/UWScheular/Landing.jpg";
import CoursesUWScheduler from "../../assets/UWScheular/Courses.jpg";
import Subleteer from "../../assets/Subleteer.jpeg";
import ResultsUWScheduler from "../../assets/UWScheular/Results.jpeg";
import constructor from "../../assets/constructor/constructor.jpeg"
import constructorPreview from "../../assets/constructor/preview.png"
import venueTracker from "../../assets/venue_tracker/venue_tracker.jpeg"

import Project from "./Project/Project";

const projects = (props) => {
  const projects = {
    "UW Scheduler": {
      motto: "Optimizes your UW schedule",
      desc:
        "With UWSheduler, students can generate a perfected schedule which not only takes into account professor reputability but also the availability and time clashes of the classes. With a click of a button, we give students suggested course sections after using python data analysis and statistics to ensure that the overall quality of their education is enhanced. We give a higher priority to the core subjects for a student's degree whilst also ensuring that they have great professors for their electives.",
      languages: ["Javscript", "Python", "Angular", "HTML", "CSS"],
      image: UWSheduler,
      slides: {
        slideOne: {
          src: LandingUWScheduler,
          alt: "Landing Page",
        },
        slideTwo: {
          src: CoursesUWScheduler,
          alt: "Courses Page",
        },
        slidThree: { src: ResultsUWScheduler, alt: "Results Page" },
      },
      link: "https://github.com/obaranek/UWScheduler",
    },
    Subleteer: {
      motto: "A subletting platform",
      desc: `Subleteer is a platform to help students find their ideal sublet. Users can make listings including all the details you would expect
      from a regular housing listing and buyers can browse the posted listings to see what is available.
      Users can also filter and search by address to find sublets quickly. Once the ideal sublet is found, users can contact the buyer using their email id and negotiate the sublet agreements in writing.`,
      languages: ["JavaScript", "React", "Redux", "Axios", "HTML", "CSS"],
      image: Subleteer,
      slides: {
        slideOne: {
          src: LandingSubleteer,
          alt: "Landing Page",
        },
        slideTwo: {
          src: LoginSubleteer,
          alt: "Login Page",
        },
        slidThree: { src: ListingsSubleteer, alt: "Listings Page" },
      },
      link: "https://github.com/dotWaterlooProjects/subleteer",
    },
    "Venue Tracker": {
      motto: "Tracks the availability of venues",
      desc: `A backend project developed to notify users about the availability of venues by email`,
      languages: ["NodeJS", "ExpressJS", "MongoDB"],
      image: venueTracker,
      slides: {
        slideOne: {
          src: venueTracker,
          alt: "venue Tracker",
        },
      },
      link: "https://github.com/obaranek/venue_tracker",
    },
    "Constructor": {
      motto: "A game inspired by Settlers of Catan",
      desc: `This was my CS246 final project that focuces on OOP oriented programming concepts and design patterns`,
      languages: ["C++"],
      image: constructor,
      slides: {
        slideOne: {
          src: constructor,
          alt: "constructor",
        },
        slideTwo: {
          src: constructorPreview,
          alt: "Preview",
        },
      },
      link: "https://github.com/obaranek/venue_tracker",
    },
  };

  const cards = Object.keys(projects).map((project) => (
    <Project
      title={project}
      motto={projects[project].motto}
      desc={projects[project].desc}
      languages={projects[project].languages}
      image={projects[project].image}
      slides={projects[project].slides}
      link={projects[project].link}
    />
  ));
  return (
    <div id="projects" >
      <Container fluid className={classes.Projects}>
        <h1>Projects I've Done</h1>
        <Row lg={3} md={2} sm={1} xs={1}>
          {cards}
        </Row>
      </Container>
    </div >
  );
};

export default projects;
