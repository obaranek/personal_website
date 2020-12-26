import React, { Component } from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "./SideDrawer/SideDrawer";

class NavBar extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    console.log("CHANGING STATE");
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <header className={classes.Toolbar}>
        <DrawerToggle clicked={this.sideDrawerToggleHandler} />

        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div className={classes.DesktopOnly}></div>
        <nav className={classes.DesktopOnly} style={{ color: "white" }}>
          <NavigationItems contactScroll={this.props.contactScroll} />
        </nav>
      </header>
    );
  }
}

export default NavBar;
