import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Modal from "../../UI/Modal/Modal";
import classes from "./Project.module.css";

const Project = (props) => {
  const [onHover, setOnHover] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const onHoverHandler = () => {
    console.log("In");
    setOnHover(true);
  };

  const onNoHoverHandler = () => {
    console.log("out");
    setOnHover(false);
  };

  const badges = props.languages.map((language) => (
    <Badge pill variant="success" className={classes.Badge}>
      {language}
    </Badge>
  ));

  const Overview = (
    <div className={classes.Overview}>
      <h3 className={classes.Title}>{props.title}</h3>
      <p className={classes.Summary}>{props.motto}</p>
      <Container lg={3} md={2}>
        {badges}
      </Container>
    </div>
  );

  const imageStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
  };

  let styles = [classes.Project];
  let showImage = true;
  if (onHover && !modalShow) {
    styles.push(classes.Overview);
    showImage = false;
  }

  return (
    <Col>
      <div
        className={styles.join(" ")}
        style={showImage ? imageStyle : null}
        onMouseOver={onHoverHandler}
        onMouseLeave={onNoHoverHandler}
        onClick={() => {
          setModalShow(true);
        }}
      >
        {!showImage ? Overview : null}{" "}
        <div onClick={(e) => e.stopPropagation()}>
          <Modal
            show={modalShow}
            title={props.title}
            desc={props.desc}
            slides={props.slides}
            link={props.link}
            onHide={() => {
              setOnHover(false);
              setModalShow(false);
            }}
          />
        </div>
      </div>
    </Col>
  );
};

export default Project;
