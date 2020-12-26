import React, { Component } from "react";
import NavBar from "../../Components/NavBar/Toolbar";
import classes from "./Layout.module.css";
import Aux from "../Aux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <main id="top" className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
