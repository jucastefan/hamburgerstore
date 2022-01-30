import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import classes from "./BannerHome.module.css";

const BannerHome = () => {
  return (
    <MDBContainer
      fluid
      className={`${classes.container_banner} ${classes.slide_in_top}`}
    >
      <img
        src={
          "https://i.ibb.co/d2qpfCH/Copy-of-Today-Food-s-Menu-Facebook-cover-Made-with-Poster-My-Wall.png"
        }
        className={`${classes.banner_img} img-fluid shadow rounded`}
      ></img>
    </MDBContainer>
  );
};

export default BannerHome;
