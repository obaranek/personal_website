import React from "react";

import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import Projects from "./Components/Projects/Projects";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Courses from "./Components/Courses/Courses";
import ContactMe from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/AboutMe/AboutMe";
import Layout from "./hoc/Layout/Layout";
import Work from "./Components/Work/Work";
import classes from "./App.module.css";

const App = () => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#14171A",
      },
      secondary: {
        main: "#1da1f2",
      },
    },
  });
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#14171A",
      }}
    >
      <Layout />
      <Welcome />
      <div className={classes.Container}>
        <AboutMe />
        <Work />
        <Projects />
        <ThemeProvider theme={theme}>
          <Courses />
        </ThemeProvider>
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
};

export default App;
