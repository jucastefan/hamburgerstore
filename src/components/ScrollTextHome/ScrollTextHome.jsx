import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import classes from "./ScrollTextHome.module.css";

const ScrollTextHome = () => {
  return (
    <MDBContainer
      fluid
      className={`${classes.scroll_container} my-3 shadow-lg bg-white rounded`}
    >
      <p className={`${classes.scroll_text} fs-3 text-dark`}>
        THE BEST HAMBURGERS IN TOWN🍔
      </p>
    </MDBContainer>
  );
};

export default ScrollTextHome;
