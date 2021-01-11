import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import myclasses from "./htabs.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#14171A",
    color: "#E1E8ED",
    textAlign: "center",
  },
  selected: {
    color: "#1da1f2",
  },
  tab: {
    fontFamily: "Alata",
  },
}));

export default function ScrollableTabsButtonPrevent(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = Object.keys(props.courses).map((course) => (
    <Tab
      classes={{
        selected: classes.selected,
        root: classes.tab,
      }}
      disableRipple={true}
      label={course}
      {...a11yProps(0)}
    >
      {course}
    </Tab>
  ));

  const panels = Object.keys(props.courses).map((course, index) => (
    <TabPanel value={value} index={index}>
      <a href={props.courses[course].link}><h3 className={myclasses.CourseTitle}>{props.courses[course].title}</h3></a>
      <p className={myclasses.CourseDesc}>{props.courses[course].desc}</p>
    </TabPanel>
  ));

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            aria-label="scrollable prevent tabs example"
          >
            {tabs}
          </Tabs>
        </AppBar>
        {panels}
      </div>
    </Container>
  );
}
