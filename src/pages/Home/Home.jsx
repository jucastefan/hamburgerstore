import { MDBContainer } from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import BannerHome from "../../components/BannerHome/BannerHome";
import Carousel from "../../components/Carousel";
import DeliveryService from "../../components/DeliveryService";
import ScrollTextHome from "../../components/ScrollTextHome";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <MDBContainer className={classes.fade_in}>
        <BannerHome />
        <Carousel />
        <ScrollTextHome />
        <DeliveryService />
      </MDBContainer>
    </Fragment>
  );
};

export default Home;
