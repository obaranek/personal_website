import React from "react";
import classes from "./Contact.module.css";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#1da1f2",
    marginLeft: "10px",
    marginRight: "10px",
    color: "white",
  },
}));

const Contact = () => {
  const materialClasses = useStyles();

  return (
    <div id="contact" className={classes.Contact}>
      <h1 className={classes.Title}>Contact Me</h1>
      <p className={classes.Content}>
        I am looking for co-op and internship opportunities! You can reach me
        anytime to discuss future possibilities- or anything else too.
      </p>
      <IconButton classes={{ root: materialClasses.root }}>
        <EmailIcon
          onClick={() => window.open("mailto:obaranek@uwaterloo.ca")}
        />
      </IconButton>

      <IconButton
        classes={{ root: materialClasses.root }}
        onClick={() => window.open("https://www.linkedin.com/in/obaranek/")}
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        classes={{ root: materialClasses.root }}
        onClick={() => window.open("https://github.com/obaranek")}
      >
        <GitHubIcon />
      </IconButton>
    </div>
  );
};

export default Contact;
