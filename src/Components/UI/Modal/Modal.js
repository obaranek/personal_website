import React from "react";
import Modal from "react-bootstrap/Modal";
import classes from "./Modal.module.css";
import Carousel from "../Carousel/Carousel";

const modal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Modal.Body style={{ padding: "0px", backgroundColor: "#E1E8ED" }}>
        <Carousel slides={props.slides} />
        <h4 className={classes.Title}>{props.title}</h4>
        <p className={classes.Description}>{props.desc}</p>
      </Modal.Body>
      <Modal.Footer
        className={classes.Footer}
        style={{ backgroundColor: "#E1E8ED" }}
      >
        <div
          onClick={() => {
            window.open(props.link);
          }}
          className={classes.Button}
        >
          Visit
        </div>
        <div className={classes.Button} onClick={props.onHide}>
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default modal;
