import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import myclasses from "./vtabs.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#14171A",
    color: "#E1E8ED",
    display: "flex",
    marginLeft: "40px",
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    overflow: "unset",
  },
  indicator: {
    left: "0",
  },
  button: {
    textAlign: "left",
  },
  tab: {
    color: "#AAB8C2",
    fontFamily: "Alata",
    fontSize: "1.5rem",
    minWidth: "200px",
  },
  wrapper: {
    alignItems: "flex-start",
    paddingLeft: "10px",
  },
  selected: {
    outline: "0",
  },
  tabPanel: {
    maxWidth: "900px",
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = Object.keys(props.courses).map((course) => (
    <Tab
      disableRipple={true}
      classes={{
        textColorSecondary: classes.tab,
        wrapper: classes.wrapper,
      }}
      label={course}
      {...a11yProps(0)}
    />
  ));

  const panels = Object.keys(props.courses).map((course, index) => (
    <TabPanel value={value} index={index} className={classes.tabPanel}>
      <a href={props.courses[course].link}><h3 className={myclasses.CourseTitle}>{props.courses[course].title}</h3></a>
      <p className={myclasses.CourseDesc}>{props.courses[course].desc}</p>
    </TabPanel>
  ));

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        classes={{ indicator: classes.indicator }}
        textColor="secondary"
      >
        {tabs}
      </Tabs>
      {panels}
    </div>
  );
}
